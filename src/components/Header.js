import React from 'react'
import Container from 'react-bootstrap/Container';
import { ReactComponent as Logo } from '../images/logo.svg';


export default function Header(props) {
    const backgroundStyle = {
        backgroundColor: 'lightblue'
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={backgroundStyle}>
                <Container>
                    <Logo style={{maxWidth: '12rem', maxHeight:'2rem'}} />    
                    {/* <a className="navbar-brand" href="/">{props.title}</a> */}
                </Container>
            </nav>
        </div>
    )
}
