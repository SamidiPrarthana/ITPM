import React,{useState} from "react";
import axios from "axios";


function ComplaintsForm(){
const [MaintenanceType,setMaintenanceType] = useState("");
const [StaffName,setStaffName] = useState("");
const [CDescription,setCDescription] = useState("");

//State variables for validation
const [MaintenanceTypeError, setMaintenanceTypeError] = useState("");
const [StaffNameError, setStaffNameError] = useState("");
const [CDescriptionError, setCDescriptionError] = useState("");


const clearForm = () => {
    setMaintenanceType("");
    setStaffName("");
    setCDescription("");
}



const sendData = (e) => {
    e.preventDefault();

    // Validation checks
    if (!MaintenanceType) {
        setMaintenanceTypeError("Maintenance Type is Required.");
        return;
    } else {
        setMaintenanceTypeError("");
    }

    if (!StaffName) {
        setStaffNameError("Staff Name is Required.");
        return;
    } else {
        setStaffNameError("");
    }

    if (!CDescription.trim()) {
        setCDescriptionError("Complaints Description is Required.");
        return;
    } else {
        setCDescriptionError("");
    }

    // If all fields are valid, proceed with sending data
    const newComplaints = {
        MaintenanceType,
        StaffName,
        CDescription,

    };

    axios
        .post("http://localhost:8071/Complaints/add", newComplaints)
        .then(() => {
            alert("Complaints Added");
            clearForm();
        })
        .catch((err) => {
            alert(err);
        });
};

return (
    <div className="Complaints-form-container">
        <div className="form-header">
            <h1>Maintenance Complaints</h1>
        </div>
        <br/>   <br/>  <br/>
        <br/>

        <div className="form-container">
            <form onSubmit={sendData} className="form">
                <div className="form-row">
                    
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
                    <label htmlFor="StaffName" className="form-label">
                       Staff Name
                    </label>
                    <input
                        type="text"
                        className="form-input staff-name"
                        id="StaffName"
                        value={StaffName}
                        onChange={(e) => setStaffName(e.target.value)}
                    />
                    <div className="error-message">{StaffNameError}</div>
                </div>

                <div className="form-column">
                    <label htmlFor="inputDescription" className="form-label">
                       Complaints Description
                    </label>
                    <textarea
                        className="form-input description"
                        id="inputDescription"
                        value={CDescription}
                        onChange={(e) => setCDescription(e.target.value)}
                    />
                    <div className="error-message">{CDescriptionError}</div>
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

export default ComplaintsForm;






