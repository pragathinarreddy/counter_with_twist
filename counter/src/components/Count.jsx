import React, { useState } from "react";
import "../../src/App.css"



function Count(){
    const[count, setCount] = useState(0)
    const[step,setStep] = useState(5)
    const[max,setMax]=useState(15)

    const handleIncrement = ()=> {
            setCount  ( ( count + step) > max ? count : count + step)
        
    }
    const handleDecrement = ()=>{
        setCount(count - step)
    }
    const handleReset = ()=>{
        setCount(0)
    }

    return(

        <>
        
        <div className="container">
            <h1>{count}</h1>
                <div className="steps">
                    <h3>steps</h3>
                 {[5,10,15].map((elm) => <button onClick={() => {
                    setStep(elm)
                   }} className={` btn ${step === elm ? "active_color" : ""}`}>{elm}</button>)}
                   <div className="butt">
                   <button onClick={handleIncrement}>Increment</button>
                   <button onClick={handleDecrement}>Decrement</button>
                   <button onClick={handleReset}>Reset</button>

                   </div>

                </div>

            </div >
            <div className="flex">
         <div className="">
            <h3>MAX</h3>
            {[15,100,200].map((elm) => <button onClick = {() => {
                setMax (elm)} }
                className={` btn ${max === elm ? "active_color" : ""}`}
                 >{elm}</button>)}
            </div>     

        </div>
        
        </>
    )
}

// class Count extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             count : 0,
//             step : 5,
//         }
//     }
    
//  handleIncrement = ()=>{
//       this.setState({
//         count : this.state.count + this.state.step
//        })
//    }
//    handleDecrement = () => {
//     this.setState({
//         count : this.state.count - this.state.step
//     })
//    }
//    handleReset = () =>{
//     this.setState({
//         count : 0
//     })
//    }
//     render(){
//         return(
//             <>
//             <div className="container">
//             <h1>{this.state.count}</h1>
//                 <div className="steps">
//                     <h3>steps</h3>
//                    {[5,10,15].map((step) => <button onClick={() => {
//                     this.setState({step : step})
//                    }} className="{this.state.step === step ? 'active__step : ''}">{step}</button>)}
//                    <button onClick={this.handleIncrement}>Increment</button>
//                    <button onClick={this.handleDecrement}>Decrement</button>
//                    <button onClick={this.handleReset}>Reset</button>

//                 </div>

//             </div >


            
//             </>
//         )
//     }
// }

export default Count