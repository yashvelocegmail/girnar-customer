import React, { useState, useEffect } from "react";
import Header from "../Header";
import Menu from "../Menu";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Modal, Button } from "react-bootstrap";
import Select from 'react-select';

function EnquiryGeneration() {
    const optionsArray = [
        { key: "laser_cutting", label: "Laser Cutting" },
        { key: "machining", label: "Machining" },
        { key: "bending", label: "Bending" },
        { key: "grinding", label: "Grinding" },
      ];
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        axios.post(
            "http://localhost/girnar_backend/api/read_customer_inquiry.php", { customer: localStorage.getItem('customer_id') })
            .then((res) => {
                set_inquiry(res.data);
                //console.log("-------", inquiry);
            })
    }, []);
    useEffect(() => {
        axios(
            "http://localhost/girnar_backend/api/read_material_type.php")
            .then((res) => {
                set_material_type_option(res.data);
                //console.log(material_type_option);
            })
    }, []);
    useEffect(() => {
        axios(
            "http://localhost/girnar_backend/api/read_material_thickness.php")
            .then((res) => {
                set_material_thickness_option(res.data);
                console.log(material_thickness_option);
            })
    }, []);
    const [inquiry, set_inquiry] = useState();
    const [designstate, setdesignstate] = useState(0);
    const [material_type_option, set_material_type_option] = useState();
    const [material_thickness_option, set_material_thickness_option] = useState();

    const [material_type, set_material_type] = useState();
    const [material_thickness, set_material_thickness] = useState();
    const [material_grade, set_material_grade] = useState();
    const [material_status, set_material_status] = useState();
    const [type_of_process, set_type_of_process] = useState([]);
    const [expected_delivery, set_expected_delivery] = useState();
    const [design_upload, set_design_upload] = useState();
    const [description, set_description] = useState();

    const [modal_id, set_modal_id] = useState();
    // const [modal_customer, set_modal_customer] = useState();
    const [modal_material_type, set_modal_material_type] = useState();
    const [modal_material_thickness, set_modal_material_thickness] = useState();
    //const [modal_no_of_sheets, set_modal_no_of_sheets] = useState();
    const [modal_material_grade, set_modal_material_grade] = useState();
    const [modal_material_status, set_modal_material_status] = useState();
    const [modal_type_of_process, set_modal_type_of_process] = useState();
    const [modal_expected_delivery, set_modal_expected_delivery] = useState();
    const [modal_design_upload, set_modal_design_upload] = useState();
    const [modal_description, set_modal_description] = useState();

    const ondesignclick = (e) => {
        console.log(e.target.value);
        if (e.target.value === "design") {
            setdesignstate(1);
        }
        else if(e.target.value==="no_design"){
            setdesignstate(2);
        }
        else{
            setdesignstate(0);
        }
    }
     //Modal fields
     const onModalIdChange = (e) => {
        set_modal_id(e.target.value);
    }
    // const onModalCustomerChange = (e) => {
    //     set_modal_customer(e.target.value);
    // }
    const onModalMaterialTypeChange = (e) => {
        set_modal_material_type(e.target.value);
    }
    const onModalMaterialThicknessChange = (e) => {
        set_modal_material_thickness(e.target.value);
    }
    const onModalMaterialGradeChange = (e) => {
        set_modal_material_grade(e.target.value);
    }
    const onModalMaterialStatusChange = (e) => {
        set_modal_material_status(e.target.value);
    }
    const onModalTypeOfProcessChange = (option) => {
        set_modal_type_of_process(option);
    }
    const onModalExpectedDeliveryChange = (e) => {
        set_modal_expected_delivery(e.target.value);
    }
    const onModalDesignUploadChange = (e) => {
        set_modal_design_upload(e.target.files[0]);
        console.log(design_upload);
    }
    const onModalDescriptionChange = (e) => {
        set_modal_description(e.target.value);
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('customer', localStorage.getItem('customer_id'));
        formData.append('material_type', material_type);
        formData.append('material_thickness', material_thickness);
        formData.append('material_grade', material_grade);
        formData.append('material_status', material_status);
        formData.append('type_of_process', JSON.stringify(type_of_process));
        formData.append('expected_delivery', expected_delivery);
        formData.append('design_upload', design_upload);
        formData.append('description', description);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        axios.post('http://localhost/girnar_backend/api/create_customer_inquiry.php', formData, config)
            .then(response => {
                axios.post(
                    "http://localhost/girnar_backend/api/read_customer_inquiry.php", { customer: localStorage.getItem('customer_id')})
                    .then((res) => {
                        set_inquiry(res.data);
                        //console.log(inquiry);
                    })
            })
            .catch(error => {
                console.log(error);
            });
    }

    const onMaterialTypeChange = (e) => {
        set_material_type(e.target.value);
    }
    const onMaterialThicknessChange = (e) => {
        set_material_thickness(e.target.value);
    }
    const onMaterialGradeChange = (e) => {
        set_material_grade(e.target.value);
    }
    const onMaterialStatusChange = (e) => {
        set_material_status(e.target.value);
    }
    const onTypeOfProcessChange = (option) => {
        set_type_of_process(option);
    }
    const onExpectedDeliveryChange = (e) => {
        set_expected_delivery(e.target.value);
    }
    const onDesignUploadChange = (e) => {
        set_design_upload(e.target.files[0]);
        console.log(design_upload);
    }
    const onDescriptionChange = (e) => {
        set_description(e.target.value);
    }
    const onEdit = (row) => {
        handleShow();
        //console.log(row.type_of_process);
        set_modal_id(row.id);
        set_modal_material_type(row.material_type);
        set_modal_material_thickness(row.material_thickness);
        //set_modal_no_of_sheets(row.no_of_sheets);
        set_modal_material_grade(row.material_grade);
        set_modal_material_status(row.material_status);
        set_modal_type_of_process(JSON.parse(row.type_of_process.split(',')));
        set_modal_expected_delivery(row.expected_delivery);
        set_modal_design_upload(row.design_upload);
        set_modal_description(row.description);
        console.log(modal_type_of_process);
    }
    const onModalFormSubmit = (e) => {
        e.preventDefault();
        const modalFormData = new FormData();
        modalFormData.append('id', modal_id);
        modalFormData.append('customer', localStorage.getItem('customer_id'));
        modalFormData.append('material_type', modal_material_type);
        modalFormData.append('material_thickness', modal_material_thickness);
        modalFormData.append('material_grade', modal_material_grade);
        modalFormData.append('material_status', modal_material_status);
        modalFormData.append('type_of_process', JSON.stringify(modal_type_of_process));
        modalFormData.append('expected_delivery', modal_expected_delivery);
        modalFormData.append('design_upload', modal_design_upload);
        modalFormData.append('description', modal_description);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        axios.post('http://localhost/girnar_backend/api/update_customer_inquiry.php', modalFormData, config)
            .then(response => {
                axios.post(
                    "http://localhost/girnar_backend/api/read_customer_inquiry.php", { customer: localStorage.getItem('customer_id')})
                    .then((res) => {
                        set_inquiry(res.data);
                        //console.log(inquiry);
                    })
            })
            .catch(error => {
                console.log(error);
            });
        handleClose();
    }
    const onDelete = (row) => {
        console.log(row);
        axios.post('http://localhost/girnar_backend/api/delete_customer_inquiry.php', { id: row })
            .then(response => {
                axios.post(
                    "http://localhost/girnar_backend/api/read_customer_inquiry.php", { customer: localStorage.getItem('customer_id')})
                    .then((res) => {
                        set_inquiry(res.data);
                        console.log(inquiry);
                    })
            })
            .catch(error => { 
                console.log(error);
            });
    }
    const onNoDesignSubmit=(e)=>{
e.preventDefault();
        axios.post(
            "http://localhost/girnar_backend/api/create_customer_inquiry.php", { customer: localStorage.getItem('customer_id'),design_upload:"no_design"})
            .then(response => {
                axios.post(
                    "http://localhost/girnar_backend/api/read_customer_inquiry.php", { customer: localStorage.getItem('customer_id')})
                    .then((res) => {
                        set_inquiry(res.data);
                        console.log(inquiry);
                    })
            })
            // .catch(error => { 
            //     console.log(error);
            // });
    }

    const rows = inquiry === undefined ? [] : inquiry.data;
    const rows1 = [
        {
            id: 1,
            customer: 13,
            material_type: "Aluminium",
            material_thickness: "4mm",
            //no_of_sheets: "3",
            material_grade: "A",
            material_status: "Without",
            type_of_process: "asd",
            expected_delivery: "12",
            design_upload: "asd",
            description: "asd"
        }
    ];

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 150
        },
        {
            field: 'customer',
            headerName: 'Customer',
            width: 150
        },
        {
            field: 'material_type_material_type',
            headerName: 'Material Type',
            width: 150
        },
        {
            field: 'material_thickness_material_thickness',
            headerName: 'Material Thickness',
            width: 150
        },
        // {
        //     field: 'material_thickness',
        //     headerName: 'Material Thickness',
        //     width: 160,
        //     valueGetter: (params) => {
        //         return params.row.material_thickness;
        //     }
        // },
        // {
        //     field: 'no_of_sheets',
        //     headerName: 'No Of Sheets',
        //     width: 150
        // },
        // {
        //     field: 'material_grade',
        //     headerName: 'Material Grade',
        //     width: 150
        // },
        // {
        //     field: 'material_status',
        //     headerName: 'Material Status',
        //     width: 150
        // },
        // {
        //     field: 'type_of_process',
        //     headerName: 'Type Of Process',
        //     width: 150
        // },
        // {
        //     field: 'expected_delivery',
        //     headerName: 'Expected Delivery',
        //     width: 150
        // },
        {
            field: 'design_upload',
            headerName: 'Design Upload',
            width: 200
        },
        // {
        //     field: 'description',
        //     headerName: 'Description',
        //     width: 150
        // },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="">
                        <button onClick={() => onEdit(params.row)} data-toggle="tooltip" title="Edit" type="button" className="btn btn-warning"  ><i class="far fa-edit"></i></button>
                        <button onClick={() => {
                            const confirmBox = window.confirm(
                                "Do you really want to delete?"
                            )
                            if (confirmBox === true) {
                                onDelete(params.row.id)
                            }
                        }} data-toggle="tooltip" title="Delete" style={{ marginLeft: '20%' }} className="btn btn-danger" ><i className="fas fa-trash"></i></button>
                    </div>
                );
            }
        },
    ];
    return (
        <>
            <Header />
            <Menu />
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Edit Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={onModalFormSubmit} className="form-group">
                        <div className="row">
                            <div className="field col-md-12">
                                <label className="required">ID</label>
                                <input defaultValue={modal_id} onChange={onModalIdChange} className="form-control mt-1" name="id" type="text" required />
                            </div>
                            {/* <div className="field col-md-12">
                                <label className="required">Customer</label>
                                <input defaultValue={modal_customer} onChange={onModalCustomerChange} className="form-control mt-1" name="customer" type="text" required />
                            </div> */}

                            <div className="field col-md-12">
                                <label className="required">Material Type</label>
                                {/* <input defaultValue={modal_material_type} onChange={onModalMaterialTypeChange} className="form-control mt-1" name="material_type" type="text" required /> */}
                                <select defaultValue={modal_material_type} onChange={onModalMaterialTypeChange} name="material_type" className="form-control">
                                    <option>Select</option>
                                    {material_type_option === undefined ? [] : material_type_option.data.map((materialtype) => (
                                        <option key={materialtype.id} value={materialtype.id}>{materialtype.material_type}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="field col-md-12">
                                <label className="required">Material Thickness</label>
                                {/* <input defaultValue={modal_material_thickness} onChange={onModalMaterialThicknessChange} className="form-control mt-1" name="material_thickness" type="text" required /> */}
                                <select defaultValue={modal_material_thickness} onChange={onModalMaterialThicknessChange} name="material_type" className="form-control">
                                    <option>Select</option>
                                    {material_thickness_option === undefined ? [] : material_thickness_option.data.map((materialthickness) => (
                                        <option key={materialthickness.id} value={materialthickness.id}>{materialthickness.material_thickness}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="field col-md-12">
                                <label className="required">Material Grade</label>
                                <input defaultValue={modal_material_grade} onChange={onModalMaterialGradeChange} className="form-control mt-1" name="material_grade" type="text" required />
                            </div>

                            <div className="field col-md-12">
                                <label className="required">Material Status</label>
                                <input defaultValue={modal_material_status} onChange={onModalMaterialStatusChange} className="form-control mt-1" name="material_status" type="text" required />
                            </div>
                            <div className="field col-md-12">
                                <label className="required">Type Of Process</label>
                                {/* <input defaultValue={modal_type_of_process} onChange={onModalTypeOfProcessChange} className="form-control mt-1" name="type_of_process" type="text" required /> */}
                                {/* <input type="text" defaultValue={typeof modal_type_of_process} /> */}
                                <DropdownMultiselect selected={modal_type_of_process}  handleOnChange={onModalTypeOfProcessChange} options={optionsArray} name="type_of_process" />
                            </div>

                            <div className="field col-md-12">
                                <label className="required">Expected Delivery</label>
                                <input defaultValue={modal_expected_delivery} onChange={onModalExpectedDeliveryChange} className="form-control mt-1" name="expected_delivery" type="text" required />
                            </div>
                            <div className="field col-md-12">
                                <label className="required">Design Upload</label>
                                <input onChange={onModalDesignUploadChange} className="form-control mt-1" name="design_upload" type="file" />
                            </div>

                            <div className="field col-md-12">
                                <label className="required">Description</label>
                                <input defaultValue={modal_description} onChange={onModalDescriptionChange} name="description" className="form-control" placeholder="Enter Description" />
                            </div>
                            <div className="field col-md-12">
                                <button className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="content-wrapper" style={{ marginTop: "10px" }}>
                <section class="content">
                    <div className="container-fluid">
                        <div className="row">
                            {/* left column */}
                            <div className="col-md-12">
                                <div class="card card-info">
                                    <div class="card-header">
                                        <h3 class="card-title">Enquiry Generation</h3>
                                    </div>
                                    <div class="card-body">
                                        <form onSubmit={onFormSubmit}>
                                            <div className='form-group'>
                                                <label>Design Status</label>
                                                <select onChange={(e) => ondesignclick(e)} className='custom-select'>
                                                    <option>Select</option>
                                                    <option value="design">Design Available</option>
                                                    <option value="no_design">Design Not Available</option>
                                                </select>
                                            </div>
                                            {designstate === 2 ? <button onClick={onNoDesignSubmit} type="submit" className="btn btn-secondary">Submit</button> : designstate === 1 ?
                                                <>
                                                    <div class="form-group">
                                                        <div class="custom-file">
                                                            <label>Design Upload</label>
                                                            <input onChange={onDesignUploadChange} type="file" class="form-control" name="design_upload" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Material Status</label>
                                                        <select onChange={onMaterialStatusChange} name="material_status" className='custom-select'>
                                                            <option>Select</option>
                                                            <option>With Material</option>
                                                            <option>Without Material</option>
                                                        </select>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Type Of Process</label>
                                                        {/* <select onChange={onTypeOfProcessChange} name="type_of_process" className='custom-select'>
                                                            <option>Select</option>
                                                            <option>Laser Cutting</option>
                                                            <option>Bending</option>
                                                        </select> */}
                                                        <DropdownMultiselect handleOnChange ={onTypeOfProcessChange} options={optionsArray} name="type_of_process" />
                                                    </div>

                                                    <div className="form-group">
                                                        <label >Material Type</label>
                                                        {/* <input onChange={onMaterialTypeChange} name="material_type" className="form-control" placeholder="Enter Material Type" /> */}
                                                        <select onChange={onMaterialTypeChange} name="material_type" className="form-control">
                                                            <option>Select</option>
                                                            {material_type_option === undefined ? [] : material_type_option.data.map((materialtype) => (
                                                                <option key={materialtype.id} value={materialtype.id}>{materialtype.material_type}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label >Material Thickness</label>
                                                        {/* <input onChange={onMaterialThicknessChange} name="material_thickness" className="form-control" placeholder="Enter Material Thickness" /> */}
                                                        <select onChange={onMaterialThicknessChange} name="material_type" className="form-control">
                                                            <option>Select</option>
                                                            {material_thickness_option === undefined ? [] : material_thickness_option.data.map((materialthickness) => (
                                                                <option key={materialthickness.id} value={materialthickness.id}>{materialthickness.material_thickness}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Material Grade</label>
                                                        <input onChange={onMaterialGradeChange} type="text" className='form-control' name="material_grade" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Expected Delivery</label>
                                                        <input onChange={onExpectedDeliveryChange} type="text" className='form-control' name="expected_delivery" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Description</label>
                                                        <input onChange={onDescriptionChange} type="text" className='form-control' name="description" />
                                                    </div>
                                                    <div className="card-footer">
                                                        <button type="submit" className="btn btn-primary">Submit</button>
                                                    </div>
                                                </>:<></>
                                            }
                                        </form>
                                    </div>
                                    
                                </div>
                                <div class="card">
                                        <div class="card-header">
                                            <h3 class="card-title">Enquiry Generation</h3>
                                        </div>
                                        <div class="card-body">
                                            {/* <table id="example1" class="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Customer</th>
                                                    <th>Material Type</th>
                                                    <th>Material Thickness</th>
                                                    <th>No Of Sheets</th>
                                                    <th>Material Grade</th>
                                                    <th>Material Status</th>
                                                    <th>Type Of Process</th>
                                                    <th>Expected Delivery</th>
                                                    <th>Design Upload</th>
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    inquiry===undefined?"":inquiry.data.map((inquiry) => (
                                                        <tr>
                                                            <td>{inquiry.id}</td>
                                                            <td>{inquiry.customer}</td>
                                                            <td>{inquiry.material_type}</td>
                                                            <td>{inquiry.material_thickness}</td>
                                                            <td>{inquiry.no_of_sheets}</td>
                                                            <td>{inquiry.material_grade}</td>
                                                            <td>{inquiry.material_status}</td>
                                                            <td>{inquiry.type_of_process}</td>
                                                            <td>{inquiry.expected_delivery}</td>
                                                            <td><a href={`http://localhost:80/girnar_backend/assets/images/${inquiry.design_upload}`} >File</a></td>
                                                            <td>{inquiry.description}</td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                        </table> */}
                                            <div style={{ height: 300, width: '100%' }}>
                                                <DataGrid rows={rows} columns={columns} />
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}

export default EnquiryGeneration
