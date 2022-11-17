import React, { PropsWithChildren } from "react";

interface HeaderProps {}

export const Header: React.FC<PropsWithChildren<HeaderProps>> = (props) => {
  const { children } = props;

  return <div>Header</div>;
};
