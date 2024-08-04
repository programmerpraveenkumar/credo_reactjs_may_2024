import { useState } from "react"
import { NavLink } from "react-router-dom";

export default function Header(props){
  const[isModal,setIsModal] = useState(false);
    return(<>

<header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                
                <a href="index.html" class="logo">
                  <img src="images/logo.png" alt="Chain App Dev"/>
                </a>
                <ul class="nav">
                  <li class="scroll-to-section"><NavLink to="/home" className={props?.pageName=='home'?"active":null}>Home</NavLink></li>
                  <li class="scroll-to-section"><NavLink to="/service" className={props?.pageName=='service'?"active":null}>Services</NavLink></li>
                  <li class="scroll-to-section"><NavLink to="/about"  className={props?.pageName=='about'?"active":null}>About</NavLink></li>
                  <li class="scroll-to-section"><a href="#pricing">Pricing</a></li>
                  <li class="scroll-to-section"><a href="#newsletter">Newsletter</a></li>
                  <li onClick={()=>setIsModal(true)}><div class="gradient-button"><a id="modal_trigger" href="#modal"><i class="fa fa-sign-in-alt"></i> Sign In Now</a></div></li> 
                </ul>        
                <a class='menu-trigger'>
                    <span>Menu</span>
                </a>
              
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div id="modal" class="popupContainer" style={isModal?{"display":"block"}:{"display":"none"}}>
        <div   class="popupHeader">        
            <span class="header_title">Login</span>
            <span onClick={()=>setIsModal(false)} class="modal_close"><i class="fa fa-times"></i></span>
        </div>
    
        <section class="popupBody">
            <div class="social_login">
                <div class="">
                    <a href="#" class="social_box fb">
                        <span class="icon"><i class="fab fa-facebook"></i></span>
                        <span class="icon_title">Connect with Facebook</span>
    
                    </a>
    
                    <a href="#" class="social_box google">
                        <span class="icon"><i class="fab fa-google-plus"></i></span>
                        <span class="icon_title">Connect with Google</span>
                    </a>
                </div>
    
                <div class="centeredText">
                    <span>Or use your Email address</span>
                </div>
    
                <div onClick={()=>setIsModal(false)} class="action_btns">
                    <div class="one_half"><a href="#" id="login_form" class="btn">Login</a></div>
                    <div class="one_half last"><a href="#" id="register_form" class="btn">Sign up</a></div>
                </div>
            </div>
    
            <div class="user_login">
                <form>
                    <label>Email / Username</label>
                    <input type="text" />
                    <br />
    
                    <label>Password</label>
                    <input type="password" />
                    <br />
    
                    <div class="checkbox">
                        <input id="remember" type="checkbox" />
                        <label for="remember">Remember me on this computer</label>
                    </div>
    
                    <div class="action_btns">
                        <div class="one_half"><a href="#" class="btn back_btn"><i class="fa fa-angle-double-left"></i> Back</a></div>
                        <div class="one_half last"><a href="#" class="btn btn_red">Login</a></div>
                    </div>
                </form>
    
                <a href="#" class="forgot_password">Forgot password?</a>
            </div>
    
            <div class="user_register">
                <form>
                    <label>Full Name</label>
                    <input type="text" />
                    <br />
    
                    <label>Email Address</label>
                    <input type="email" />
                    <br />
    
                    <label>Password</label>
                    <input type="password" />
                    <br />
    
                    <div class="checkbox">
                        <input id="send_updates" type="checkbox" />
                        <label for="send_updates">Send me occasional email updates</label>
                    </div>
    
                    <div class="action_btns">
                        <div class="one_half"><a href="#" class="btn back_btn"><i class="fa fa-angle-double-left"></i> Back</a></div>
                        <div class="one_half last"><a href="#" class="btn btn_red">Register</a></div>
                    </div>
                </form>
            </div>
        </section>
    </div>
            </>
    )

}