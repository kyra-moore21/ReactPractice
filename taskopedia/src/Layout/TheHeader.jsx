import logo from "../images/react.png";
const MainHeader = () => {
    return (
        <div className="pt-2 py-1 pl-2"  style={{backgroundColor: "black"}}>
            <img src={logo} alt="logo" style={{ height: "35px", verticalAlign: "top" }}/>
            <span className="h2 pt-4 text-white-50" >React Course - TaskOPedia </span>
        </div>
    )
}

const TheSubHeader= () => {
    return <p className="text-center">This will be an exciting course</p>
}

 const Header = () =>{
    return (
        <div>
            <MainHeader />
            <TheSubHeader />
        </div>
    )
}
export default Header;