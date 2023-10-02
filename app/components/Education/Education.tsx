import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/index'
import styles from './Education.module.scss'
import { ActivePathContext } from '../../context/ActivePath'
import { useContext } from 'react'
import { educationEN, educationCZ, educationRU, licenses, experienceEN, experienceCZ, experienceRU } from '../../costants/education'
import { IEducation, IExperience } from '../../models/IEducationSection'
import { Projects } from "../Projects/Projects"
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export const Education: React.FC = () => {
    const { activePath } = useContext(ActivePathContext)
    const t = useTranslations('Education')
    const locale = useLocale()

    let education: IEducation[] = [], experience: IExperience[] = []

    switch (locale) {
        case 'en':
            education = educationEN
            experience = experienceEN
            break;
        case 'cz':
            education = educationCZ
            experience = experienceCZ
            break;
        case 'ru':
            education = educationRU
            experience = experienceRU
            break;
    }

    return (
        <section id="education">
            <div className={styles.education} >
                <h2 className={styles.heading}>{t('titleMe')} <span>{t('title')}</span><span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h2>
                <div className={styles.educationRow}>
                    <div className={`${styles.educationColumn} ${styles.educationColumnSecond}`}>
                        <div>
                            <h3 className={styles.title}>{t('education')}<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h3>
                            <div className={styles.educationBox}>
                                {education.map(({ id, title, years, university, faculty, programme }) => (
                                    <div className={styles.educationContent} key={id}>
                                        <div className={styles.content}>
                                            <div className={styles.year}><FontAwesomeIcon icon={faCalendarDays} /> {years}</div>
                                            <h3>{title} - {university}</h3>
                                            <p>{faculty}</p>
                                            <p>{programme}</p>
                                        </div>
                                    </div>
                                ))}
                                <span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span>
                            </div>
                        </div>

                        <div>
                            <h3 className={styles.title}>{t('licenses')}<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h3>
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
                        <h3 className={styles.title}>{t('experience')}<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h3>
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