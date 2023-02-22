import React from "react";

// function Title() {
//     return <div><u><h1>Title</h1></u></div>
// }

// const Title = () => <div><u><h1>Title :)</h1></u></div>
const Title = () => React.createElement(
    'div',
    {
        id: 'divId',
        className: 'divClass',
        type: 'divType'
    },
    React.createElement(
        'u',
        {
            id: 'uId',
            className: 'uClass'
        },
        React.createElement(
            'h1',
            {
                id: 'hId'
            },
            'Title'
        )
    )
)

export default Title;