import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Contact } from '../pages/Contact';
import { News } from '../pages/News';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import AppContext from '../context/AppContext';
import InitialState from '../hooks/useInitialState';
import { Nav } from '../components/Nav';



function App() {
  const initialStateContext = InitialState();

  return (
    <AppContext.Provider value={initialStateContext}>
      <BrowserRouter>
              <Nav>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/contact' element={<Contact/>} />
                    <Route exact path='/news' element={<News/>} />
                    <Route path='*' element={<NotFound/>} />
                </Routes>
              </Nav>
      </BrowserRouter>
    </AppContext.Provider>

  )
}

export {App};
