"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
const Animation = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      duration: 1000,
    });
  });
  return <div>{children}</div>;
};

export default Animation;
