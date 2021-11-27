import React, {useState} from 'react'

export default function Text(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase");
        
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleUpClick2 = ()=>{
        console.log("LowerCase");
        
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text Here');
   
    return (
        <div>
            <div className="container">
            <h1>Enter Your Text to Analayze</h1>
            <div className="mb-3">
            <textarea className="form-control" placeholder="Enter your Text here" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary">Convert to UpperCase</button>
            <button onClick={handleUpClick2} className="btn btn-dark">Convert to LowerCase</button>
        </div>
        </div>
            
    
    )
}
