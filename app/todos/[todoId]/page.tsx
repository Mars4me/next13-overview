import React from 'react';
import { Todo } from '../../../typings';

type PageProps = {
    params: {
        todoId: string;
    };
};

const fetchTodo = async (todoId: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo: Todo = await response.json();
    return todo;
};

const TodoPage = async ({ params: { todoId } }: PageProps) => {
    const todo = await fetchTodo(todoId);
    return (
        <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg hover:bg-yellow-300 cursor-pointer">
            <p>
                #{todo.id}:{todo.title}
            </p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
            <p className="border-t border-black mt-5 text-right">By User: {todo.userId}</p>
        </div>
    );
};

export default TodoPage;

export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todos: Todo[] = await res.json();

    const trimmedTodo = todos.splice(0, 10);

    return trimmedTodo.map((todo) => ({
        todoId: todo.id.toString(),
    }));
}
