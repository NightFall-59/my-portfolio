import { useEffect,useRef } from "react";
import "../styles/AnimatedBackground.css";

export default function AnimatedBackground(){
  const canvasRef=useRef<HTMLCanvasElement>(null);

  useEffect(()=>{
    const canvas=canvasRef.current;
    if(!canvas)return;

    const ctx=canvas.getContext("2d");
    if(!ctx)return;

    let animationId:number;
    let mouse={x:-1000,y:-1000};

    let particles:{
      x:number;
      y:number;
      dx:number;
      dy:number;
      size:number
    }[]=[];

    const resize=()=>{
      canvas.width=window.innerWidth;
      canvas.height=window.innerHeight;

      particles=Array.from({length:120},()=>({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        dx:(Math.random()-.5)*.7,
        dy:(Math.random()-.5)*.7,
        size:Math.random()*2+1
      }));
    };

    const move=(e:MouseEvent)=>{
      mouse.x=e.clientX;
      mouse.y=e.clientY;
    };

    const draw=()=>{
      ctx.clearRect(0,0,canvas.width,canvas.height);

      particles.forEach((p)=>{
        p.x+=p.dx;
        p.y+=p.dy;

        if(p.x<0||p.x>canvas.width)p.dx*=-1;
        if(p.y<0||p.y>canvas.height)p.dy*=-1;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fillStyle="rgba(255,255,255,.8)";
        ctx.fill();
      });

      particles.forEach((a,i)=>{
        particles.slice(i+1).forEach((b)=>{
          const dx=a.x-b.x;
          const dy=a.y-b.y;
          const distance=Math.sqrt(dx*dx+dy*dy);

          if(distance<130){
            ctx.beginPath();
            ctx.moveTo(a.x,a.y);
            ctx.lineTo(b.x,b.y);
            ctx.strokeStyle=`rgba(255,255,255,${.2-distance/650})`;
            ctx.lineWidth=.6;
            ctx.stroke();
          }
        });

        const dx=mouse.x-a.x;
        const dy=mouse.y-a.y;
        const distance=Math.sqrt(dx*dx+dy*dy);

        if(distance<180){
          ctx.beginPath();
          ctx.moveTo(a.x,a.y);
          ctx.lineTo(mouse.x,mouse.y);
          ctx.strokeStyle=`rgba(255,255,255,${.35-distance/600})`;
          ctx.lineWidth=.8;
          ctx.stroke();
        }
      });

      animationId=requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize",resize);
    window.addEventListener("mousemove",move);

    return()=>{
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize",resize);
      window.removeEventListener("mousemove",move);
    };
  },[]);

  return <canvas ref={canvasRef} className="particle-background"/>;
}