import QuoteHeading from "@/app/components/QuoteHeading";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

type ExchangeHeadType = {
    exchangeName?: string;
    exchangeSiteLink?: string;
}

const ExchangeHead = ({exchangeName, exchangeSiteLink}: ExchangeHeadType)=>{
    return(
        <div className={`w-full flex items-center justify-start flex-wrap`}>
            <div className="w-1/2">
                <QuoteHeading>{exchangeName}</QuoteHeading>
            </div>
            {
                exchangeSiteLink &&
                (
                    <div className="w-1/2 flex items-center justify-end">
                            
                        <Link href={exchangeSiteLink} prefetch={true} target="_blank">
                            <SquareArrowOutUpRight className="w-[30px] text-white" />
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default ExchangeHead;