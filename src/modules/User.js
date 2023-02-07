class User {
  constructor(title, name, age, city, mail) {
    this.title = title;
    this.name = name;
    this.age = age;
    this.city = city;
    this.mail = mail;
  }

    #generateElement() {
    const containerElement = document.createElement("div");
    containerElement.classList.add("user");
        
    const html = 
          `<div class="user" data-present="false">
		<img src="https://randomuser.me/api/portraits/women/37.jpg">
		<div class="user--info">
				<h1>Miss Mareike Bottenberg</h1>
				<p>76 years old</p>
				<p>Baak, Netherlands</p>
		</div>
		<a href="mailto:mareike.bottenberg@example.com">
				<span class="mail">✉️</span>
		</a>
</div>`
    
    
//       `<div class="user" data-present="false">
// 		<img src="https://randomuser.me/api/portraits/women/37.jpg">
// 		<div class="user--info">
// 				<h1>${this.title} ${this.name}Miss </h1>
// 				<p>${this.age} years old</p>
// 				<p>${this.city}, Netherlands</p>
// 		</div>
// 		<a href="mailto:${this.mail}">
// 				<span class="mail">✉️</span>
// 		</a>
// </div>`;
    containerElement.insertAdjacentHTML("afterbegin", html);

    return;
  }


    render() {
    
    document.body("user").append("html");
  }
}

export default User;
