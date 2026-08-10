import { useEffect, useState } from "react";

export default function PageTransition() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loading-screen">
      <div className="loader">

        <div className="loader-circle">
          <span>R</span>
        </div>

        <h1>ROREIN</h1>

        <div className="loader-line">
          <div className="loader-progress"></div>
        </div>

        <p>LOADING PORTFOLIO</p>

      </div>

      <div className="light light-1"></div>
      <div className="light light-2"></div>

      <style>{`

        .loading-screen {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          background: #0b0b0b;

          display: flex;
          align-items: center;
          justify-content: center;

          z-index: 999999;

          overflow: hidden;

          animation: screenExit 0.8s ease forwards;
          animation-delay: 1.4s;
        }

        .loader {
          position: relative;
          z-index: 2;
          text-align: center;

          animation: loaderAppear 0.8s ease forwards;
        }

        .loader-circle {
          width: 90px;
          height: 90px;

          margin: 0 auto 25px;

          border: 2px solid #d6232a;
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          box-shadow:
            0 0 15px rgba(214, 35, 42, 0.8),
            0 0 50px rgba(214, 35, 42, 0.4);

          animation: circlePulse 1s ease-in-out infinite;
        }

        .loader-circle span {
          color: white;

          font-size: 42px;
          font-weight: 800;

          animation: letterPulse 1s ease-in-out infinite;
        }

        .loader h1 {
          margin: 0;

          color: white;

          font-size: 42px;
          font-weight: 800;

          letter-spacing: 10px;

          animation: titleAppear 1s ease forwards;
        }

        .loader-line {
          width: 260px;
          height: 3px;

          margin: 25px auto 15px;

          background: #242424;

          overflow: hidden;
        }

        .loader-progress {
          width: 100%;
          height: 100%;

          background: #d6232a;

          box-shadow: 0 0 15px #d6232a;

          transform: translateX(-100%);

          animation: progress 1.5s ease forwards;
        }

        .loader p {
          margin: 0;

          color: #777;

          font-size: 11px;

          letter-spacing: 4px;

          animation: textAppear 1s ease forwards;
        }

        .light {
          position: absolute;

          width: 400px;
          height: 400px;

          border-radius: 50%;

          background: #d6232a;

          filter: blur(150px);

          opacity: 0.12;
        }

        .light-1 {
          top: -200px;
          left: -150px;

          animation: lightMove1 4s ease-in-out infinite;
        }

        .light-2 {
          right: -150px;
          bottom: -200px;

          animation: lightMove2 4s ease-in-out infinite;
        }

        @keyframes loaderAppear {

          from {
            opacity: 0;
            transform: scale(0.7);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }

        }

        @keyframes circlePulse {

          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.08);
          }

        }

        @keyframes letterPulse {

          0%,
          100% {
            opacity: 0.7;
          }

          50% {
            opacity: 1;
          }

        }

        @keyframes titleAppear {

          from {
            opacity: 0;
            letter-spacing: 25px;
          }

          to {
            opacity: 1;
            letter-spacing: 10px;
          }

        }

        @keyframes progress {

          from {
            transform: translateX(-100%);
          }

          to {
            transform: translateX(0);
          }

        }

        @keyframes textAppear {

          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }

        }

        @keyframes screenExit {

          from {
            opacity: 1;
            visibility: visible;
          }

          to {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }

        }

        @keyframes lightMove1 {

          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(150px, 100px);
          }

        }

        @keyframes lightMove2 {

          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-150px, -100px);
          }

        }

      `}</style>
    </div>
  );
}