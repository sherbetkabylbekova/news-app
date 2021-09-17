import React from 'react';

const Button = ({title,onClick}) => {
    return (
        <button onClick={onClick} className="btn btn-info my-4 d-block ms-auto">{title}
        </button>
    );
};

export default Button;