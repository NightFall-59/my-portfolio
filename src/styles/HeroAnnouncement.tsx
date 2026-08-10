import { useEffect,useRef } from "react";
import "../styles/HeroAnnouncement.css";

function HeroAnnouncement(){
  const textRef=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    let position=0;
    let frame:number;

    const animate=()=>{
      if(textRef.current){
        position-=1;

        if(Math.abs(position)>=textRef.current.scrollWidth/2){
          position=0;
        }

        textRef.current.style.transform=`translateX(${position}px)`;
      }

      frame=requestAnimationFrame(animate);
    };

    frame=requestAnimationFrame(animate);

    return()=>cancelAnimationFrame(frame);
  },[]);

  return(
    <div className="hero-announcement">
      <div ref={textRef} className="hero-announcement-track">
        <span>
          I build modern websites with clean UI, responsive layouts, and engaging user experiences using React, TypeScript, and Ant Design.
        </span>
        <span>
          I build modern websites with clean UI, responsive layouts, and engaging user experiences using React, TypeScript, and Ant Design.
        </span>
      </div>
    </div>
  );
}

export default HeroAnnouncement;