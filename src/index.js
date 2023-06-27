import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import Contactspage from './components/Contactspage';
// import Formpage from './components/Formpage';
// import Contactsdata from './components/Contactsdata';
// import Contactsrow from './ui/Contactsrow';
// import Tablehead from './ui/Tablehead';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <Contactspage />,
//         children:[
//           {
//             path: 'contactform',
//             element: <Formpage />,
//             },
//         ]
//       },
//     ],
//   },
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />,
// );

