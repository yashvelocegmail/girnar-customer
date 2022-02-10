import React, { useState, useEffect } from "react";
import Header from "../Header";
import Menu from "../Menu";
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';


function Employee() {
    const [employee,setEmployee]=useState();
    useEffect(() => {
        axios.get('https://velocepro.in/php/pms/employee/getAllEmployee.php')
            .then((res) => {
                setEmployee(res.data);
                console.log("--",employee);
            })
    },[]);
    //const rows = employee === undefined ? [] : employee;
    //console.log("--",rows1);
    const rows = [
        {
            emp_id: 1,
            email: "y@gmail.com",
            empname: "Yash",
        },
        {
            emp_id: 2,
            email: "y@gmail.com",
            empname: "Yash",
        }
    ];

    const columns = [
        {
            field: 'emp_id',
            headerName: 'ID',
            width: 150
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150
        },
        {
            field: 'empname',
            headerName: 'Username',
            width: 150
        },   
    ];
    return (
        <>
            <Header />

            <Menu />
                        <div className='content-wrapper'>
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1>Form</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active">Form</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="content">
                    <div className="container-fluid">
                        <div className="row">
                            {/* left column */}
                            <div className="col-md-12">
                                {/* general form elements */}
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">Employee</h3>
                                    </div>
                                    <div class="card-body">
                                        <div style={{ height: 300, width: '100%' }}>
                                            <DataGrid rows={rows} columns={columns}
                                            getRowId={row => row.emp_id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default Employee;
