import React from "react";
import { useNavigate } from "react-router-dom";
import "../Components/MaintenanceStyle.css";



function Header() {
    
    const navigate = useNavigate();

    return (
        <div>
            <p style={{ width:"50%", marginLeft: "32%",marginRight:"20%", marginTop:"3%", color: "rgb(67, 67, 70)", fontWeight: "800" ,fontSize:"30px"}}>
               Community Management System
            </p>

            <button
                className="maintain-btn"
                onClick={() => navigate("/MDetails")}
                style={{
                    marginLeft: "74%",
                    backgroundColor: "rgba(82, 73, 158, 0.82)",
                    borderRadius: "3px",
                    border: "none",
                    width:"23%",
                    height:"30px",
                }}
            >
                <i className="fa fa-user-o" aria-hidden="true"  onClick={() => navigate("")} style={{ fontSize: "18px", color: "white", fontWeight: "900" }}>
                    {" "}
                    MaintenanceForResidenceSide
                </i>
            </button>

            <br /><br />
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <b>
                            <h4 style={{ color: "white" }}>
                               <b><u>
                                    Community <span style={{ color: "rgba(134, 133, 145, 0.82)" }}>Management</span>
                                </u></b> 
                            </h4>
                        </b>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav" style={{ marginLeft: "10%" }}>
                            <li className="nav-item">
                                <button className="nav-btn" onClick={() => navigate("/")}>
                                    {" "}
                                    <a className="nav-link_H" aria-current="page" href="#">
                                        Home
                                    </a>
                                </button>
                            </li>

                            <li className="nav-item dropdown" style={{ marginLeft: "15%" }}>
                                <a className="nav-link_H dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Maintenance ADD
                                </a>
                               
                            </li>

                            <li className="nav-item" style={{ marginLeft: "15%" }}>
                                <button className="nav-btn" onClick={() => navigate("/Maintenance")}>
                                    <a className="nav-link_H">
                                    Maintenance
                                    </a>
                                </button>
                            </li>

                            <li className="nav-item" style={{ marginLeft: "15%" }}>
                                <button className="nav-btn" onClick={() => navigate("/MDetailsAdminSide")}>
                                    {" "}
                                    <a className="nav-link_H">
                                        MaintenanceRequestAdminSide
                                    </a>
                                </button>
                            </li>

                            <li className="nav-item" style={{ marginLeft: "15%" }}>
                                <button className="nav-btn" onClick={() => navigate("/complaints")}>
                                    {" "}
                                    <a className="nav-link_H" href="complaints">
                                        Complaints
                                    </a>
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
