import React from "react";
import styles from "./home.module.scss";
import ButtonCircle from "./ButtonCircle";
import Layout from "../layout";

export default () => {
  return (
    <Layout>
      <ButtonCircle className="mx-2 my-4">Run</ButtonCircle>
      <ButtonCircle className="mx-2 my-4">Gym</ButtonCircle>
      <ButtonCircle className="mx-2 my-4">Write</ButtonCircle>
      <ButtonCircle className="mx-2 my-4">+</ButtonCircle>
    </Layout>
  );
};
