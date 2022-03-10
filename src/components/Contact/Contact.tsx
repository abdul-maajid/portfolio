import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact() {

  return (
    <Container id="contato">
      <header>
        <h2>Contact</h2>
        <p>If you've seen my potential or want to talk to me, don't hesitate to send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:amaajid0@gmail.com">amaajid0@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+5531981213843">(31) 98121-3843</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}