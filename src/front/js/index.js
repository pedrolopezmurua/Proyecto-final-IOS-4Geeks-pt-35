//import react into the bundle
import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';


//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

// Create root for concurrent mode
const root = createRoot(document.getElementById('app'));

// Render your react application
root.render(<Layout />);