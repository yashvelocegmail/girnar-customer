import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import Header from '../Header';
import Menu from '../Menu';

function Quotation() {
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const openModal = () => {
        handleShow();
    }
    return (
        <> 
        <Header />
<Menu />
        <div className="content-wrapper" style={{ marginTop: "10px" }}>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>PO Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Date</label>
                                <input type="date" className="form-control" value="Task-1" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputFile">PO Upload</label>
                                <div className="input-group">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="exampleInputFile" />
                                        <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                                    </div>
                                    <div className="input-group-append">
                                        <span className="input-group-text">Upload</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <section class="content">
                <div className="container-fluid">
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Quotation</h3>
                                </div>
                                <div class="card-body">
                                    <table id="example1" class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Quotation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>06-02-2022</td>
                                                <td>File Name</td>
                                            </tr>
                                        </tbody>

                                    </table>
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

export default Quotation
