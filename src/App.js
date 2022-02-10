
import './App.css';
import React, { useEffect } from 'react'
import Inquiry from './components/inquiry_generation';
import Login from './components/Login';
import POGeneration from './components/POGeneration';
import Quotation from './components/Quotation';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Registration from './components/Registration';
import Header from './Header';
import Menu from './Menu';
import { ProtectedRoute } from './protected.route';
import InspectionReport from './components/InspectionReport';
import Employee from './components/Employee';
import EnquiryGeneration from './components/EnquiryGeneration';
function App() {

  // if(localStorage.getItem('authenticated') === 'true'){
  //   localStorage.setItem('property','block')
  // }else{
  // localStorage.setItem('property','none')
  // }

  return (
  
    
    <BrowserRouter>
        <Switch>
          <Route exact path='/register' component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/employee" component={Employee} />
          <ProtectedRoute exact path="/" component={Dashboard}  />
          <ProtectedRoute exact path="/" component={Header}  />
          <ProtectedRoute exact path="/" component={Menu}  />
          <ProtectedRoute exact path='/inquiry' component={Inquiry} />
          <ProtectedRoute exact path='/enquiry' component={EnquiryGeneration} />
          <ProtectedRoute path='/po_generation' component={POGeneration} />
          <ProtectedRoute path='/quotation' component={Quotation} />
          <ProtectedRoute exact path='/inspection_report' component={InspectionReport} />
        </Switch>
        </BrowserRouter>
  
  );
}

export default App;
