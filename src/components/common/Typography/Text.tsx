import { FC } from "react";
import { Typography } from "antd";
import type { TypographyProps } from "antd/es/typography/Typography";

const { Text: AntText } = Typography;

const Text: FC<TypographyProps<"span">> = ({ children, ...props }) => (
  <AntText {...props}>{children}</AntText>
);

export { Text };
