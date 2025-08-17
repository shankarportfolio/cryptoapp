"use client";
import PageSection from "@/app/components/PageSection";
import React from "react";
import ExchangeDetailMain from "./ExchangeDetailMain";

const ExchangesDashboard = ({exchangeId} : { exchangeId: string }) => {

    return (
        <PageSection>
            <ExchangeDetailMain exchangeId={exchangeId} />
        </PageSection>
    );
};

export default ExchangesDashboard;