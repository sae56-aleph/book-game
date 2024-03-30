import React from "react";
import PropTypes from "prop-types";

const ActionSimple = ({ target, text, onClick }) => {
    const handleClick = () => {
        onClick(target);
    };

    return (
        <button
            style={{
                color: "#461C89",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "20px",
            }}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

ActionSimple.propTypes = {
    target: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ActionSimple;
