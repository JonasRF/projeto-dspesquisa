import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../Components/Pagination';
import { formatDate } from '../../helpers';
import { RecordsResponse } from '../../types';
import './styles.css';

const BASE_URL = 'https://deploy-apppesquisa.herokuapp.com';

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
            <div className='filters-container records-actions'>
                <Link to='/charts'>
                    <button className='action-filters'>
                        VER GRÁFICOS
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
                            <tr key={record.id}>
                                <td>{formatDate(record.moment)}</td>
                                <td>{record.name}</td>
                                <td>{record.age}</td>
                                <td className='text-secondary'>{record.gamePlatform}</td>
                                <td>{record.genreName}</td>
                                <td>{record.gameTitle}</td>
                            </tr>
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