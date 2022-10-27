function textArea(params) {
  const baslik = document.getElementById("input-baslik").value;
  const aciiklama = document.getElementById("input-aciklama").value;

  const el2 = document.createElement("div");
  el2.classList.add("col-4");
  const text = `
   <div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-3">
                Başlık:
            </div>
            <div class="col-9">
                <label for="">${baslik}</label>
            </div>
        </div>
        <div class="row">
        <div class="col-3">
            Açıklama:
        </div>
        <div class="col-9">
            <label for="">${aciiklama}</label>
        </div>
    </div>
     </div>
    </div>`;
  el2.innerHTML = text;
  document.getElementById("textareas").appendChild(el2);
}
