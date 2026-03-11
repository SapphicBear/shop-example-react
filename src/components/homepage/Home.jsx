import styles from "./home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faUpRightFromSquare";
import { NavLink } from "react-router";

const Home = () => {
    const links = [
        { site: "GitHub", link: "https://github.com/SapphicBear" },
        { site: "BlueSky", link: "https://bsky.app/profile/sleepyscreen.bsky.social" },
        { site: "The Odin Project", link: "https://www.theodinproject.com/" },
    ];

    return (
        <main aria-labelledby="call-to-action" className={styles.main}>
            <div className={`${styles.callToAction} ${styles.border}`}>
                <h1 id="call-to-action">Welcome to the store of the future.</h1>
                <p className={styles.callToActionText}>In the look for something special? Then you have come to the wrong place! In our store-experience, you will <em>storsperience</em> a comfort found only within the cold embrace of death herself. Don't think about it, just jump into the biggest disapointment to grace your life at this current nano-instance!</p>
            </div>

            <div className={`${styles.ad} ${styles.border}`}>
                <h2>Give it a shot! Give in and see what there is!</h2>
                <p>Give in! Give in! Go look, it wont hurt to just check it out!</p>
            </div>
            <div className={`${styles.border} ${styles.buttonArea}`}>
                <h2>Get to our store!</h2>
                <NavLink to="/shop" className={`${styles.btn} ${styles.button}`}>Get Started</NavLink>
            </div>
            <div className={`${styles.border} ${styles.final}`}>
                <h2>You know you want to...</h2>
                <p>This is not a real website. Here are my links</p>
                <ul className={styles.linkArea}>
                    {
                        links.map((link) => {
                            return (
                                <li className={`${styles.border} ${styles.list}`}><a 
                                    href={link.link}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    >
                                        {link.site}<FontAwesomeIcon icon={faUpRightFromSquare} />
                                    </a></li>
                            );
                        })
                    }
                </ul>
            </div>
        </main>
    );
};

export default Home;