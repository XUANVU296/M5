import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NameModel from '../models/NameModel';
import './NameIndex.css'; // Import CSS file for styling

function NameIndex(props) {
    const [nameList, setNameList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        NameModel.all()
            .then(function (data) {
                setNameList(data.data.sort((a, b) => a.age - b.age));
                setLoading(false);
            })
            .catch(function (error) {
                alert('500 error');
            });
    }, []);

    return (
        <div className="name-index-container">
            <Link to={'/create'} className="add-new-link">
                Add new
            </Link>
            {loading ? <p>Data is loading</p> : null}
            <table className="name-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Branch</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {nameList.map((name, key) => (
                        <tr key={key}>
                            <td>{name.id}</td>
                            <td>{name.code}</td>
                            <td>{name.name}</td>
                            <td>{name.age}</td>
                            <td>{name.salary}</td>
                            <td>{name.branch}</td>
                            <td>
                                <Link to={'edit/' + name.id} className="edit-link">
                                    Edit
                                </Link>
                                <Link to={'delete/' + name.id} className="delete-link">
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NameIndex;
