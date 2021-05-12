import styles from './AboutMe.module.scss';
import { FiGitPullRequest, FiPenTool, FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../SectionHeading';


const AboutMe = () => {

    return (
        <>
            <div className={styles.AboutContainer}>
                <SectionHeading
                    number={1}
                    text="About me"
                />

                <div className={styles.ContentContainer}>
                    <div className={styles.TextContainer}>
                        <p>A fullstack developer with a strong background in Product Design (UI/UX Designer). I am a specialist in transforming ideas in successful digital products</p>

                        <div>Tab1 Tab2</div>
                    </div>

                    <div className={styles.Images}>
                            Images
                    </div>
                </div>



            </div>

        </>
    )
}


export default AboutMe;