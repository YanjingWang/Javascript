//bootstrap --> forms textarea--> copy the HTML code and paste it in Textform.js and put / at the end of each input tag
//repalce class with className, for with htmlFor, href="#" with href="/", hr with <hr className="dropdown-divider"/>, for input tag add / at then end etc.
//pass props to Textform() function and use it in Textform.js
import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

export default function Textform(props) {
    // const[myStyle, setMyStyle] = useState(0);
    const [text, setText] = useState('Enter text here');
    const handleOnChange = (event) => {
        console.log("Handle On change");
        setText(event.target.value);
    }
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        // setMyStyle({
        //     color: 'red',
        //     backgroundColor: 'black'
        // })
    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        console.log("Clear text was clicked" + text);
        let newText = '';
        setText(newText);
    }
    return (
        <div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 classname='my-3'>{props.heading}</h1>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={text} onChange={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}></textarea>
                    <button type="button" class="btn btn-primary my-3" onClick={handleUpClick}>Uppercase</button>
                    <button type="button" class="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Lowercase</button>
                    <button type="button" class="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear text</button>
                    <label for="floatingTextarea">Comments</label>
                </div>
                <form>
                    <div className="mb-3">
                        <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlfor="exampleInputPassword1" className="form-label" >Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} />
                        <label className="form-check-label" htmlfor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            {/*counting words and characters */}
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
            </div>
        </div>
    )
}

// import React, { useState } from 'react'
// import PropTypes from 'prop-types'

// export default function Textform(props) {
//     const [text, setText] = useState('Enter text here');
//     const handleOnChange = (event) => {
//         console.log("Handle On change");
//         setText(event.target.value);
//     }
//     const handleUpClick = () => {
//         let newText = text.toUpperCase();
//         setText(newText);
//     }
//     const handleLoClick = () => {
//         let newText = text.toLowerCase();
//         setText(newText);
//     }
//     const handleClearClick = () => {
//         let newText = '';
//         setText(newText);
//     }
//     return (
//         <div>
//             <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
//                 <h1 className='my-3'>{props.heading}</h1>
//                 <div className="form-floating">
//                     <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={text} onChange={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}></textarea>
//                     <button type="button" className="btn btn-primary my-3" onClick={handleUpClick}>Uppercase</button>
//                     <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Lowercase</button>
//                     <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear text</button>
//                     <label htmlFor="floatingTextarea">Comments</label>
//                 </div>
//                 <form>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} />
//                         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
//                         <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} />
//                     </div>
//                     <div className="mb-3 form-check">
//                         <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} />
//                         <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//                     </div>
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//             <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
//                 <h1>Your text summary</h1>
//                 <p>{text.split(" ").length} words and {text.length} characters</p>
//                 <p>{0.008 * text.split(" ").length} Minutes read</p>
//             </div>
//         </div>
//     )
// }

