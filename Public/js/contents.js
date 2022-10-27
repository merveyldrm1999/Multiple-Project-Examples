let contents;

function getContents() {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    contents = res.data;
    contents.forEach((content) => {
      console.log(content);

      const el = document.createElement("div");
      const text = `<div class="col-12 col-sm-6 col-lg-2 mt-5">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"> Başlık:${content.title}</h5>
                            <hr>
                            <div>
                                <p class="card-content"> İçerik:${content.body}</p>
                            </div>

                        </div>
                           
                        </div>
                    </div>`;
      el.innerHTML = text;
      document.getElementById("test").appendChild(el);
    });
    console.log(contents);
  });
}

function filteredContents(params) {
  const filterVal = document.getElementById("filtrele").value;
  document.getElementById("test").innerHTML = "";
  const contentFiltered = contents.filter((content) => {
    return content.title.includes(filterVal);
  });
  contentFiltered.forEach((con) => {
    const el1 = document.createElement("div");
    const text = `<div class="col-12 col-sm-6 col-lg-2 mt-5">
  <div class="card">
  <div class="card-body">
      <h5 class="card-title"> Başlık:${con.title}</h5>
      <hr>
      <div>
          <p class="card-content"> İçerik:${con.body}.body}</p>
      </div>

  </div>
     
  </div>
</div>`;
    el1.innerHTML = text;
    document.getElementById("test").appendChild(el1);
  });
}
