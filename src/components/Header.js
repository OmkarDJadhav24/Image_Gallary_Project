import React from 'react'
import Container from 'react-bootstrap/Container';

export default function Header(props) {
    const backgroundStyle = {
        backgroundColor: 'lightblue'
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={backgroundStyle}>
                <Container>
                    <a className="navbar-brand" href="/">{props.title}</a>
                </Container>
            </nav>
        </div>
    )
}
