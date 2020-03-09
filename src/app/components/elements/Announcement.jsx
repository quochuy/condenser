import PropTypes from 'prop-types';
import React from 'react';

export const Announcement = ({ onClose }) => (
    <div className="annoucement-banner">
        <p className="announcement-banner__text">
            Maintained by{' '}
            <a href="https://wallet.steemulant.com/~witnesses">
                Witness @quochuy
            </a>. Try beta features on{' '}
            <a
                className="announcement-banner__link"
                href="https://staging.steemulant.com"
            >
                the staging site
            </a>.
        </p>
        <button className="close-button" type="button" onClick={onClose}>
            &times;
        </button>
    </div>
);

Announcement.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Announcement;
