import React, { Suspense } from 'react';
import Todos from './(users)/todos/page';
import TodosList from './(users)/todos/TodosList';

const Home = () => {
    return (
        <div className="text-green-500">
            <Suspense fallback={<p>Loading the TODOS</p>}>
                <div className="flex space-x-2">
                    {/* @ts-ignore */}
                    <TodosList />
                </div>
            </Suspense>
            <Suspense fallback={<p>Loading the TEST 2</p>}>
                <div className="flex space-x-2">
                    {/* @ts-ignore */}
                    <TodosList />
                </div>
            </Suspense>
        </div>
    );
};

export default Home;
