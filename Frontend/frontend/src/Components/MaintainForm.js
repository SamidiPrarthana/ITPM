import React,{useState} from "react";
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

function sendData(e){
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

axios.post("http://localhost:8070/Maintenance/add", newMaintenance)
    .then(() => {
        alert("Maintenance Request Added");
        clearForm();
    })
    .catch((err) => {
        alert(err);
    });

}

return (
       
    <div className="bottom1"><br /><br />
         <div style={{backgroundColor:"rgba(107, 77, 225, 0.93)",height:"56px"}}>
            <h1 style={{fontSize:"35px",padding:"4px"}}>Maintenance Service</h1>
        </div>
        <br />

        <br /> <br />
        <div className="container1">
            <br />
            <h1 style={{marginLeft:"30%"}}>
                <i>
                    Maintenance Service
                </i>
            </h1>
            <br />
            <div>
                <form onSubmit={sendData} className="row g-3">
                    <div className="col-10">
                        <label htmlFor="flatID" className="form-label maintainLabel"> Flat ID</label>
                        <input type="text" className="form-control"  id="flatID"  value={FlatID} onChange={(e) => { setFlatID(e.target.value);}}/>
                       
                        <div className="valid">{FlatIDError}</div>
                    </div>

                    <div className="col-10">
                        <label htmlFor="ResidentName" className="form-label maintainLabel"> Resident Name </label>
                        <input type="text" className="form-control"  id="ResidentName"  value={ResidentName} onChange={(e) => {setResidentName(e.target.value);}}/>
                           
                        <div className="valid">{ResidentNameError}</div>
                    </div>

                    <div className="col-10">
                        <label htmlFor="Phone" className="form-label maintainLabel"> Phone</label>
                        <input  type="text" className="form-control" id="Phone"  value={phone}  onChange={(e) => { setphone(e.target.value); }}/>
                            
                        <div className="valid">{phoneError}</div>
                    </div>

                    <div className="col-10">
                        <label  htmlFor="inputType" className="form-label maintainLabel">  Maintenance Type </label>
        
                        <select id="inputType"  value={MaintenanceType}  onChange={(e) => { setMaintenanceType(e.target.value);}}  className="form-select">
                           <option>none</option>
                           <option>Electricity</option>
                           <option>Waterline</option>
                           <option>Elevator</option>
                           <option>Mechanical</option>
                        </select>

                        <div className="valid">  {MaintenanceTypeError} </div>
                    </div>

                    <div className="col-10">
                        <label  htmlFor="inputDescription"  className="form-label maintainLabel">  Description </label>
                        <textarea  className="form-control" id="inputDescription" value={description}  onChange={(e) => {setdescription(e.target.value); }}/>
                            
                        <div className="text-danger"> {descriptionError} </div>
                    </div>

                    <div className="col-10">
                        <label  htmlFor="AvailableTime"  className="form-label maintainLabel">  Available Time </label>
                        <textarea  className="form-control" id="AvailableTime" value={AvailableTime}  onChange={(e) => {setAvailableTime(e.target.value); }}/>
                            
                        <div className="text-danger"> { AvailableTimeError} </div>
                    </div>


                    <div className="col-4" style={{ marginLeft: "30%" }}>
                        <button type="submit" className="btn btn-primary repairBtn"> Submit </button>
                    </div>
                </form>
                <br />
            </div>
        </div>
        <br /> <br /> <br /> <br />
    </div>
);

}
export default MaintenanceForm;