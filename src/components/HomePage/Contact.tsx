import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// Email and socials
export default function Contact() {
  return (
    <div
      className="flex flex-col gap-4 items-center 
       text-base text-center text-ocean-dark"
    >
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <span>
        Have any questions? Reach out to us at
        <br />
        <a
          className="font-bold transition duration-300 hover:text-ocean-light"
          href="mailto:campuscoderscrew@gmail.com"
        >
          campuscoderscrew@gmail.com
        </a>
      </span>

      <div
        className="flex gap-4 **:size-10 text-ocean-dark
        *:transition *:duration-300 *:hover:text-ocean-light"
      >
        <a href="https://www.instagram.com/umdccc/">
          <FaInstagram />
        </a>
        <a href="https://go.umd.edu/ccc-join-discord">
          <FaDiscord />
        </a>
        <a href="https://github.com/campuscoderscrew">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/company/campus-coders-crew">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
