import Link from 'next/link';
import React from 'react';
import { Todo } from '../../../typings';

const delay = async (timeout: number) => {
    await new Promise((res) => {
        setTimeout(() => res('ready'), timeout);
    });
};

const fetchTodos = async () => {
    const delayTest = await delay(Math.round(Math.random() * 2000));
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todos: Todo[] = await res.json();
    return todos;
};

const TodosList = async () => {
    const todos = await fetchTodos();
    return (
        <>
            {todos.map((todo) => (
                <p key={todo.id}>
                    <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
                </p>
            ))}
        </>
    );
};

export default TodosList;
