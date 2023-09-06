import React from 'react';
import "./location.scss";

const Contact = () => {
  return (
    <div className='location'>
        <div className='point'>
            <h1>Visit us</h1>
            <p>"Visit us today and transform your house<br/> 
                into a cozy haven of comfort and style!"<br/><br/>
                KK Homeneeds<br/>
                Address: Gokul Circle, Punganur, Chittoor<br/>
                Phone: +91 97035 08405<br/>
                Email: suredrareddykk@gmail.com<br/>
                Opening Hours: 9:00AM - 8:30PM [Everday]<br/>
            </p>
            
        </div>
        <div className='mapdiv'>
            <iframe 
                title="maptitle" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.7055064516403!2d78.56890927463787!3d13.368578906051557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb27f4fc90d4e79%3A0x868def3f58559c23!2sK.K.Home%20Needs!5e0!3m2!1sen!2sin!4v1691575779926!5m2!1sen!2sin" 
                width="300" 
                height="300" 
                style={{border:"0"}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
        </div>
    </div>
  )
}

export default Contact