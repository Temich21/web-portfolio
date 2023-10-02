import { ActivePathContext } from '../../context/ActivePath'
import { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { firestore } from "@/firebase"
import { addDoc, collection } from "firebase/firestore"
import { Button } from '../Button/Button'
import styles from './Contact.module.scss'
import { faFaceSmileWink, faFaceSadTear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index'
import { IContact } from '../../models/IContact'
import { useTranslations } from 'next-intl'

export const Contact = () => {
    const [formSubmited, setFormSubmited] = useState(false)
    const [successfulSending, setSuccessfullSending] = useState(false)
    const { activePath } = useContext(ActivePathContext)
    const ref = collection(firestore, 'contacts')
    const t = useTranslations('Contact')

    const submit = (values: IContact) => {
        const data = {
            id: Number(new Date),
            values
        }

        try {
            addDoc(ref, data)
            setSuccessfullSending(true)
        }
        catch (e) {
            console.log(e)
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            phoneNumber: '',
            email: '',
            text: ''
        },
        onSubmit: (values: IContact) => {
            setFormSubmited(true)
            submit(values)
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Required"),
            surname: Yup.string()
                .required("Required"),
            phoneNumber: Yup.string()
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            text: Yup.string()
                .required("Required")
        }),
    })

    return (
        <section className={styles.contact} id="contact">
            <h2 className={styles.heading}>{t('title')} <span>{t('titleMe')}!</span><span className={`${styles.animate} ${activePath === 'contact' ? styles.showAnimate : ''}`} ></span></h2>
            <form onSubmit={formik.handleSubmit}>
                <div className={styles.inputBox}>
                    <div className={styles.inputField}>
                        <input
                            name='name'
                            type="text"
                            placeholder={t('name')}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            required
                        />
                        <span className={styles.focus}></span>
                        <span className={`${styles.animate} ${activePath === 'contact' ? styles.showAnimate : ''}`} ></span>
                    </div>
                    <div className={styles.inputField}>
                        <input
                            name='surname'
                            type="text"
                            placeholder={t('surname')}
                            value={formik.values.surname}
                            onChange={formik.handleChange}
                            required
                        />
                        <span className={styles.focus}></span>
                        <span className={`${styles.animate} ${activePath === 'contact' ? styles.showAnimate : ''}`} ></span>
                    </div>
                </div>

                <div className={styles.inputBox}>
                    <div className={styles.inputField}>
                        <input
                            name='phoneNumber'
                            type="number"
                            placeholder={t('mobileNumber')}
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            required
                        />
                        <span className={styles.focus}></span>
                        <span className={`${styles.animate} ${activePath === 'contact' ? styles.showAnimate : ''}`} ></span>
                    </div>
                    <div className={styles.inputField}>
                        <input
                            name="email"
                            type="email"
                            placeholder={t('email')}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            required />
                        <span className={styles.focus}></span>
                        <span className={`${styles.animate} ${activePath === 'contact' ? styles.showAnimate : ''}`} ></span>
                    </div>
                </div>

                <div className={styles.textareaField}>
                    <textarea
                        name="text"
                        cols={30}
                        rows={15}
                        value={formik.values.text}
                        onChange={formik.handleChange}
                        placeholder={t('yourMessage')}
                        required
                    ></textarea>
                    <span className={styles.focus}></span>
                    <span className={`${styles.animate} ${activePath === 'contact' ? styles.showAnimate : ''}`} ></span>
                </div>

                <div className={styles.btnBox}>
                    <Button type="submit" >{t('button')}</Button>
                    <span className={`${styles.animate} ${activePath === 'contact' ? styles.showAnimate : ''}`} ></span>
                </div>
            </form>
            {formSubmited && successfulSending && <div className={styles.submited}>The form was sent successfully <FontAwesomeIcon icon={faFaceSmileWink} bounce /></div>}
            {formSubmited && !successfulSending && <div className={styles.submited}>Something went wrong <FontAwesomeIcon icon={faFaceSadTear} /> Please contact my email rahmat97@mail.ru</div>}
        </section>
    )
}