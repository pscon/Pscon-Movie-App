import React from "react";

const ContentWrapper = ({ children, className }) => {
  return (
    <div className={`w-full py-0 px-5 mx-auto max-w-6xl ${className}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
