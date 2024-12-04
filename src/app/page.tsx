import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.containerMain}>
            <header className={styles.navbar}></header>
            <section className={styles.filmeSection}>
                <div className={styles.filmeText}>
                    <h1>Pipoca Flix</h1>
                    <p>Se veio em busca de filmes variados, está no lugar certo!! Assista de forma gratuita todos os filmes que deseja e que estão no nosso catálogo!!</p>
                    <Link href="/movies" className={styles.ctaa}>
                        Veja um filme!
                    </Link>
                </div>
                <div className={styles.filmeImg}>
                    <Image src="/logo.png" alt="Imagem de um filme" width={500} height={500} />
                </div>
            </section>
            <footer className={styles.footer}>
                &copy; 2024 Todos os direitos reservados.
            </footer>
        </div>
    );
}
