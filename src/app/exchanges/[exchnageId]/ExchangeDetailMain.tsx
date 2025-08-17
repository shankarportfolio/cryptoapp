"use client"
import DetailsPageLayout from "@/app/components/DetailsPageLayout";
import Loading from "@/app/Loading";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ExchangeHead from "./ExchangeHead";
import ExchangePairsList from "./ExchangePairsList";
import Pagination from "@/app/components/Pagination";
import BackButton from "@/app/components/BackButton";

type Exothertypes = {
    exchangeId : string;
}

type ExchangePair = {
    base: string,
    quote: string,
    volume: string | number,
    price: string | number,
    price_usd: string | number
};

const ExchangeDetailMain = ({exchangeId} : Exothertypes) =>{
    const [exdetail, setExDetails] = useState<any>({});
    const [exchangesPairs, setExchangesPairs] = useState<ExchangePair[]>([]);
    const [errMsg, setErrMsg] = useState<boolean>(false);
    const [noPairs, setNoPairs] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 12;

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Pagination logic
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedExchangesPairs = exchangesPairs.slice(startIndex, startIndex + pageSize);

    useEffect(() => {
        let settime: NodeJS.Timeout;
        const fetchExchDetails = async() =>{
            try{
                const res = await axios.get(`https://api.coinlore.net/api/exchange/?id=${exchangeId}`);
                //console.log(res.data.pairs);
                setExDetails(res.data[0]);
                if(res.data && Array.isArray(res.data.pairs) && res.data.pairs.length > 0){
                    setExchangesPairs(Object.values(res.data.pairs));
                }else{
                    //console.log('no pairs')
                    setNoPairs(!noPairs)
                }
            }catch(err){
                //console.log(err)
                setErrMsg(!errMsg);
            }
        }
        fetchExchDetails();
        settime = setInterval(fetchExchDetails, 100);
        return () => clearInterval(settime)
    },[])

    return(
        <>
            {
                exdetail ? (
                    <>
                        <BackButton />
                        <DetailsPageLayout>
                            <ExchangeHead exchangeName={exdetail.name} exchangeSiteLink={exdetail.url}/>
                        </DetailsPageLayout>
                        {
                            !noPairs ? (
                                <>
                                    <ExchangePairsList apidata={paginatedExchangesPairs} errMsg={errMsg}/>
                                    <Pagination
                                        items={exchangesPairs.length}
                                        currentPage={currentPage}
                                        pageSize={pageSize}
                                        onPageChange={onPageChange}
                                    />
                                </>
                            ) : "No Active Pairs"
                        }
                        
                    </>
                ) : (!errMsg ? (<Loading />) : null)
                
            }
        </>
    )
}

export default ExchangeDetailMain