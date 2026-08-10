import { Row, Col, Card, Typography, Button, Modal } from "antd";
import { EyeOutlined, ZoomInOutlined, ZoomOutOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";
import fileImg from "../assets/Quiz.png";
import studentImg from "../assets/Student.png";
import listImg from "../assets/list.png";
import "./../styles/Projects.css";

const { Title, Text } = Typography;

const projects = [
  {
    title: "To-Do List Application",
    type: "React, JavaScript, CSS, Vite",
    image: listImg,
  },
  {
    title: "Student Management System",
    type: "React, TypeScript, Ant Design",
    image: studentImg,
  },
  {
    title: "Quiz Application",
    type: "React, TypeScript, CSS",
    image: fileImg,
  },
];

function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const startPos = useRef({ x: 0, y: 0 });
  const imageStart = useRef({ x: 0, y: 0 });

  const handleView = (image: string) => {
    setSelectedImage(image);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    setOpen(true);
  };

  const zoomIn = () => setZoom(z => Math.min(z + 0.25, 4));

  const zoomOut = () =>
    setZoom(z => {
      const next = Math.max(z - 0.25, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    setZoom(z => {
      const next =
        e.deltaY < 0
          ? Math.min(z + 0.15, 4)
          : Math.max(z - 0.15, 1);

      if (next === 1) setPosition({ x: 0, y: 0 });

      return next;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;

    setDragging(true);
    startPos.current = {
      x: e.clientX,
      y: e.clientY,
    };

    imageStart.current = position;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;

    setPosition({
      x: imageStart.current.x + e.clientX - startPos.current.x,
      y: imageStart.current.y + e.clientY - startPos.current.y,
    });
  };

  const stopDragging = () => setDragging(false);

  return (
    <section id="projects" className="projects">
      <Row gutter={[24, 24]}>
        {projects.map(item => (
          <Col xs={24} md={12} lg={8} key={item.title}>
            <Card className="project-card">
              <img
                src={item.image}
                alt={item.title}
                className="project-image"
              />

              <Title level={4}>{item.title}</Title>

              <Text>{item.type}</Text>

              <br />

              <Button
                icon={<EyeOutlined />}
                onClick={() => handleView(item.image)}
                className="project-view-btn"
              >
                View
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
        centered
        width="80%"
      >
        <div className="project-preview-container">
          <div className="project-zoom-controls">
            <Button
              icon={<ZoomOutOutlined />}
              onClick={zoomOut}
            />

            <Button
              icon={<ZoomInOutlined />}
              onClick={zoomIn}
            />
          </div>

          <div
            className={`project-drag-area ${dragging ? "dragging" : ""}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onWheel={handleWheel}
          >
            <img
              src={selectedImage}
              alt="Project Preview"
              className="project-preview"
              draggable={false}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
              }}
            />
          </div>
        </div>
      </Modal>
    </section>
  );
}

export default Projects;