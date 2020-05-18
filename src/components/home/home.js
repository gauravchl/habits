import React from "react";
import styles from "./home.module.scss";
import ButtonCircle from "./ButtonCircle";
import Layout from "../layout";

export default () => {
  return (
    <Layout>
      <div className={styles.container + " mt-2"}>
        <ButtonCircle className="mx-2 my-4">Run</ButtonCircle>
        <ButtonCircle className="mx-2 my-4">Yoga</ButtonCircle>
        <ButtonCircle className="mx-2 my-4">Write</ButtonCircle>
        <ButtonCircle className="mx-2 my-4">+</ButtonCircle>
      </div>
    </Layout>
  );
};

//#f9807d
