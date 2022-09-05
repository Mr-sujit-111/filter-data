import React from 'react';
import Header from './component/Header';
import LeftSideBar from './pages/LeftSideBar';
import './App.css';
import Body from './pages/Body';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div className="col-lg-3 col-md-3 sideBar">
          <LeftSideBar />
        </div>
        <div className="col-lg-9 col-md-9">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
