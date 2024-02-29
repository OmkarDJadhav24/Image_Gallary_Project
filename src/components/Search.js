import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Search({word, setWord, submitButton}) {
    return (
        <div>
            <Container className='mt-2'>
                <Row className='justify-content-center'>
                    <Col xs={12} md={8}>
                        <form onSubmit={submitButton}>
                            <div className="row">
                                <div className="col" xs={9}>
                                    <input type="text" value={word} onChange={(e) => setWord(e.target.value)} className="form-control" placeholder="Search for new image" />
                                </div>
                                <div className="col col-lg-2">
                                <button type="submit" className="btn btn-primary">Search</button>
                                </div>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
