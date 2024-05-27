// import React, { useState } from "react";
// import classNames from "classnames";
// import "./Login.css";

// const Login = () => {
//   const [isSignUpActive, setIsSignUpActive] = useState(false);

//   const toggleSignUp = () => {
//     setIsSignUpActive(!isSignUpActive);
//   };

//   return (
//     <div className="body-container">
//       <div className={classNames("container", { "right-panel-active": isSignUpActive })}>
//         <div className="form-container sign-up-container">
//           <form action="#">
//             <h1>Create Account</h1>
//             <input type="text" placeholder="Name" className="input-field" />
//             <input type="email" placeholder="Email" className="input-field" />
//             <input type="password" placeholder="Password" className="input-field" />
//             <button className="buttonForSign">SIGN UP</button>
//           </form>
//         </div>
//         <div className="form-container sign-in-container">
//           <form action="#">
//             <h1>Sign In</h1>
//             <input type="email" placeholder="Email" className="input-field" />
//             <input type="password" placeholder="Password" className="input-field" />
//             <a href="#">Forgot your password?</a>
//             <button className="buttonForSign">SIGN IN</button>
//           </form>
//         </div>
//         <div className="overlay-container">
//           <div className="overlay">
//             <div className={classNames("overlay-panel", "overlay-left", { "right-panel-active": isSignUpActive })}>
//               <h1>Welcome Back!</h1>
//               <button className="buttonForSign" onClick={toggleSignUp} id="signIn">Sign In</button>
//             </div>
//             <div className={classNames("overlay-panel", "overlay-right", { "right-panel-active": isSignUpActive })}>
//               <h1>Join The Community</h1>
//               <p>Join Us on a new adventure of helping</p>
//               <button className="buttonForSign" onClick={toggleSignUp} id="signUp">Sign Up</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;