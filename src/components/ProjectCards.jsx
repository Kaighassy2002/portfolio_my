import React, { useEffect, useState } from 'react'
import { Button, Card, Carousel } from 'react-bootstrap'
import "../components/card.css";
import tornado from "../assets/images/tornado.jpg";
import hairsalon from "../assets/images/hairsalon.jpg";
import bookshop from "../assets/images/bookshop.jpg";
import portfolio from "../assets/images/portfolio.jpg";

function ProjectCards() {

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="carousel-container">
    <Carousel interval={3000} indicators={false}>
      {/* First Slide */}
      <Carousel.Item>
        <div className="card-wrapper">
          <Card className="custom-card">
            <Card.Img className="cards-image" src={hairsalon} />
            <Card.Body>
              <Card.Title>Hair Salon</Card.Title>
              <Card.Text className='cards-p'>Developed a modern MERN stack hair salon website with JWT authentication, API integration, and a responsive UI, improving user retention by resolving drop-off issues.</Card.Text>
              <Button variant="primary"><a style={{textDecoration:'none',color:'white'}} href="https://hair-salon-alpha.vercel.app/">Go somewhere</a></Button>
            </Card.Body>
          </Card>

          {/* Tablet & Desktop: Show second card */}
          {screenSize >= 576 && (
            <Card className="custom-card">
              <Card.Img className="cards-image" src={portfolio} />
              <Card.Body>
                <Card.Title>Portfolio</Card.Title>
                <Card.Text className='cards-p'>Developed a portfolio website using React, Bootstrap, and custom CSS for a responsive and visually appealing design.</Card.Text>
                <Button variant="primary"><a style={{textDecoration:'none',color:'white'}} href="https://portfolio-my-alpha.vercel.app/">Go somewhere</a></Button>
              </Card.Body>
            </Card>
          )}

          {/* Desktop: Show third card */}
          {screenSize >= 992 && (
            <Card className="custom-card">
              <Card.Img className="cards-image" src={tornado} />
              <Card.Body>
                <Card.Title>Tornado</Card.Title>
                <Card.Text className='cards-p'>Developed "Tornado," a blog website using React, Bootstrap, and custom CSS for a seamless user experience.</Card.Text>
                <Button variant="primary"><a style={{textDecoration:'none',color:'white'}} href="https://tornado-nudp.vercel.app/">Go somewhere</a></Button>
              </Card.Body>
            </Card>
          )}
        </div>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <div className="card-wrapper">
          <Card className="custom-card">
            <Card.Img className="cards-image" src={bookshop} />
            <Card.Body>
              <Card.Title>Book Shop</Card.Title>
              <Card.Text className='cards-p'>Developed an e-commerce bookshop website using React, JSON Server, API integration, and a responsive UI with Bootstrap, HTML5, CSS3, and JavaScript.</Card.Text>
              <Button variant="primary"><a style={{textDecoration:'none',color:'white'}} href="https://book-shop-mauve.vercel.app/">Go somewhere</a></Button>
            </Card.Body>
          </Card>

          {/* Tablet: Show second card */}
          {screenSize >= 576 && (
            <Card className="custom-card">
              <Card.Img className="cards-image" src={portfolio} />
              <Card.Body>
                <Card.Title>Portfolio</Card.Title>
                <Card.Text className='cards-p'>Developed a portfolio website using React, Bootstrap, and custom CSS for a responsive and visually appealing design.</Card.Text>
                <Button variant="primary"><a style={{textDecoration:'none',color:'white'}} href="https://portfolio-my-alpha.vercel.app/">Go somewhere</a></Button>
              </Card.Body>
            </Card>
          )}
        </div>
      </Carousel.Item>

      {/* Mobile Only: Third Slide */}
      {screenSize < 576 && (
        <Carousel.Item>
          <div className="card-wrapper">
            <Card className="custom-card">
              <Card.Img className="cards-image" src={tornado} />
              <Card.Body>
                <Card.Title>Tornado</Card.Title>
                <Card.Text className='cards-p'>Developed "Tornado," a blog website using React, Bootstrap, and custom CSS for a seamless user experience.</Card.Text>
                <Button variant="primary"><a style={{textDecoration:'none',color:'white'}} href="https://tornado-nudp.vercel.app/">Go somewhere</a></Button>
                
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
      )}

      {/* Mobile Only: Fourth Slide */}
      {screenSize < 576 && (
        <Carousel.Item>
          <div className="card-wrapper">
            <Card className="custom-card">
              <Card.Img className="cards-image" src={portfolio} />
              <Card.Body>
                <Card.Title>Portfolio</Card.Title>
                <Card.Text className='cards-p'>Developed a portfolio website using React, Bootstrap, and custom CSS for a responsive and visually appealing design.</Card.Text>
                <Button variant="primary"><a style={{textDecoration:'none',color:'white'}} href="https://portfolio-my-alpha.vercel.app/">Go somewhere</a></Button>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
      )}
    </Carousel>
  </div>
  )
}

export default ProjectCards
