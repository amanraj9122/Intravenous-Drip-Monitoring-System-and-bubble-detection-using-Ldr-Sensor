import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Home.css'
const Home = () => { 
    const history = useHistory();
    function login()
    {
        history.push('/login');
        document.getElementsByClassName('page')[0].style.zIndex=-1;
        console.log(document.getElementsByClassName('page')[0].style.zIndex);
    }
  return (
    <>
    <div className="page" id='page1'></div>
    <div class="center">
    <h1>Drip-Monitor</h1>
    <p style={{marginTop:10,marginBottom:20,fontSize:24,color:'white'}}>
    An Innovative Solution for nurses and doctors to monitoring
    <br></br> 
   the level of drip and send update to nurse's phone
    </p>
    <div class="btn" onClick={login}>Enter</div>
    </div>
    </>
    )
}

export default Home