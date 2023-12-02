


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
