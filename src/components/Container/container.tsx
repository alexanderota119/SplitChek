import React from "react";
type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="container">{children}</div>
    </div>
  );
};

export default Container;
