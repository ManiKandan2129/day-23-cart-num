import React, { useState } from 'react'
import './appcard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'


function Appcard(props) {

    const[cartbtn, setCartbtn] = useState(false);
    
    const handleAddbtn = () =>{
      props.countclickadd();
      setCartbtn(true);
    }
    const handleRemovebtn = () =>{
      props.countclickremove();
      setCartbtn(false);
    }

    const stars = [];
    for(let i = 0; i<props.rating; i++){
      stars.push(<FontAwesomeIcon icon={faStar} key={i}/>)
      console.log(stars);
    }
 
  return (
    <div>
         <Card  className='app-card'>
      <Card.Img className='card-img' variant="top" src="./images/placeimg.jpg" />
      <p className="img-txt">{props.offer}</p>
      <Card.Body>
        <Card.Title><h5 className='card-title'>{props.title}</h5></Card.Title>
        <Card.Text>
          <div className='rating'>
          {stars}
          </div>
          <h6>{props.price}</h6>
          <div className="price">
          <h6 className='card-text'><span class="text-muted text-decoration-line-through">{props.oldprice}</span></h6>
          <h6 className='card-text'>{props.newprice}</h6>
          </div>
        </Card.Text>
        {props.view?<Button variant="outline-dark" className='card-btn'>View Options</Button>
        :!cartbtn?<Button variant="outline-dark" className='card-btn' onClick={handleAddbtn}>Add to cart</Button>
        :<Button variant="outline-dark" className='card-btn' onClick={handleRemovebtn}>Remove</Button>}
      </Card.Body>
    </Card>
    </div>
  )
}

export default Appcard