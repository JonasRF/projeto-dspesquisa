import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BodyRecords from '../../Components/BodyRecords';
import Filters from '../../Components/Filters';
import Pagination from '../../Components/Pagination';
import { formatDate } from '../../helpers';
import { RecordsResponse } from '../../types';
import { BASE_URL } from '../../util/requests';
import './styles.css';

const Records = () => {

    const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
    const [activePage, setActivePages] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
            .then((response) => setRecordsResponse(response.data));
    }, [activePage]);

    const handlePageChange = (index: number) => {
        setActivePages(index)
    }

    return (
        <div className='page-container'>
            <Filters link='/charts' linkText='VER GRÁFICO' />
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