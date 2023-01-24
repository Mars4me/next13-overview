import { ReactNode } from 'react';
import '../styles/globals.css';
import Header from './Header';

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html>
            <body>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default RootLayout;
