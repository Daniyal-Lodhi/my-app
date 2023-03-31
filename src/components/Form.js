// Shortcut rfc
import React, {useState} from 'react'

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
    const [btn,setbtn] = useState("Enable dark mode")
    const [myStyle,setmyStyle] = useState({
        color : 'black' ,
        backgorundColor : 'white'
    })
    const WordCounterCorrector = ()=>{
        if (text=== "" || text.charAt(text.length-1)===" "){
            return(text.split(" ").length-1)
        }
        else{
            return(text.split(" ").length)
        }
    }
    const themechanger = ()=>{
        if (myStyle.color === 'black'){
            setmyStyle({
                color : 'white' ,
                backgroundColor : 'black'
            })
        setbtn("Enable white mode");
        }
        else{
            setmyStyle({
                color : 'black' ,
                backgroundColor : 'white'
            })
        setbtn("Enable dark mode");

        }
    }
      


    return (
        <>
        <div>

            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange}  id="myBox" rows="10" value={text} style={myStyle}></textarea>
            </div>
            <button className="btn btn-primary" onClick={uppercase} >Convert to Uppercase</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            <button className="btn btn-primary" onClick={themechanger}>{btn}</button>


        </div>

        <div className="container">
            <h1>Your text summary</h1>
            <p>{WordCounterCorrector()} word and {text.length} characters</p>
            <p>{text.length * 0.03} seconds required to read</p>
        </div>
        </>
    );
}
Form.defaultProps = {
    heading : "bhai heading daal de"
}
