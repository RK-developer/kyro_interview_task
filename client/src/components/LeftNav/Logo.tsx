import React from "react";

const Logo = (props: any) => {
    const { styles } = props;
    return (
        <img
            src="/kyroLogo.png"
            alt="Logo"
            style={{
                width: "100px",
                ...styles,
            }}
        />
    );
};

export default Logo;
