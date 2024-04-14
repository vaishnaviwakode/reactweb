import { useEffect } from "react";
import FormFAQ from "./FormFAQ";
import styles from "./Faq.module.css";

const Faq = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <section className={styles.faq} data-animate-on-scroll>
      <div className={styles.h2Wrapper}>
        <h1 className={styles.h2}>Frequently asked questions</h1>
      </div>
      <div className={styles.faqs}>
        <FormFAQ />
        <div className={styles.formfaqParent}>
          <FormFAQ
            propDebugCommit="unset"
            propRowGap="20px"
            propMarginTop="unset"
          />
          <FormFAQ
            propDebugCommit="unset"
            propRowGap="20px"
            propMarginTop="-0.1px"
          />
        </div>
        <FormFAQ
          propDebugCommit="unset"
          propRowGap="unset"
          propMarginTop="unset"
        />
      </div>
    </section>
  );
};

export default Faq;
