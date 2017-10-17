import React from 'react';

import { render } from 'react-dom'
import './index.css';
import Apps from './Apps';
import { BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";





render((
    <BrowserRouter>
        <Apps />
    </BrowserRouter>

    ),document.getElementById('root'));
/*



 */