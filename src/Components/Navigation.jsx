import '../App.css'
import Logo from '../Images/AIT-white.jpg'
import {Link} from 'react-router-dom'
const Navigation=()=>{
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            <img src={Logo} alt="AchieversIT logo" style={{width:'50px'},{height : '40px'}}/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav ml-auto" style={{marginRight:"30px"}}>
            <li className="nav-item active">
                <Link to='/' className="nav-link" aria-current="page">Home </Link>
            </li>
            <li className="nav-item active">
                <Link to='/About' className="nav-link" >About </Link>
            </li>
            <li className="nav-item active ">
                <Link to='/Services' className="nav-link" >Services </Link>
            </li>
            <li className="nav-item active">
                <Link to='/Clients' className="nav-link" >Clients </Link>
            </li>
            <li className="nav-item active">
                <Link to='/Blogs' className="nav-link" >Blogs </Link>
            </li>
            <li className="nav-item active">
                <Link to='/Contact' className="nav-link" >Contact </Link>
            </li>
            </ul>
        </div>
    </nav>        
    )
}

export default Navigation;