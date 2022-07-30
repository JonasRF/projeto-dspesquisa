import React from 'react';
import './styles.css';

const Records = () => {
    return (
        <div className='page-container'>
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
                    <tr>
                        <td>20/08/2022 12:56</td>
                        <td>JONAS RIBEIRO</td>
                        <td>30</td>
                        <td>XBOX</td>
                        <td>Ação - Aventura</td>
                        <td>The last of US</td>
                    </tr>
                    <tr>
                        <td>20/08/2022 12:56</td>
                        <td>JONAS RIBEIRO</td>
                        <td>30</td>
                        <td>XBOX</td>
                        <td>Ação - Aventura</td>
                        <td>The last of US</td>
                    </tr>
                    <tr>
                        <td>20/08/2022 12:56</td>
                        <td>JONAS RIBEIRO</td>
                        <td>30</td>
                        <td>XBOX</td>
                        <td>Ação - Aventura</td>
                        <td>The last of US</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Records;