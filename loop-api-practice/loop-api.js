let url = "https://jsonplaceholder.typicode.com/comments";


async function fetchPosts() {
    const user = await fetch(url);
    const userdtls = await user.json();


    for (let i = 0; i < userdtls.length; i++){
        console.log(`Post id is: ${userdtls[i].id},\nPost email is: ${userdtls[i].email} \nPost content: ${userdtls[i].body}\n`)

    }

}


fetchPosts()

