
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='fist'>
                <h1>Q:1 How react works?</h1>
                <p>React has some feature and that is why react is so useful and easy to use</p>
                <p>➡Data:Data that comes from anywhere and it is rendered by the component <br></br>
                    ➡Lifecycle:This method we implement that respond to changes in the lifecycle of the component. <br></br>
                    ➡Events: Event is code that we write for responding to user interactions.<br></br>
                    jsx:This is the syntax of React components used to describe User Interface stuctures.</p>
            </div>
            <div className='second'><h1>Q:1 Props VS State</h1>
                <p>Props vs State differences are</p>
                <p>
                    1.Props cannot be modified but states can be modified using this.setState()
                    2.Props can be used in class and function components on the other hand States can be used only in class components
                    3.Props are read only and State changes can be asynchronous
                    4.Props are passed outside a components and States are passed inside a component
                </p>
            </div>

        </div>
    );
};

export default Footer;