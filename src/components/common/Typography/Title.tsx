import { FC } from "react";
import { Typography } from "antd";
import type { TitleProps } from "antd/es/typography/Title";

const { Title: AntTitle } = Typography;

const Title: FC<TitleProps> = ({ children, ...props }) => (
  <AntTitle {...props}>{children}</AntTitle>
);

export { Title };
