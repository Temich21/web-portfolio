"use client"

import styles from './NavigationBar.module.scss'
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react'
import { ActivePathContext } from '../../context/ActivePath'
import { INavigation } from '../../models/INavigation'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

export const NavigationBar: React.FC = () => {
    const t = useTranslations('Navigation')
    const router = useRouter()
    const locale = useLocale()

    const navigation: INavigation[] = [
        { id: 1, title: t('home'), path: 'home' },
        { id: 2, title: t('about'), path: 'about' },
        { id: 3, title: t('education'), path: 'education' },
        { id: 4, title: t('skills'), path: 'skills' },
        { id: 4, title: t('contact'), path: 'contact' }
    ]

    const { setActivePath } = useContext(ActivePathContext)

    const [burger, setBurger] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const headerRef = useRef(null)

    useEffect(() => {
        const handleHashFragmentAndScroll = () => {
            const hash = window.location.hash.slice(1)
            const matchingSection = navigation.find(({ path }) => path === hash);
            if (matchingSection) {
                setActiveSection(hash)
                if (setActivePath) {
                    setActivePath(hash)
                }
            }

            const currentScrollPos = window.scrollY

            navigation.forEach(({ path }) => {
                const element = document.getElementById(path)
                if (element) {
                    const offset = element.offsetTop - 350
                    const height = element.offsetHeight

                    if (currentScrollPos >= offset && currentScrollPos < offset + height) {
                        setActiveSection(path)
                        if (setActivePath) {
                            setActivePath(path)
                        }
                    }
                }
            })
        }

        handleHashFragmentAndScroll()

        window.addEventListener('hashchange', handleHashFragmentAndScroll)
        window.addEventListener('scroll', handleHashFragmentAndScroll)

        return () => {
            window.removeEventListener('hashchange', handleHashFragmentAndScroll)
            window.removeEventListener('scroll', handleHashFragmentAndScroll)
        }
    }, [setActivePath])

    const handleClick = (path: string) => () => {
        const element = document.getElementById(path)
        const offset = 50
        if (element) {
            const scrollToOffset = element.offsetTop - offset
            setBurger(false)

            window.scrollTo({
                top: scrollToOffset,
                behavior: "smooth",
            })
        }
    }

    const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        const localeValue = e.target.value
        router.push(`/${localeValue}`)
    };

    return (
        <header className={styles.header} ref={headerRef}>
            <a className={styles.logo}>My portfolio.<span className={styles.animate} ></span></a>
            <nav className={styles.navigation}>
                <div className={styles.menuAndLanguage}>
                    <div className={styles.languages}>
                        <select
                            className={styles.languagesSelector}
                            onChange={changeLanguage}
                            defaultValue={locale}
                        >
                            <option value="en">EN</option>
                            <option value="cz">CZ</option>
                            <option value="ru">RU</option>
                        </select>
                        <span className={styles.animate} ></span>
                    </div>
                    <div className={styles.menuIcon} onClick={() => setBurger(!burger)}>
                        {burger ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                        <span className={styles.animate}></span>
                    </div>
                </div>

                <ul className={`${styles.navbar} ${burger ? styles.toogle : ''}`}>
                    {navigation.map(({ id, title, path }) => (
                        <li key={id} >
                            <a
                                className={`${styles.link} ${path === activeSection ? styles.active : ''}`}
                                onClick={handleClick(path)}
                            >
                                {title}
                            </a>
                        </li>
                    ))}
                    <span className={styles.activeNav}></span>
                    <span className={styles.animate}></span>
                </ul>
            </nav>
        </header>
    )
}