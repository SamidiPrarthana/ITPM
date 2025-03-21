import React from "react";
import { useNavigate } from "react-router-dom";
import "../Components/MaintenanceStyle.css";



function Header() {
    
    const navigate = useNavigate();

    return (
        <div>
            <p style={{ marginLeft: "8%", color: "#5D6D7E", fontWeight: "800" }}>
               Community Management 
            </p>

            <button
                className="maintain-btn"
                onClick={() => navigate("/MDetails")}
                style={{
                    marginLeft: "84%",
                    backgroundColor: "#E9E9E9",
                    borderRadius: "3px",
                    border: "none",
                    width:"8%",
                    height:"30px",
                }}
            >
                <i className="fa fa-user-o" aria-hidden="true"  onClick={() => navigate("")} style={{ fontSize: "18px", color: "black", fontWeight: "900" }}>
                    {" "}
                    MaintenanceForResidenceSide
                </i>
            </button>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <b>
                            <h4 style={{ color: "white" }}>
                                <u>
                                    Community <span style={{ color: "rgba(41, 25, 190, 0.82)" }}>Management</span>
                                </u>
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
                        <ul className="navbar-nav" style={{ marginLeft: "11%" }}>
                            <li className="nav-item">
                                <button className="nav-btn" onClick={() => navigate("/")}>
                                    {" "}
                                    <a className="nav-link_H" aria-current="page" href="#">
                                        Home
                                    </a>
                                </button>
                            </li>

                            <li className="nav-item dropdown" style={{ marginLeft: "25%" }}>
                                <a className="nav-link_H dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Maintenance ADD
                                </a>
                               
                            </li>

                            <li className="nav-item" style={{ marginLeft: "24%" }}>
                                <button className="nav-btn" onClick={() => navigate("/Maintenance")}>
                                    <a className="nav-link_H">
                                    Maintenance
                                    </a>
                                </button>
                            </li>

                            <li className="nav-item" style={{ marginLeft: "24%" }}>
                                <button className="nav-btn" onClick={() => navigate("/MDetailsAdminSide")}>
                                    {" "}
                                    <a className="nav-link_H">
                                        MaintenanceRequestAdminSide
                                    </a>
                                </button>
                            </li>

                            <li className="nav-item" style={{ marginLeft: "24%" }}>
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
