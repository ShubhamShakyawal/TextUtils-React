import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!","success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!","success");
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard!","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra spaces removed!","success");
    }
    const handleClear = ()=>{
        setText('');
        props.showAlert("text cleared!","success");
    }
    const [text,setText] = useState('');
    return (
        <>
        <div className={`text-${props.mode === 'light'?'dark':'light'}`}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor : props.mode === 'light'?'white':'#545454',color: props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
            
            
        </div>
        <div className={`container my-3 text-${props.mode === 'light'?'dark':'light'}`}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text: 'Enter text above to preview here'}</p>
        </div>
        </>
    )
}
