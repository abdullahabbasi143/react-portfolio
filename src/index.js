import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './components/ErrorPage';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './components/BlogDetails';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Layout from './components/Layout';
import Intro from './components/Intro';


function AppRouter() {
  return (
    <Router>
      <Routes>
  
        <Route path="/" element={<Layout />}>
        <Route path="about" element={<About />} />
          <Route index element={<App />} />
          <Route path="intro" element={<Intro />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />}>
            <Route path=":blogID" element={<BlogDetails />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
