import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

import { ActiveLink } from '../ActiveLink'

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="Ig.news" />
                <nav>
                    <ActiveLink href="/" activeClassName={styles.active}>
                        <a href="#">Home</a>
                    </ActiveLink>
                    <ActiveLink href="/posts" activeClassName={styles.active}>
                        <a href="#">Posts</a>
                    </ActiveLink>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}