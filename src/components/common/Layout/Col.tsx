import { FC } from "react";
import { Col as AntCol } from "antd";
import type { ColProps } from "antd/es/grid/col";

const Col: FC<ColProps> = ({ children, ...props }) => (
  <AntCol {...props}>{children}</AntCol>
);

export { Col }; 