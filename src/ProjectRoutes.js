import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Parts from './components/Parts';
import Inquiry from './components/inquiry_generation';

import Dashboard from './Dashboard';
import POGeneration from './components/POGeneration';
import Quotation from './components/Quotation';
import { ProtectedRoute } from './protected.route';
import Header from './Header';
import Menu from './Menu';
import Registration from './components/Registration';

function ProjectRoutes() {
    return (
   <></>
    )
}

export default ProjectRoutes
