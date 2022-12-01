import React, { PropsWithChildren } from "react";

interface TabTitleProps {
  tabTitle?: string;
}

export const TabTitle: React.FC<PropsWithChildren<TabTitleProps>> = (props) => {
  const { tabTitle } = props;

  if (typeof tabTitle === "string") {
    document.title = tabTitle;
  }

  return <div></div>;
};
