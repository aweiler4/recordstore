import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddRecord from './components/AddRecord';
import Records from './components/Record/Records';
import About from './components/About';
import RecordDetail from './components/Record/RecordDetail';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/add' element={<AddRecord />} exact />
          <Route path='/records' element={<Records />} exact />
          <Route path='/about' element={<About />} exact />
          <Route path='/records/:id' element={<RecordDetail/>} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
