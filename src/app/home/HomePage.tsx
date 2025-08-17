"use client"
import PageSection from "../components/PageSection";
import Overview from "./Overview";

const HomePage = () =>{
    return(
        <PageSection classesList="flex items-start justify-start flex-wrap">
                <Overview />
        </PageSection>
    )
}

export default HomePage;