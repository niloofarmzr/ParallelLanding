import React, {useState} from 'react'
import './index.css'
import TextBox from "../../UI/TextBox";
import GradientButton from "../../UI/Buttons/GradientButton";
const Email = () => {
    const [email, setEmail] = useState("");

    const handleInput = e => {
        const value = e.target.value;
        setEmail(value);
    };

    const handleSubmit = () => {
        alert('your email: ' + email)
    };

    return (
        <div className="email">
            <div>Enter Your E-Mail</div>
            <TextBox variant='two'>
                <div className='row padding-5'>
                    <div className='col-xs-12 col-sm-9'>
                        <input type="email" placeholder="Your E-Mail" onChange={e => handleInput(e)}/>
                    </div>
                    <div className='col-xs-3 hide-xs-down'>
                        <div className='email__submit-button'>
                            <GradientButton onClick={handleSubmit}>
                                Submit
                            </GradientButton>
                        </div>
                    </div>
                </div>
            </TextBox>
            <div className='email__submit-button hide-xs-up'>
                <GradientButton fullWidth onClick={handleSubmit}>
                    Submit
                </GradientButton>
            </div>
        </div>
    )
};

export default Email
