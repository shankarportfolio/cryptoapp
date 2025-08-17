import PageSection from "@/app/components/PageSection";
import CoinMain from "./CoinMain";

const CoinMainDetailDashboard = ({coinId} : {coinId: string }) =>{
    return(
        <PageSection>
            <CoinMain coinId={coinId} />
        </PageSection>
    )
}

export default CoinMainDetailDashboard;