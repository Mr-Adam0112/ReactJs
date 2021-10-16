import React from 'react';
import PropTypes from 'prop-types';
function Contents(props){
    const {color} = props;
    return(
        <>
        <h1 style={{backgroundColor: color}}>hello {props.name} - {props.number}</h1>
        </>
    )
}

Contents.propTypes={
    // bat buot phai co
    // color: PropTypes.string.isRequired,

    // co cung duoc khong co cung khong sao
    color: PropTypes.bool,
    // phai dua cho 1 gia tri mat dinh
};

//gia tri mat trinh = true 
Contents.defaultProps = {
    color: true
}

export default Contents;

