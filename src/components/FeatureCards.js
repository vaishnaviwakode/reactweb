import { useMemo } from "react";
import styles from "./FeatureCards.module.css";

const FeatureCards = ({ integrationEcosystem, body, propWidth }) => {
  const integrationEcosystemStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.featureCards}>
      <button className={styles.iconsWrapper}>
        <img className={styles.icons} alt="" src="/icons-2.svg" />
      </button>
      <div className={styles.integrationEcosystemParent}>
        <b
          className={styles.integrationEcosystem}
          style={integrationEcosystemStyle}
        >
          {integrationEcosystem}
        </b>
        <div className={styles.body}>{body}</div>
      </div>
    </div>
  );
};

export default FeatureCards;
