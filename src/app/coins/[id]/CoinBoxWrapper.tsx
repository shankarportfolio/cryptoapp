import { layoutType } from "@/app/_lib/layoutType";

const CoinBoxWrapper = ({children, classesList} : layoutType) =>{
    return(
        <div className={`w-full rounded-[15px] bg-[#191c24] p-[25px] px-[30px] ${classesList}`}>
            <div className="w-full flex items-center justify-start flex-wrap">
                {children}
            </div>
        </div>
    )
}

export default CoinBoxWrapper;