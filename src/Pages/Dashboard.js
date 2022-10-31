import React from 'react'
import './../style.css'
import Logo from "../img/logo-dark.png"
import Profile from "../img/profile.jpg"
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>

<div className="cont">
    <nav>
      <ul>
        <li><a className="logo">
          <img src={Logo}/>
          <span className="nav-item">Student</span>
        </a></li>
        <li><a href="#">
          <i className="fas fa-menorah"></i>
          <span className="nav-item">Dashboard</span>
        </a></li>

        <li><a href="#">
          <i className="fas fa-chart-bar"></i>
          <span className="nav-item">Attendance</span>
        </a> 
      </li>

      <li><a href="#">
        <i className="fas fa-clock"></i>
        <span className="nav-item">TimeTable</span>
      </a> 
    </li>
      
        <li><a href="#">
          <i className="fas fa-database"></i>
          <span className="nav-item">Report</span>
        </a></li>

        
        <li><a href="#">
          <i className="fas fa-cog"></i>
          <span className="nav-item">Setting</span>
        </a></li>

        <li className='d-flex logout'>
        <Link className='pageLink' to="/"><i className="fas fa-sign-out-alt"></i></Link>
        </li>
      </ul>
    </nav>


    <div className="main">
      <div className="main-top" >
        <h1>ATTENDANCE DASHBOARD</h1>
        <i className="fas fa-user-cog"></i>
      </div>
      <div className="users">
        <div className="card d-flex justify-content-center">
          <img className='container' src={Profile}/>
          <h2>Student Name</h2>
          <h4>Enrollment no.</h4>
          <p>Branch</p>
          
          <div className="per">
            <table>
              <tr>
                <td><span>85%</span></td>
                <td><span>87%</span></td>
              </tr>
              <tr>
                <td>Month</td>
                <td>Year</td>
              </tr>
            </table>
          </div>
          <button>Profile</button>
        </div>


       

      <div className="attendance">
        <div className="attendance-list">
          <h1>Attendance List</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Semester</th>
                <th>Subject Code</th>
                <th>Subject </th>
                <th>Teacher</th>
                <th>Details</th>
                  
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>03</td>
                <td>016</td>
                <td>DSA</td>
                <td>Dr.Neetu</td>
                <td><button>view</button></td>
              
                </tr>
                <tr>
                <td>03</td>
                <td>310</td>
                <td>DBMS</td>
                <td>Dr.Geetanshi</td>
                <td><button>view</button></td>
      
              </tr>
              <tr>
                <td>03</td>
                <td>110</td>
                <td>Comp-Networks</td>
                <td>Dr.Rahul</td>
                <td><button>view</button></td>
      
              </tr>
              <tr>
                <td>03</td>
                <td>071</td>
                <td>Intro to AI</td>
                <td>Dr.Divya</td>
                <td><button>view</button></td>

              </tr>
              <tr >
                <td>03</td>
                <td>101</td>
                <td>Mathematics</td>
                <td>Dr.Sheena</td>
                <td><button>view</button></td>
      
              </tr>
              <tr >
                <td>03</td>
                <td>016</td>
                <td>English</td>
                <td>Dr.Sukriti</td>
                <td><button>view</button></td>
     
              </tr> 
            </tbody>
          </table>

          

        </div>
      </div>
    </div>
  </div>

    </div>
    </>
  )
}

export default Dashboard
