import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

export const Landing3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load("https://prod.spline.design/iBgDWtGh3GQxvomO/scene.splinecode");
    }
  }, [canvasRef]);

  return (
    <div>
      <canvas
        id="canvas3d"
        style={{ height: "100vh" }}
        ref={canvasRef}
      ></canvas>
    </div>
  );
};
