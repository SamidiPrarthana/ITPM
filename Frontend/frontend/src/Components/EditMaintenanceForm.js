import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Components/MaintenanceStyle.css";
import { useParams } from "react-router-dom";

function EditMaintenanceForm() { 
    const { itemId } = useParams();
    const [formData, setFormData] = useState({
        FlatID: "",
        ResidentName: "",
        phone: "",
        MaintenanceType: "",
        description: "",
        AvailableTime: "",
    });

    // State variables for validation errors
    const [FlatIDError, setFlatIDError] = useState("");
    const [ResidentNameError, setResidentNameError] = useState("");
    const [phoneError, setphoneError] = useState("");
    const [MaintenanceTypeError, setMaintenanceTypeError] = useState("");
    const [descriptionError, setdescriptionError] = useState("");
    const [AvailableTimeError, setAvailableTimeError] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8071/Maintenance/${itemId}`)
            .then((response) => {
                console.log("Fetched data:", response.data); // Debugging the response
                setFormData({
                    FlatID: response.data.FlatID || "",
                    ResidentName: response.data.ResidentName || "",
                    phone: response.data.phone || "",
                    MaintenanceType: response.data.MaintenanceType || "",
                    description: response.data.description || "",
                    AvailableTime: response.data.AvailableTime || "",
                });
            })
            .catch((error) => {
                console.error("Error fetching item details:", error);
            });
    }, [itemId]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation checks
        if (!formData.FlatID) {
            setFlatIDError("Flat ID  is required.");
            return;
        } else {
            setFlatIDError("");
        }

        if (!formData.ResidentName) {
            setResidentNameError("Resident Name is required.");
            return;
        } else {
            setResidentNameError("");
        }

        if (!formData.phone) {
            setphoneError("Phone number is required.");
            return;
        } else {
            setphoneError("");
        }

        if (!formData.MaintenanceType) {
            setMaintenanceTypeError(" Maintenance Type is required.");
            return;
        } else {
            setMaintenanceTypeError("");
        }

        if (!formData.description) {
            setdescriptionError("Description is required.");
            return;
        } else {
            setdescriptionError("");
        }

        if (!formData.AvailableTime) {
            setAvailableTimeError("Available Time is required.");
            return;
        } else {
            setAvailableTimeError("");
        }

        // If all fields are valid, proceed with sending data
        axios.put(`http://localhost:8071/Maintenance/update/${itemId}`, formData)
            .then((response) => {
                console.log(response.data);
                // Handle success
                setFormData({
                    FlatID: "",
                    ResidentName: "",
                    phone: "",
                    MaintenanceType: "",
                    description: "",
                    AvailableTime: "",
                });
            })
            .catch((error) => {
                if (error.response && error.response.status === 404) {
                    console.error("Resource not found:", error);
                    // Handle 404 error
                } else {
                    console.error("Error updating maintenance:", error);
                    // Handle other errors
                }
            });
    };

    return (
        <div className="maintenance-form-container">
            <div className="form-header">
                <h1>Update Maintenance Details</h1>
            </div>
            <br/>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-row">
                        <div className="form-column1">
                            <label htmlFor="FlatID" className="form-label">Flat ID</label>
                            <input
                                type="text"
                                className="form-input flat-id"
                                id="FlatID"
                                value={formData.FlatID}
                                onChange={handleChange}
                            />
                            <div className="error-message">{FlatIDError}</div>
                        </div>
                        <div className="form-column1">
                            <label htmlFor="MaintenanceType" className="form-label">Maintenance Type</label>
                            <select
                                id="MaintenanceType"
                                className="form-input maintenance-type"
                                value={formData.MaintenanceType}
                                onChange={handleChange}
                            >
                                <option>none</option>
                                <option>Electricity</option>
                                <option>Waterline</option>
                                <option>Elevator</option>
                                <option>Mechanical</option>
                            </select>
                            <div className="error-message">{MaintenanceTypeError}</div>
                        </div>
                    </div>

                    <div className="form-column">
                        <label htmlFor="ResidentName" className="form-label">Resident Name</label>
                        <input
                            type="text"
                            className="form-input resident-name"
                            id="ResidentName"
                            value={formData.ResidentName}
                            onChange={handleChange}
                        />
                        <div className="error-message">{ResidentNameError}</div>
                    </div>

                    <div className="form-column">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                            type="text"
                            className="form-input phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <div className="error-message">{phoneError}</div>
                    </div>

                    <div className="form-column">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            className="form-input description"
                            id="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                        <div className="error-message">{descriptionError}</div>
                    </div>

                    <div className="form-column">
                        <label htmlFor="AvailableTime" className="form-label">Available Time</label>
                        <textarea
                            className="form-input available-time"
                            id="AvailableTime"
                            value={formData.AvailableTime}
                            onChange={handleChange}
                        />
                        <div className="error-message">{AvailableTimeError}</div>
                    </div>

                    <div className="form-column">
                        <button type="submit" className="form-button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditMaintenanceForm;
