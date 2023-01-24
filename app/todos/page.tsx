import React from 'react';
import TodosList from './TodosList';

const Todos = () => {
    return (
        <div className="p-5 bg-green-500">
            {/* @ts-ignore */}
            <TodosList />
        </div>
    );
};

export default Todos;
