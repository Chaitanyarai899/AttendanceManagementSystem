import React from 'react'
import './../style.css'
import Logo from "../img/logo-dark.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav>
          <ul>
            <li className='pb-4 logo-li'><a className="logo">
              <img src={Logo} />
              <span className="nav-item">Student</span>
            </a></li>
            <li><Link className='pageLink' to="/dashboard">
              <i className="fas fa-menorah"></i>
              <span className="nav-item">Dashboard</span>
            </Link></li>

            <li><Link className='pageLink' to="/attendance">
              <i className="fas fa-chart-bar"></i>
              <span className="nav-item">Attendance</span>
            </Link>
            </li>

            {/* <li className='my-auto'><a href="#">
              <i className="fas fa-clock"></i>
              <span className="nav-item">TimeTable</span>
            </a>
            </li> */}

            <li><Link className='pageLink' to="/report">
              <i className="fas fa-database"></i>
              <span className="nav-item">Report</span>
            </Link></li>


            {/* <li><a href="#">
              <i className="fas fa-cog"></i>
              <span className="nav-item">Setting</span>
            </a></li> */}

            <li className='logout mb-3'>
              <Link className='pageLink w-75' to="/"><i className="fas fa-sign-out-alt"></i></Link>
              <span className="logout-text w-100">Logout</span>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar