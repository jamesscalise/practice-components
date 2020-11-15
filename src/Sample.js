import React from 'react'

const Sample = ({title}) => {

    const [count, setCount] = React.useState(0)

    return (
        <div>Here is the sample component! {title}
            <div>Count: {count}</div>
            <button>Click this to increase the count</button>
        </div>
    )

    
}

export default Sample;