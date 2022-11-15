import React from "react";
import andy from './andy-profile.jpg'

function Profile() {
    return(
        <div className="profile--wrapper">
            <img className="profile--picture" src={andy} alt="Andy Ly" />
            <h1 className="profile--name">Andy Ly</h1>
            <hr className="profile--divider"></hr>
        </div>
    )
}

export default Profile;