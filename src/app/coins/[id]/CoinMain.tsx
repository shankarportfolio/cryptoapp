"use client"
import ErrorPage from "@/app/ErrorPage";
import Loading from "@/app/Loading";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CoinLayoutDetails from "./CoinLayoutDetails";

const CoinMain = ({coinId} : {coinId: string }) =>{

    const [singleCoinDetails, setSingleCoinDetails] = useState<any>(null);
    const [errorMsg, setErrorMsg] = useState<boolean>(false);

    useEffect(() => {
        let intervalTime : NodeJS.Timeout;
        const fetchCoinDetails = async () =>{
            try{
                const res = await axios.get(`https://api.coinlore.net/api/ticker/?id=${coinId}`);
                setSingleCoinDetails(res.data[0])
            }catch(error){
                setErrorMsg(true);
                //console.log(error)
            }
        }
        fetchCoinDetails();
        intervalTime = setInterval(fetchCoinDetails, 10000);
        return () => clearInterval(intervalTime);
    }, [])
    
    return (
        <>
            {
                errorMsg && <ErrorPage />
            }
            {
                singleCoinDetails ? (
                    <CoinLayoutDetails singleCoinDetails={singleCoinDetails}/>
                ) : !errorMsg ? "Problem" : null
            }
        </>
    )
}

export default CoinMain;
