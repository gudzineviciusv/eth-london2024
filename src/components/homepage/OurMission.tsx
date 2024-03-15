import React from 'react';
import styles from 'styles/modules/OurMission.module.css';
import ourTeamImage from "assets/images/our-team.jpg";

const OurMission: React.FC = () => {
    return (
        <>
            <section className={`${styles["our-mission"]}`}>
                <div className={`${styles.container}`}>
                    <div className={`${styles.row} ${styles["align-items-center"]}`}>
                        <div className={`${styles["col-img"]}`}>
                            <div className={`${styles.content}`}>
                                <img className={`${styles["img-fluid"]} ${styles["rounded-circle"]}`}
                                     src={ourTeamImage}
                                     alt="Our Team"
                                     title="Our Team"/>
                            </div>
                        </div>
                        <div className={`${styles["col-text"]}`}>
                            <div className={`${styles.content}`}>
                             Some content about us
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurMission;
