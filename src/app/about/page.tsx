import styles from './about.module.scss';

export default function About() {
    return (
        <div className={styles['about-container']}>

        <img src="/rolo.png.png"  alt="Descrição da imagem"  className={styles['bottom-right-image']} />

            <div className={styles['about-header']}>
                <h1 className={styles['about-title']}>Sobre Nós</h1>
            </div>

            <div className={styles['about-content']}>
                <p className={styles['justified-text']}>
                   O Catálogo de Filmes foi criado para reunir e organizar informações sobre produções de diversos gêneros e épocas. Nosso objetivo é facilitar a exploração do universo cinematográfico, promovendo o acesso à cultura e incentivando a descoberta de novos títulos.
                   <br /><br />
                   Somos um time apaixonado por cinema e tecnologia, unidos pelo desejo de criar algo que inspire e conecte pessoas. Juntos, trabalhamos para transformar ideias em uma plataforma prática e envolvente. E claro, com muita pipoca envolvida no processo!
                </p>
                <div className={styles['decorative-line']}></div>
                <p>
                    <strong className={styles['differentials-title']}>Diferenciais</strong>
                </p>
                <ul>
                    <li>Catálogo intuitivo</li>
                    <li>Informações detalhadas sobre filmes</li>
                    <li>Variedade de gêneros</li>
                </ul>
                <div className={styles['decorative-line']}></div>
                <p className={styles['highlighted-text']}>
                    Esperamos que você aproveite esta experiência e faça parte do nosso amor pelo cinema!
                </p>
            </div>
        </div>
    );
}
