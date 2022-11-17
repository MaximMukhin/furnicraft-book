import React, { PropsWithChildren } from "react";

interface FooterProps {}

export const Footer: React.FC<PropsWithChildren<FooterProps>> = (props) => {
  const { children } = props;

  return <div>Footer</div>;
};
