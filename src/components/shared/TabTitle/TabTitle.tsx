import React, { useEffect } from "react";

interface TabTitleProps {
  title?: string;
}

export const TabTitle: React.FC<TabTitleProps> = (props) => {
  const { title } = props;

  useEffect(() => {
    if (typeof title === "string") {
      document.title = title;
    }
  }, [title]);

  return null;
};
