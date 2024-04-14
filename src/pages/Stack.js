import NavBarDesktop from "../components/NavBarDesktop";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Faq from "../components/Faq";
import FrameComponent from "../components/FrameComponent";
import FooterS from "../components/FooterS";
import styles from "./Stack.module.css";

const Stack = () => {
  return (
    <div className={styles.stack}>
      <div className={styles.bar}>
        <div className={styles.thisPageIsIncludedInAFreParent}>
          <div className={styles.thisPageIs}>
            This page is included in a free SaaS Website Kit.
          </div>
          <div className={styles.viewTheCompleteKitParent}>
            <div className={styles.viewTheComplete}>View the complete Kit</div>
            <img className={styles.icons} alt="" src="/icons.svg" />
          </div>
        </div>
      </div>
      <NavBarDesktop />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <section className={styles.buttonsIconWrapper}>
        <div className={styles.buttonsIcon}>
          <div className={styles.buttonsIconInner}>
            <div className={styles.h2Parent}>
              <h1 className={styles.h2}>Intuitive interface</h1>
              <h3 className={styles.body}>
                Celebrate the joy of accomplishment with an app designed to
                track your progress, motivate your efforts, and celebrate your
                successes, one task at a time.
              </h3>
            </div>
          </div>
          <div className={styles.wrapperAppNight}>
            <img
              className={styles.appNightIcon}
              loading="lazy"
              alt=""
              src="/app-night@2x.png"
            />
          </div>
        </div>
      </section>
      <Faq />
      <FrameComponent />
      <FooterS />
    </div>
  );
};

export default Stack;
