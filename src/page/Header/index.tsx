function Header() {
    return (
        <>
            <div className="flex justify-around items-center">
                <div id="Text" className="flex justify-center items-center">
                    <div id="DHN" className="text-white m-5 cursor-pointer hover:border-b-2 border-y-amber-300">
                        Đặt hàng ngay
                    </div>
                    <div id="TT" className="text-white m-5 cursor-pointer hover:border-b-2 border-y-amber-300">
                        Tin tức
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header