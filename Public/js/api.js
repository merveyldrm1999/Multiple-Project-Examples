function getUser() {
  fetch(" https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((resJson) => {
      console.log(resJson);
      const filtreledUser = resJson.filter((user) => {
        if (user.name.indexOf("a") !== -1) {
          return user;
        }
      });
      console.log(filtreledUser);
    });
}

// URL = https://jsonplaceholder.typicode.com/users
// fetch fonksiyonu
// Gelen kullanıcılardan isminin içerisinde a harfi bulunanları göster.

//books.filter(book => {
// return book.name === kitapadi;
//})
