let books = [];

function addBook(e) {
    //sayfa yenilememesi için
    e.preventDefault()
    //değişkene id si book-name olanı içindeki değeri al
    const kitabinadi = document.getElementById("book-name").value;
    ////değişkene id si book-author olanı içindeki değeri al
    const kitabinyazari = document.getElementById("book-author").value;
    //değişkene id si book-page olanı içindeki değeri al
    const kitabinsayfasi = parseInt(document.getElementById("book-page").value);
    //book objesini oluştur
    let book = { name: kitabinadi, author: kitabinyazari, page: kitabinsayfasi }

    //kitabı kitapların içine koyuyo
    books.push(book);
    //consolda yazdırıyo
    console.log(books);

}

function bookFilter(e) {
    //sayfa yenilememesi için
    e.preventDefault()

    //sayfasayisi değişkene id si page-number olanı al
    const sayfasayisi = parseInt(document.getElementById("page-number").value);
    //değişkene kitapları ktap fonksiyonunda 
    let filteredBook = books.map(book => {

        if (book.page >= sayfasayisi) {
            book.special = true
        }

        return book

    })
    console.log(filteredBook);
}

function nameFilter(e) {
    e.preventDefault()
    const kitapadi = document.getElementById("bookk-name").value;
    let arananKitap = books.filter(book => {
        return book.name === kitapadi;
    })

    console.log(arananKitap);
}













//const user = { id: 1, name: "Merve", surname: "Yıldırım", age: 23 }

//const { name } = user

/**
 * KÜTÜPHANE SİSTEMİ
 * 
 * Bir form olacak.
 * Bu formda kitabın adı, yazarı ve sayfa sayısı olsun.
 * Formda ekleme yaptığımda bir arrayin içerisine bu bilgileri atsın. Ve array'imin en son halini konsola yazdırsın.
 
 * Sonrasında bir adet inputum olsun. Kişi bu input içerisine kitap sayfa numarası girebilecek.
 * Inputumun sağında filterele butonu olsun. Filtreleye tıkladığında, yazdığı kitap numarasından büyük olan kitapları konsolda yazdırsın.
 */