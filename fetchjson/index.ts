import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface toDo {
    id : number;
    userId : number;
    title : string;
    completed : boolean
} 

axios.get(url).then(response =>{
    const todo = response.data as toDo;

    const id = todo.id;
    const userId = todo.userId;
    const title = todo.title;
    const completed = todo.completed;

    // console.log(`
    //     The todo with id: ${id}, 
    //     the todo with userId: ${userId},
    //     Has a title of: ${title},
    //     Is it finished: ${completed}
    //     `);
    logToDo(id, title, completed)
})

const logToDo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The todo with id: ${id}, 
    Has a title of: ${title},
    Is it finished: ${completed}
    `)
}