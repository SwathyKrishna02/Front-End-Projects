import { BsFacebook,BsInstagram,BsTwitter,BsYoutube } from "react-icons/bs";

function Footer(){
    return(
     <div className="bg-dark text-light py-5 px-3">
      <div className="container">
        <div className="mb-4 d-flex gap-4">
          <BsFacebook/>
          <BsInstagram/>
          <BsTwitter/>
          <BsYoutube/>
        </div>
      </div>

      <div className="row">
        <div className="col-6 col-md-3">
          <ul className="list-unstyled">
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
            <li><button className="btn btn-outline-secondary btn-sm mt-4">Service Code</button></li>
          </ul>
        </div>

        <div className="col-6 col-md-3">
          <ul className="list-unstyled">
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
      </div>

      <div className="col-6 col-md-3">
        <ul className="list-unstyled">
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
        </ul>
      </div>

      <div className="col-6 col-md-3">
        <ul className="list-unstyled">
          <li>Media Centre</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>
      </div>

      <p className="text-secondary mt-4" style={{fontSize:"0.9rem"}}>
        @20xx-20xx MovieFlix, Inc.
      </p>

      </div>
    )
}
export default Footer;