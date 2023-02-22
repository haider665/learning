import React from 'react'

function NameList() {

    const names = ['Haider', 'Anando', 'Mojib'];
    const nameList = names.map(item => <h1 key={item}>{item}</h1>);

    console.log(nameList);

    return (
        <div>{nameList}</div>
    )
}

export default NameList