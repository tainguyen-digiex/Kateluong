import Menu from "../../assets/icons/menu";
import Close from "../../assets/icons/close";
import MobileIndex from "../Header/mobileIndex";

type Props = {
    setOpen: (props: boolean) => void
    open: boolean
}

function MenuBar(props: Props) {
    const {setOpen, open} = props

    return (
        <div className='flex justify-start items-start pt-2 m-5 max-h-[50px] text-white'>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {open ? <Close className="w-10 h-10"/>
                    : <Menu className="w-10 h-10"/>}
            </div>
            {open && <MobileIndex closeBox={() => setOpen(false)}/>}
        </div>
    )
}


export default MenuBar