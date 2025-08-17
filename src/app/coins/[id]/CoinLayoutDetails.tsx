"use client"
import CoinHead from "./CoinHead";
import CurrentCoinPrice from "./CurrentCoinPrice";
import CoinOtherDetails from "./CoinOtherDetails";
import BackButton from "@/app/components/BackButton";
import DetailsPageLayout from "@/app/components/DetailsPageLayout";
import CoinSocialStats from "./CoinSocialStats";
import TopMarkets from "./TopMarkets";

type singleCoinDetailsType ={
    id: string | number,
    name: string,
    price_usd: string | number,
    percent_change_1h: string | number,
    symbol : string,
    market_cap_usd : string | number,
    percent_change_24h: string | number,
    percent_change_7d: string | number,
    price_btc: string | number,
    volume24: string | number,
    volume24a: string | number,
    csupply: string | number,
    tsupply: string | number,
    msupply: string | number,
}

type AllDetailCoinType = {
    singleCoinDetails : singleCoinDetailsType
}

const CoinLayoutDetails = ({singleCoinDetails} : AllDetailCoinType) =>{
    return(
        <>
            <BackButton />
            <DetailsPageLayout classesList="flex items-center justify-start">
                <CoinHead apidata={singleCoinDetails.name} symbolData={singleCoinDetails.symbol} />
                <div className={`w-full md:w-1/2`}>
                    <CurrentCoinPrice labelName="Price:" isPriceChangePercentage={false} apidata={singleCoinDetails.price_usd} />
                    <CurrentCoinPrice labelName="Price Change (in 1Hr):" isPriceChangePercentage={true} apidata={singleCoinDetails.percent_change_1h} />
                </div>
            </DetailsPageLayout>
            <DetailsPageLayout classesList="mt-[25px]">
                <div className={`w-full grid grid-cols-2 md:grid-cols-4 gap-[10px]`}>
                    <CoinOtherDetails topLabelName="Market Cap" apidata={singleCoinDetails.market_cap_usd} isChangingPrice={false} isPercetageChange={false} isBTCprice={false}/>
                    <CoinOtherDetails topLabelName="Coin Cost in BTC" apidata={singleCoinDetails.price_btc} isChangingPrice={false} isPercetageChange={false} isBTCprice={true}/>
                    <CoinOtherDetails topLabelName="Price Change (last 24Hr)" apidata={singleCoinDetails.percent_change_24h} isChangingPrice={true} isPercetageChange={true} isBTCprice={false}/>
                    <CoinOtherDetails topLabelName="Price Change (last 7Days)" apidata={singleCoinDetails.percent_change_7d} isChangingPrice={true} isPercetageChange={true} isBTCprice={false}/>
                    <CoinOtherDetails topLabelName="Trading Volume (last 24h)" apidata={singleCoinDetails.volume24} isChangingPrice={true} isPercetageChange={false} isBTCprice={false}><span className="mr-[3px]">$</span></CoinOtherDetails>
                    <CoinOtherDetails topLabelName="Coins Traded" apidata={singleCoinDetails.volume24a} isChangingPrice={true} isPercetageChange={false} isBTCprice={false}/>
                    <CoinOtherDetails topLabelName="Circulating Supply" apidata={singleCoinDetails.csupply} isChangingPrice={true} isPercetageChange={false} isBTCprice={false}/>
                    <CoinOtherDetails topLabelName="Total Supply" apidata={singleCoinDetails.tsupply} isChangingPrice={true} isPercetageChange={false} isBTCprice={false}/>
                    <CoinOtherDetails topLabelName="Maximum Supply" apidata={singleCoinDetails.msupply} isChangingPrice={true} isPercetageChange={false} isBTCprice={false}/>
                </div>
            </DetailsPageLayout>
            <TopMarkets coinId={singleCoinDetails.id} apidata={singleCoinDetails.name}/>
        </>
    )
}

export default CoinLayoutDetails;