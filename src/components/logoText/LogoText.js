import React from 'react';
import PropTypes from 'prop-types';


function LogoText({firstName, lastName}) {
    return (
        <div>
            <h4>{firstName} {lastName}</h4>
        </div>
    )
}

export default LogoText;


LogoText.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};