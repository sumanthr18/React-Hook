import '../Footer.css';
import WhatsAppIcon from '../Images/icons/whatsapp.png'

let Footer=()=>{
    return (
        <div className="fixed-footer d-flex">
            <div className='d-flex-0'><a><img src={WhatsAppIcon} alt="Whatsapp icon" Style={{height:'25px'}}/></a></div>
            <div className='d-flex-0'>Call us</div>
            <div className='d-flex-0'>Request a call back</div>
        </div>
    )
}

export default Footer;