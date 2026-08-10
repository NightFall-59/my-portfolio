import { Row, Col, Typography } from "antd";
import "./../styles/Experience.css";

const { Title, Paragraph } = Typography;

const experiences = [
  {
    number: "01",
    title: "Web Application Development",
    text: "Built responsive web applications using React, TypeScript, Vite, and Ant Design."
  },
  {
    number: "02",
    title: "Computer Hardware & Troubleshooting",
    text: "Hands-on experience diagnosing computer issues, performing system maintenance, and troubleshooting Windows problems."
  },
  {
    number: "03",
    title: "Front-End Development",
    text: "Created responsive interfaces using HTML, CSS, JavaScript, React, and modern UI components."
  },
  {
    number: "04",
    title: "Database & Application Development",
    text: "Worked with CRUD operations, data management, and application logic through academic projects."
  }
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-header">
        <span>ACADEMIC & PROJECT EXPERIENCE</span>
        <Title level={2}>Experience</Title>
        <Paragraph>
          Practical experience developed through IT coursework, personal
          projects, and hands-on development.
        </Paragraph>
      </div>

      <Row gutter={[20, 20]}>
        {experiences.map((item) => (
          <Col xs={24} md={12} key={item.number}>
            <div className="experience-card">
              <div className="experience-number">{item.number}</div>
              <div className="experience-content">
                <Title level={4}>{item.title}</Title>
                <Paragraph>{item.text}</Paragraph>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Experience;