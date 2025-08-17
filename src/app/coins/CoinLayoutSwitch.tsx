import { ListDashesIcon, SquaresFourIcon } from "@phosphor-icons/react";

type CheckLayout = {
    checkData: boolean, 
    setCheckData : React.Dispatch<React.SetStateAction<boolean>>
}

const CoinLayoutSwitch = ({checkData, setCheckData} : CheckLayout) =>{
    return(
        <div className="w-full hidden md:flex items-center justify-end mb-[15px]">
            <div className="w-1/2">

            </div>
            <div className="w-1/2 flex items-center justify-end">
                <div className="inline-block rounded-[5px] bg-[#191c24] overflow-hidden">
                    <input type="checkbox" onChange={() => setCheckData(!checkData)} checked={checkData} className="opacity-[0] hidden" id="layoutChange"/>
                    <label htmlFor="layoutChange" className="cursor-pointer flex">
                        <SquaresFourIcon size={35} className={`${checkData ? 'text-black bg-[var(--themecolor)]': ''} py-[5px] px-[5px]`} />
                        <ListDashesIcon size={35} className={`${!checkData ? 'text-black bg-[var(--themecolor)]' : ''} py-[5px] px-[5px]`}/>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default CoinLayoutSwitch;