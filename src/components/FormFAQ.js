import { useMemo } from "react";
import styles from "./FormFAQ.module.css";

const FormFAQ = ({ propDebugCommit, propRowGap, propMarginTop }) => {
  const formFAQStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
      rowGap: propRowGap,
      marginTop: propMarginTop,
    };
  }, [propDebugCommit, propRowGap, propMarginTop]);

  return (
    <div className={styles.formfaq} style={formFAQStyle}>
      <b className={styles.howDoesThe}>How does the pricing work for teams</b>
      <div className={styles.frame}>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
    </div>
  );
};

export default FormFAQ;
