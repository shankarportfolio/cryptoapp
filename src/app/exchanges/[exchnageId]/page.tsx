import React from "react";
import ExchangesDashboard from "./ExchangesDashboard";
import { Metadata } from "next";

type PropsTypes = {
    params: Promise<{ exchnageId: string }>
}

export const generateMetadata = async ({ params }: PropsTypes) : Promise<Metadata> => {
    const id = (await params).exchnageId;

    return{
        title: `Exchange ${id} | Pocket Crypto`,
        description: ""
    }

}

const ExchangePage = ({ params }: PropsTypes) => {
    const { exchnageId } = React.use(params);

    return (
        <ExchangesDashboard exchangeId={exchnageId}/>
    );
};

export default ExchangePage;
