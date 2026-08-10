import { useState } from "react";
import { Button, Typography } from "antd";
import {
  SettingOutlined,
  MoonOutlined,
  SunOutlined
} from "@ant-design/icons";
import "../styles/Navbar.css";

const { Title } = Typography;

function Navbar({ darkMode, setDarkMode }: any) {
  const [open, setOpen] = useState(false);

  const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string
) => {
  e.preventDefault();

  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 500);
};

  return (
    <div className={`nav-dock ${open ? "open" : ""}`}>
      <Button
        type="text"
        className="nav-settings"
        icon={<SettingOutlined />}
        onClick={() => setOpen(!open)}
      />

      <div className="nav-menu">
        <div className="nav-logo">
          <Title level={3}>RN</Title>
        </div>

        <div className="nav-links">
        <a href="#hero" onClick={(e) => handleNavClick(e, "hero")}>Home</a>
        <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
        <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</a>
        <a href="#experience" onClick={(e) => handleNavClick(e, "experience")}>Experience</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</a>
        <a href="#certifications" onClick={(e) => handleNavClick(e, "certifications")}>Certifications</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
        </div>

        <div className="nav-right">
          <Button
            type="text"
            className="theme-btn"
            icon={darkMode ? <SunOutlined /> : <MoonOutlined />}
            onClick={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;