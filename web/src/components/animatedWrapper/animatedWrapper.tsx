import React, { useState, useEffect } from "react";

interface AnimatedWrapperProps {
  isVisible: boolean;
  children: React.ReactNode;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  isVisible,
  children,
}) => {
  const [animationClass, setAnimationClass] = useState("fade-in");

  useEffect(() => {
    if (isVisible) {
      setAnimationClass("fade-in");
    } else {
      setAnimationClass("fade-out");
    }
  }, [isVisible]);

  return <div className={animationClass}>{children}</div>;
};

export default AnimatedWrapper;
