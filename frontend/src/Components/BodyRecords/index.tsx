import React from "react";
import { formatDate } from "../../helpers";
import { RecordItem } from "../../types";

import '../../Pages/Records/styles.css';

type Props = {
    record: RecordItem;
}

const BodyRecords = ({ record }: Props) => {
    return (
        <tr key={record.id}>
            <td>{formatDate(record.moment)}</td>
            <td>{record.name}</td>
            <td>{record.age}</td>
            <td className='text-secondary'>{record.gamePlatform}</td>
            <td>{record.genreName}</td>
            <td>{record.gameTitle}</td>
        </tr>
    )
}

export default BodyRecords;