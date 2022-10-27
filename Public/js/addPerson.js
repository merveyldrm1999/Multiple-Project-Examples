function addPerson() {
  const name = document.getElementById("input-adi").value;
  const surname = document.getElementById("input-soyadi").value;
  const dogumtarihi = document.getElementById("input-dogum-tarihi").value;
  const aciklama = document.getElementById("input-aciklama").value;

  const el = document.createElement("div");
  el.classList.add("col-4");
  const person = `
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    Adı:
                </div>
                <div class="col-9">
                    <label for="">${name}</label>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    Soyadı:
                </div>
                <div class="col-9">
                    <label for="">${surname}</label>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    Doğum Tarihi:
                </div>
                <div class="col-9">
                    <label for="">${dogumtarihi}</label>
                </div>
                <div class="row">
                    <div class="col-3">
                        Açıklama:
                    </div>
                    <div class="col-9">
                        <label for="">${aciklama}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
  el.innerHTML = person;
  document.getElementById("persons").appendChild(el);
}
