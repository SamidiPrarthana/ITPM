import React,{useState} from "react";
import axios from "axios";


function ComplaintsForm(){
const [MaintenanceType,setMaintenanceType] = useState("");
const [StaffName,setStaffName] = useState("");
const [CDescription,setCDescription] = useState("");

//State variables for validation
const [MaintenanceTypeError, setMaintenanceTypeError] = useState("");
const [StaffNameError, setStaffNameError] = useState("");
const [MCDescriptionError, setCDescriptionError] = useState("");


const clearForm = () => {
    setMaintenanceType("");
    setStaffName("");
    setCDescription("");
}





}

