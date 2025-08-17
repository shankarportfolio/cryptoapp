"use client"
import { useState } from "react";
import CoinLayoutSwitch from "../coins/CoinLayoutSwitch";
import PageSection from "../components/PageSection"
import ExchangesListPage from "./ExchangesListPage"

const ExchangesMain = () =>{

    const [checkMark, setCheckMark] = useState<boolean>(true);

    return(
        <PageSection>
            <CoinLayoutSwitch checkData={checkMark} setCheckData={setCheckMark}/>
            <ExchangesListPage checkData={checkMark}/>
        </PageSection>
    )
}

export default ExchangesMain;