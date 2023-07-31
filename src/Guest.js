import React from "react";
import { useState } from "react";
import "./Guest.css";
import BookingList from "./BookingList";

const Guest = () => {
    let initialData = {
        guestName: "",
        checkIn: "",
        checkOut: ""
    };
    const [guestData, setGuestData] = useState(initialData)
    const [deliveryInfo, setDeliveryInfo] = useState({});
    
    const onDataChange = (e) => {
        setGuestData((prev) => ({...prev, [e.target.name]: e.target.value }));
    }

    const submitData = () => {
        if(guestData.name === "" || guestData.checkIn === "" || 
            guestData.checkOut === ""){
            alert("Please fill the form data");
        } else {
            setDeliveryInfo(guestData);
        }
        setGuestData(initialData);
    }

    return (
        <>
            {/* <h1>Fill the Form</h1> */}
            <input type="text" name="guestName" value={guestData.guestName} onChange={(e) => onDataChange(e)} />
            <input type="date" name="checkIn" value={guestData.checkIn} pattern="\d{4}-\d{2}-\d{2}"
                onChange={(e) => onDataChange(e)} />
            <input type="date" name="checkOut" value={guestData.checkOut} pattern="\d{4}-\d{2}-\d{2}"
                onChange={(e) => onDataChange(e)} min={guestData.checkIn} />
            <button onClick={submitData}>Submit</button>
            <div className="giveSpace"></div>
            {Object.keys(deliveryInfo).length > 0 && <BookingList bookingInfo={deliveryInfo} />}
        </>
    );
}

export default Guest;