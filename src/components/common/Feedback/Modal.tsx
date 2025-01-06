import { FC } from "react";
import { Modal as AntModal } from "antd";
import type { ModalProps } from "antd/es/modal";

const Modal: FC<ModalProps> = ({ children, ...props }) => (
  <AntModal {...props}>{children}</AntModal>
);

export { Modal }; 