// Shortcut rfc
import React, {useEffect, useState} from 'react'

// Shortcut impt
// import PropTypes from 'prop-types'

export default function Form(props) {
 const[text,setText] = useState("") ;
 
    const handleOnChange = (event)=>{
        console.log("handle on change");
        setText(event.target.value)/* this setting the value of settext var to the value that is being enter in the form of data*/

    }
    const uppercase = ()=>{
        console.log("you have clicked on upper case button" + text);
        setText(text.toUpperCase());
        props.alert('success ',' converted to uppercase!')
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg); 
      }
    
  
    
    var myStyles = {
        color: props.mode === 'dark'?'white':'black' ,
        backgroundColor: props.mode === 'dark'?'black':'white',
      }
    

    return (
        <>
        <div >

            <h1 style={myStyles}>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" style={myStyles} onChange={handleOnChange}  id="myBox" rows="10" value={text}  ></textarea>
            </div>
            <button className="btn btn-primary border border-light" onClick={uppercase} >Convert to Uppercase</button>
            
            <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2 border border-light">Speak</button>


        </div>

        <div className="container" style={myStyles}> 
            <h1>Your text summary</h1>
            <p>{text.split(/[\s+]/).filter((element)=>{return element.length !== 0}).length} word and {text.length} characters</p>
            <p>{text.length * 0.03} seconds required to read</p>
        </div>
        </>
        
    );
}
Form.defaultProps = {
    heading : "bhai heading daal de"
}
