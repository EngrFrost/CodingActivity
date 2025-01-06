import { FC } from "react";
import { Layout } from "antd";
import type { LayoutProps } from "antd/es/layout";

const { Content: AntContent } = Layout;

const Content: FC<LayoutProps> = ({ children, ...props }) => (
  <AntContent {...props}>{children}</AntContent>
);

export { Content }; 