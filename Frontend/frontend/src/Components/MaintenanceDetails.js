import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Components/MaintenanceStyle.css"; 
import { useNavigate } from "react-router-dom";



function MaintenanceDetails(){

    

    const [dataList, setDataList] = useState([]);
    const navigate=useNavigate();


    const getFetchData = async () =>{
        try {
            const response = await axios.get("http://localhost:8070/Maintenance");
            console.log(response.data);
            if (response.data.success) {
                setDataList(response.data.Maintenance);
                alert("Maintenance fetched successfully");
            } else {
                alert("Failed To Fetch Maintenance");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("Failed To Fetch Maintenance");
        }
    };
    useEffect(() => {
        getFetchData();

    }, []);

    const handleDelete = (id) => {

        axios.delete(`http://localhost:8070/Maintenance/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            setDataList(dataList.filter(Maintenance => Maintenance._id !== id));
        }).catch((error) => {
            console.error("Error deleting maintenance:", error);
            alert("Failed to delete maintenance");
        });
    };


    return(
        <div className="body1">
        <br /><br />

        <div className="container1" style={{width:"100%"}}>
            <h1 style={{fontSize:"30px",marginLeft:"30%"}}><i>Maintenance Request</i></h1>
        </div>
        <br />  
        <br />
        <br />



        <table class="table">
    <thead>
        <tr style={{textAlign:"center"}}>
                <th scope="col">Flat ID</th>
                <th scope="col">Resident Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Maintenance Type</th>
                <th scope="col">Description</th>
                <th scope="col">Available Time</th>
                <th scope="col">Action</th>
                </tr>
    </thead>
    <tbody>
            {dataList.map((Maintenance) =>(
                        <tr key={Maintenance.id}>
                        <td>{Maintenance.FlatID}</td>  
                        <td>{Maintenance.ResidentName}</td>
                        <td>{Maintenance.phone}</td>
                        <td>{Maintenance.MaintenanceType}</td>
                        <td>{Maintenance.description}</td>
                        <td>{Maintenance.AvailableTime}</td>    
            <td>
                <button type="button"  onClick={()=> navigate(`/editMaintenance/${Maintenance._id}`)}  class="btnAction1">Update</button>&emsp;<button type="button" onClick={() => handleDelete(Maintenance._id)} class="btnAction2">Delete</button>
            </td>
                    </tr>
            ))}
    </tbody>
        </table>
        
        <br />


    <br /><br />
    </div> 

    );

}
export default MaintenanceDetails;