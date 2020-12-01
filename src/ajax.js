import axios from "./axios-config";

/* || Q1

axios.get("/articles").then(({data}) => {
    console.log(data.data);
})

*/

/* || Q2

axios.post("/articles", {
    "title": "AJAX",
    "content": "my first AJAX post request",
    "tags": ["motivational"]
}).then(({data}) => {
    console.log(data.data.id);
});

*/