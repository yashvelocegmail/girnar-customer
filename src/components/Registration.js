import React, { useState } from 'react'
import { Link ,useHistory  } from 'react-router-dom'
import axios from 'axios';

function Registration() {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    name:"",
    address1:"",
    address2:"",
    address3:"",
    mobile_number:"",
    email_id:"",
    website:"",
    director_name:"",
    director_mobile:"",
    director_email_id:"",
    type_of_industry:"",
    gst:"",
    pan:"",
    tan:"",
    username: "",
    password: ""
  })
  const onInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(credentials)
    if(credentials['password']!==credentials['confirm_password'])
    {
      alert("Please use correct password")
    }
    else
    {
      axios({
  
        // Endpoint to send files
        url: "http://localhost/girnar_backend/api/register_customer.php",
        method: "POST",
        data: credentials,
      })
      
      .then((response)=>{
        console.log(JSON.stringify(response.data.status));
        if(JSON.stringify(response.data.status)==="404")
        {
          alert("Customer already registered");
        }
        else
        {
          history.push("/");
        }
      })
    }
  }
  return (
    <div>
      <section className="h-100 gradient-form" style={{ "backgroundColor": "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style={{ "width": "185px" }} alt="logo" />
                        <h4 className="mt-1 mb-5 pb-1">We are The Girnar Team</h4>
                      </div>
                      <form onSubmit={onFormSubmit}>
                      <div className="form-outline mb-4">
                          <label className="form-label" >Name</label>
                          <input name="name" className="form-control" placeholder="Enter Name" onChange={onInputChange} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >Address1</label>
                          <input name="address1" className="form-control" placeholder="Enter Address" onChange={onInputChange} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >Address2</label>
                          <input name="address2" className="form-control" placeholder="Enter Address" onChange={onInputChange} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >Address3</label>
                          <input name="address3" className="form-control" placeholder="Enter Address" onChange={onInputChange} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >Mobile Number</label>
                          <input name="mobile_number" className="form-control" placeholder="Enter Mobile Number" onChange={onInputChange} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >Email Id</label>
                          <input name="email_id" className="form-control" placeholder="Enter Email Id" onChange={onInputChange} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >Website</label>
                          <input name="website" className="form-control" placeholder="Enter Website" onChange={onInputChange} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >Director Name</label>
                          <input name="director_name" className="form-control" placeholder="Enter Director Name" onChange={onInputChange} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >Director Mobile</label>
                          <input name="director_mobile" className="form-control" placeholder="Enter Director Mobile" onChange={onInputChange} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >Director Email Id</label>
                          <input name="director_email_id" className="form-control" placeholder="Enter Director Email Id" onChange={onInputChange} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >Type Of Industry</label>
                          <input name="type_of_industry" className="form-control" placeholder="Enter Type Of Industry" onChange={onInputChange} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >GST</label>
                          <input name="gst" className="form-control" placeholder="Enter GST" onChange={onInputChange} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >PAN</label>
                          <input name="pan" className="form-control" placeholder="Enter PAN" onChange={onInputChange} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >TAN</label>
                          <input name="tan" className="form-control" placeholder="Enter TAN" onChange={onInputChange} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >Username</label>
                          <input name="username" className="form-control" placeholder="Enter Username" onChange={onInputChange} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >Password</label>
                          <input name="password" type="password" className="form-control" placeholder="Enter Password" onChange={onInputChange} required/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" >Confirm Password</label>
                          <input name="confirm_password" type="password" className="form-control" placeholder="Confirm Password" onChange={onInputChange} required/>
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button type="submit" className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3">Register</button>
                        
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Already have an account?</p> <br />
                          <Link to="/login">
                            <button type="button" className="btn btn-outline-danger" style={{ color: 'blue' }}>Login</button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4" >
                      <h4 style={{ color: ' #4600b9' }} className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0" style={{ color: ' #4600b9' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Registration
