import Link from 'next/link';
import './index.scss';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link href="/">Início</Link>
            <Link href="/movies">Filmes</Link>
            <Link href="/about">Sobre Nós</Link>
        </nav>
    );
}
