let posts = document.getElementById('get_post')
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((comments) => {
    for (let i = 0; i < comments.length; i++){
        // создать окно для вывода постов
        let win = document.createElement('win');
        win.className = 'post';
        let name = document.createElement('h3');
        // сделать заголовок для поста
        name.className = 'text_title_post';
        name.textContent = comments[i].title;
        // вывести текст поста
        let text = document.createElement('text');
        text.className = 'text_post';
        text.textContent = comments[i].body;
        win.append(name);
        win.append(text);
        posts.append(win);
    }
});