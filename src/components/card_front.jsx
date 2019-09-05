import React from 'react';
import Image from './../shruti_profile.png'

/**
 * Functional component that shows information at the front of the contact card
 */
function Front() {
    return (
      <div className = "card_front" >
        <img src = { Image } alt = "Avatar" style = {{ width: "100%" }}/>
        <div className = "container" >
        <h4> <b> Shruti Satish </b></h4>
        <p> Software Engineer </p>
        <p> shrutisatish36@gmail.com | 415-226-9444 | San Francisco | 94117 </p>
        <p> Click on Image </p> </div>
        </div>
    );
}

export default Front;
