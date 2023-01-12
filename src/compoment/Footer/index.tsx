import Share from "../../assets/icons/share";
import Heart from "../../assets/icons/heart";
import React, {useEffect, useState} from "react";
import Moon from "../../assets/icons/moon";
import Sun from "../../assets/icons/sun";

function Footer() {
    const [theme, setTheme] = useState(localStorage.theme)
    const isDarkMode = theme === 'dark'

    const handleToggleDarkMode = () => {
        setTheme(isDarkMode ? 'light' : 'dark')
    }

    useEffect(() => {
        const root = window.document.documentElement
        if (isDarkMode) {
            root.classList.remove('light')
        } else {
            root.classList.remove('dark')
        }
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [isDarkMode])
    return (
        <div className="bottom-[10px] left-[20px] max-h-[50px] fixed z-10 flex justify-between">
            <Share className="text-[#6b6b6b] ml-2 w-4 h-4"/>
            <Heart className="text-[#6b6b6b]  ml-2 w-5 h-5"/>
            <div className="text-[#6b6b6b] text-sm ml-1">10</div>
            <div className="ml-6 flex justify-center items-center">
                {isDarkMode ?
                    <Moon className="w-4 h-4 relative cursor-pointer colorIcon" onClick={handleToggleDarkMode}/>
                    :
                    <Sun className="w-5 h-5 relative cursor-pointer colorIcon" onClick={handleToggleDarkMode}/>}
            </div>
        </div>
    )
}

export default Footer