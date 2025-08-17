import { inter, montserrat, outfit } from "../_lib/fonts";
import { formatNumber } from "../_lib/convertor";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";

type Overviews = {
    children?: React.ReactNode,
    apidata: string | number,
    labelname: string,
    colorcode: string,
    isPercentage? : boolean,
    isIndicator? : boolean,
    isPrice? : boolean,
}

const OverviewBox = ({children, apidata, labelname, colorcode, isPercentage = false, isIndicator = false, isPrice=false} :  Overviews)=>{
    return(
        <div className="w-full py-[25px] px-[15px] rounded-[5px] bg-[#191c24] flex items-center justify-center md:justify-start flex-col md:flex-row">
            <div className={`w-[45px] h-[45px] rounded-[100%] flex items-center justify-center`} style={{backgroundColor : colorcode}}>
                {children}
            </div>
            <div className="w-full md:w-[calc(100%-45px)] mt-[20px] md:mt-[0] md:pl-[20px] relative">
                <h6 className={`${outfit.className} text-center md:text-left text-[12px] md:text-[12px] leading-[14px] text-muted mb-[5px]`}>{labelname}</h6>
                <span
                    className={
                        `${outfit.className} text-center md:text-left w-full flex items-center justify-center md:justify-start text-[25px] leading-[35px] md:text-[30px] md:leading-[40px] font-bold ` +
                        (isIndicator
                        ? (parseFloat(String(apidata)) > 0 ? 'text-green-300' : 'text-red-300')
                        : 'text-white')
                    }
                >   
                    {
                    isIndicator && ((parseFloat(String(apidata)) > 0) ? <ArrowBigUp className="text-green-300 mr-[10px]" /> : <ArrowBigDown className="text-red-300 mr-[10px]" />)
                    }
                    {
                        isPrice && "$"
                    }
                    {
                        typeof apidata === 'number' && apidata > 999 ? formatNumber(apidata) : (apidata)
                    }
                    {
                        isPercentage && "%"
                    }
                </span>
            </div>
        </div>
    )
}

export default OverviewBox;