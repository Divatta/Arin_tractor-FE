import '../scss/Footer.scss'
import footerLogo from '../assets/arin_logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="footerColumns">
            <div className="footerLogoInfo">
            <img src={footerLogo} alt="no image" />
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos similique ab nulla eaque aut. Molestias ipsam facilis quidem repellat nulla! Est minus hic, illo nostrum illum ratione amet inventore.</p> */}
            </div>
            <div className="impLinks">
                <h4>COMPANY</h4>
                <div className="Links">
                    <Link to={"/about"}><span> About Us</span></Link>
                    <Link to={"/latestBlogs"}><span> Blogs</span></Link>
                    <Link to={"/clients"}><span> Clients</span></Link>


                </div>
            </div>

            <div className="impLinks">
                <h4>CORPORATE LINKS</h4>
                <div className="Links">
                    <Link to={"/terms&privacy"}><span> Terms&Privacy Policy</span></Link>
                  
                    <Link to={"/refund"}><span>Refund&Copyright Policies</span></Link>
                    <Link to={"/disclaimer"}><span> Disclaimer</span></Link>
                </div>
            </div>

            <div className="impLinks">
                <h4>CONTACT US</h4>
                <div className="Links">
                    <span> <i className="bi bi-geo-alt-fill"></i> Head Office: <br />
                        Arin Tractorwala Division,
                        Phase IV, Industrial Area,
                        S.A.S Nagar (Mohali),
                        Punjab -160055.
                    </span>
                    <span> <i className="bi bi-telephone-fill"></i> +918374534655 </span>
                    <span> <i className="bi bi-envelope-fill"></i>  info@arin.com</span>
                </div>
            </div>

            <div className="impLinks">
                <h4>FOLLOW US</h4>
                <div className="Link">
                {/* <span><Link to={"https://www.whatsapp.com"} className="bi bi-whatsapp" > </Link></span> */}
                    {/* <span><Link to={"https://www.linkedin.com"} className='bi bi-linkedin'></Link></span> */}
                    <span><Link to={"https://www.facebook.com"} className='bi bi-facebook'></Link></span>
                    <span><Link to={"https://www.instagram.com"} className='bi bi-instagram'></Link></span>
                    <span><Link to={"https://www.twitter.com"} className='bi bi-twitter-x'></Link></span>
                </div>
            </div>
        </div>

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
