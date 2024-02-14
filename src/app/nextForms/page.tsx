import { AddForm } from "./add-form";
import { DeleteForm } from "./delete-form";
import "../global.css";

export default async function Home() {
    let todos = [{id: 1, text: "one"}, {id: 2, text: "two"}, {id: 3, text: "three"}];
  
    return (
      <main>
        <h1 className="sr-only">Todos</h1>
        <AddForm />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <DeleteForm id={todo.id} todo={todo.text} />
            </li>
          ))}
        </ul>
      </main>
    );
  }