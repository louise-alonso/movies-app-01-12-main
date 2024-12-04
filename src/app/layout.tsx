'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Importando o hook correto para App Router
import './globals.scss';
import LoadingSpinner from './components/loading/LoadingSpinner'; // Importando o spinner

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    
    return (
        <html lang="pt-BR">
            <body>
                <header className="navbar">
                    <nav>
                        <Link href="/">Início</Link>
                        <Link href="/movies">Filmes</Link>
                        <Link href="/about">Sobre Nós</Link>
                    </nav>
                </header>
                {isLoading ? <LoadingSpinner /> : <main>{children}</main>}
            </body>
        </html>
    );
}
