import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Activities(props) {
  return (
    <div className="school-activities">



<Card style={{width:'12rem'}} className="sports">
        <Card.Img variant="top" className="act-image" src="https://res.cloudinary.com/pitz/image/upload/v1670049610/cf40f5cc-0008-48b2-a4d0-ca7fdff2807c_k85gfz.jpg" />
        <Card.Body>
          <Card.Title>
          <h4>BBHS sport team</h4>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{width:'12rem'}} className="sports">
        <Card.Img variant="top" className="act-image" src="https://res.cloudinary.com/pitz/image/upload/v1670049610/9240ba92-c46d-4ec1-a988-c6dc94804a29_phl6ij.jpg" />
        <Card.Body>
          <Card.Title>
          <h4>Our Dinning Hall</h4>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{width:'12rem'}} className="sports">
        <Card.Img variant="top" className="act-image" src="https://www.knqa.go.ke/wp-content/uploads/2021/04/EvyhdukXYAQRtNQ.jpg" />
        <Card.Body>
          <Card.Title>
          <h4> Current year academics</h4>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Footer>
          <Link to='/academics'>
        View our full results
      </Link></Card.Footer>
        </Card.Body>
      </Card>
      <Card style={{width:'12rem'}} className="sports">
        <Card.Img variant="top" className="act-image" src="https://www.knqa.go.ke/wp-content/uploads/2021/04/EvyhdukXYAQRtNQ.jpg" />
        <Card.Body>
          <Card.Title>
          <h4> Current Sport Team</h4>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card>
      




      
    </div>
  )
}

export default Activities