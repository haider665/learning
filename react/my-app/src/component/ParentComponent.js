import React from 'react'
import ChildComponent from './ChildComponent';

function ParentComponent() {

    function greeting(senderName){
        alert(`Greeting parents from ${senderName}`);
    }

    return (
        <div>
            <ChildComponent greetHandler={greeting}/>
        </div>
    )
}

export default ParentComponent