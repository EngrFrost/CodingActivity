import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className="text-center bg-[#222222] !text-[#e5e7eb]">
      ©{new Date().getFullYear()} Your Company Name
    </AntFooter>
  );
};

export default Footer;
