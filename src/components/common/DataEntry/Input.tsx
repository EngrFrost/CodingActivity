import { FC } from "react";
import { Input as AntInput, InputProps } from "antd";

const Input: FC<InputProps> = (props) => <AntInput {...props} />;

export { Input };
