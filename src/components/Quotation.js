import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import Header from '../Header';
import Menu from '../Menu';
// import { api_url } from '../ApiUrl';
import { DataGrid } from '@mui/x-data-grid';
import { jsPDF } from "jspdf";
import 'jspdf-autotable'

function Quotation() {
    
    
    //Modal dynamic form
   
    //Single Read
    const [formValues2, setFormValues2] = useState([{ description: "", quantity: "", total_rate: "" }])
    let handleChange2 = (i, e) => {
        let newFormValues = [...formValues1];
        newFormValues[i][e.target.name] = e.target.value;

        setFormValues2(newFormValues);
        //console.log(formValues);
        setSingleQuotation({ ...editQuotation, des_quant_rate: formValues2 })
    }

    let addFormFields2 = () => {
        setFormValues2([...formValues2, { description: "", quantity: "", total_rate: "" }])
    }

    let removeFormFields2 = (i) => {
        let newFormValues = [...formValues2];
        newFormValues.splice(i, 1);
        setFormValues1(newFormValues)
        console.log(newFormValues)
        setReadQuotation({ ...editQuotation, des_quant_rate: newFormValues })
    }


    
    const [showModal1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const openModal1 = () => {
        handleShow1();
    }

    //States
    const [customerOption, setCustomerOption] = useState();
    const [total, setTotal] = useState(0);
    const [total1, setTotal1] = useState(0);
    const [quotation, setQuotation] = useState({
        customer_enquiry: "",
        des_quant_rate: [],
        total: 0
    });
    const [readQuotation, setReadQuotation] = useState({
        id: "",
        quotation:"",
        customer_enquiry: "",
        des_quant_rate: [],
        total: 0
    });
    
    const [singleQuotation, setSingleQuotation] = useState({
        id: "",
        customer_enquiry: "",
        des_quant_rate: [],
        total: 0
    });
    // const [printQuotation, setPrintQuotation] = useState({
    //     id: "",
    //     customer_enquiry: "",
    //     description:"",
    //     quantity:"",
    //     total_rate:"",
    //     total: 0
    // });
    const [printId, setPrintId] = useState();
    const [printCustomerEnquiry, setPrintCustomerEnquiry] = useState();
    const [printTotal, setPrintTotal] = useState();
    const [printCustomerName, setPrintCustomerName] = useState();
    const [printDesQuantRate, setPrintDesQuantRate] = useState([]);

    //Customer option
    useEffect(() => {
        axios.get("http://localhost/girnar_backend/api/read_all_enquiry.php")
            .then((res) => {
                setCustomerOption(res.data)
            })
    }, [])
    //Calculate Total
   
    //Event Handlers
    
    //Add Operation
    
    //Read Operation
    useEffect(() => {
        setTimeout(()=>{
            axios.post("http://localhost/girnar_backend/api/read_quotation_by_customer.php",{customer:localStorage.getItem("customer_id")})
            .then((res) => {
                setReadQuotation(res.data)
            })
        },1000)
        
    }, [readQuotation])
    
    const exportPDF = async (row) => {
        console.log(row.customer_name)
        const description = JSON.parse(row.des_quant_rate).map(a => a.description);
        //setPrintQuotation(description:description[0])

        const quantity = JSON.parse(row.des_quant_rate).map(a => a.quantity);
        //setPrintQuotation({...printQuotation,quantity:quantity[0]})

        const total_rate = JSON.parse(row.des_quant_rate).map(a => a.total_rate);
        //setPrintQuotation({...printQuotation,total_rate:total_rate[0]})

        await setPrintId(row.id)
        await setPrintCustomerEnquiry(row.customer_enquiry)
        await setPrintTotal(row.total)
        await setPrintCustomerName(row.customer_name)
        var arr = []
        for (var i = 0; i < description.length; i++) {
            arr.push({
                description: description[i],
                quantity: quantity[i],
                total_rate: total_rate[i]
            })
        }
        setPrintDesQuantRate(arr)
        console.log(printDesQuantRate)
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 85;
        const doc = new jsPDF();
        var image = "http://localhost/girnar_backend/assets/images/girnar_logo.jpg";

        var imageData = "data:image/png;base64,'+Base64.encode('http://localhost/girnar_backend/assets/images/download.png')";

        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
        doc.setFontSize(10);
        //doc.text("Girnar Laser",marginLeft,5);
        doc.addImage(image, 'JPG', 75, 5, 50, 10)
        doc.text("Date-" + date, 150, 25);
        doc.text("Customer-" + row.customer_name, 150, 30);
        doc.text("Quotation No-" + row.quotation, 150, 35);
        doc.setFontSize(10);
        doc.text("Girnar Laser", 15, 40)
        doc.text("C-61 Shiroli MIDC,", 15, 45)
        doc.text("Kolhapur - 416122,", 15, 50)
        doc.text("Mobile No. 9423860561 , 7020598766,", 15, 55)
        doc.text("girnarlaser@gmail.com,", 15, 60)
        doc.text("www.girnarlaser.com,", 15, 65)
        doc.text("Mobile No. 9423860561 , 7020598766", 15, 70)
        doc.setFontSize(20);
        doc.text("Terms & Conditions: -", 15, 205);
        doc.setFontSize(10);
        doc.text("1)Above cost includes cost With Material Laser Cutting and Bending.", 15, 210)
        doc.text("2)Quotation Validity for Seven Days.", 15, 215)
        doc.text("3)Laser Cutting as per Auto Cad drawing provided by you.", 15, 220)
        doc.text("4)We Reserve the Right to Amend the Delivery as Per Our Production Plan ", 15, 225)
        doc.text("  And Same Will Be Informed To You Well In Advance.", 15, 230)
        doc.text("5)Job Inspection and Material Testing Should Be Done By You before Processing", 15, 235)
        doc.text("  , Or Else We Will Not Be Responsible For Defects.", 15, 240)
        doc.text("6)GST (18%), Packing, Transportation etc. not considered in above costing.", 15, 245)
        doc.text("7)Payment Terms: - 100% Advance.", 15, 250)
        doc.text("Signature", 15, 275);
        doc.autoTable({ html: document.getElementById('mytable'), theme: 'grid', startY: 75 })
        doc.save('table.pdf')
    }
    
    
   
    //Delete
    
    //Read
    const onRead = (row) => {
        handleShow1();
        setSingleQuotation({
            id: row.id,
            customer_enquiry: row.customer_enquiry,
            des_quant_rate: JSON.parse(row.des_quant_rate),
            total: row.total
        })
        setFormValues2(JSON.parse(row.des_quant_rate))
    }
    const columns = [
        {
            field: 'id',
            headerName: 'Id'
        },
        {
            field: 'quotation',
            headerName: 'Quotation Number',
            width:200
        },
        {
            field: 'customer_name',
            headerName: 'Customer Name'
        },
        // {
        //     field: 'des_quant_rate',
        //     headerName: 'Des_quant_rate'
        // },
        {
            field: 'total',
            headerName: 'Total'
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 300,
            renderCell: (params) => {
                return (
                    <div className="">
                        <button onClick={() => onRead(params.row)} data-toggle="tooltip" title="Read" type="button" className="btn btn-success"  ><i class="fas fa-eye"></i></button>
                        <button onClick={() => exportPDF(params.row)} data-toggle="tooltip" title="Read"style={{ marginLeft: '20%' }} type="button" className="btn btn-primary"  ><i class="fas fa-download"></i></button>
                        
                    </div>
                );
            }
        },
    ]
    const rows = readQuotation.data;
    return (

        <>
            <div style={{ display: 'none' }}>
                <table className="tbl tbl-bordered" id="mytable">

                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Total Rate</th>
                    </tr>
                    {printDesQuantRate === [] ? [] : printDesQuantRate.map(des => {
                        return (
                            <tr>
                                <td>{des.description}</td>
                                <td>{des.quantity}</td>
                                <td>{des.total_rate}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <th>Total</th>
                        <td></td>
                        <th>{printTotal}</th>
                    </tr>
                </table>
            </div>

            <Header />
            <Menu />

            <div className='content-wrapper'>
                
                <Modal show={showModal1} onHide={handleClose1}>
                    <Modal.Header>
                        <Modal.Title>Details Read</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form >
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Id</label>
                                    <input defaultValue={singleQuotation.id} name="id" type="text" className="form-control" readOnly />
                                </div>
                                <select defaultValue={singleQuotation.customer_enquiry} className='form-control' name="customer_enquiry">
                                    <option>Select</option>
                                    {customerOption === undefined ? [] : customerOption.data.map((customer) => (
                                        <option disabled={true} value={customer.id} key={customer.id}>{customer.id}</option>
                                    ))}
                                </select>
                                <hr />
                                {formValues2.map((element, index) => (
                                    <div className="form-group" key={index}>
                                        <label>Description</label>
                                        <input name="description" className="form-control" type="text" value={element.description || ""} onChange={e => handleChange2(index, e)} readOnly/>
                                        <label>Quantity</label>
                                        <input name="quantity" className="form-control" type="number" value={element.quantity || ""} onChange={e => handleChange2(index, e)} readOnly/>
                                        <label>Total Rate</label>
                                        <input name="total_rate" className="form-control" type="number" value={element.total_rate || ""} onChange={e => handleChange2(index, e)} readOnly/>
                                       
                                    </div>
                                ))}
                                
                                <hr />
                                <div className="form-group">
                                    <label>Total</label>
                                    <input value={singleQuotation.total} type='number' name="total" className='form-control' readOnly/>
                                </div>
                                </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose1}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>


                <section class="content">
                    <div className="container-fluid">
                        <div className='row'>
                            <div className='col-md-12'>
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">Quotation</h3>
                                    </div>
                                    <div class="card-body">
                                        <div style={{ height: 300, width: '100%' }}>
                                            <DataGrid rows={rows === undefined ? [] : rows} columns={columns} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div></>
    )
}

export default Quotation
