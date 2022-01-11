import Head from 'next/head';
import styles from './styles.module.scss'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de março de 2020</time>
                        <strong>Título do Post</strong>
                        <p>Conteúdo fictício do post antes que tornemos ele dinâmico daqui a pouco</p>
                    </a>
                    <a href="">
                        <time>12 de março de 2020</time>
                        <strong>Título do Post</strong>
                        <p>Conteúdo fictício do post antes que tornemos ele dinâmico daqui a pouco</p>
                    </a>
                    <a href="">
                        <time>12 de março de 2020</time>
                        <strong>Título do Post</strong>
                        <p>Conteúdo fictício do post antes que tornemos ele dinâmico daqui a pouco</p>
                    </a>
                </div>
            </main>
        </>
    );
}