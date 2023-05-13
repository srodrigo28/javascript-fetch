const url = "https://jsonplaceholder.typicode.com/posts";
const myUrl = "http://localhost:3001/recebi";

        const loadingElement = document.querySelector("#loading");
        const Container = document.querySelector("#container");
        
        // const urlSearchParams = new URLSearchParams(window.location.search);
        // const postId = urlSearchParams.get("id");

        // Get all posts
        async function getAllPosts(){
            const response = await fetch(myUrl);

            const data = await response.json();

            loadingElement.classList.add("hide");

            data.map((post) => {
                const div = document.createElement("div");
                const title = document.createElement("h3");
                const p = document.createElement("p");

                title.innerText = post.nome;
                p.innerText = post.status;
        

                div.appendChild(title);
                div.appendChild(p);
                Container.appendChild(div);
            });
        }
        getAllPosts();
        