import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Divider } from 'antd';

// import 'antd/dist/antd.min.css';
import './App.css';
import logo from './logo.svg'

import LibVersion from './components/LibVersion';
import HelloModal from './components/HelloModal';

import Home from './pages/Home';
import About from './pages/About';
// const About = lazy(() => import('./pages/About'));

const RouteExample = () => {
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app2' : '/'}>
      <nav>
        <Link to="/">Home 2</Link>
        <Divider type="vertical" />
        <Link to="/about">About 2</Link>
      </nav>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default function App() {
  return (
    <div className="app-main">
      <LibVersion />
      <HelloModal />

      <Divider />

      <img src={logo} className="App-logo" alt="logo" />

      <Divider />

      <RouteExample />
    </div>
  );
}
