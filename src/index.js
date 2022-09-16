import React from "react";
import {createRoot} from 'react-dom/client'
import App from './App'
import './assets/css/reset.css'
import './assets/css/component.css'
const root = createRoot(document.getElementById('root'))
root.render(<App/>)
