/** @format */

import Container from "../../shared/Container";

import whatsappImage from "../../assets/contact/contact-whatsapp.png";
import instagramImage from "../../assets/contact/contact-instagram.png";
import linkdedImage from "../../assets/contact/contact-linkded.png";
import emailImage from "../../assets/contact/contact-email.png";

const Contact = () => {
  return (
    <Container className="flex flex-col items-center mb-20">
      <p className="font-semibold text-3xl text-white mb-10">Contato</p>
      <div className="flex  space-x-10 justify-center items-center">
        <a href="">
          <img className="max-h-12" src={whatsappImage} alt="" />
        </a>
        <a href="">
          <img src={instagramImage} alt="" />
        </a>
        <a href="">
          <img src={linkdedImage} alt="" />
        </a>
        <a href="">
          <img src={emailImage} alt="" />
        </a>
      </div>
    </Container>
  );
};
export default Contact;
