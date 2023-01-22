import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html>
            <head>
                <body>{children}</body>
            </head>
        </html>
    );
};

export default RootLayout;
