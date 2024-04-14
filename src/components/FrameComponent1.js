import FeatureCards from "./FeatureCards";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <section className={styles.pageWrapper}>
      <div className={styles.page}>
        <div className={styles.page1}>
          <div className={styles.page2}>
            <h1 className={styles.h2}>Everything you need</h1>
            <h3 className={styles.body}>
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </h3>
          </div>
        </div>
        <div className={styles.buttonsIcon}>
          <FeatureCards
            integrationEcosystem="Integration ecosystem"
            body="Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."
          />
          <FeatureCards
            integrationEcosystem="Goal setting and tracking"
            body="Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
            propWidth="210px"
          />
          <FeatureCards
            integrationEcosystem="Secure data encryption"
            body="With end-to-end encryption, your data is securely stored and protected from unauthorized access."
            propWidth="197px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
