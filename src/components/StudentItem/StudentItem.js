import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

const StudentItem = ({el,idx,deleteStudents}) => {
    return (
        <>
            <tr>
                <td>{idx + 1}</td>
                <td>{el.name}</td>
                <td>{el.phone}</td>
                <td>{el.contracts}</td>
                <td>{el.paid}</td>
                <td>{el.laptop}</td>
                <td>{el.group}</td>
                <td>{el.comment}</td>
                <td>{el.status}</td>
                <td>
                    <button type="button" className="btn btn-outline-warning me-2"><FontAwesomeIcon
                        icon={faEdit}/></button>
                    <button className="btn btn-outline-danger"
                            onClick={() => deleteStudents(el,idx)}><FontAwesomeIcon icon={faTrash}/>
                    </button>
                </td>
            </tr>
        </>
    );
};

export default StudentItem;