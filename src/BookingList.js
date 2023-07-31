import React, { useEffect, useState } from "react";
import "./BookingList.css";

const BookingList = ({ bookingInfo }) => {
    const [bookingList, setBookingList] = useState([]);

    const getDatesBetween = (startDate, endDate) => {
        let dates = [];
        let currentDate = new Date(startDate);
        while (currentDate <= new Date(endDate)) {
            let date = new Date(currentDate);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            dates.push(`${year}-${month}-${day}`);
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    };

    const checkExistingGuestsDetailsAndModify = (dispalyList, bookedList) => {
       let merged = [...dispalyList, ...bookedList];

       const mergedData = merged.reduce((acc, cur) => {
        const dateofStaying = cur.staying;
        if (acc[dateofStaying]) {
            acc[dateofStaying] = { guestName: `${acc[dateofStaying].guestName}, ${cur.guestName}`, staying: dateofStaying }
        }
        else {
            acc[dateofStaying] = cur;
        }
        return acc;
    }, {});

    const result = Object.values(mergedData);
    result.sort(function(a, b){return new Date(a.staying) - new Date(b.staying)})

    return result;
    }

    const createList = () => {
        const bookedDates = getDatesBetween(bookingInfo.checkIn, bookingInfo.checkOut);
        let renderList = bookedDates.map((item) => ({ guestName: bookingInfo.guestName, staying: item }));
        if (bookingList.length > 0) {
            const mergedDetials = checkExistingGuestsDetailsAndModify(renderList, bookingList);
            setBookingList([...mergedDetials]);
        } else {
            setBookingList(renderList);
        }
    }

    useEffect(() => {
        createList();
    }, [bookingInfo])

    return (
        <>
            <div className="box">
                {bookingList.map((item, index) =>
                    <div className="guest_info" key={index}>
                        <div className="guest_name">{item.guestName}</div>
                        <div className="guest_date">{item.staying.toString()}</div>
                    </div>
                )}
            </div>
        </>
    )
}

export default BookingList;