import Navbar from "./Components/Navbar/Navbar"
import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';
import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './Components/About/About';
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from './Components/Contact/Contact';


function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
    ]}
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
