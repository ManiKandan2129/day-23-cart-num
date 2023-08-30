import './App.css'
import AppLabel from './AppLabel'
import Appcard from './Appcard'
import Appnav from './Appnav'
import Footer from './Footer'
import { useState } from 'react'

function App() {

  const[count, setcount] = useState(0);

  const handleincreament = () =>{
    setcount(count + 1)
  }
  const handledecrement = () =>{
    setcount(count - 1)
  }
  
  return (
    <>
    
      <div className="row" id='row1'>
        <div className="col-12">
          <Appnav value = {count}></Appnav>
        </div>
      </div>

      <div className="row" id='row3'>
        <div className="col-12">
          <AppLabel></AppLabel>
        </div>
      </div>

      <div className="row" id='card-row'>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <Appcard 
            title = "Fancy Product" 
            price = "$40.00 - $80.00" 
            countclickadd = {handleincreament} 
            countclickremove = {handledecrement}
            view = {true}
          ></Appcard>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <Appcard 
            title = "Special Item"
            offer = "Sale"  
            oldprice = "$20.00"
            newprice = " $18.00"
            rating = {5}
            countclickadd = {handleincreament} 
            countclickremove = {handledecrement}
          ></Appcard>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <Appcard 
            title = "Sale Item"
            offer = "Sale" 
            oldprice = "$50.00"
            newprice = "$25.00"
            countclickadd = {handleincreament} 
            countclickremove = {handledecrement}
          ></Appcard>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <Appcard 
            title = "Popular Item" 
            price = " $40.00"
            rating = {5}
            countclickadd = {handleincreament} 
            countclickremove = {handledecrement}
          ></Appcard>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <Appcard 
            title = "Sale Item"
            offer = "Sale" 
            oldprice = "$50.00"
            newprice = "$25.00"
            countclickadd = {handleincreament} 
            countclickremove = {handledecrement}
          ></Appcard>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <Appcard 
            title = "Fancy Product" 
            price = "$120.00 - $280.00" 
            view = {true}
            countclickadd = {handleincreament} 
            countclickremove = {handledecrement}
          ></Appcard>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <Appcard 
            title = "Special Item" 
            offer = "Sale" 
            oldprice = "$20.00"
            newprice = " $18.00"
            rating = {5}
            countclickadd = {handleincreament} 
            countclickremove = {handledecrement}
          ></Appcard>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <Appcard 
            title = "Popular Item" 
            price = " $40.00"
            rating = {5}
            countclickadd = {handleincreament} 
            countclickremove = {handledecrement}
          ></Appcard>
        </div>

      </div>


      <div className="row" id='row2'>
        <div className="col-12">
          <Footer></Footer>
        </div>
      
      
      
      </div>
    </>
  )
}

export default App
