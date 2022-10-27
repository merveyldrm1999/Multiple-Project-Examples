window.onload = function () {
  getUsers();
};

function getUsers() {
  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    const users = res.data;
    users.forEach((user) => {
      console.log(user);
      const el = document.createElement("div");
      const text = `<div class="col-12 col-sm-6 col-lg-2">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title"> Kullanıcı</h5>
                                <div>
                                    <span class="card-name"> Adı: ${user.name}</span>
                                </div>
                                <div>
                                    <span class="card-username"> Kullanıcı Adı:${user.username}</span>
                                </div>
                                <div>
                                    <span class="card-usercity"> Kullanıcı Şehri:${user.address.street}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
      el.innerHTML = text;
      document.getElementById("test").appendChild(el);
    });
    console.log(users);
  });
}

//https://jsonplaceholder.typicode.com/users
//Kullanıcıları getir
//tüm kullanıcıları bir card içinde html de listeliceksin
