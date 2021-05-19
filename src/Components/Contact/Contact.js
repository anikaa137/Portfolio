import { send } from 'emailjs-com';
import React, { useEffect, useState } from 'react';
import { init } from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    },[])
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        const serviceID = 'service_i2nt5oa';
        const templateID = 'template_j41o0en';
        const userID = init("user_yOZvbw1bxdphdAN90ocHV");
        send(
            serviceID,
            templateID,
            toSend,
            userID
        )
            .then((response) => {
                alert('Your mail is sent successfully.');
            })
            .catch((err) => {
                alert('Failed to send mail, please try again later.');
                console.log(err)
            });
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div id="contact" style={{backgroundColor:" #38A5DB", color:"white", paddingTop:"50px"}} data-aos="fade-up">
            <div className="container form ">
                <h1 className="pb-5 text-center title">CONTACT ME</h1>
                <div className="row">
                    <div className="col-md-6" data-aos='fade-right'>
                        <h3 className="pb-3">Get in touch</h3>
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Your Name</label>
                                <input
                                    className="form-control"
                                    type='text'
                                    name='from_name'
                                    placeholder='Your name'
                                    value={toSend.from_name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Your Email</label>
                                <input
                                    className="form-control"
                                    type='text'
                                    name='reply_to'
                                    placeholder='Your email'
                                    value={toSend.reply_to}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control"
                                    type='text'
                                    name='message'
                                    placeholder="Leave your message here"
                                    value={toSend.message}
                                    onChange={handleChange}
                                    style={{ height: '100px' }}
                                    required
                                >
                                </textarea>
                                <label>Message</label>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary mb-5"  type='submit'>Send Email</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6" data-aos='fade-left'>
                        <div className="bg-white text-dark p-4 shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="d-flex align-items-center">
                                <div className="p-3">
                                    <div className="border border-white p-2">
                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                    </div>
                                </div>
                                <div>
                                    <p>Phone</p>
                                    <p>(+880) 1842643738</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white text-dark p-4 my-2 shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="d-flex align-items-center">
                                <div className="p-3">
                                    <div className="border border-white p-2">
                                        <FontAwesomeIcon icon={faMailBulk} />
                                    </div>
                                </div>
                                <div>
                                    <p>Email</p>
                                    <p>anikaa137@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white text-dark p-4 shadow-lg p-3 mb-5 bg-body rounded" >
                            <div className="d-flex align-items-center">
                                <div className="p-3">
                                    <div className="border border-white p-2">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </div>
                                </div>
                                <div>
                                    <p>Addresses</p>
                                    <p>Chittagong, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
