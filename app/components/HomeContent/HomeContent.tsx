import styles from './HomeContent.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { ActivePathContext } from '../../context/ActivePath'
import { useTranslations } from 'next-intl'

export const HomeContent: React.FC = () => {
    const { activePath } = useContext(ActivePathContext)
    const t = useTranslations('Home')

    return (
        <section className={styles.home} id="home">
            <div className={styles.homeContent}>
                <h1>{t('greetings')} <span>{t('name')}</span><span className={`${styles.animate} ${activePath === 'home' ? styles.showAnimate : ''}`} ></span></h1>
                <div className={styles.textAnimate}>
                    <h3 className={`${styles.animate} ${activePath === 'home' ? styles.showAnimate : ''}`}>Frontend Developer</h3>
                    <span className={`${styles.animate} ${activePath === 'home' ? styles.showAnimate : ''}`} ></span>
                </div>
                <p>{t('description')}<span className={`${styles.animate} ${activePath === 'home' ? styles.showAnimate : ''}`} ></span></p>
            </div>
            <div className={styles.homeSci}>
                <div className={styles.circle}>
                    <a href='https://www.facebook.com/artem.rahmatullin/'>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </div>
                <div className={styles.circle}>
                    <a href='https://www.linkedin.com/in/artem-rakhmatullin-905391192/'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
                <div className={styles.circle}>
                    <a href='https://github.com/Temich21' className={styles.iconGitA}>
                        <FontAwesomeIcon
                            icon={faGithub}
                            className={styles.iconGit}
                        />
                    </a>
                </div>
                <div className={styles.circle}>
                    <a href='https://www.codewars.com/users/Temich21' >
                        <FontAwesomeIcon icon={faCode} />
                    </a>
                </div>
                <span className={`${styles.animate} ${activePath === 'home' ? styles.showAnimate : ''}`} ></span>
            </div>
            <div className={`${styles.homeImgHover}  ${styles.homeImg}`}></div>
            <span className={`${styles.animate} ${activePath === 'home' ? styles.showAnimate : ''}`} ></span>
        </section>
    )
}