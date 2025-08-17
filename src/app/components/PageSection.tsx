import { layoutType } from "../_lib/layoutType";

const PageSection = ({classesList, children} : layoutType)=>{
    return(
        <section className="w-full">
            <div className={`w-full xl:w-[1200px] m-auto py-[35px] md:py-[65px] px-[15px] pt-[35px] ${classesList}`}>
                {children}
            </div>
        </section>   
    )
}

export default PageSection;