import React, { PropsWithChildren } from "react";

interface PageProps {}

export const Page: React.FC<PropsWithChildren<PageProps>> = (props) => {
  const { children } = props;

  return <div>Привет {children}</div>;
};
