import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import errImg from "../assets/error.png"

export default function NotFound() {
  return (
    <div>
      <Nav />
      <div className="vh-100 d-flex justify-content-center align-items-center" style={{ background: "#8d802d" }}>
        <div className="w-25 d-flex justify-content-center align-items-center">
          <img src={errImg} alt="not found img" className="w-100" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
