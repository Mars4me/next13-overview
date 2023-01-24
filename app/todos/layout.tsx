import { ReactNode } from 'react';
import TodosList from './TodosList';

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="flex">
            <div>
                {/* @ts-ignore */}
                <TodosList />
            </div>
            <div className="flex-1">{children}</div>
        </main>
    );
};

export default RootLayout;
