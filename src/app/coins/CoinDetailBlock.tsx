
import { outfit} from "../_lib/fonts";
import { ArrowBigDown, ArrowBigUp, Circle } from "lucide-react";

type CoinsType = {
    coin : any;
    checkData : boolean;
    labelName : string;
    isNumValueChanging : boolean;
    children : string | number;
}

const CoinDetailBlock = ({coin, checkData, labelName, isNumValueChanging = false, children} : CoinsType) =>{
    return(
        <div className={`${!checkData ? 'w-1/4 p-[0px]' : 'w-full'}`}>
            <span className={`${outfit.className} text-[10px] leading-[12px] text-muted block mb-[5px]`}>{labelName}</span>
            <h4 className={`${outfit.className} ${!checkData ? 'text-[20px] leading-[30px]' : 'text-[16px] leading-[26px]'} font-[600] m-[0] flex items-center justify-start ${
                isNumValueChanging && ( (parseFloat(String(children)) > 0) ? ("text-green-300") : (parseFloat(String(children)) < 0) ? ("text-red-300") : ("text-blue-300") )
            }`}>{
                    isNumValueChanging && (
                        parseFloat(String(children)) > 0 ? (
                            <ArrowBigUp className="text-green-300 mr-[5px]" />
                        ) : parseFloat(String(children)) < 0 ? (
                            <ArrowBigDown className="text-red-300 mr-[8px]" />
                        ) : (
                            <Circle className="text-[#799EFF] mr-[8px] hidden"/>
                        )
                    )}
                  {children}
                  {
                    isNumValueChanging && "%"
                  }
             </h4>
        </div>
    )
}

export default CoinDetailBlock;