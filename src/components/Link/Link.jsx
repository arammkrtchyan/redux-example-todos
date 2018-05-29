import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => {

    const handleOnClick = (event) => {
        event.preventDefault();
        onClick(event);
    };

    let {
        onClick,
        active,
        activeClassName
    } = props;

    const className = `btn btn-link ${activeClassName && active ? activeClassName : ''}`;

    return (
        <button
            onClick={handleOnClick}
            type="button"
            disabled={active}
            className={className}>
            {props.children}
        </button>
    );
};

Link.defaultProps = {
    active: false
};

Link.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool
};

export default Link;