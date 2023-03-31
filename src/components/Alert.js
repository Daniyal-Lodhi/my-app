import React from 'react'

function Alert(props) {
    const capitalize = (str) => {
        const lower = str.toLowerCase();
        return (lower[0].toUpperCase() + lower.slice(1))

    }
    return (
        props.alert && 
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}:{props.alert.message}</strong>
            
        </div>


    )
}

export default Alert