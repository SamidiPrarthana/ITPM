import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Components/MaintenanceStyle.css";
import { useParams } from "react-router-dom";


function EditMaintenanceForm() { 

    const { itemId } = useParams();
    const [itemDetails, setItemDetails] = useState({});
    const [formData, setFormData] = useState({
        FlatID:"",
        ResidentName:"",
        phone:"",
        MaintenanceType:"",
        description:"",
        AvailableTime:"",
    });

    // State variables for validation errors
    const [FlatIDError, setFlatIDError] = useState("");
    const [ResidentNameError, setResidentNameError] = useState("");
    const [phoneError, setphoneError] = useState("");
    const [MaintenanceTypeError, setMaintenanceTypeError] = useState("");
    const [descriptionError, setdescriptionError] = useState("");
    const [AvailableTimeError, setAvailableTimeError] = useState("");


    useEffect(() => {
        axios.get(`http://localhost:8070/Maintenance/${itemId}`)
            .then((response) => {
                setItemDetails(response.data);
                setFormData({
                    FlatID: response.data.FlatID,
                    ResidentName: response.data.ResidentName,
                    phone: response.data.phone,
                    MaintenanceType: response.data.MaintenanceType,
                    description: response.data.description,
                    AvailableTime: response.data.AvailableTime,
                  
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
        axios.put(`http://localhost:8070/Maintenance/update/${itemId}`, formData)
            .then((response) => {
                console.log(response.data);
                // Handle success
                setFormData({
                    FlatID:"",
                    ResidentName:"",
                    phone:"",
                    MaintenanceType:"",
                    description:"",
                    AvailableTime:"",
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

    return(
        <div className="body1">
            <br /> <br />
            <div className="container1">
                <br />
                <h1><i style={{marginLeft:"13%"}}>Update Maintenance Details</i></h1>
                <br />

                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-10">
                        <label htmlFor="flatID" className="form-label">Flat ID</label>
                        <input type="text" className="form-control" id="flatID" value={formData.FlatID} onChange={handleChange} />

                        <div className="valid">{FlatIDError}</div>
                    </div>

                    <div className="col-10">
                        <label htmlFor="ResidentName" className="form-label">Email</label>
                        <input type="text" className="form-control"  id="ResidentName" value={formData.ResidentName} onChange={handleChange} />

                        <div className="valid">{ResidentNameError}</div>
                    </div>

                    <div className="col-10">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" className="form-control" id="phone" value={formData.phone} onChange={handleChange}/>
                        <div className="valid">{phoneError}</div>
                    </div>

                    <div className="col-10">
                        <label htmlFor="inputType" className="form-label">Type</label>
                        <select  className="form-select" id="MaintenanceType" value={formData.MaintenanceType} onChange={handleChange}>
                        <option>none</option>
                        <option>Electricity</option>
                        <option>Waterline</option>
                        <option>Elevator</option>
                        <option>Mechanical</option>
                        </select>

                        <div className="valid">{MaintenanceTypeError}</div>
                    </div>

                    <div className="col-10">
                        <label htmlFor="inputdescription" className="form-label">Description</label>
                        <textarea className="form-control"  id="inputdescription" value={formData.description} onChange={handleChange} />
                        <div className="valid">{descriptionError}</div>
                    </div>


                    <div className="col-10">
                        <label htmlFor="inputAvailableTime" className="form-label">AvailableT ime</label>
                        <textarea className="form-control"  id="inputAvailableTime" value={formData.description} onChange={handleChange} />
                        <div className="valid">{AvailableTimeError}</div>
                    </div>


                    <div className="col-4" style={{marginLeft:"30%"}}>
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </div>
                </form>
                <br />
            </div>
            <br /> <br />
            <br /> <br />
        </div>
    );
}
export default EditMaintenanceForm;