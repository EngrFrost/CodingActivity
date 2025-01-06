import { FC } from "react";
import { Tag as AntTag, TagProps } from "antd";

const Tag: FC<TagProps> = ({ children, ...props }) => (
  <AntTag {...props}>{children}</AntTag>
);

export { Tag };
