import { FC } from "react";
import { Layout } from "antd";
import type { LayoutProps } from "antd/es/layout";

const { Footer: AntFooter } = Layout;

const Footer: FC<LayoutProps> = ({ children, ...props }) => (
  <AntFooter {...props}>{children}</AntFooter>
);

export { Footer }; 