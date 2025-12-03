import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import './App.css'

function App() {
  return (
    <div className="wrapper">
      <div className="button">
        <div className="icon">
          <FaFacebookF />
        </div>
        <span>Facebook</span>
      </div>
      <div className="button">
        <div className="icon">
        <FaTwitter />
        </div>
        <span>Twitter</span>
      </div>
      <div className="button">
        <div className="icon">
          <FaInstagram />
        </div>
        <span>Instagram</span>
      </div>
      <div className="button">
        <div className="icon">
        <FaGithub />
        </div>
        <span>Github</span>
      </div>
      <div className="button">
        <div className="icon">
        <FaYoutube />
        </div>
        <span>Youtube</span>
      </div>
    </div>
  )
}

export default App
