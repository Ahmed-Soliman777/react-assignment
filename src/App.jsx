import "./App.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from "./components/MainLayout.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Portfolio from "./components/Portfolio.jsx"
import NotFound from "./components/NotFound.jsx"

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const Routes = createBrowserRouter([
    {
      path: "", element: <MainLayout />, errorElement: <NotFound />, children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfolio /> },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={Routes}></RouterProvider>
    </>
  )
}

export default App
