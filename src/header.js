import logo from "../images/logo.png";
const Header=()=>{
    return (
        <div className="flex bg-[#172542] h-25">
            <div className="h-20">
                <img className="h-20" src={logo}></img>
            </div>
            <div className="user">
                <button></button>
            </div>
        </div>
    )
}

export default Header;
