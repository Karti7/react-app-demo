import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <footer>
            <div className="text-center bg-dark text-white mt-1 p-5">
                <h4>Follow Us</h4>
                    <div className="icon-btn">
                        <FacebookIcon style={{ fontSize: 40 }} />
                        <TwitterIcon style={{ fontSize: 40 }} />
                        <InstagramIcon style={{ fontSize: 40 }} />
                        <LinkedInIcon style={{ fontSize: 40 }} />
                    </div>
                <h5>&copy; 2021</h5>
            </div>
        </footer>
    )
}

export default Footer
