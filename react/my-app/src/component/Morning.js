import React from "react";

const Morning = (props) => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            `Good morning ${props.name}`
        ),
        React.createElement('div', null, (props.children))
    );
}

export default Morning