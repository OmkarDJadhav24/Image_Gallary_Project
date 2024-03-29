import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ImageCard({image, deleteImage}) {
    return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image.urls.small} />
                    <Card.Body>
                        <Card.Title>{image.title}</Card.Title>
                        <Card.Text>
                            {image.description || image.alt_description}
                        </Card.Text>
                        <Button variant="primary" onClick={() => deleteImage(image.id)}>Delete</Button>
                    </Card.Body>
                </Card>
            </div>
    )
}
