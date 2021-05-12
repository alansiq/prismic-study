import React, { useEffect, useRef, useState } from "react";
import Deviceful from "deviceful";
import styles from './App.module.scss';

interface LaptopDeviceful {
  screenshot ?: string,
  screenshotHeight ?: string,
}

function App(props: LaptopDeviceful) {

  const driveIn = [
    {
      object: "model", // Swivel the device from -30 to 0 degrees
      move: "rotation",
      axis: "y",
      duration: 1500,
      easing: "easeOutQuint",
      from: -90,
      delay: 100,

    },
    {
      object: "camera", // Swivel the device from -30 to 0 degrees
      move: "position",
      axis: "x",
      duration: 1200,
      easing: "easeOutQuint",
      from: -100,
    }
  ]

  const parent = useRef();
  const device = new Deviceful({
    screenshot: props.screenshot || '/alansiqueira.png',
    screenshotHeight: props.screenshotHeight || 2563,
    path: "./deviceful",
    onLoadAnimation: driveIn,
    enableFloor: false,
  });

  useEffect(() => {
    device.mount(parent.current);
  }, []);

  return (
    <div className={styles.container}>
      <div ref={parent} className={styles.laptop}>

      </div>
    </div>
  );

}

export default App;