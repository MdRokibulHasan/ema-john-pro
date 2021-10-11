import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>Register:Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />

                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-Enter Password" />
                    <br />
                    <input type="sumbit" value="submit" />

                </form>
                <p> Already have an account? <Link to="/login">login</Link></p>
                <div>--------------------------or-------------------------------</div>
                <button className="btn-regular">Google Sing In</button>
            </div>
        </div>
    );
};

export default Register;