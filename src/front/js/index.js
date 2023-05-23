// .index.js

import React from "react";
<<<<<<< HEAD
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
=======
import ReactDOM, { createRoot } from 'react-dom/client';
>>>>>>> 2a56522869c4955b4457f362c769a8dfab4689f2
import Layout from "./layout";

// Create root for concurrent mode
const root = createRoot(document.getElementById('app'));

// Render your react application
root.render(<Layout />);
