import '../scss/Footer.scss'
import footerLogo from '../assets/arin_logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="footerColumns">
            <div className="footerLogoInfo">
            <img src={footerLogo} alt="no image" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos similique ab nulla eaque aut. Molestias ipsam facilis quidem repellat nulla! Est minus hic, illo nostrum illum ratione amet inventore.</p>
            </div>
            <div className="impLinks">
                <h4>IMPORTANT LINKS</h4>
                <div className="Links">
                    <Link to={"/about"}><span> About Us</span></Link>
                    <Link to={"/service"}><span> Services</span></Link>
                </div>
            </div>

            <div className="impLinks">
                <h4>OTHER LINKS</h4>
                <div className="Links">
                    <Link to={"/terms&privacy"}><span> Terms&Privacy Policy</span></Link>
                  
                    <Link to={"/refund"}><span>Refund&Copyright Policies</span></Link>
                    <Link to={"/disclaimer"}><span> Disclaimer</span></Link>
                </div>
            </div>

            <div className="impLinks">
                <h4>SUPPORT</h4>
                <div className="Links">
                    <span> +918374534655 </span>
                    <span> info@arin.com</span>
                </div>

                <h4>OPENING HOURS</h4>
                    <div className="Links">
                        <span>Wed-Mon: 10AM to 7PM</span>
                        <span>Tuesday - Weekly Off</span>
                    </div>
            </div>
        </div>
        {/* <div className="footerColumns"> */}
            {/* <div className="impLinks">
                
                <div className="Links logos">
                    
                    <span><Link to={"whatsapp://send?text=Hi!&phone=9773643677"} className="bi bi-whatsapp" > </Link></span>
                    <span><Link to={"mailto:info@sattonjanam.com"} className="bi bi-envelope-fill" > </Link></span>
                    <span><Link to={"https://www.linkedin.com/company/sattonjanam-matrimonial-services/about/?viewAsMember=true"} className='bi bi-linkedin'></Link></span>
                    <span><Link to={"https://www.facebook.com/profile.php?id=61550954489680&sk=about_contact_and_basic_info"} className='bi bi-facebook'></Link></span>
                    <span><Link to={"https://www.instagram.com/sattonjanam_matrimony/"} className='bi bi-instagram'></Link></span>
                    <span><Link to={"#"} className='bi bi-twitter'></Link></span>
                </div>
            </div> */}
        {/* </div> */}

        <div className="footerEnd">
            <p>© 2023 Arin Tractorwala. All Rights Reserved. | Privacy Policy</p>
            {/* <span> <a
            style={{
            color: "lightblue",
            textDecoration: "none",
            textAlign: 'left',
            marginLeft: '0px'
            }}
            href="https://techsynergia.com"
            target="_blank"
                >
                    Powered by Tech Synergia
                </a></span> */}
        </div>
    </footer>
  )
}

export default Footer
