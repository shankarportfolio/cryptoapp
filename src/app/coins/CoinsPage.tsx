"use client"
import { useState } from "react";
import CoinListPage from "./CoinListPage";
import CoinLayoutSwitch from "./CoinLayoutSwitch";
import PageSection from "../components/PageSection";

const CoinsPage = () =>{

    const [checkMark, setCheckMark] = useState<boolean>(true);

    return(
        <PageSection classesList="flex items-start justify-start flex-wrap">
            <CoinLayoutSwitch checkData={checkMark} setCheckData={setCheckMark}/>
            <CoinListPage checkData={checkMark} />
        </PageSection>
    )
}

export default CoinsPage;