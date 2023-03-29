import React from 'react'
import './Wrapper.css';
import PropTypes from 'prop-types'

const Wrapper = (props) => {
    console.log(props.children);
    return (
        <div className={'Wrapper Wrapper-' + props.color}>
            {props.children}
        </div>
    );
};

Wrapper.propTypes = {
    color: PropTypes.string,
    children: PropTypes.element
}

Wrapper.defaultProps = {
    color: 'default'
}

export default Wrapper;
