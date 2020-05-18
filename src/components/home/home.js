import React from "react";
import styles from "./home.module.scss";
import ButtonCircle from "./ButtonCircle";
import Layout from "../layout";

export default (props) => {
  const { loading, habits } = props;

  return (
    <Layout>
      <div className={styles.container + " mt-2"}>
        {loading ? "loading..." : null}
        {habits &&
          habits.map((h) => (
            <ButtonCircle key={h.id} className="mx-2 my-4">
              {h.name}
            </ButtonCircle>
          ))}

        <ButtonCircle className="mx-2 my-4">+</ButtonCircle>
      </div>
    </Layout>
  );
};

//#f9807d
