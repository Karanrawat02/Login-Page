import React from 'react';
import {Google} from "react-bootstrap-icons";
// import {Button,Form} from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div style={{background:"grey",display:"flex"}}>
      <div style={{width: "51rem",background:"white",margin:"auto",height: "100vh"}}>
        <div style={{border :"0.3px grey solid ",borderRadius:"10px",width:"31rem",justifyContent:"center",margin:"auto",background:"white", marginTop: "35px",boxShadow:"0px 0px 10px 5px rgba(0, 0, 0, 0.2)"}}>
          <div >
              <h1 style={{margin:"5px"}}>Want to check out this file? Log in or sign up</h1>
          </div>
          <div >
              <p style={{color:"red"}}>Unable to get profile information from Google</p>
          </div>
          <div className="d-grid gap-2" >
              <button style={{fontSize:"21px",width:"21rem",fontWeight:"bold",height:"47px",margin:"auto",display:"flex",justifyContent:"center",  alignItems:"center",marginTop:"12px"}}>
                <Google size={21} /> &nbsp; Continue with Google
              </button>
          </div>
          <div  >
            <p>or</p>
          </div>
          <div >
            <Form>
            <div className="mb-3" style={{width:"21rem",margin:"auto",border:"3px black solid"}}>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3"  style={{width:"21rem",margin:"auto",border:"3px black solid"}}>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="d-grid"  style={{width:"21rem",margin:"auto"}}>
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </div>

          <p className="Create_account" style={{fontsize:"12px",margin:"15px"}}>
          By clicking "Create account" or "Continue with Google", you agree to the <a style={{textDecoration: "none"}} href="#">Figma TOS</a> and <a style={{textDecoration: "none"}} href="#">Privacy Policy.</a>
          </p>

          <p className="usesingle">
          <a style={{textDecoration: "none"}} href="#">Use single sign-on</a>
          </p>

          <p className="forgot-password text-right">
          Already have an account? <a style={{textDecoration: "none"}} href="#">Login</a>
          </p>
          </Form>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Login;

