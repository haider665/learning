import React from 'react'

const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={() => props.greetHandler('Haider')}>Child Component Click</button>
        </div>
    )
}

export default ChildComponent