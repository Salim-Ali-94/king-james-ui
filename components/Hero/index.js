import styles from "./styles.module.css";
import CTAButton from "../CTAButton";


export default function Hero() {

    return (

        <div className={styles.heroContainer}>

            <div className={styles.overlay}>

                <div className={styles.headingSection}>
                    <p className={styles.heading}>Live with Confidence</p>
                </div>

                <div className={styles.copySection}>
                    <p className={styles.text}>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
                </div>

                <CTAButton title="View projects"
                           colour="var(--primary)"
                           text_colour="#fff" />

            </div>

        </div>

    );

}