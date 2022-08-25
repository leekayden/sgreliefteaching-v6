import React from 'react'
import './Login.css'

console.log("Hello")

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value === ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function Login() {
  return (
    <div>
	<img className="wave" alt='Wave' src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png"/>
	<div className="container">
		<div className="img">
			<img alt='Background' src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/bg.svg"/>
		</div>
		<div className="login-content">
			<form>
				<img alt='User' src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"/>
				<h2 className="title">Welcome</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<h5>Username</h5>
           		   		<input type="text" className="input"/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<h5>Password</h5>
           		    	<input type="password" className="input"/>
            	   </div>
            	</div>
            	<a href="/pw-reset">Forgot Password?</a>
            	<input type="submit" className="btn" value="Login"/>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login