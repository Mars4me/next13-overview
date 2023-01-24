import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="p-5 bg-blue-500 text-white">
            <p>I'm a Header</p>
            <nav className="flex gap-1.5">
                <Link href="/" className="bg-white text-blue-500 px-2  rounded-md">
                    Home
                </Link>
                <Link href="todos" className="bg-white text-blue-500 px-2 rounded-md">
                    Todos
                </Link>
            </nav>
        </header>
    );
};

export default Header;
