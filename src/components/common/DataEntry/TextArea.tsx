import { FC } from "react";
import { Input } from "antd";
import type { TextAreaProps } from "antd/es/input";

const { TextArea: AntTextArea } = Input;

const TextArea: FC<TextAreaProps> = (props) => <AntTextArea {...props} />;

export { TextArea }; 