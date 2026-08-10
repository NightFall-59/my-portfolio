import { Card, Typography, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./../styles/Quote.css";

const { Title, Paragraph } = Typography;

function Quote() {
  return (
    <section className="quote">

      <Card className="quote-card">

        <Title level={2}>
          "Good design
          is invisible
          until it
          changes
          everything."
        </Title>

        <Paragraph>
          I believe every project deserves
          thoughtful planning, clean code,
          and an interface that creates a
          memorable experience.
        </Paragraph>

        <Button
          type="primary"
          icon={<ArrowRightOutlined />}
        >
          Let's Talk
        </Button>

      </Card>

    </section>
  );
}

export default Quote;