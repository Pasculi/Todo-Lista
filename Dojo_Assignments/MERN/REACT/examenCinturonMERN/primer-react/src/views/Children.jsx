import React, { Component } from 'react'

class MyComponent extends Component {
    render(){
        return(
            <>
            <h1>
                {this.props.title}
            </h1>
            {this.props.children}
            </>
        )
        }
}
export default MyComponent;