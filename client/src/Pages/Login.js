import React, { useState } from "react";
import './../style.css'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

const Login = () => {

  const [title1, setTitle1] = useState("Select Branch");
  const [title2, setTitle2] = useState("Select Batch");

  return (
    <>
      <div className="login-bg">
        <div className="login-inner">
          <div className="login-left">
            <h2 className="login-h2">Hello Student</h2>
            <h1 className='login-h1'>Welcome</h1>
          </div>
          <div className="login-right">
            <div className="right-inner container m-4 d-flex flex-column justify-content-center">
              <img className='logo m-auto' src={logo} alt="logo" />
              <div className="login-form container">
              <p className="login-text m-4 pt-2">Univeristy School of Automation and Robotics</p>

                <Dropdown className="py-2">
                  <Dropdown.Toggle className="dropdownBox" id="dropdown-basic">
                    {title1}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setTitle1("Artificial Intelligence and Data Science")}>Artificial Intelligence and Data Science</Dropdown.Item>
                    <Dropdown.Item onClick={() => setTitle1("Artificial Intelligence and Machine Learning")}>Artificial Intelligence and Machine Learning</Dropdown.Item>
                    <Dropdown.Item onClick={() => setTitle1("Industrial internet of things")}>Industrial internet of things</Dropdown.Item>
                    <Dropdown.Item onClick={() => setTitle1("Automation and Robotics")}>Automation and Robotics</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="py-2">
                  <Dropdown.Toggle className="dropdownBox" id="dropdown-basic">
                    {title2}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setTitle2("Batch 1")}>Batch 1</Dropdown.Item>
                    <Dropdown.Item onClick={() => setTitle2("Batch 2")}>Batch 2</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <form action="" className="py-2">
                  <div className="form-floating mb-3">
                    <input type="email" autoComplete="off" className="form-control login-box" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Enrollment number</label>
                  </div>
                  <div className="d-grid gap-2 mt-4">
                    <button className="btn login-btn" type="button"><Link className='pageLink' to="/dashboard">Login</Link></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
