import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/sieclogo.png'
import './FormInput.css'

function FormInput() {
  return (
    <div className="login-page">
    <div className='login-page-wrap'>
        <div className="container">
        <div classname='login-logo'>
            <Link to='/' style={{ textDecoration: 'none', backgroundColor: 'transparent' }}>
            <img src={logo} alt='logo' className='siec-logo'/>
            </Link>
            <h1>Create an account</h1>
        </div>
        <div className="login-content">
            <form>
                <div className="login-box">
                    <div className="login-box__left">
                        <div className="login-box__items-wrap">
                        <div className="login-box__login-field">
                            <label for='user-email'>Account</label>
                            <div className="form-group toggle-field">
                                <input placeholder='Email' type='email'></input>
                            </div>
                        </div>

                        <div className="login-box__login-field">
                            <label for='user-password'>Password</label>
                            <div className="form-group toggle-field">
                                <input placeholder='Please enter password' type='password'></input>
                            </div>
                        </div>

                        <div className="login-box__login-field">
                            <label for='user-password'>Confirm Password</label>
                            <div className="form-group toggle-field">
                                <input placeholder='Please confirm password' type='password'></input>
                            </div>
                        </div>

                        <button className='btn-submit' type='submit'>Register</button>

                        <div className="login-box__have-acc clearfix">
                            Have an account already?
                            <Link>Please login here</Link>
                        </div>

                        </div>

                        <div className="login-box__login-line">
                            <span>Or</span>
                        </div>
                        </div>

                        <div className="login-box__right test -center">
                          <a href="" className="login-box__social-item -google" style={{textDecoration:'none'}}>
                            <i className='fa fa-google'> Login with Google</i>
                            </a>  

                            <a href="" className="login-box__social-item -facebook" style={{textDecoration:'none'}}>
                            <i className='fa fa-facebook'> Login with Facebook</i>
                            </a>

                            <a href="" className="login-box__social-item -twitter" style={{textDecoration:'none'}}>
                            <i className='fa fa-twitter'> Login with Twitter</i>
                            </a>

                        </div>
                </div>
            </form>
        </div>
        </div>
    </div>
    </div>
  )
}

export default FormInput
