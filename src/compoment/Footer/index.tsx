import Share from "../../assets/icons/share";
import Heart from "../../assets/icons/heart";
import React, {useEffect, useState} from "react";
import Moon from "../../assets/icons/moon";
import Sun from "../../assets/icons/sun";
import TimerClock from "../TimerClock";

interface Props {
    isDarkMode: boolean
    handleToggleDarkMode: () => void
}

function Footer(props: Props) {
    const {isDarkMode, handleToggleDarkMode} = props

    return (
        <div className="bottom-[10px] left-[20px] max-h-[50px] fixed z-10 flex justify-center items-center">
            <Share className="text-[#6b6b6b] ml-2 w-4 h-4"/>
            <Heart className="text-[#6b6b6b]  ml-2 w-5 h-5"/>
            <div className="text-[#6b6b6b] text-sm ml-1">10</div>
            <div className="ml-4">
                {isDarkMode ?
                    <Moon className="w-4 h-4 relative cursor-pointer colorIcon" onClick={handleToggleDarkMode}/>
                    :
                    <Sun className="w-5 h-5 relative cursor-pointer colorIcon" onClick={handleToggleDarkMode}/>}
            </div>
            <TimerClock className="flex flex-col items-center justify-center ml-4"/>

        </div>
    )
}

export default Footer