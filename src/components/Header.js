import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { usePortfolio } from "../hooks/usePortfolio"; // Import the hook and provider

const Header = () => {

  const ref = useRef(null);
  const prevScrollY = useRef(0);

  const { github, linkedIn, email } = usePortfolio();

  const socials = [
    {
      icon: faEnvelope,
      url: `mailto: ${email}`,
    },
    {
      icon: faGithub,
      url: github,
    },
    {
      icon: faLinkedin,
      url: linkedIn,
    },
    // {
    //   icon: faMedium,
    //   url: "https://medium.com",
    // },
    // {
    //   icon: faStackOverflow,
    //   url: "https://stackoverflow.com",
    // },
  ];

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    prevScrollY.current = window.scrollY;
    //console.log('prevScrollY:: ', prevScrollY.current);
    const handleScroll = (e) => {
      const scrollY = window.scrollY;
      //console.log('scrollY:: ', scrollY);

      if(scrollY > prevScrollY.current) {
        ref.current.style.transform = 'translateY(-200px)';
      } else {
        ref.current.style.transform = 'translateY(0)';
      }

      prevScrollY.current = scrollY;

    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <Box
      ref={ref}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#092d4d"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */
              <HStack spacing={8}>
                {socials.map((social, index) => (
                  <a href={social.url} key={index} target="_blank">
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                ))}
              </HStack>
            }
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="/#contact-me" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
