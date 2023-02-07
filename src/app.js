import User from "./modules/User.js"

const getUser = async () => {
    let response = await fetch(`https://randomuser.me/api/?results=20`);
    let responseJson = await response.json();
    console.log(responseJson)
}
getUser();

// const html = `<div class="user" data-present="false">
// 		<img src="https://randomuser.me/api/portraits/women/37.jpg">
// 		<div class="user--info">
// 				<h1>Miss Mareike Bottenberg</h1>
// 				<p>76 years old</p>
// 				<p>Baak, Netherlands</p>
// 		</div>
// 		<a href="mailto:mareike.bottenberg@example.com">
// 				<span class="mail">✉️</span>
// 		</a>
// </div>`
// const containerElement = document.createElement("div");
// document.querySelector("main").classList.add("div")
// containerElement.insertAdjacentElement("afterbegin", )
// containerElement.appendChild("div")


//je construis un user dont les propriétés seront issues de L'API

