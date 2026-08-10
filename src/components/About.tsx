import { Row, Col, Typography, Card } from "antd";
import "./../styles/About.css";

const { Title, Paragraph } = Typography;

function About() {
  return (
    <section id="about" className="about">

      {/* ABOUT CONTENT */}
      <Row
        gutter={[25, 25]}
        align="middle"
        justify="center"
        className="about-row"
      >

        <Col xs={24} lg={11}>
          <div className="about-text">

            <Title level={2}>
              About Me
            </Title>

            <Paragraph>
              I am a 3rd-year Information Technology student at
              Notre Dame of Kidapawan College with an interest in
              software development, computer systems, and technology
              solutions. I continuously improve my technical skills
              through hands-on projects and learning new technologies
              to grow as an IT professional.
            </Paragraph>

          </div>
        </Col>


        <Col xs={24} lg={9}>

          <Card className="about-card">

            <Title level={4}>
              Quick Info
            </Title>

            <p>
              <b>Name:</b> Rorein Johnson M. Nicor
            </p>

            <p>
              <b>Age:</b> 20 years old
            </p>

            <p>
              <b>Course:</b> Bachelor of Science in Information Technology
            </p>

            <p>
              <b>Location:</b> Kidapawan City
            </p>

          </Card>

        </Col>

      </Row>


      {/* STATS */}
      <Row
        gutter={[24, 24]}
        justify="center"
        className="about-stats"
      >

        <Col xs={24} md={8}>
          <div className="about-stat-card">

            <div className="about-stat-number">
              2+
            </div>

            <div className="about-stat-label">
              Years Experience
            </div>

          </div>
        </Col>


        <Col xs={24} md={8}>
          <div className="about-stat-card">

            <div className="about-stat-number">
              3+
            </div>

            <div className="about-stat-label">
              Projects Completed
            </div>

          </div>
        </Col>


        <Col xs={24} md={8}>
          <div className="about-stat-card">

            <div className="about-stat-number">
              3+
            </div>

            <div className="about-stat-label">
              Clients
            </div>

          </div>
        </Col>

      </Row>

    </section>
  );
}

export default About;