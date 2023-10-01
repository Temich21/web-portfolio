import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/index'
import styles from './Education.module.scss'
import { ActivePathContext } from '../../context/ActivePath'
import { useContext } from 'react'
import { education, licenses, experience } from '../../costants/education'
import { Projects } from "../Projects/Projects"

export const Education: React.FC = () => {
    const { activePath } = useContext(ActivePathContext)

    return (
        <section id="education">
            <div className={styles.education} >
                <h2 className={styles.heading}>My <span>Journey</span><span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h2>
                <div className={styles.educationRow}>
                    <div className={`${styles.educationColumn} ${styles.educationColumnSecond}`}>
                        <div>
                            <h3 className={styles.title}>Education<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h3>
                            <div className={styles.educationBox}>
                                {education.map(({ id, title, years, programme }) => (
                                    <div className={styles.educationContent} key={id}>
                                        <div className={styles.content}>
                                            <div className={styles.year}><FontAwesomeIcon icon={faCalendarDays} /> {years}</div>
                                            <h3>{title} - Brno University of Technology</h3>
                                            <p>Faculty of Mechanical Engineering</p>
                                            <p>Programme : {programme}</p>
                                        </div>
                                    </div>
                                ))}
                                <span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span>
                            </div>
                        </div>

                        <div>
                            <h3 className={styles.title}>Licenses & certifications & courses<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h3>
                            <div className={styles.educationBox}>
                                {licenses.map(({ id, title, company }) => (
                                    <div className={styles.educationContent} key={id}>
                                        <div className={styles.content}>
                                            <h3>{title}</h3>
                                            <p>{company}</p>
                                        </div>
                                    </div>
                                ))}
                                <span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.educationColumn}>
                        <h3 className={styles.title}>Experience<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h3>
                        <div className={styles.educationBox}>
                            {experience.map(({ id, title, years, company, description }) => (
                                <div className={styles.educationContent} key={id}>
                                    <div className={styles.content}>
                                        <div className={styles.year}><FontAwesomeIcon icon={faCalendarDays} /> {years}</div>
                                        <h3>{title} - {company}</h3>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            ))}
                            <span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span>
                        </div>
                    </div>
                </div>
            </div>
            <Projects />
        </section>
    )
}