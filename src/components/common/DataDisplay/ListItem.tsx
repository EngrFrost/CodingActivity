import { FC } from "react";
import { List } from "antd";
import type { ListItemProps } from "antd/es/list";

const ListItem: FC<ListItemProps> = ({ children, ...props }) => (
  <List.Item {...props}>{children}</List.Item>
);

export { ListItem }; 