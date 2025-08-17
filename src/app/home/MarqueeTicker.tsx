"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { crypAllCoins } from "../_lib/api_files";
import { inter } from "../_lib/fonts";
import TickerBox from "./TickerBox";

const MarqueeTicker = () =>{

    const [tickerCoins, setTickerCoins] = useState<any[]>([]);
    const [errMessageTicker, setErrMessageTicker] = useState<boolean>(false);

    useEffect(() =>{

        let tickerTime: NodeJS.Timeout;

        const tickerCoinFetch = async () =>{
            try{
                const res = await axios.get(crypAllCoins);
                //console.log(res.data.data);
                setTickerCoins(res.data.data)
            }catch(err){
                //console.log(err);
                setErrMessageTicker(!errMessageTicker);
            }
        }

        tickerCoinFetch();
        tickerTime = setInterval(tickerCoinFetch, 129000);

        return () => clearInterval(tickerTime);


    },[])

    const TickerTopTen = tickerCoins.slice(0, 9);

    return(
        <>
            <Marquee speed={60} gradient={false} pauseOnHover>
                {
                    errMessageTicker && (<div className={`${inter.className} w-full text-[14px] text-muted`}></div>)
                }
                {
                    TickerTopTen.length ? (
                        TickerTopTen.map((TopTen, index)=>(
                            <TickerBox key={index} symbolName={TopTen.symbol} id={TopTen.id} priceUsd={TopTen.price_usd} priceChange={TopTen.percent_change_1h}  isPercentageChange={true} />
                        ))
                    ) : (<div className={`${inter.className} w-full text-[14px] text-muted`}></div>)
                }
            </Marquee>
        </> 
    )
}

export default MarqueeTicker;