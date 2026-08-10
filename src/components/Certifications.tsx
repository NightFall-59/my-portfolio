import { Row,Col,Card,Typography,Button,Modal } from "antd";
import { EyeOutlined,ZoomInOutlined,ZoomOutOutlined } from "@ant-design/icons";
import { useState,useRef } from "react";
import ciscoImg from "../assets/cisco.png";
import "./../styles/Certifications.css";

const { Title,Paragraph } = Typography;

function Certifications(){
  const [open,setOpen]=useState(false);
  const [zoom,setZoom]=useState(1);
  const [position,setPosition]=useState({x:0,y:0});
  const [dragging,setDragging]=useState(false);

  const startPos=useRef({x:0,y:0});
  const imageStart=useRef({x:0,y:0});

  const handleView=()=>{
    setZoom(1);
    setPosition({x:0,y:0});
    setOpen(true);
  };

  const zoomIn=()=>setZoom(z=>Math.min(z+.25,4));

  const zoomOut=()=>setZoom(z=>{
    const next=Math.max(z-.25,1);
    if(next===1)setPosition({x:0,y:0});
    return next;
  });

  const handleWheel=(e:React.WheelEvent)=>{
    e.preventDefault();

    setZoom(z=>{
      const next=e.deltaY<0
        ?Math.min(z+.15,4)
        :Math.max(z-.15,1);

      if(next===1)setPosition({x:0,y:0});
      return next;
    });
  };

  const handleMouseDown=(e:React.MouseEvent)=>{
    if(zoom<=1)return;

    setDragging(true);
    startPos.current={
      x:e.clientX,
      y:e.clientY
    };
    imageStart.current=position;
  };

  const handleMouseMove=(e:React.MouseEvent)=>{
    if(!dragging)return;

    setPosition({
      x:imageStart.current.x+e.clientX-startPos.current.x,
      y:imageStart.current.y+e.clientY-startPos.current.y
    });
  };

  const stopDragging=()=>setDragging(false);

  return(
    <section id="certifications">

      <Title level={2}>
        Certifications
      </Title>

      <Row gutter={[24,24]}>
        <Col xs={24} md={8}>

          <Card
            hoverable
            className="certificate-card"
          >

            <img
              src={ciscoImg}
              alt="CISCO"
              className="certificate-image"
            />

            <Title level={4}>
              CISCO
            </Title>

            <Paragraph>
              2025
            </Paragraph>

            <Button
              icon={<EyeOutlined/>}
              onClick={handleView}
            >
              View
            </Button>

          </Card>

        </Col>
      </Row>

      <Modal
        open={open}
        footer={null}
        onCancel={()=>setOpen(false)}
        centered
        width="80%"
      >

        <div className="certificate-preview-container">

          <div className="certificate-zoom-controls">
            <Button
              icon={<ZoomOutOutlined/>}
              onClick={zoomOut}
            />

            <Button
              icon={<ZoomInOutlined/>}
              onClick={zoomIn}
            />
          </div>

          <div
            className={`certificate-drag-area ${
              dragging ? "dragging" : ""
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onWheel={handleWheel}
          >

            <img
              src={ciscoImg}
              alt="CISCO Certificate"
              className="certificate-preview"
              draggable={false}
              style={{
                transform:
                  `translate(${position.x}px,${position.y}px) scale(${zoom})`
              }}
            />

          </div>

        </div>

      </Modal>

    </section>
  );
}

export default Certifications;