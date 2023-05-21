const myBlogUsers = document.querySelector('.post-box');


async function fetchAllUsers() {
    let url = 'https://gorest.co.in/public/v2/users';

    try {
        let allProjectRaw = await fetch(url);
        console.log(allProjectRaw);

        return await allProjectRaw.json();
    } catch (error) {
        console.log(error);
    }

}

async function fetchDataUsers() {
    let dataProject = await fetchAllUsers();
    let html = '';
    dataProject.forEach(users => {
        let htmlSection_1 = `<a class ="user-name">${users.name}</a>`;
        return html += htmlSection_1;
    });
    myBlogUsers.innerHTML = html;
}
fetchDataUsers();

const UsersPosts = document.querySelector('.posts');


async function fetchAllPosts() {
    let url = 'https://gorest.co.in/public/v2/posts';

    try {
        let allPostsRaw = await fetch(url);
        console.log(allPostsRaw);

        return await allPostsRaw.json();
    } catch (error) {
        console.log(error);
    }

}

async function fetchDataPosts() {
    let postsProject = await fetchAllPosts();
    let html = '';
    postsProject.forEach(posts => {
        let htmlSection_2 = `<div class="project-section">
                             <div>${posts.title}</div>`;
        return html += htmlSection_2;
    });
    UsersPosts.innerHTML = html;
}
fetchDataPosts();

UsersPosts.addEventListener('click', () => UsersPosts.fetchDataPosts());