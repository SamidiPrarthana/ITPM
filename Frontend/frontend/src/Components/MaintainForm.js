import React, { useState } from "react";
import axios from "axios";
import "../Components/MaintenanceStyle.css";

function MaintenanceForm() {
    const [FlatID, setFlatID] = useState("");
    const [ResidentName, setResidentName] = useState("");
    const [phone, setphone] = useState("");
    const [MaintenanceType, setMaintenanceType] = useState("");
    const [description, setdescription] = useState("");
    const [AvailableTime, setAvailableTime] = useState("");

    // State variables for validation
    const [FlatIDError, setFlatIDError] = useState("");
    const [ResidentNameError, setResidentNameError] = useState("");
    const [phoneError, setphoneError] = useState("");
    const [MaintenanceTypeError, setMaintenanceTypeError] = useState("");
    const [descriptionError, setdescriptionError] = useState("");
    const [AvailableTimeError, setAvailableTimeError] = useState("");

    const clearForm = () => {
        setFlatID("");
        setResidentName("");
        setphone("");
        setMaintenanceType("");
        setdescription("");
        setAvailableTime("");
    };

    const sendData = (e) => {
        e.preventDefault();

        // Validation checks
        if (!FlatID) {
            setFlatIDError("FlatID is Required.");
            return;
        } else {
            setFlatIDError("");
        }

        if (!ResidentName) {
            setResidentNameError("Resident Name is Required.");
            return;
        } else {
            setResidentNameError("");
        }

        if (!phone) {
            setphoneError("Phone Number is Required.");
            return;
        } else if (!/^\d{10}$/.test(phone)) {
            setphoneError("Invalid Phone Number. Must be 10 digits.");
            return;
        } else {
            setphoneError("");
        }

        if (!MaintenanceType) {
            setMaintenanceTypeError("Maintenance Type is Required.");
            return;
        } else {
            setMaintenanceTypeError("");
        }

        if (!description.trim()) {
            setdescriptionError("Description is Required.");
            return;
        } else {
            setdescriptionError("");
        }

        if (!AvailableTime) {
            setAvailableTimeError("Available Time is Required.");
            return;
        } else {
            setAvailableTimeError("");
        }

        // If all fields are valid, proceed with sending data
        const newMaintenance = {
            FlatID,
            ResidentName,
            phone,
            MaintenanceType,
            description,
            AvailableTime,
        };

        axios
            .post("http://localhost:8071/Maintenance/add", newMaintenance)
            .then(() => {
                alert("Maintenance Request Added");
                clearForm();
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <div className="maintenance-form-container">
            <div className="form-header">
                <h1>Maintenance Service</h1>
            </div>
            <br/>
            <div className="form-container">
                <form onSubmit={sendData} className="form">
                    <div className="form-row">
                        <div className="form-column1">
                            <label htmlFor="flatID" className="form-label">
                                Flat ID
                            </label>
                            <input
                                type="text"
                                className="form-input flat-id"
                                id="flatID"
                                value={FlatID}
                                onChange={(e) => setFlatID(e.target.value)}
                            />
                            <div className="error-message">{FlatIDError}</div>
                        </div>
                        <div className="form-column1">
                            <label htmlFor="inputType" className="form-label">
                                Maintenance Type
                            </label>
                            <select
                                id="inputType"
                                className="form-input maintenance-type"
                                value={MaintenanceType}
                                onChange={(e) => setMaintenanceType(e.target.value)}
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
                        <label htmlFor="ResidentName" className="form-label">
                            Resident Name
                        </label>
                        <input
                            type="text"
                            className="form-input resident-name"
                            id="ResidentName"
                            value={ResidentName}
                            onChange={(e) => setResidentName(e.target.value)}
                        />
                        <div className="error-message">{ResidentNameError}</div>
                    </div>

                    <div className="form-column">
                        <label htmlFor="Phone" className="form-label">
                            Phone
                        </label>
                        <input
                            type="text"
                            className="form-input phone"
                            id="Phone"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
                        />
                        <div className="error-message">{phoneError}</div>
                    </div>

                    <div className="form-column">
                        <label htmlFor="inputDescription" className="form-label">
                            Description
                        </label>
                        <textarea
                            className="form-input description"
                            id="inputDescription"
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}
                        />
                        <div className="error-message">{descriptionError}</div>
                    </div>

                    <div className="form-column">
                        <label htmlFor="AvailableTime" className="form-label">
                            Available Time
                        </label>

                        <input
                            type="text"
                            className="form-input available-time"
                            id="AvailableTime"
                            value={AvailableTime}
                            onChange={(e) => setAvailableTime(e.target.value)}
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

export default MaintenanceForm;
