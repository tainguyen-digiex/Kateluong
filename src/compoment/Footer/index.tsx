import Share from "../../assets/icons/share";
import Heart from "../../assets/icons/heart";
import React from "react";

function Footer() {
    return (
        <div className="bottom-[10px] left-[20px] max-h-[50px] fixed z-10 flex justify-between">
                <Share className="text-[#6b6b6b] ml-2 w-4 h-4"/>
                <Heart className="text-[#6b6b6b] ml-2 w-5 h-5"/>
                <div className="text-[#6b6b6b] text-sm ml-1">10</div>
        </div>
    )
}

export default Footer