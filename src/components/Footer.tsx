import { Layout, Typography, Space } from "antd";
import {
  GithubOutlined,
  FacebookOutlined,
  LinkedinOutlined
} from "@ant-design/icons";
import "./../styles/Footer.css";

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

function Footer() {
  return (
    <AntFooter className="footer">

      <Text className="footer-text">
        © 2026 Rorein Nicor.
        All Rights Reserved.
      </Text>

      <Space size={25}>

        <GithubOutlined className="footer-icon" />

        <FacebookOutlined className="footer-icon" />

        <LinkedinOutlined className="footer-icon" />

      </Space>

    </AntFooter>
  );
}

export default Footer;