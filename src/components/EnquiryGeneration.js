import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import Header from '../Header';
import Menu from '../Menu';

function EnquiryGeneration() {
    const [designstate, setdesignstate] = useState(false);
    const [designfilestate, setdesignfilestate] = useState(false);
    const [materialstatusstate, setmaterialstatusstate] = useState(false);
    const [typeofprocessstate, settypeofprocessstate] = useState(false);

    const ondesignclick = (e) => {
        console.log(e.target.value);
        if (e.target.value === "design") {
            setdesignstate(true);
        }
        else {
            setdesignstate(false);
        }
    }
    const onFileInput=(e)=>
    {
        console.log(e.target.value);
        setdesignfilestate(true);
    }
    const onMaterialStatusChange=(e)=>
    {
        console.log(e.target.value);
        setmaterialstatusstate(true);
    }
    const onTypeOfProcessChange=(e)=>
    {
        console.log(e.target.value);
        settypeofprocessstate(true);
    }
    return (
        <>
            <Header />
            <Menu />
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
                                        <form>
                                            <div className='form-group'>
                                                <label>Design Status</label>
                                                <select onChange={(e) => ondesignclick(e)} className='custom-select'>
                                                    <option>Select</option>
                                                    <option value="design">Design Available</option>
                                                    <option value="no_design">Design Not Available</option>
                                                </select>
                                            </div>
                                            {designstate === false ? "" :
                                            <>
                                                <div class="form-group">
                                                <div class="custom-file">
                                                    <label>Design File</label>
                                                  <input onChange={(e)=>onFileInput(e)} type="file" class="form-control" />
                                                </div>
                                              </div>
                                           
                                                <div class="form-group">
                                                    <label>Material Status</label>
                                                    <select onChange={onMaterialStatusChange} className='custom-select'>
                                                        <option>Select</option>
                                                        <option>With Material</option>
                                                        <option>Without Material</option>
                                                    </select>
                                                </div>
                                            
                                                <div class="form-group">
                                                    <label>Type Of Process</label>
                                                    <select onChange={onTypeOfProcessChange} className='custom-select'>
                                                        <option>Select</option>
                                                        <option>Laser Cutting</option>
                                                        <option>Bending</option>
                                                    </select>
                                                </div>
                                           
                                       
                                                <div class="form-group">
                                                    <label>Material Type</label>
                                                    <select className='custom-select'>
                                                        <option>Select</option>
                                                        <option>Aluminium</option>
                                                        <option>Copper</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label>Material Thickness</label>
                                                    <select className='custom-select'>
                                                        <option>Select</option>
                                                        <option>4mm</option>
                                                        <option>6mm</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label>Material Thickness</label>
                                                    <input type="text" className='form-control'/>
                                                </div>
                                                <div class="form-group">
                                                    <label>Expected Delivery</label>
                                                    <input type="text" className='form-control'/>
                                                </div>
                                                <div class="form-group">
                                                    <label>Desciption</label>
                                                    <input type="text" className='form-control'/>
                                                </div>
                                            </>
                                            }
                                        </form>
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
