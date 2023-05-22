//import react into the bundle
import React from "react";
<<<<<<< HEAD
import { createRoot } from "react-dom/client";
=======
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';

>>>>>>> 9e5bf8037ab457a9306b9ee8293ed725addfc8a3

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

// Create root for concurrent mode
const root = createRoot(document.getElementById('app'));

// Render your react application
root.render(<Layout />);