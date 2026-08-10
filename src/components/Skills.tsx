import { Row, Col, Typography, Card } from "antd";
import "./../styles/Skills.css";

const { Title, Paragraph, Text } = Typography;

const skills = [
  ["HTML", "Structures web pages and organizes their content."],
  ["CSS", "Styles layouts, colors, spacing, animations, and responsive designs."],
  ["JavaScript", "Adds logic and interactive features to websites."],
  ["TypeScript", "Makes JavaScript applications safer and easier to maintain."],
  ["React", "Builds interactive and reusable web interfaces."],
  ["Ant Design", "Provides ready-made UI components for modern web applications."],
  ["Python", "Used for programming, automation, backend systems, and data tasks."],
  ["Git", "Tracks code changes and helps manage development projects."],
  ["Node.js", "Runs JavaScript on the server for backend development."],
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <Row
        gutter={[40, 40]}
        align="top"
        justify="center"
        className="skills-row"
      >
        <Col xs={24} lg={11}>
          <div className="education">
            <Title level={2}>Education</Title>

            <Card className="education-card">
              <Title level={4}>BS Information Technology</Title>

              <Text className="school">
                Notre Dame of Kidapawan College
              </Text>

              <Paragraph>
                Currently pursuing a Bachelor of Science in Information
                Technology, developing skills in software development,
                computer systems, networking, and IT problem-solving.
              </Paragraph>
            </Card>
          </div>
        </Col>

        <Col xs={24} lg={13}>
          <div className="skills-content">
            <Title level={2}>Skills</Title>

            <div className="skill-list">
              {skills.map(([name, description]) => (
                <div className="skill-item" key={name}>
                  <div className="skill-name">{name}</div>
                  <div className="skill-info">
                    <strong>{name}</strong>
                    <span>{description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Skills;