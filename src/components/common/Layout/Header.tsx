import { FC } from "react";
import { Layout } from "antd";
import type { LayoutProps } from "antd/es/layout";

const { Header: AntHeader } = Layout;

const Header: FC<LayoutProps> = ({ children, ...props }) => (
  <AntHeader {...props}>{children}</AntHeader>
);

export { Header }; 