import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import NameModel from '../models/NameModel';
import './NameCreate.css';


const createSchema = Yup.object().shape({
    code: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    age: Yup.number()
        .min(1, "Too Short!")
        .max(150, "Too Long!")
        .required("Required"),
    salary: Yup.number()
        .min(0, "Too Short!")
        .max(1000000, "Too Long!")
        .required("Required"),
    branch: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
});

function NameCreate(props) {
    let navigate = useNavigate();

    const [form, setForm] = useState({
        code: "",
        name: "",
        age: "",
        salary: "",
        branch: ""
    });

    const handSubmit = (values) => {
        NameModel.store(values)
            .then(function (data) {
                alert('Them thanh cong');
                // Chuyen huong
                navigate('/');
            })
            .catch(function (error) {
                alert('Da co loi xay ra');
            });
    };

    return (
        <div>
            <Link to={'/'}> Back </Link>
            <h1> BookCreate </h1>
            <Formik
                initialValues={form}
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
                                        <Field type="number" name="salary" />
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

export default NameCreate;
