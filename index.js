var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

app.get("/trangchu", function(req, res){

    var bongda = new Cap2("Bóng đá", "#");
    var boiloi = new Cap2("Bơi lội", "#");
    var thethao = new Cap1("Thể thao", "#", [bongda, boiloi] );

    var hocbong = new Cap2("Học bổng", "#");
    var duhoc = new Cap2("Du học", "#");
    var giaoduc = new Cap1("Giáo dục", "#", [hocbong, duhoc]);

    res.render("trangchu", {
        menu:[thethao, giaoduc]
    });


});

function Cap1(ten, link, mangCap2){
    this.TEN = ten;
    this.LINK = link;
    this.CON = mangCap2
}

function Cap2(ten, link){
    this.TEN = ten;
    this.LINK = link;
}


app.get("/", function(req, res){
    res.render("home", {
        name:"Teabaab",
        namsinh:2010,
        mau:"red",
        mang: ["A", "B", "C"],
        danhsach:[
            new SinhVien("Teo", 2000),
            new SinhVien("Ti" , 2001),
            new SinhVien("Tun", 2002)
        ]
    });
});

function SinhVien(hoten, namsinh){
    this.HOTEN = hoten;
    this.NAMSINH = namsinh;
}