"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import OverviewList from "./OverviewList";
import ErrorPage from "../ErrorPage";
import Loading from "../Loading";
import { crypGlobal } from "../_lib/api_files";
import NewsFeeds from "../NewsFeeds";

const Overview = ()=>{

    const [crypData, setCrypData] = useState<any>(null);
    const [errorMsg, setErrorMsg] = useState<boolean>(false);

    useEffect(() =>{
        let intervalId: NodeJS.Timeout;

        const fetchData = async () =>{
            axios.get(crypGlobal)
            .then(res => {
                setCrypData(res.data[0]); 
                //console.log(typeof res.data[0].volume_change)
            })
            .catch(err => setErrorMsg(!errorMsg))
        }

        fetchData();

        intervalId = setInterval(fetchData, 100);

        return () => clearInterval(intervalId);
        
    },[])

    return(
        <>
            {
                errorMsg && <ErrorPage />
            }
            <div className="w-full md:w-[70%] grid grid-cols-2 md:grid-cols-3 gap-[10px]">
                {
                    crypData ? (
                        <>
                            <OverviewList crypData={crypData} />
                        </>
                    ) : !errorMsg ? (<Loading />) : null
                }
            </div>
            <div className="w-full md:w-[27%] mt-[35px] md:mt-[0] md:ml-[3%] rounded-[5px] bg-[#191c24] py-[25px] px-[20px]">
                <NewsFeeds cattype="BTC" postno={5} />
            </div>
        </>
    )
}

export default Overview;