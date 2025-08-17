"use client"
import { inter, montserrat, outfit } from "@/app/_lib/fonts";
import ErrorPage from "@/app/ErrorPage";
import Loading from "@/app/Loading";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CoinLayoutDetails from "./CoinLayoutDetails";
import PageSection from "@/app/components/PageSection";

const CoinDetails = ({params} : {params: Promise<{ id: string[] }> }) =>{

    const { id } = React.use(params);

    const [singleCoinDetails, setSingleCoinDetails] = useState<any>(null);
    const [errorMsg, setErrorMsg] = useState<boolean>(false);

    useEffect(() => {
        let intervalTime : NodeJS.Timeout;
        const fetchCoinDetails = async () =>{
            try{
                const res = await axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`);
                setSingleCoinDetails(res.data[0])
            }catch(error){
                setErrorMsg(errorMsg);
                //console.log(error)
            }
        }
        fetchCoinDetails();
        intervalTime = setInterval(fetchCoinDetails, 100);
        return () => clearInterval(intervalTime);
    }, [])
    
    return (
        <PageSection>
            {/* <h1>Coid id: {id}</h1> */}
            {
                errorMsg && <ErrorPage />
            }
            {
                singleCoinDetails ? (
                    <CoinLayoutDetails singleCoinDetails={singleCoinDetails}/>
                ) : !errorMsg ? (<Loading />) : null
            }
        </PageSection>
    )
}

export default CoinDetails;
