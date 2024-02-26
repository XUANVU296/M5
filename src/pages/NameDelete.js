import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NameModel from '../models/NameModel';
import './NameDelete.css'; // Import CSS file for styling

function NameDelete(props) {
    let navigate = useNavigate();
    let { id } = useParams();

    const handleDelete = () => {
        const ask = window.confirm("Are you sure?");
        if (ask) {
            NameModel.destroy(id)
                .then(function (data) {
                    alert('Xóa thành công');
                    navigate('/');
                })
                .catch(function (error) {
                    alert('Xóa thất bại');
                });
        }
    };

    return (
        <div className="delete-container">
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this item?</p>
            <div className="button-container">
                <button className="delete-button" onClick={handleDelete}>
                    Confirm
                </button>
                <Link to={'/'} className="cancel-link">
                    Cancel
                </Link>
            </div>
        </div>
    );
}

export default NameDelete;
