import { inter, outfit } from "@/app/_lib/fonts";
import DetailsPageLayout from "@/app/components/DetailsPageLayout";
import Pagination from "@/app/components/Pagination";
import ErrorPage from "@/app/ErrorPage";
import axios from "axios";
import { useEffect, useState } from "react";
import TopMarketsDetailsBlock from "./TopMarketsDetailsBlock";
import Loading from "@/app/Loading";

type ExchangePair = {
    name: string,
    base: string,
    quote: string,
    volume: string | number,
    price: string | number,
    price_usd: string | number,
    volume_usd: string | number,
};

const TopMarkets = ({coinId, apidata} : {coinId: string | number, apidata: string | number }) =>{

    const [errMessage, setErrMessage] = useState<boolean>(false);
    const [topMarkets, setTopMarkets] = useState<ExchangePair[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 12;

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Pagination logic
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedTopMarkets = topMarkets.slice(startIndex, startIndex + pageSize);

    useEffect(() =>{
        let marketInterval: NodeJS.Timeout;
        const fetchTopMarkets = async () =>{
            try{
                const tpmarkets = await axios.get(`https://api.coinlore.net/api/coin/markets/?id=${coinId}`);
                //console.log(tpmarkets.data);
                setTopMarkets(Object.values(tpmarkets.data));
            }catch(err){
                //console.log(err);
                setErrMessage(!errMessage)
            }
        }
        fetchTopMarkets();
        marketInterval = setInterval(fetchTopMarkets, 100);
        return () => clearInterval(marketInterval)
    },[]);

    const topTen = topMarkets.slice(0, 9);

    return(
        <>
        {
            errMessage ? <ErrorPage classList="mt-[25px]" /> : (
                <DetailsPageLayout classesList="mt-[25px] pb-[35px] md:pb-[25px]">
                    <h2 className={`${inter.className} text-[20px] loading-[30px] md:text-[25px] md:loading-[35px] text-white mb-[20px] font-semibold`}>Top 50 Markets for {apidata}</h2>
                    <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-[10px]`}>
                        {
                            paginatedTopMarkets.length ? (
                                paginatedTopMarkets.map((tpten, index) => (
                                    <div key={index} className={`w-full p-[15px] md:p-[10px] px-[15px] bg-[#000] rounded-[10px] grid grid-cols-2 md:grid-cols-3 gap-[10px] gap-y-[15px]`}>
                                        <TopMarketsDetailsBlock labelName="Name" apidata={tpten.name} isNumberValue={false} isPriceValue={false} isPriceDecimal={false} />
                                        <TopMarketsDetailsBlock labelName="Quote" apidata={tpten.quote} isNumberValue={false} isPriceValue={false} isPriceDecimal={false} />
                                        <TopMarketsDetailsBlock labelName="Price" apidata={tpten.price} isNumberValue={false} isPriceValue={true} isPriceDecimal={true} />
                                        <TopMarketsDetailsBlock labelName="Price (in USD)" apidata={tpten.price_usd} isNumberValue={false} isPriceValue={true} isPriceDecimal={true}/>
                                        <TopMarketsDetailsBlock labelName="Volume" apidata={tpten.volume} isNumberValue={true} isPriceValue={false} isPriceDecimal={false}/>
                                        <TopMarketsDetailsBlock labelName="Volume (in USD)" apidata={tpten.volume_usd} isNumberValue={true} isPriceValue={true} isPriceDecimal={false}/>
                                    </div>
                                ))
                            ) : (!errMessage ? <Loading/> : null)
                        }
                    </div>
                    <Pagination
                        items={topMarkets.length}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        onPageChange={onPageChange}
                    />
                </DetailsPageLayout>)
        }
        </>
    )
}

export default TopMarkets;