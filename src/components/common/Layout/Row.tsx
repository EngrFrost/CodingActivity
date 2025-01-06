import { FC } from "react";
import { Row as AntRow } from "antd";
import type { RowProps } from "antd/es/grid/row";

const Row: FC<RowProps> = ({ children, ...props }) => (
  <AntRow {...props}>{children}</AntRow>
);

export { Row }; 