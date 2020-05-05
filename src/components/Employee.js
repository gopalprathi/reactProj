import React from 'react'

export default function Employee(props) {
    return (
        <div>
            <p>name:{props.name}</p>
            <p>id:{props.id}</p>
            <p>designation:{props.designation}</p>
            <button className='btn btn-danger'>Delete</button>
        </div>
    )
}
