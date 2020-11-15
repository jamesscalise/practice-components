import React from 'react'

const Sample = ({title}) => {

    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('')

    return (
        <div>Here is the sample component! {title}
            <div>Count: {count}</div>
            <button onClick = {() =>    setCount(count + 1)}>Click this to increase the count</button>
        </div>
    )

    
}

export default Sample;