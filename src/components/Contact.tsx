import {
  Row,
  Col,
  Typography,
  Button,
} from "antd";

import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  FacebookFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";

import "./../styles/Contact.css";

const { Title, Paragraph, Text } = Typography;

function Contact() {
  return (
    <section id="contact" className="contact">

      <Row
        justify="center"
        className="contact-row"
      >

        <Col xs={24}>

          <div className="contact-content">

            {/* TOP AREA */}

            <div className="contact-top">

              <div className="contact-label">
                GET IN TOUCH
              </div>


              {/* SOCIAL LINKS */}

              <div className="contact-actions">

                <div className="contact-socials">

                  {/* FACEBOOK */}

                  <a
                    href="https://www.facebook.com/rorein.nicor.2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Facebook"
                  >
                    <FacebookFilled />
                  </a>


                  {/* EMAIL */}

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=roreinnicor@gmail.com"
                    className="social-link"
                    aria-label="Email"
                  >
                    <MailOutlined />
                  </a>


                  {/* GITHUB */}

                  <a
                    href="https://github.com/NightFall-59"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub"
                  >
                    <GithubOutlined />
                  </a>

                </div>


                {/* CONTACT BUTTON */}

                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  className="contact-button"
                  href="mailto:roreinnicor@gmail.com"
                >
                  Contact Me
                </Button>

              </div>

            </div>


            {/* TITLE */}

            <Title className="contact-title">

              LET'S

              <br />

              <span>WORK</span>

              <br />

              TOGETHER

            </Title>


            {/* DESCRIPTION */}

            <Paragraph className="contact-description">
              Interested in working together? Feel free to contact me
              for freelance projects, internships, collaborations,
              or technology-related opportunities.
            </Paragraph>


            {/* CONTACT INFORMATION */}

            <div className="contact-details">

              {/* EMAIL */}

              <div className="contact-item">

                <div className="contact-icon">
                  <MailOutlined />
                </div>

                <div className="contact-info">

                  <span className="contact-item-label">
                    EMAIL
                  </span>

                  <Text>
                    roreinnicor@gmail.com
                  </Text>

                </div>

              </div>


              {/* PHONE */}

              <div className="contact-item">

                <div className="contact-icon">
                  <PhoneOutlined />
                </div>

                <div className="contact-info">

                  <span className="contact-item-label">
                    PHONE
                  </span>

                  <Text>
                    +63 9674297927
                  </Text>

                </div>

              </div>


              {/* LOCATION */}

              <div className="contact-item">

                <div className="contact-icon">
                  <EnvironmentOutlined />
                </div>

                <div className="contact-info">

                  <span className="contact-item-label">
                    LOCATION
                  </span>

                  <Text>
                    Kidapawan City, Philippines
                  </Text>

                </div>

              </div>

            </div>

          </div>

        </Col>

      </Row>

    </section>
  );
}

export default Contact;