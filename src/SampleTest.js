import React from "react";

const SampleTest = ({ listOfStrings }) => {
 return (
    <ul>
        { listOfStrings?.length > 0 
        ? listOfStrings.map((item, index) => <li key={index}>{item}</li>)
        : <li>NoStrings</li>}
    </ul>
 )
}

export default SampleTest;