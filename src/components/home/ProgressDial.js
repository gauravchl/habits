import React from "react";
import styles from "./ProgressDial.module.scss";
import * as shape from "d3-shape";
const d3 = { shape };

// arcNumber: Total active arc from 0
const getArc = (arcNumber, totalArc) => {
  const iRadius = 48;
  const oRadius = 50;

  const arcSpan = 360 / totalArc;
  const degTo = arcSpan * arcNumber;
  const degFrom = degTo - arcSpan + 2;

  const radFrom = (degFrom * Math.PI) / 180;
  const radTo = (degTo * Math.PI) / 180;

  const arc = d3.shape
    .arc()
    .outerRadius(oRadius)
    .innerRadius(iRadius)
    .startAngle(radFrom)
    .endAngle(radTo);
  return arc();
};

// total: number
// progress: number
export default (props) => {
  const { total, progress } = props;

  const getPaths = (total, totalFrom) => {
    const paths = [];
    for (let i = 1; i <= total; i++) {
      paths.push(<path key={i} d={getArc(i, totalFrom)} />);
    }
    return paths;
  };

  return (
    <>
      <svg viewBox="0 0 100 100" fill="#6aa4e0" className={styles.svg}>
        <g transform="translate(50, 50)">{getPaths(progress, total)}</g>
      </svg>
      <svg
        viewBox="0 0 100 100"
        className={styles.svg}
        fill="rgba(106, 164, 224, 0.12)"
      >
        <g transform="translate(50, 50)">{getPaths(total, total)}</g>
      </svg>
    </>
  );
};
