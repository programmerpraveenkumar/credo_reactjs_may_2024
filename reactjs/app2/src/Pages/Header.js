export default function Header(props){
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
                  <li class="scroll-to-section"><a href="/home" className={props?.pageName=='home'?"active":null}>Home</a></li>
                  <li class="scroll-to-section"><a href="/service" className={props?.pageName=='service'?"active":null}>Services</a></li>
                  <li class="scroll-to-section"><a href="/about"  className={props?.pageName=='about'?"active":null}>About</a></li>
                  <li class="scroll-to-section"><a href="#pricing">Pricing</a></li>
                  <li class="scroll-to-section"><a href="#newsletter">Newsletter</a></li>
                  <li><div class="gradient-button"><a id="modal_trigger" href="#modal"><i class="fa fa-sign-in-alt"></i> Sign In Now</a></div></li> 
                </ul>        
                <a class='menu-trigger'>
                    <span>Menu</span>
                </a>
              
              </nav>
            </div>
          </div>
        </div>
      </header>
            </>
    )

}