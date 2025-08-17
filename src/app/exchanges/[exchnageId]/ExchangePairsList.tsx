"use client"
import { formatNumber } from "@/app/_lib/convertor";
import { outfit } from "@/app/_lib/fonts";
import React, { useState } from "react";
import ExchangePairDetailsBlock from "./ExchangePairDetailsBlock";

type ExPairsTypes = {
    base: string,
    quote: string,
    volume: string | number,
    price: string | number,
    price_usd: string | number
}

type ExPairsTypesMain = {
    apidata: ExPairsTypes[],
    errMsg: boolean
}

const ExchangePairsList = ({apidata, errMsg} : ExPairsTypesMain) =>{

    return(
        <>
            <div className={`grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-[20px] mt-[25px]`}>
                {
                    apidata.length && (
                        apidata.map((apid, index) => 
                            <div key={index} className={`w-full px-[20px] py-[25px] bg-[#191c24] rounded-[10px] grid grid-cols-3 md:grid-cols-2 gap-[10px] gap-y-[20px]`}>
                                <ExchangePairDetailsBlock labelname="Base" apidata={apid.base} isVolume={false} isQuote={false} />
                                <ExchangePairDetailsBlock labelname="Quote" apidata={apid.quote} isVolume={false} isQuote={true} />
                                <ExchangePairDetailsBlock labelname="Volume" apidata={apid.volume} isVolume={true} isQuote={false} />
                                <ExchangePairDetailsBlock labelname="Price" apidata={apid.price} isVolume={false} isQuote={false}>$</ExchangePairDetailsBlock>
                                <ExchangePairDetailsBlock labelname="Price in USD" apidata={apid.price_usd} isVolume={false} isQuote={false}>$</ExchangePairDetailsBlock>
                            </div>
                        )
                    )
                }
            </div>
        </>
    )
}

export default ExchangePairsList;