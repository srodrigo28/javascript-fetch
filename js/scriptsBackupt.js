const url = "https://jsonplaceholder.typicode.com/posts";

        const loadingElement = document.querySelector("#loading");
        const Container = document.querySelector("#posts-container");
        
        const urlSearchParams = new URLSearchParams(window.location.search);
        const postId = urlSearchParams.get("id");

        // Get all posts
        async function getAllPosts(){
            const response = await fetch(url);

            const data = await response.json();

            loadingElement.classList.add("hide");

            data.map((post) => {
                const div = document.createElement("div");
                const title = document.createElement("h2");
                const body = document.createElement("p");
                const link = document.createElement("a");

                title.innerText = post.title;
                body.innerText = post.body;
                link.innerText = "Ler";
                // link.setAtribute("href", `/post.html?id=${post.id}`);

                div.appendChild(title);
                div.appendChild(body);
                div.appendChild(link);
                Container.appendChild(div);
            });
        }
        getAllPosts();
        