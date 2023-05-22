// .index.js

import React from "react";
import ReactDOM, { createRoot } from 'react-dom';
import Layout from "./layout";

// Create root for concurrent mode
const root = createRoot(document.getElementById('app'));

// Render your react application
root.render(<Layout />);
