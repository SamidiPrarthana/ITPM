import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Components/MaintenanceStyle.css"; 
import { useNavigate } from "react-router-dom";

function MaintenanceRequestAdminSide() {
    const [dataList, setDataList] = useState([]);
    const navigate = useNavigate();

    // Fetch data function
    const getFetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8071/Maintenance/get");
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

  // Admin Side: Handle Accept
const handleAccept = (id) => {
    // Update the status of maintenance to 'Accepted'
    axios.put(`http://localhost:8071/Maintenance/update/${id}`, { status: "Accepted" })
        .then((res) => {
            alert("Maintenance Request Accepted");
            // Update the data to reflect changes
            setDataList(dataList.map((Maintenance) => 
                Maintenance._id === id ? { ...Maintenance, status: "Accepted" } : Maintenance
            ));
        })
        .catch((error) => {
            console.error("Error updating maintenance:", error);
            alert("Failed to accept maintenance");
        });
};

// Admin Side: Handle Delete (Reject)
const handleDelete = (id) => {
    axios.delete(`http://localhost:8071/Maintenance/delete/${id}`).then((res) => {
        alert("Maintenance Request Rejected and Deleted Successfully");
        setDataList(dataList.filter(Maintenance => Maintenance._id !== id));
    }).catch((error) => {
        console.error("Error deleting maintenance:", error);
        alert("Failed to delete maintenance");
    });
};

    return (
        <div className="body1">
            <br /><br />
            <div className="container1">
                <h1><i>All Maintenance Request</i></h1>
            </div>
            <br />
           

            <table className="table">
                <thead>
                    <tr style={{ textAlign: "center" }}>
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
                    {dataList.map((Maintenance) => (
                        <tr key={Maintenance._id}>
                            <td>{Maintenance.FlatID}</td>
                            <td>{Maintenance.ResidentName}</td>
                            <td>{Maintenance.phone}</td>
                            <td>{Maintenance.MaintenanceType}</td>
                            <td>{Maintenance.description}</td>
                            <td>{Maintenance.AvailableTime}</td>
                            <td>
                                {Maintenance.status === "Accepted" ? (
                                    <span>Request Accepted</span>  // Display "Accepted" if status is accepted
                                ) : (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => handleAccept(Maintenance._id)}
                                            className="btnAction1"
                                        >
                                            Accept
                                        </button>
                                        &emsp;
                                        <button
                                            type="button"
                                            onClick={() => handleDelete(Maintenance._id)}
                                            className="btnAction2"
                                        >
                                            Reject
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br />
            <br />
        </div>
    );
}

export default MaintenanceRequestAdminSide;
