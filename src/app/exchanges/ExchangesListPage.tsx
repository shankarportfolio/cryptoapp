"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ErrorPage from "../ErrorPage";
import Loading from "../Loading";
import Link from "next/link";
import ExchangesDetailBlock from "./ExchangesDetailBlock";
import Pagination from "../components/Pagination";

const ExchangesListPage = ({ checkData }: { checkData: boolean }) => {
    const [exchangesData, setExchangesData] = useState<any[]>([]);
    const [errMsg, setErrMsg] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 24;

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        let setIntervalValue: NodeJS.Timeout;

        const fetchExchanges = async () => {
            try {
                const res = await axios.get("https://api.coinlore.net/api/exchanges/");
                setExchangesData(Object.values(res.data));
            } catch (error) {
                setErrMsg(true);
            }
        };

        fetchExchanges();
        setIntervalValue = setInterval(fetchExchanges, 100); // avoid API abuse

        return () => clearInterval(setIntervalValue);
    }, []);

    // Pagination logic
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedExchanges = exchangesData.slice(startIndex, startIndex + pageSize);

    if (errMsg) return <ErrorPage />;

    return (
        <>
            {exchangesData.length ? (
                <>
                    <div className={`w-full grid ${!checkData ? "grid-cols-1 gap-2" : "grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4"}`}>
                        {paginatedExchanges.map((exchange, index) => (
                            <Link
                                href={`/exchanges/${exchange.id}`}
                                prefetch
                                key={index}
                                className={`outline-none hover:translate-y-[-5px] transition-all duration-300 w-full p-[20px] bg-[#191c24] rounded-[5px] ${
                                    !checkData
                                        ? "flex items-center justify-start flex-wrap"
                                        : "grid grid-cols-2 gap-3 gap-y-[35px]"
                                }`}
                            >
                                <ExchangesDetailBlock isVolumeData={false} isCountryText={false} labelName="Name" apidata={exchange.name} checkData={checkData} />
                                <ExchangesDetailBlock isVolumeData={true} isCountryText={false} labelName="Total Trading Volume" apidata={exchange.volume_usd} checkData={checkData} />
                                <ExchangesDetailBlock isVolumeData={false} isCountryText={false} labelName="Active Crypto Pairs" apidata={exchange.active_pairs} checkData={checkData} />
                                <ExchangesDetailBlock isVolumeData={false} isCountryText={true} labelName="Country" apidata={exchange.country} checkData={checkData} />
                            </Link>
                        ))}
                    </div>

                    <Pagination
                        items={exchangesData.length}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        onPageChange={onPageChange}
                    />
                </>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default ExchangesListPage;
