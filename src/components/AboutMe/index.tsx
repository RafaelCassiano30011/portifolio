/** @format */

import Container from "../../shared/Container";
import Profile from "../../assets/about-me/profile.png";

const AboutMe = () => {
  return (
    <div id="#about-me" className="mt-[91px] w-full max-h-[420px] h-full mb-[86px] px-[10px]">
      <Container className="flex justify-between items-center">
        <img src={Profile} alt="Foto Rafael Cassiano" />
        <div className="w-full max-w-[700px]">
          <h1 className="font-semibold text-5xl text-white mb-10">Rafael Cassiano de Souza</h1>
          <p className="font-normal text-lg text-white mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy
          </p>
          <p className="font-normal text-lg text-white mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy
          </p>
          <p className="font-normal text-lg text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy
          </p>
        </div>
      </Container>
      ;
    </div>
  );
};
export default AboutMe;
