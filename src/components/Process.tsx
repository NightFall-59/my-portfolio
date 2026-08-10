import { Timeline, Typography, Card } from "antd";
import {
  SearchOutlined,
  BulbOutlined,
  CodeOutlined,
  RocketOutlined,
  CheckCircleOutlined
} from "@ant-design/icons";
import "./../styles/Process.css";

const { Title, Paragraph } = Typography;

function Process() {
  return (
    <section id="process" className="process">

      <Title level={2}>
        My Work Process
      </Title>

      <Card className="process-card">

        <Timeline
          items={[
            {
              dot: <SearchOutlined />,
              children: "Discover & Research"
            },
            {
              dot: <BulbOutlined />,
              children: "Plan & Wireframe"
            },
            {
              dot: <CodeOutlined />,
              children: "Develop the Website"
            },
            {
              dot: <RocketOutlined />,
              children: "Testing & Optimization"
            },
            {
              dot: <CheckCircleOutlined />,
              children: "Launch & Support"
            }
          ]}
        />

        <Paragraph className="process-text">
          Every project follows a structured
          workflow to ensure high-quality,
          responsive, and visually appealing
          results for every client.
        </Paragraph>

      </Card>

    </section>
  );
}

export default Process;