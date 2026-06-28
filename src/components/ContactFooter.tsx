import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

/**
 * A footer containing email, socials, and copyright
 * @param param0 The `className` of the footer. Use `text-{color}` to style
 * text color and `[&_a]:{style}` to control the links.
 * @returns A footer displaying the aforementioned contacts and copyright
 */
export default function ContactFooter({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div
        className="flex flex-col gap-4 items-center 
          text-base text-center"
      >
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <span>
          Have any questions? Reach out to us at
          <br />
          <a className="font-bold" href="mailto:campuscoderscrew@gmail.com">
            campuscoderscrew@gmail.com
          </a>
        </span>

        <div className="flex gap-4 **:size-10">
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

        <span>Copyright © 2026 | Campus Coder Crew</span>
      </div>
    </div>
  );
}
