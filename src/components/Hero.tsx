import HomeBackground from "./HomeBackground";
import { Row,Col,Typography } from "antd";
import profileImg from "../assets/profile.jpg";
import HeroAnnouncement from "./HeroAnnouncement";
import "./../styles/Hero.css";

const { Title,Text } = Typography;

function Hero(){
return(
  <section id="hero" className="hero">

    <HomeBackground/>

    <div className="hero-bg-word">
      PORTFOLIO
    </div>

    <Row align="middle" className="hero-row">
      <Col xs={24} lg={14} className="hero-left">

        <div className="hero-small-line">
          <span/>WEB DEVELOPER / FRONT END
        </div>

        <Text className="intro">
          HELLO, I'M
        </Text>

        <Title className="hero-name">
          Rorein<br/><span>Nicor</span>
        </Title>

        <Title level={2} className="hero-job">
          Web Designer
        </Title>

        <HeroAnnouncement/>

      </Col>

      <Col xs={24} lg={10} className="hero-right">
        <div className="hero-image-wrap">

          <div className="image-number">01</div>
          <div className="image-top-label">WEB DESIGN</div>
          <div className="image-line"/>
          <div className="image-corner" />
          
          <img
            src={profileImg}
            alt="Rorein Nicor"
            className="profile-photo"
          />

          <div className="image-bottom">
            <span>ROREIN NICOR</span>
            <span>2026</span>
          </div>

        </div>
      </Col>
    </Row>

    <div className="hero-side-text">
      DESIGN<br/>
      DEVELOP<br/>
      CREATE
    </div>

  </section>
);
}

export default Hero;