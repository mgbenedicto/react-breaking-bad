import React from 'react';
import spinner from "../../img/spinner.gif";

const Spinner = () => {
    return (
        <img 
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            src={spinner} alt='' />
    );
}

export default Spinner
