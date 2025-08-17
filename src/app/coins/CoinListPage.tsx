"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { crypAllCoins } from "../_lib/api_files";
import ErrorPage from "../ErrorPage";
import Loading from "../Loading";
import { inter, montserrat, outfit} from "../_lib/fonts";
import Link from "next/link";
import CoinDetailBlock from "./CoinDetailBlock";
import Pagination from "../components/Pagination";

const CoinListPage = ({checkData} : {checkData : boolean}) =>{

    const [coinsList, setCoinsList] = useState<any[]>([]);
    const [errMsg, setErrMsg] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 24;

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };
    
    useEffect(() =>{
        let intervalId: NodeJS.Timeout;
        const fetchCoins = async ()=>{
            try{
                const res = await axios.get(crypAllCoins);
                setCoinsList(res.data.data)
            }catch{
                setErrMsg(!errMsg);
            }
        }

        fetchCoins();

        intervalId = setInterval(fetchCoins, 100);

        return () => clearInterval(intervalId);

    },[]);

    // Pagination logic
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedExchanges = coinsList.slice(startIndex, startIndex + pageSize);

    return(
        <>
            {
                errMsg && <ErrorPage />
            }
            {
                paginatedExchanges.length > 0 ?
                (
                    <>
                        <div className={`w-full grid ${!checkData ? 'grid-cols-1 gap-2' : 'grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4'}`}>
                        {
                            paginatedExchanges.map((coin, index) => (
                                <Link href={`/coins/${coin.id}`} prefetch={true} key={index} className={`outline-none hover:outline-none focus:outline-none hover:translate-y-[-5px] transition-all duration-300 ease-in-out w-full p-[20px] bg-[#191c24] rounded-[5px] ${!checkData ? 'flex items-center justify-start flex-wrap' : 'grid grid-cols-2 gap-3 gap-y-[35px]'} `}>
                                    <CoinDetailBlock coin={coin} checkData={checkData} isNumValueChanging={false} labelName="Coin Name">{coin.name}</CoinDetailBlock>
                                    <CoinDetailBlock coin={coin} checkData={checkData} isNumValueChanging={false} labelName="Coin Symbol">{coin.symbol}</CoinDetailBlock>
                                    <CoinDetailBlock coin={coin} checkData={checkData} isNumValueChanging={false} labelName="Price (USD)">{coin.price_usd}</CoinDetailBlock>
                                    <CoinDetailBlock coin={coin} checkData={checkData} isNumValueChanging={true} labelName="Price Change % (Last 1Hr)">{coin.percent_change_1h}</CoinDetailBlock>

                                </Link>
                            ))
                        }
                        </div>
                        <Pagination
                            items={coinsList.length}
                            currentPage={currentPage}
                            pageSize={pageSize}
                            onPageChange={onPageChange}
                        />
                    </>
                ) : (!errMsg ? (<Loading />) : null)
            }
        </>
    )
}

export default CoinListPage;