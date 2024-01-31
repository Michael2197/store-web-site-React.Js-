import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter } from 'react-router-dom';
import store from './Components/React project/Store';
import { Provider } from 'react-redux';






// const router = createBrowserRouter([


//   { 
//     path :"/",
//      element : <App/>, 
//      children :[


//     {path:"/Login", element:<LoginP/>},

    // {path:"/register", element:<Register/>},

    // {path:"/form", element:<Form/>},





    // {path:"/about", element:<About/>},
    // {path:"/user/:id", element:<Userdetails/>}


//   ]}
// ])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>

  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </Provider>

    // <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
