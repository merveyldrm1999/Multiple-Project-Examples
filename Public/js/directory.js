function kaydet(params) {
  const adi = document.getElementById("input-adi").value;
  const soyadi = document.getElementById("input-soyadi").value;
  const tel = document.getElementById("input-tel").value;

  const el = document.createElement("div");
  if (document.getElementById("empty-message")) {
    document.getElementById("empty-message").remove(el);
  }

  document.getElementById("input-adi").value = "";
  document.getElementById("input-soyadi").value = "";
  document.getElementById("input-tel").value = "";
  el.classList.add("col-4");
  const text = `
   <div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-3">
                Adı:
            </div>
            <div class="col-9">
                <label class="adi" for="">${adi}</label>
            </div>
        </div>
        <div class="row">
        <div class="col-3">
            Soyadı:
        </div>
        <div class="col-9">
            <label class="soyadi" for="">${soyadi}</label>
        </div>
        <div class="row">
        <div class="col-3">
            Telefon:
        </div>
        <div class="col-9">
            <label class="tel" for="">${tel}</label>
        </div>
        <div class="row">
        <div class="col-3">
        <button onclick="duzenle(event)" type="button"
        class="btn mt-5
        btn-primary" data-bs-dismiss="modal">Düzenle</button>
        </div>
        <div class="col-3 ms-5">
        <button onclick="sil(event)" type="button"
        class="btn mt-5
        btn-primary" data-bs-dismiss="modal">Sil</button>
        </div>
        </div>
        
    </div>
     </div>
    </div>`;
  el.innerHTML = text;
  document.getElementById("directorys").appendChild(el);
}

function sil(event) {
  event.target.closest(".card").remove();
}
function duzenle(event) {
  const card = event.target.closest(".card");
  const adi = card.getElementsByClassName("adi")[0].innerHTML;
  const soyadi = card.getElementsByClassName("soyadi")[0].innerHTML;
  const tel = card.getElementsByClassName("tel")[0].innerHTML;
  document.getElementById("input-adi").value = adi;
  document.getElementById("input-soyadi").value = soyadi;
  document.getElementById("input-tel").value = tel;

  var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {
    keyboard: false,
  });

  myModal.show();
}
function clear(params) {
  document.getElementById("input-adi").value = "";
  document.getElementById("input-soyadi").value = "";
  document.getElementById("input-tel").value = "";
}
