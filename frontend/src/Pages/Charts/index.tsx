import React, { useEffect, useState } from "react";
import Filters from "../../Components/Filters";
import Chart from 'react-apexcharts';
import { barOptions, pieOptions } from './chart-options';
import { BarChartData, PieChartData } from "../../types";

import './styles.css';
import axios from "axios";
import { BASE_URL } from "../../util/requests";
import { buildBarSeries, getGenderChartData, getPlatformChartData } from "./helpers";

const initialPieData = {
    labels: [],
    series: []
}

const Charts = () => {

    const [barChartData, setBarChartData] = useState<BarChartData[]>([]);
    const [platformData, setPlatformData] = useState<PieChartData>(initialPieData);
    const [genderData, setGenderData] = useState<PieChartData>(initialPieData);

    useEffect(() => {
        async function getData() {
            const recordsResponse = await axios.get(`${BASE_URL}/records`);
            const gamesResponse = await axios.get(`${BASE_URL}/games`);

            const barChart = buildBarSeries(gamesResponse.data, recordsResponse.data.content);
            setBarChartData(barChart);

            const platformChartData = getPlatformChartData(recordsResponse.data.content);
            setPlatformData(platformChartData);

            const genderChartData = getGenderChartData(recordsResponse.data.content);
            setGenderData(genderChartData);
        }
        getData();
    }, [])

    return (
        <div className="page-container">
            <Filters link='/records' linkText='VER TABELA' />
            <div className="chart-container">
                <div className="top-related">
                    <h1 className="top-related-title">
                        Jogos mais votados
                    </h1>
                    <div className="games-container">
                        <Chart options={barOptions}
                            type='bar'
                            width='790'
                            height='550'
                            series={[{ data: barChartData }]}
                        />
                    </div>
                </div>
                <div className="charts">
                    <div className="platform-chart">
                        <h2 className="chart-title">Plataformas</h2>
                        <Chart
                            options={{ ...pieOptions, labels: platformData?.labels }}
                            type="donut"
                            series={platformData?.series}

                        />
                    </div>
                    <div className="gender-chart">
                        <h2 className="chart-title">Gêneros</h2>
                        <Chart
                            options={{ ...pieOptions, labels: genderData.labels }}
                            type="donut"
                            series={genderData.series}
                            width='350'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts;
