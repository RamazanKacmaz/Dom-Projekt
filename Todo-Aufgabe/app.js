
//DEGISKENLER
    // var maasAli = 5000;
    // var maasCAn = 6000;
    // var zam = 0.5 ;


    // console.log(maasAli + (maasAli * zam));  // maas ali
    // console.log(maasCAn + (maasCAn * zam));  // maas can

    //türkce karakter kullanma
    // Arada bosluk olmaz.
    // Sayi ile baslayamaz.
    
    // var urunAdi = "iphone 13";
    // let urunFiyati = 1500

    // console.log(typeof urunAdi);
    // console.log(typeof urunFiyati);

    // let sayi1 = "10";
    // let sayi2 = "20";

    // console.log(Number(sayi1) + Number(sayi2));

    // let sayi1 = 10;
    // let sayi2 = 20;

    // console.log(sayi1.toString + sayi2.toString);

    // let isim = "ramazan";
    // let soyAd = "Kacmaz";

    // console.log(isim + " " + soyAd);

    // let sinavNotu = 70;
    // let basariliMi = (sinavNotu > 50)
    // console.log(basariliMi);
    // console.log(typeof basariliMi);

    // let yas ;
    // yas = "";

    // console.log(yas);
    // console.log(typeof yas);
    
    //alistima 1
    // let ögrenci1Isim = "ada bilgi";
    // let ögrenci1Dt = "2012";
    // let ögrenci1Mat1 = 70;
    // let ögrenci1Mat2 = 70;
    // let ögrenci1Mat3 = 80;
    // let mat_otlm = (ögrenci1Mat1+ögrenci1Mat2+ögrenci1Mat3)/3;
    // console.log(mat_otlm);
    // console.log(typeof mat_otlm);
    // console.log(parseInt(mat_otlm));
    // console.log(mat_otlm >= 50);

    // let ögrenci2Isim = "yigit bilgi";
    // let ögrenci2Dt = "2010";
    // let ögrenci2Mat1 = 40;
    // let ögrenci2Mat2 = 40;
    // let ögrenci2Mat3 = 50;
    // let mat_otlm2 = (ögrenci2Mat1+ögrenci2Mat2+ögrenci2Mat3)/3;
    // console.log(mat_otlm2);
    // console.log(typeof mat_otlm2);
    // console.log(parseInt(mat_otlm2));
    // console.log(mat_otlm2 >= 50);

    // //alistima 2

    // let sunakiYil = new Date().getFullYear();

    // let ögenci_yas1 = sunakiYil- parseInt(ögrenci1Dt);
    // console.log(ögenci_yas1);

    // let ögenci_yas2 = sunakiYil- parseInt(ögrenci2Dt);
    // console.log(ögenci_yas2);

//     let sonuc ;
//     let a = 10, b = 20, c = 30 ;
// // 1- Aritmetik Operatörler
//     	sonuc = a+ b ;
// // 2- Atama Operatörleri
//         sonuc = a ; 
//         sonuc += a ; // sonuc = sonuc + a
// // 3- Karsilastirma Operatörleri
//         sonuc = (a === b)
//         sonuc = (a != b)
// // 4- Mantiksal Operatörler
// console.log(sonuc);
 
// let username = "ramazankacmaz";
// let passwort = "1234";

// if (username == "ramazankacmaz") {
//     if (passwort == "12346") {
//         console.log("uygulamaya giris yapildi");
//     } else {
//         console.log("parola yanlis");
//     }
// } else {
//     console.log("kullanici adi yanlis");
// }

// let mezuniyet = "universite";
// let yas = 20;

// if (yas > 18 && ( mezuniyet == "lise" || mezuniyet == "universite")) {
//     console.log("ehliyet alabilir");
// } else {
//     console.log("ehliyet alamaz");
// }
// bir sayi 10-50 arasinda olup olmadigini kontrol edelim
// let sayi1 = 54;

// if (sayi1 > 10 && sayi1 < 50) {
//     console.log("sayi 50 ile 10 arasinda ");
// } else {
//     console.log("sayi 50 ile 10 arasinda degil");
// }
// 2 bir sayinin potitif ve tek sayi oldugunu arasitralim
// let a = -5;

// if (a % 2 == 1 && a >0 ) {
//     console.log("a sayisi tek ve sifirdan buyuktür");
// } else {
//     console.log("a sayisi tek ve negatif sayidir");
// }

// 3 x,y,z sayilarinin büyükülük karsilastirmasini yapiniz

// let x = 5;
// let y = 6 ;
// let z = 7;

// if (x > y && x > z) {
//     console.log("en buyuk x");
// } else if (y > x && y > z) {
//     console.log("en buyuk y");
// } else if (z > x && z > y) {
//     console.log("en buyuk z");
// }else {
//     console.log("sayilar esittir");
// }

// let vize1 = 30;
// let vize2 = 40;
// let final = 70;

// if ((vize1+vize2/2*100/40 + final*100/60) > 50) {
//     console.log("gecti");
// } else {
//     console.log("kaldi");
// }

// if ((vize1+vize2/2*100/40 + final*100/60) > 50 && final == 50) {
//     console.log("gecti");
// } else {
//     console.log("kaldi");
// }

// if ((vize1+vize2/2*100/40 + final*100/60) < 50 || final == 70) {
//     console.log("gecti");
// } else {
//     console.log("kaldi");
// }

// let ad = "Ramazan";
// let soyad = "Kacmaz";
// let yas = 68 ;
// let sehir = "Espelkamp"

// let mesaj = "Benim adim " + ad + ' ve Soyadim ' + soyad + '.' + sehir + '\'de yasiyorum ' + ' Emeklilige ' + (67-yas) + ' yilim kaldi. ';


// //backtick
// mesaj = `Benim adi ${ad} ve Soyadim  ${soyad} . + ${sehir } 'de yasiyorum  Emeklilige  ${67-yas}  yilim kaldi.`

// //Ternary operators
// let emeklilik = (65- yas > 0) ? "Emeklilige" + (65-yas) + " yil kaldi" : "Zaten emekli oldunuz.";
// mesaj = `Benim adi ${ad} ve Soyadim  ${soyad} .  ${sehir } 'de yasiyorum  ${emeklilik}`;
// console.log(mesaj);

// let kursAdi = "Komple uygulamali Wep Gelistirme Egitimi"

// let sonuc;

// sonuc = kursAdi.toLocaleLowerCase();
// sonuc = kursAdi.toLocaleUpperCase();
// sonuc = kursAdi.length;
// sonuc = kursAdi[0];
// sonuc = kursAdi.slice(0, 6);
// sonuc = kursAdi.slice(10);
// sonuc = kursAdi.slice(-10);
// sonuc = kursAdi.substring(10);
// sonuc = kursAdi.replace("Egitimi", " Kursu")
// sonuc = kursAdi.trim();
// sonuc = kursAdi.trimEnd();
// sonuc = kursAdi.indexOf("Komple");
// sonuc = kursAdi.split(" ")[0];
// https://www.w3schools.com/js/js_string_methods.asp

// console.log(sonuc);

// let url = "https://www.w3schools.com/js/js_string_methods.asp";
// let kursAdi =  "Komple uygulamali Wep Gelistirme Egitimi";

// // 1
// sonuc = url.length
// sonuc = kursAdi.split(" ").length;
// sonuc = url.startsWith("https");
// sonuc = kursAdi.indexOf("Egitimi");
// console.log(sonuc);

// // Get metods
// let simdi = new Date();
// sonuc = simdi ;
// sonuc = simdi.getDate ();
// sonuc = simdi.getDay();
// sonuc = simdi.getFullYear();
// sonuc = simdi.getHours

// // Set metods

// sonuc = simdi.setDate();
// sonuc = simdi.setFullYear();

// let dogumTarihi = new Date ( 1981 , 8 , 14);
// simdi = new Date();

// sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();


// console.log(sonuc);
// console.log(typeof sonuc);

// bir dizi olusturun

// let meyveler = [ "Elma", " Armut", "Muz", "Cilek"];

// console.log(typeof meyveler);
// console.log(meyveler.length);
// console.log(meyveler[0]);
// console.log(meyveler.length -1);
// console.log(meyveler.includes("Elma"));
// console.log(meyveler.indexOf("Elma"));


// meyveler.push("Kiraz")
// console.log(meyveler);

// meyveler.pop()
// meyveler.pop()
// console.log(meyveler);

// meyveler.splice(meyveler.length-2,2)

// let  ogr1 = [
//     "Yigit",
//     "Bilgi",
//     2010,
//     [70,60,80]
// ]

// let  ogr2 = [
//     "Ada",
//     "Bilgi",
//     2012,
//     [80,80,90]
// ]

// let  ogr3 = [
//     "Ahmet",
//     "Turan",
//     2009,
//     [60,60,70]
// ]

// let ogrenciler =[ogr1, ogr2, ogr3]

// let yigit_yas = new Date().getFullYear()- ogrenciler[0][2];
// console.log(yigit_yas);


// let siparis = {
//     "id" : 101,
//     "siparis Tarihi":"31.12.2022",
//     "ödeme sekli": "kredi karti",
//     "Kargo Adresi": "Yahya kaptan mah. Kocaeli izmit",
//     "Satin alinan ürünler": {
//         "ürün id" : 5,
//         "ürün basligi": "iphone 13 pro",
//         "ürün url" : "ww.wwwwwwwwwdvvvvvvvvvv",
//         "ürün Fiyati " : 3200,
//     },
//     "müsteri id" : 12,
//     "satici" : {
//         "firma id" : 34,
//         "firma adi" : "Apple Türkiye"
//     } 

// }

// console.log(typeof siparis);
// console.log(siparis);
// console.log(siparis["ödeme sekli"]);

let sayilar = [1,5,7,15,3,25];

// for (const sayi of sayilar) {
//     console.log(sayi * sayi);
// }

// for (let i = 0 ; i < sayilar.length; i++){
//     if (sayilar[i] % 5 == 0) {
//         console.log(sayilar[i]);
//     }
// }

// function kelimeYazdir(kelime, adet) {
//     for (let index = 0; index < adet; index++) {
//         console.log(kelime);
        
//     }
// }

// kelimeYazdir("Merhaba" , 5)


