


import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';

import DataProvider from './context/DataProvider';
import Login from './component/Login';
import Home from './component/home/Home';
import Header from './component/header/header';
import CreatePost from './component/create/CreatePost';
import DetailVeiw from './component/details/DetailView';
import Update from './component/create/Update';
import About from './component/about/about';
import Contact from './component/Contact/contact';
const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
    
      <Header />
      <Outlet />
    </>
    :
    <Navigate replace to='/login' />
}


// import krva mate login pagein from './componen

function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{ marginTop: 64 }}>
       
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />

            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/' element={<Home />} />
            </Route>

            <Route path='/Create' element={<PrivateRoute isAuthenticated={isAuthenticated} />}> 
              <Route path='/Create' element={<CreatePost />} />
            </Route>

            <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}> 
              <Route path='/details/:id' element={<DetailVeiw />} />
            </Route>

            <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}> 
              <Route path='/update/:id' element={<Update />} />
            </Route>

            <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />}> 
              <Route path='/about' element={<About />} />
            </Route>

            <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />}> 
              <Route path='/contact' element={<Contact />} />
            </Route>

          </Routes>
      
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
