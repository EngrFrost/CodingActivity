import { FC } from "react";
import { Typography } from "antd";
import type { TypographyProps } from "antd/es/typography/Typography";

const { Paragraph: AntParagraph } = Typography;

const Paragraph: FC<TypographyProps<"div">> = ({ children, ...props }) => (
  <AntParagraph {...props}>{children}</AntParagraph>
);

export { Paragraph };
