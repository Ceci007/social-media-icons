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
          <FaFacebookF size={26}  />
        </div>
        <span>Facebook</span>
      </div>
      <div className="button">
        <div className="icon">
        <FaTwitter size={26} />
        </div>
        <span>Twitter</span>
      </div>
      <div className="button">
        <div className="icon">
          <FaInstagram size={26} />
        </div>
        <span>Instagram</span>
      </div>
      <div className="button">
        <div className="icon">
        <FaGithub size={26} />
        </div>
        <span>Github</span>
      </div>
      <div className="button">
        <div className="icon">
        <FaYoutube size={26} />
        </div>
        <span>Youtube</span>
      </div>
    </div>
  )
}

export default App
