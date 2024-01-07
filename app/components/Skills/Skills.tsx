import { ActivePathContext } from '../../context/ActivePath'
import { useContext } from 'react'
import styles from './Skills.module.scss'
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index'
import { skillsEN, skillsCZ, skillsRU } from '../../costants/skills'
import { ISkills } from '../../models/ISkills'
import Image from 'next/image'
import jestLogo from '@/public/jestjsIcon.png'
import reduxLogo from '@/public/ReduxLogo.png'
import queryLogo from '@/public/ReactQueryLogo.png'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export const Skills: React.FC = () => {
    const { activePath } = useContext(ActivePathContext)
    const t = useTranslations('Skills')
    const locale = useLocale()

    let skills: ISkills[] = []

    switch (locale) {
        case 'en':
            skills = skillsEN
            break;
        case 'cz':
            skills = skillsCZ
            break;
        case 'ru':
            skills = skillsRU
            break;
    }

    return (
        <section className={styles.skills} id="skills">
            <h2 className={styles.heading}>{t('titleMe')} <span>{t('title')}</span><span className={`${styles.animate} ${activePath === 'skills' ? styles.showAnimate : ''}`} ></span></h2>
            <div className={styles.skillsTable}>
                {skills.map(({ id, title, icon, description }) => (
                    <div className={`${styles.skill} ${activePath === 'skills' ? styles.showAnimate : ''}`} key={id}>
                        <h3>{title}</h3>
                        <div className={styles.iconBox} >
                            <FontAwesomeIcon className={styles.icon} icon={icon} />
                        </div>
                        <p>{description}</p>
                        <span className={`${styles.animate} ${activePath === 'skills' ? styles.showAnimate : ''}`} ></span>
                    </div>
                ))}
                <div className={`${styles.skill} ${activePath === 'skills' ? styles.showAnimate : ''}`}>
                    <h3>Jest.js</h3>
                    <div className={styles.iconBox} >
                        <Image
                            src={jestLogo}
                            className={styles.jestImage}
                            alt="Jest.js icon"
                        />
                    </div>
                    <p>{t('jest')}</p>
                    <span className={`${styles.animate} ${activePath === 'skills' ? styles.showAnimate : ''}`} ></span>
                </div>
                <div className={`${styles.skill} ${activePath === 'skills' ? styles.showAnimate : ''}`}>
                    <h3>Redux Toolkit</h3>
                    <div className={styles.iconBox} >
                        <Image
                            src={reduxLogo}
                            className={styles.reduxImage}
                            alt="Redux icon"
                        />
                    </div>
                    <p>{t('redux')}</p>
                    <span className={`${styles.animate} ${activePath === 'skills' ? styles.showAnimate : ''}`} ></span>
                </div>
                <div className={`${styles.skill} ${activePath === 'skills' ? styles.showAnimate : ''}`}>
                    <h3>React / RTK Query</h3>
                    <div className={styles.iconBox} >
                        <Image
                            src={queryLogo}
                            className={styles.queryImage}
                            alt="React Query icon"
                        />
                    </div>
                    <p>{t('query')}</p>
                    <span className={`${styles.animate} ${activePath === 'skills' ? styles.showAnimate : ''}`} ></span>
                </div>
                {/* <div className={styles.skillsRow}>
                    
                </div> */}
            </div>
        </section>
    )
}