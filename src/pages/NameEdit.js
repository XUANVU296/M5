import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import NameModel from '../models/NameModel';
import './NameEdit.css';

const createSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    age: Yup.number()
        .min(2, "Too Short!")
        .max(150, "Too Long!")
        .required("Required"),
    salary: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    branch: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
});

function NameEdit(props) {
    let navigate = useNavigate();
    let { id } = useParams();
    const [form, setForm] = useState({
        id: 0,
        code: "",
        name: "",
        age: "",
        salary: "",
        branch: ""
    });

    useEffect(() => {
        NameModel.find(id).then(function (data) {
            setForm(data.data);
        }).catch(function (error) {

        });
    }, [id]);

    const handSubmit = (values) => {
        console.log(values);
        NameModel.update(id, values).then(function (data) {
            alert('Cập nhật thành công');
            // Chuyển hướng
            navigate('/');
        }).catch(function (error) {
            alert('Đã có lỗi xảy ra');
        });
    };

    return (
        <div>
            <Link to={'/'}> Back </Link>
            <h1> BookEdit </h1>
            <Formik
                initialValues={form}
                enableReinitialize={true}
                validationSchema={createSchema}
                onSubmit={(values) => handSubmit(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="code">Code</label></td>
                                    <td>
                                        <Field name="code" />
                                        {errors.code && touched.code ? (
                                            <div style={{ color: 'red' }}>{errors.code}</div>
                                        ) : null}
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="name">Name</label></td>
                                    <td>
                                        <Field name="name" />
                                        {errors.name && touched.name ? (
                                            <div style={{ color: 'red' }}>{errors.name}</div>
                                        ) : null}
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="age">Age</label></td>
                                    <td>
                                        <Field type="number" name="age" />
                                        {errors.age && touched.age ? (
                                            <div style={{ color: 'red' }}>{errors.age}</div>
                                        ) : null}
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="salary">Salary</label></td>
                                    <td>
                                        <Field name="salary" />
                                        {errors.salary && touched.salary ? (
                                            <div style={{ color: 'red' }}>{errors.salary}</div>
                                        ) : null}
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="branch">Branch</label></td>
                                    <td>
                                        <Field name="branch" />
                                        {errors.branch && touched.branch ? (
                                            <div style={{ color: 'red' }}>{errors.branch}</div>
                                        ) : null}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default NameEdit;
