import axios from "axios"

export const updateThreads=()=>{
    axios.get("http://localhost:8080/threads").then((response)=>{
threads=response.data;

})
}
updateThreads();
export let threads=
[
    {
        id:1,
        title:"Thread1",
        posts:[
            {
                id: 100,
                postTitle: "Name1",
                category: "Question",
                postBody: "Body ",
                image: "img"
            }
        ]
    }
]
export let illegalWords=['cats','dogs','snakes'];

export const updateBanWords=()=>
{
    axios.get("http://localhost:8080/banned-words").then((response)=>{
    illegalWords=response.data;
}).catch((err)=>{})
}
updateBanWords();
