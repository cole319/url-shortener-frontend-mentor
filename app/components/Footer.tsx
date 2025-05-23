import React from "react";
import Image from "next/image";

//internal imports
import FacebookIcon from "../../public/assets/images/icon-facebook.svg";
import TwitterIcon from "../../public/assets/images/icon-twitter.svg";
import PinterestIcon from "../../public/assets/images/icon-pinterest.svg";
import InstagramIcon from "../../public/assets/images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="px-[1rem] md:max-lg:px-[2rem] xll:px-[10rem] bg-[var(--very-dark-violet)] py-[4rem] flex flex-col md:flex-row justify-between items-start space-y-[3rem] md:space-y-0 lg:max-xll:px-[4rem]">
      <h1 className="text-[var(--light-gray)] font-extrabold text-[2rem] md:w-1/4 w-full text-center md:text-left">
        Shortly
      </h1>

      <div className="flex flex-col sm:flex-row w-full md:w-2/4 gap-[3rem] md:gap-[4rem] md:justify-end sm:items-start items-center text-center md:text-left sm:justify-center ">
        <ul className="space-y-2">
          <li className="font-semibold">Features</li>
          <li className="text-[var(--grayish-violet)] text-[0.8rem] hover:underline cursor-pointer">
            Link Shortening
          </li>
          <li className="text-[var(--grayish-violet)] text-[0.8rem] hover:underline cursor-pointer">
            Branded Links
          </li>
          <li className="text-[var(--grayish-violet)] text-[0.8rem] hover:underline cursor-pointer">
            Analytics
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="font-semibold">Resources</li>
          <li className="text-[var(--grayish-violet)] text-[0.8rem] hover:underline cursor-pointer">
            Blog
          </li>
          <li className="text-[var(--grayish-violet)] text-[0.8rem] hover:underline cursor-pointer">
            Developers
          </li>
          <li className="text-[var(--grayish-violet)] text-[0.8rem] hover:underline cursor-pointer">
            Support
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="font-semibold">Company</li>
          <li className="text-[var(--grayish-violet)] text-[0.8rem] hover:underline cursor-pointer">
            About
          </li>
          <li className="text-[var(--grayish-violet)] text-[0.8rem] hover:underline cursor-pointer">
            Our Team
          </li>
          <li className="text-[var(--grayish-violet)] text-[0.8rem] hover:underline cursor-pointer">
            Careers
          </li>
          <li className="text-[var(--grayish-violet)] text-[0.8rem] hover:underline cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex w-full md:w-1/4 md:max-lg:gap-[0.8rem] gap-[2rem] md:justify-end justify-center">
        <a href="#">
          <Image
            src={FacebookIcon}
            height={20}
            width={20}
            alt="facebook icon"
          />
        </a>
        <a href="#">
          <Image src={TwitterIcon} height={20} width={20} alt="twitter icon" />
        </a>
        <a href="#">
          <Image
            src={PinterestIcon}
            height={20}
            width={20}
            alt="pinterest icon"
          />
        </a>
        <a href="#">
          <Image
            src={InstagramIcon}
            height={20}
            width={20}
            alt="instagram icon"
          />
        </a>
      </div>
    </footer>
  );
}
