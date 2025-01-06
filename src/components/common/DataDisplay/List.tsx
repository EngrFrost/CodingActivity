import { FC } from "react";
import { List as AntList, ListProps } from "antd";

const List: FC<ListProps<any>> = ({ children, ...props }) => (
  <AntList {...props}>{children}</AntList>
);

export { List };
