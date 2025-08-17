import axios from "axios";
import { useEffect } from "react";

const CoinSocialStats = ({coinId} : {coinId?: string | number}) =>{

    useEffect(() => {

        let socialInterval: NodeJS.Timeout;

        const fetchSoicalStats = async() =>{
            try{
                const socialSt = await axios.get(`https://api.coinlore.net/api/coin/social_stats/?id=${coinId}`);
                //console.log(socialSt)
            }catch(err){
                console.log(err)
            }
        }

        fetchSoicalStats()

        socialInterval = setInterval(fetchSoicalStats, 100)

        return () => clearInterval(socialInterval)

    },[])

    return(
        <>

        </>
    )
}

export default CoinSocialStats;