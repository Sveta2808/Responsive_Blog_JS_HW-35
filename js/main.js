const myBlogUsers = document.querySelector('.post-box');

myBlogUsers.addEventListener('click', () => myBlogUsers.fetchAllProject());

async function fetchAllProject() {
    let url = 'https://gorest.co.in/public/v2/users';

    try {
        let allProjectRaw = await fetch(url);
        console.log(allProjectRaw);

        return await allProjectRaw.json();
    } catch (error) {
        console.log(error);
    }

}


async function fetchDataProject() {
    let dataProject = await fetchAllProject();
    let html = '';

    dataProject.forEach(users => {

        let htmlSection_1 = `<div class="project-section">
                             <h2>${users.name} ${users.email}</h2>`;
        return html += htmlSection_1;
    });
    myBlogUsers.innerHTML = html;
}


fetchDataProject();