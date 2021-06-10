import React from 'react'
import PinDropIcon from '@material-ui/icons/PinDrop';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Contact = () => {
    return (
        <div className="bg-light">
            <div className="container pb-5">
                <div className="row justify-content-around mt-5">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <h3 className="mt-5">Contect Us</h3><br />
                        <h5>Adderss</h5><br />
                        <p>Swing by for a cup of coffee, or whatever.</p>
                        <p><PinDropIcon /> Chicago, US <br /></p>
                        <p><PhoneInTalkIcon /> +00 1515151515 <br /></p>
                        <p><MailOutlineIcon /> test@test.com</p>
                    </div>



                    <div className="col-lg-6 col-md-8 col-sm-12 mt-5">
                        <div className="container-fluid bg-white pb-3">
                            <div>
                                <label className="mt-4">Name</label><br />
                                <input type="text" className="w-100" />
                            </div>

                            <div>
                                <label className="mt-2">Email</label><br />
                                <input type="email" className="w-100" />
                            </div>

                            <div>
                                <label className="mt-2">Message</label><br />
                                <textarea name="textarea" id="text" className="w-100" ></textarea>
                            </div>

                            <div>
                                <input type="checkbox" /> I Like It!
                                <button type="submit" className="bg-dark text-white float-end">Send</button>
                            </div>
        
                        </div>
                    </div>
                </div>
            </div>
            <div className="img">
                <img className="img-fluid" src="https://www.w3schools.com/w3images/map.jpg" alt="img" />
            </div>
        </div>
    )
}

export default Contact
