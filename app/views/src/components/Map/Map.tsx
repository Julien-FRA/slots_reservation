import React from 'react';

const GoogleMap = () => {
    const src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10164.885308587323!2d2.043262222301759!3d49.03560308175684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f4c72416d693%3A0x40b82c3688b34e0!2sCergy!5e0!3m2!1sen!2sfr!4v1677585608200!5m2!1sen!2sfr';

    return (
        <div>
            <iframe
                title="Google Maps"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                src={src}
                allowFullScreen
            />
        </div>
    );
};

export default GoogleMap;