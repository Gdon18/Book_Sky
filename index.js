// let names = document.getElementById("name-input")
// let age = document.getElementById("age-input")
// let gender = document.getElementById("genter-input")
// let mail = document.getElementById("mail-input")

// let submit = document.getElementById("submit")

// let ul = document.getElementById("view_All")



// function display(){
//     var li = document.createElement("li")

//     li.innerHTML = `
//     Name: ${names.value} <br>
//     Age: ${age.value} <br>
//     Gender: ${gender.value} <br>
//     Email: ${mail.value} <button onclick="deleteIdems(event)">delete</button>
// `;
// ul.append(li);
//     // li.innerHTML = names.value +"<button>delete</button>"
//     // li.innerHTML = age.value +"<button>delete</button>"
//     // li.innerHTML = genter.value +"<button>delete</button>"
//     // li.innerHTML = mail.value +"<button>delete</button>"
//     // ul.append(li)
// }

// function deleteIdems(event){
//     event.target.parentElement.remove()
// }


// selecting popup box popoup overley button
let add_popup_button = document.getElementById("add-popup")
let popup_overlay = document.querySelector(".popup-overlay")
let popup_box = document.querySelector(".popup-box")


function view_add_page(){
    popup_overlay.style.display="block"
    popup_box.style.display="block"
}

// select cancel button
let cancel_button = document.getElementById("cancle-popup")
cancel_button.addEventListener("click",function(event){
    event.preventDefault()
    popup_overlay.style.display="none"
    popup_box.style.display="none"
})


// add book details
let container = document.querySelector(".container")
let add_book = document.getElementById("add-book");
let book_tittle = document.getElementById("book-title-input")
let book_author = document.getElementById("book-author-input")
let boo_description =document.getElementById("book-description")
add_book.addEventListener("click",function(e){
    e.preventDefault()
    let div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${book_tittle.value}</h2>
    <h5>${book_author.value}</h5>
    <p>${boo_description.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popup_overlay.style.display="none"
    popup_box.style.display="none"
    
})

function deletebook(event){
    event.target.parentElement.remove()


}