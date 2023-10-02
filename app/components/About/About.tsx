import { ActivePathContext } from '../../context/ActivePath'
import { useContext } from 'react'
import foto from '@/public/aboutFoto.jpg'
import styles from './About.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export const About: React.FC = () => {
    const { activePath } = useContext(ActivePathContext)
    const t = useTranslations('About')

    return (
        <section className={`${styles.about} ${activePath === 'about' ? styles.showAnimate : ''}`} id="about">
            <h2 className={styles.heading}>{t('title')} <span>{t('titleMe')}</span><span className={`${styles.animate} ${activePath === 'about' ? styles.showAnimate : ''}`}></span></h2>
            <div className={styles.aboutImg}>
                <Image
                    src={foto}
                    className={styles.aboutImage}
                    alt="Picture of the author"
                />
                <span className={styles.circleSpin}></span>
                <span className={`${styles.animate} ${activePath === 'about' ? styles.showAnimate : ''}`}></span>
            </div>
            <div className={styles.aboutContent}>
                <h3>{t('frontendDeveloper')}<span className={`${styles.animate} ${activePath === 'about' ? styles.showAnimate : ''}`} ></span></h3>
                <p>
                    {t('aboutText')}
                    <span className={`${styles.animate} ${activePath === 'about' ? styles.showAnimate : ''}`}></span>
                </p>
            </div>
        </section>
    )
}