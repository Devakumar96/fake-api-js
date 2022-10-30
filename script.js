// fetch() method: its defined on the window object, which we can use to perform request.
// This method will return promise
// promise will either be fuilfilled or rejected

fetch('https://fakestoreapi.com/products').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completedata)=>{
    // console.log(completedata);

    let data1="";
    completedata.map((values)=>{
        data1 +=`<div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image} alt="img" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
      </div>`
    });

    document.getElementById("cards").innerHTML=data1

}).catch((err)=>{
    console.log(err);
});