import { FC } from "react";
import { Layout as AntLayout } from "antd";
import type { LayoutProps } from "antd/es/layout";

const Layout: FC<LayoutProps> = ({ children, ...props }) => (
  <AntLayout {...props}>{children}</AntLayout>
);

export { Layout }; 