//urun1 değişkeni oluştur
const urun1 = { id: 0, title: "elma", amount: 6 };
//urun2 değişkeni oluştur
const urun2 = { id: 1, title: "armut", amount: 7 };
//urun3 değişkeni oluştur
const urun3 = { id: 2, title: "kiraz", amount: 18 };

//urunler adında arrayi oluşturuldu
const urunler = []
//ürünlerin içine urun1,urun2 ve urun3 ü soktu
urunler.push(urun1, urun2, urun3)

urunler.push({ id: 3, title: "visne", amount: 13 });
urunler.push({ id: 4, title: "karpuz", amount: 24 });
urunler.push({ id: 5, title: "nar", amount: 114 });

console.log(urunler);

let filteredUrun = urunler.filter(urun => {
    return urun.title !== "karpuz"
})

urunler.map(urun => {
    if (urun.title === "armut") {
        urun.amount = 4
    }
})

filteredUrun = urunler.filter(urun => {
    return urun.id !== 3
})

let toplamUrun = 0
urunler.map((urun) => {
    toplamUrun = urun.amount + toplamUrun;
})
console.log(toplamUrun);

console.log(filteredUrun);

//ürün objesi => {id: number, title: string, amount:number}
//    ürünler arrayi içerisinde hazır 3 tane ürün bulunsun.
//    title'ı armut olan ürünün amount'unu 4 yapsın.
 //    id'si 3 olan ürünü silsin. 2 tane de ürün eklesin. sonrasında tüm ürünlerin fiyatının toplamını göstersin