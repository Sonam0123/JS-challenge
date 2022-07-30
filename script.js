//API call to get the data from the API

axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
    responseType: 'stream'
  })
    .then(response =>{
        data = response.data;
        console.log(data)
        //Loop through the data and create a new div for each item
        mainDiv = document.createElement('div');
        mainDiv.className = 'mainDiv';
        // mainDiv.innerHTML = (`<h1>Posts</h1>`);
        document.body.appendChild(mainDiv);
        for(let i = 0; i < data.length; i++){
            let div = document.createElement('div');
            div.className = 'div';
            div.innerHTML = (`<h2 class='data-title'>${data[i].title}</h2>`);
            mainDiv.appendChild(div);
            let p = document.createElement('p');
            p.innerHTML = (`<p>${data[i].body}</p>`);
            div.appendChild(p);
        }
    })

    