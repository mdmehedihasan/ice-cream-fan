
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='fist'>
                <h1>Q:1 How react works?</h1>
                <h4>React has some feature and that is why react is so useful and easy to use</h4>
                <p className='left-para'>
                    <ul>
                        <li> Data:Data that comes from anywhere and it is rendered by the component</li>
                        <li>Lifecycle:This method we implement that respond to changes in the lifecycle of the component. </li>
                        <li>Events: Event is code that we write for responding to user interactions.</li>
                        <li> jsx:This is the syntax of React components used to describe User Interface stuctures.</li>
                    </ul>
                </p>
            </div>
            <div className='second'><h1>Q:2 Props VS State</h1>
                <h4>Props vs State differences are</h4>
                <p className='right-para'>
                    <li>.Props cannot be modified but states can be modified using this.setState()</li>
                    <li>Props can be used in class and function components on the other hand States can be used only in class components</li>
                    <li>Props are read only and State changes can be asynchronous</li>
                    <li>Props are passed outside a components and States are passed inside a component</li>

                </p>
            </div>

        </div>
    );
};

export default Footer;