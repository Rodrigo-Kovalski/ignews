import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
 
import styles from './styles.module.scss'

export function SignInButton(){
    const isUserLoggedIn = false;

    return isUserLoggedIn ? (
        <button type="button" className={styles.SignInButton}>
            <FaGithub color="#04d361"/>
            Sign In with Github
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button type="button" className={styles.SignInButton}>
            <FaGithub color="#eba417"/>
            Sign In with Github
        </button>
    );
}