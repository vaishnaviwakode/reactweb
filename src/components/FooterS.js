import { useEffect } from "react";
import styles from "./FooterS.module.css";

const FooterS = () => {
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
    <footer className={styles.footerS} data-animate-on-scroll>
      <div className={styles.yourCompanyIncAllRightsWrapper}>
        <div className={styles.yourCompanyInc}>
          @ 2024 Your Company, Inc. All rights reserved
        </div>
      </div>
      <div className={styles.socialsParent}>
        <img
          className={styles.socialsIcon}
          loading="lazy"
          alt=""
          src="/socials.svg"
        />
        <img
          className={styles.socialsIcon1}
          loading="lazy"
          alt=""
          src="/socials-1.svg"
        />
        <img
          className={styles.socialsIcon2}
          loading="lazy"
          alt=""
          src="/socials-2.svg"
        />
        <input className={styles.socials} type="checkbox" />
        <img
          className={styles.socialsIcon3}
          loading="lazy"
          alt=""
          src="/socials-4.svg"
        />
        <img
          className={styles.socialsIcon4}
          loading="lazy"
          alt=""
          src="/socials-5.svg"
        />
      </div>
    </footer>
  );
};

export default FooterS;
