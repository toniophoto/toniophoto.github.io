import React from 'react';

let currentDate = new Date();
const Footer = () => {
    return (
        <footer className="mb-20 pb-10">
            <p className="text-center">
                Copyright &copy; {currentDate.getFullYear()} by ezenardR, All
                rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
