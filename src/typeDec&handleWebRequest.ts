import axios from "axios";
//import axios type { AxiosResponse } from "axios";
//type declaration 
interface user {
    name: string;
    age: number;
    email: string;
    phone: number;
}

//-------handle web request without axios-----

//get request
async function getUser(id: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch user with id ${id}`);
    }
    return response.json();
}
//post request
async function createPost() {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        })
    });
}

//------ handle web request with axios ------
//get request
async function getUserAxios(id: number) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}
//post request
async function createPostAxios() {
    await axios.post<user>('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
    });
}
