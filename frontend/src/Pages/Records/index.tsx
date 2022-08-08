import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BodyRecords from '../../Components/BodyRecords';
import Filters from '../../Components/Filters';
import Pagination from '../../Components/Pagination';
import { formatDate } from '../../helpers';
import { RecordsResponse } from '../../types';
import { BASE_URL } from '../../util/requests';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './styles.css';

const Records = () => {

    const min = new Date(new Date().setDate(new Date().getDate() - 830));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
    const [activePage, setActivePages] = useState(0);

    useEffect(() => {

        const dmin = minDate.toISOString();
        const dmax = maxDate.toISOString();

        axios.get(`${BASE_URL}/records?min=${dmin}&max=${dmax}&page=${activePage}`)
            .then((response) => setRecordsResponse(response.data));
    }, [minDate, maxDate, activePage]);

    const handlePageChange = (index: number) => {
        setActivePages(index)
    }

    return (
        <div className='page-container'>
            <div className='filters-container records-filters'>
                <div className="dspesquisa-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dspesquisa-form-control-container01">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <Link to='/charts'>
                    <button className='action-filters'>
                        VER GRÁFICO
                    </button>
                </Link>
            </div>
            <table className='records-table' cellPadding='0' cellSpacing='0'>
                <thead>
                    <tr>
                        <th>INSTANTE</th>
                        <th>NAME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GÊNERO</th>
                        <th>TITULO DO GAME</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recordsResponse?.content.map(record => (
                            <BodyRecords record={record} />
                        ))}
                </tbody>
            </table>
            <Pagination
                activePage={activePage}
                goToPage={handlePageChange}
                totalPages={recordsResponse?.totalPages}
            />
        </div>
    )
}

export default Records;