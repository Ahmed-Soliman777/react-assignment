import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons"
import Swal from 'sweetalert2';

import '../css/Contact.css'

export default function Contact() {

  const showAlert = () => {
    Swal.fire({
      title: 'Contactanos',
      text: 'Gracias por contactarnos',
      icon: 'success',
      confirmButtonText: 'OK',
    })
  }

  return (
    <div className='h-100 pt-5' style={{ background: "#8d802d" }}>
      <div className="py-5 d-flex justify-content-center align-items-center flex-column ">

        <h1 className="text-center text-white fw-bold text-uppercase">contact section</h1>
        <div className="text-center position-relative star-icon w-100 mb-3">
          <FontAwesomeIcon icon={faStar} className='text-white' />
        </div>
        <form className="row w-75 gy-4 mt-5">
          <div className="text-field col-12">
            <input type="text" className='w-100' required />
            <label>User Name</label>
          </div>
          <div className="text-field col-12">
            <input type="text" className='w-100' required />
            <label>User Age</label>
          </div>
          <div className="text-field col-12">
            <input type="text" className='w-100' required />
            <label>User Mail</label>
          </div>
          <div className="text-field col-12">
            <input type="password" className='w-100' required />
            <label>User Password</label>
          </div>
          <button onClick={() => showAlert()} className='btn border border-white rounded text-white w-50 d-block mx-auto'>Submit</button>
        </form>
      </div>
    </div>
  )
}
