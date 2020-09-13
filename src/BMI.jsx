import React from 'react';

function BMI(props){

    const [height, setHeight] = React.useState(null);
    const [weight, setWeight] = React.useState(null);
    const [bmi, setBMI] = React.useState(null);
    const [message, setMessage] = React.useState(null);

    const heightchange = (e) => {
        setHeight(e.target.value);
        //this.setState({height: e.target.value});
        //e.preventDefault();
    }

    const weightchange = (e) => {
        setWeight(e.target.value);
        //this.setState({weight: e.target.value});
        //e.preventDefault();
    }

    const calBMI = () => {
        var message = "";
        var heightSquared = (height/100*height/100);
        var bmi = weight/heightSquared;

        if( bmi >= 18.5  && bmi <= 24.99 ){
            message = "You are in a healthy weight range";
        }
        else if(bmi >= 25 && bmi <= 29.9){
            message = "You are overweight";
        }
        else if(bmi >= 30){
            message ="You are obese";
        }
        else if(bmi < 18.5){
            message = "You are under weight";
        }
        setBMI(bmi);
        setMessage(message);
    }

  return <>
    <label>Calculator BMI ({props.name})</label>

    <input onChange={e => heightchange(e)}/>
    <input onChange={e => weightchange(e)}/>
    
    <button onClick={calBMI}>Submit</button>

    <p>Height : {height}</p>
    <p>Weight : {weight}</p>
    <p>BMI : {bmi}</p>
    <p>{message}</p>

    </>
}

export default BMI;