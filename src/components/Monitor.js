import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { realdb } from '../firebase'
import './Monitor.css'
import emailjs from 'emailjs-com'
import { useRef } from 'react'
const Monitor = () => {
  var {email}=useParams();
  var form = useRef();
  const history=useHistory();
  const [data, setdata] = useState();
  const [ldrval, setldrval] = useState();
  useEffect(() => {
    const vals= realdb.ref('data');
    const ldrval = realdb.ref('ldr');
    vals.on('value', function(snapshot) {
      console.log(":::");
      console.log(snapshot.val());
      setdata(snapshot.val());
    })
    ldrval.on('value', function(snapshot) {
      console.log(":::");
      console.log(snapshot.val());
      setldrval(snapshot.val());
    })
  }, [])
  // const vals= realdb.ref('data');
  // vals.on('value', function(snapshot) {
  //   console.log(snapshot.val());
  // })
  // console.log(vals);
  var progress;
  progress=(100-(data/15*100)).toString().slice(0,5)+"%";
  var ldr;
  ldr = (ldrval>500)?"yes":"no";
  useEffect(() => {
    document.getElementById('progress').style.width=progress;
    if(100-(data/15*100)<=20)
    {
      // console.log("gadar");
      // var e=document.getElementById('form');
      
      emailjs.sendForm('service_i1xgjnu', 'template_8afk7mm',form.current, 'UVSXZxuz4C3z-N6NR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      document.getElementById('progress').style.backgroundColor="red";
    }
    else{
      document.getElementById('progress').style.backgroundColor="green";

    }
  }, [data]);
  function revert()
  {
    history.push(`/main/${email}`);
  }
  return (
    <>
   <div className='page'></div>
   <div className="center">
   <div className='head'>
    Monitor DashBoard
   </div>
    <div className="progressbar" style={{width:500,height:40,backgroundColor:"grey"}}>
      {/* {progress=(data/20*100).toString()+"%"} */}
      <div className="progress" id='progress' style={{height:40,backgroundColor:"green"}}></div>
    </div>
    <div className="percentage">Drip Left:- {progress}</div>
    <div className="percentage">BUBBLE FORMATION:- {ldr}</div>
    <div class="btn" id="btn" onClick={revert}>Stop</div>
    <form ref={form} style={{display:"none"}}>
      <label>Name</label>
      <input type="email" name="user" value={email}/>
      <label>Email</label>
      <input type="text" name="progres" value={progress} />
      <label>LDR</label>
      <input type="text" name="ldr" value={ldr} />
    </form>
    </div>
    </>
  )
}

export default Monitor