import "../css/Header.css";
import {
  phoneIcon,
  mailIcon,
  facebook,
  google,
  vk,
  youtube,
  user,
  key,
  burger,
} from "../assets";
function Header() {
  return (
    <header>
      <div className="headerTop">
        <div className="contact">
          <div className="phone">
            <img src={phoneIcon} alt="" width={20} />
            <h2>+123 456 789</h2>
          </div>
          <div className="mail">
            <img src={mailIcon} alt="" width={20} />
            <h2>free @psdfreebies.com</h2>
          </div>
        </div>
        <div className="headerTopRight">
          <div className="icons">
            <ul>
              <li>
                <a href="https://facebook.com" target="_blank">
                  <img src={facebook} alt="" width={20} />
                </a>
              </li>
              <li>
                <a href="https://google.com" target="_blank">
                  <img src={google} alt="" width={30} />
                </a>
              </li>
              <li>
                <a href="https://vk.com" target="_blank">
                  <img src={vk} alt="" width={30} />
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank">
                  <img src={youtube} alt="" width={20} />
                </a>
              </li>
            </ul>
          </div>
          <div className="accounts">
            <div className="login">
              <img src={user} width={20} alt="" />
              <h2>Login</h2>
            </div>
            <div className="signup">
              <img src={key} width={20} alt="" />
              <h2>SignUp</h2>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="headerBottom">
        <div className="headline">
          <h1>Explore</h1>
          <h2>CREATIVE TAGLINE HERE</h2>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#page3" className="active">
                HOME
              </a>
            </li>
            <li>
              <a href="#page2">DESTINATION</a>
            </li>
            <li>
              <a href="#page3">DISCOUNT</a>
            </li>
            <li>
              <a href="#page4">ABOUT</a>
            </li>
            <li>
              <a href="#page5">BLOG</a>
            </li>
            <li>
              <a href="#page1">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
