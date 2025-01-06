import { FC } from "react";
import { Menu as AntMenu } from "antd";
import type { MenuProps } from "antd/es/menu";

const Menu: FC<MenuProps> = ({ children, ...props }) => (
  <AntMenu {...props}>{children}</AntMenu>
);

export { Menu }; 