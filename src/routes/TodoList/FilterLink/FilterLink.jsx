import React from 'react';
import Link from '../../../components/Link';
import {connect} from 'react-redux';
import {setVisibilityFilter} from "./actions";
import PropTypes from 'prop-types'

const FilterLink = (props) => {
    let {
        onClick,
        active,
        filter
    } = props;

    const handleOnClick = () => {
        onClick(filter);
    };

    return (
        <Link onClick={handleOnClick} active={active}>
            {props.children}
        </Link>
    );
};

FilterLink.propTypes = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    filter: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};


const mapDispatchToProps = (dispathch) => {
    return {
        onClick: (filter) => dispathch(setVisibilityFilter(filter))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLink);