import { useEffect, useState } from "react";

export default function PageChange() {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href?.startsWith("#")) return;

      const section = document.querySelector(href);
      if (!section) return;

      e.preventDefault();
      setTransition(true);

      setTimeout(() => {
        section.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
      }, 250);

      setTimeout(() => {
        setTransition(false);
      }, 550);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!transition) return null;

  return (
    <div className="page-change">
      <div className="wipe black" />
      <div className="wipe red" />

      <style>{`
        .page-change {
          position: fixed;
          inset: 0;
          z-index: 99998;
          pointer-events: none;
          overflow: hidden;
        }

        .wipe {
          position: absolute;
          top: -20%;
          left: -120%;
          width: 140%;
          height: 140%;
          transform: skewX(-15deg);
        }

        .black {
          background: #0b0b0b;
          animation: wipeBlack .55s cubic-bezier(.77,0,.18,1) forwards;
        }

        .red {
          background: #d6232a;
          animation: wipeRed .55s cubic-bezier(.77,0,.18,1) forwards;
        }

        @keyframes wipeBlack {
          0% {
            left: -120%;
          }
          45% {
            left: -5%;
          }
          100% {
            left: 120%;
          }
        }

        @keyframes wipeRed {
          0% {
            left: -126%;
          }
          45% {
            left: -11%;
          }
          100% {
            left: 114%;
          }
        }
      `}</style>
    </div>
  );
}