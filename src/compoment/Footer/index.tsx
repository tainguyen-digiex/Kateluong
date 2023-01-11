import Share from "../../assets/icons/share";
import Heart from "../../assets/icons/heart";

function Footer() {
    return (
        <div className="bottom-[10px] left-[20px] max-h-[50px] fixed z-[9999] flex items-center">
            <Share className="text-[#6b6b6b] ml-2 w-4 h-4"/>
            <Heart className="text-[#6b6b6b] ml-2 w-5 h-5"/>
        </div>
    )
}

export default Footer