import React from 'react'
import Navbar from '../component/Navbar'
import './../style.css'

const Attendance = () => {
    return (
        <>
            <div className="cont">
                <Navbar />

                <div className="main">
                    <div className="main-top" >
                        <h1>ATTENDANCE LIST</h1>
                        <i className="fas fa-user-cog px-4 fa-lg"></i>
                    </div>

                    <hr className='hrstyle'/>

                    <div className="attendance">
                        <div className="attendance-list">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Subject Code</th>
                                        <th>Subject </th>
                                        <th>Teacher</th>
                                        <th>Class Hrs</th>
                                        <th>Attending Hrs</th>
                                        <th>Details</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>016</td>
                                        <td>DSA</td>
                                        <td>Dr.Neetu</td>
                                        <td>10</td>
                                        <td>8</td>
                                        <td>80%</td>

                                    </tr>
                                    <tr>
                                        <td>016</td>
                                        <td>DSA</td>
                                        <td>Dr.Neetu</td>
                                        <td>10</td>
                                        <td>8</td>
                                        <td>80%</td>

                                    </tr>
                                    <tr>
                                        <td>016</td>
                                        <td>DSA</td>
                                        <td>Dr.Neetu</td>
                                        <td>10</td>
                                        <td>8</td>
                                        <td>80%</td>

                                    </tr>
                                    <tr>
                                        <td>016</td>
                                        <td>DSA</td>
                                        <td>Dr.Neetu</td>
                                        <td>10</td>
                                        <td>8</td>
                                        <td>80%</td>

                                    </tr>
                                    <tr >
                                        <td>016</td>
                                        <td>DSA</td>
                                        <td>Dr.Neetu</td>
                                        <td>10</td>
                                        <td>8</td>
                                        <td>80%</td>

                                    </tr>
                                    <tr >
                                        <td>016</td>
                                        <td>DSA</td>
                                        <td>Dr.Neetu</td>
                                        <td>10</td>
                                        <td>8</td>
                                        <td>80%</td>

                                    </tr>
                                </tbody>
                            </table>



                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Attendance