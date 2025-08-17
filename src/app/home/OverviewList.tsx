import OverviewBox from "./OverviewBox";
import { Bitcoin, ChartCandlestick, ChartColumn, ChartSpline, DollarSign, FlagTriangleRight, Hash, Landmark, Percent, Trophy } from 'lucide-react';
import { CurrencyEthIcon } from "@phosphor-icons/react";

type ApiKeyData = {
    coins_count : string | number,
    active_markets : string | number,
    total_mcap : string | number,
    total_volume : string | number,
    btc_d : string | number,
    eth_d : string | number,
    mcap_change : string | number,
    volume_change : string | number,
    avg_change_percent : string | number,
    volume_ath: string | number,
    mcap_ath: string | number
}

const OverviewList = ({crypData} : {crypData : ApiKeyData}) =>{
    return(
        <>
            <OverviewBox apidata={crypData.coins_count} labelname="Total Number of Coins" colorcode="#845adf" isPercentage={false} isIndicator={false} isPrice={false}>
                <Hash className="w-[25px]"/>
            </OverviewBox>
            <OverviewBox apidata={crypData.active_markets} labelname="Total Crypto Exchange" colorcode="#23b7e5" isPercentage={false} isIndicator={false} isPrice={false}>
                <Landmark className="w-[25px]"/>
            </OverviewBox>
            <OverviewBox apidata={crypData.total_mcap} labelname="Total Market Cap" colorcode="#26bf94" isPercentage={false} isIndicator={false} isPrice={true}>
                <DollarSign className="w-[25px]"/>
            </OverviewBox>
            <OverviewBox apidata={crypData.total_volume} labelname="Total Volume" colorcode="#f5b849" isPercentage={false} isIndicator={false} isPrice={true}>
                <ChartColumn className="w-[25px]"/>
            </OverviewBox>
            <OverviewBox apidata={crypData.btc_d} labelname="Bitcoin MCap Dominance" colorcode="#f06548" isPercentage={true} isIndicator={false} isPrice={false}>
                <Bitcoin className="w-[25px]"/>
            </OverviewBox>
            <OverviewBox apidata={crypData.eth_d} labelname="Ethereum MCap Dominance" colorcode="#405189" isPercentage={true} isIndicator={false} isPrice={false}>
                <CurrencyEthIcon size={24} className="w-[35px]"/>
            </OverviewBox>
            <OverviewBox apidata={crypData.mcap_change} labelname="MCap Change (in 24Hrs)" colorcode="#2db0b5" isPercentage={true} isIndicator={true}>
                <Percent size={24} className="w-[35px]"/>
            </OverviewBox>
            <OverviewBox apidata={crypData.volume_change} labelname="Valume Change (in 24Hrs)" colorcode="#eb0000" isPercentage={true} isIndicator={true} isPrice={false}>
                <ChartSpline size={24} className="w-[35px]"/>
            </OverviewBox>
            <OverviewBox apidata={crypData.avg_change_percent} labelname="Avg. Price Change" colorcode="#5d87ff" isPercentage={true} isIndicator={true} isPrice={false}>
                <ChartCandlestick size={24} className="w-[35px]"/>
            </OverviewBox>
            <OverviewBox apidata={crypData.volume_ath} labelname="ATH Volume" colorcode="#00809D" isPercentage={false} isIndicator={false} isPrice={true}>
                <FlagTriangleRight size={24} className="w-[35px]"/>
            </OverviewBox>
            <OverviewBox apidata={crypData.mcap_ath} labelname="ATH MCap" colorcode="#B9375D" isPercentage={false} isIndicator={false} isPrice={true}>
                <Trophy size={24} className="w-[35px]"/>
            </OverviewBox>
        </>
    )
}

export default OverviewList;