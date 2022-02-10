import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import Header from '../Header';
import Menu from '../Menu';


function POGeneration() {
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
                    <Modal.Title>Task Update</Modal.Title>
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
              {/* general form elements */}
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">PO Generation</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form>
                  <div className="card-body">
                    <div class="row" style={{ marginBottom: "10px" }}>
                      <div class="row col-md-6">
                        {/* <div className="form-group"> */}
                        <label class="label col-md-3">
                          Date
                        </label>
                        <div class="col-md-9">
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Enter date"
                          />
                        </div>
                      </div>

                    </div>
                    <div class="row" style={{ marginBottom: "10px" }}>
                      <div class="row col-md-6">
                        <label class="label col-md-3">Generate PO</label>
                        <div class="col-md-9">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span
                                class="input-group-text"
                                id="inputGroupFileAddon01"
                              >
                                Upload
                              </span>
                            </div>
                            <div class="custom-file">
                              <input
                                type="file"
                                class="custom-file-input"
                                id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01"
                              />
                              <label
                                class="custom-file-label"
                                for="inputGroupFile01"
                              >
                                Choose file
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>

                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section class="content">
                <div className="container-fluid">
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">PO Generation</h3>
                                </div>
                                <div class="card-body">
                                    <table id="example1" class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>PO File</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>06-02-2022</td>
                                                <td>File Name</td>
                                                <td>
                                                    <i onClick={openModal} className="fas fa-edit fa-fw" />
                                                    <i className="fas fa-trash fa-fw" />
                                                </td>
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

export default POGeneration
