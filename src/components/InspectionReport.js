import React from 'react';
import Header from '../Header';
import Menu from '../Menu';
function InspectionReport() {
  return(
    <>
    <Header />
    <Menu />
          <div className="content-wrapper" style={{ marginTop: "10px" }}>
              <section class="content">
                  <div className="container-fluid">
                      <div className="row">
                          {/* left column */}
                          <div className="col-md-12">
                              <div class="card">
                                  <div class="card-header">
                                      <h3 class="card-title">Inspection Report</h3>
                                  </div>
                                  <div class="card-body">
                                      <table id="example1" class="table table-bordered table-striped">
                                          <thead>
                                              <tr>
                                                  <th>Material Type</th>
                                                  <th>Height</th>
                                                  <th>Quantity</th>
                                                  <th>Vendor</th>
                                                  <th>Grade</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>Aluminium</td>
                                                  <td>2mm</td>
                                                  <td>2</td>
                                                  <td>Ganesh</td>
                                                  <td>A</td>
                                              </tr>
                                              <tr>
                                                  <td>Aluminium</td>
                                                  <td>4mm</td>
                                                  <td>4</td>
                                                  <td>Ganesh</td>
                                                  <td>A</td>
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

export default InspectionReport;
