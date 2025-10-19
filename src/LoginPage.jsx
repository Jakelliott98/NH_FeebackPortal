import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import styles from './LoginPage.module.css'

function LoginPage () {

    return (
        <div className={styles['login-layout']}>
            <div className={styles['login-container']}>
            <FontAwesomeIcon className={styles['login-icon']} icon="fa-solid fa-user-astronaut" />
            <p className={styles['login-message']}>Welcome Back!</p>
            <p className={styles['login-cta']}>Don't have an account yet? Check out the Demo </p>
            <div className={styles['input-container']}>
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                <input className={styles['username']} placeholder='Username'/>
            </div>
            <div className={styles['input-container']}>
                <FontAwesomeIcon icon="fa-solid fa-lock" />
                <input type='password' className={styles['password']} placeholder='Password'/>
            </div>
            <button className={styles['login-button']}>Login</button>
            </div>
        </div>
    )
}

export default LoginPage;