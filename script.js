function GetParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const pages = urlParams.get('pages');
  
    if (pages === "1") {
        document.getElementById('pages2').style.display = 'none'
        document.getElementById('pages3').style.display = 'none'
        document.getElementById('pages1').style.display = ''
    }
    else if (pages === "2") {
        document.getElementById('pages1').style.display = 'none'
        document.getElementById('pages3').style.display = 'none'
        document.getElementById('pages2').style.display = ''

    }
    else if (pages === "3") {
        document.getElementById('pages1').style.display = 'none'
        document.getElementById('pages2').style.display = 'none'
        document.getElementById('pages3').style.display = ''
    }
    else if (pages === "download") {
        location = '#'
    }
    else if (pages === "contact") {
        alert("可透過以下方式與本人聯絡 : DC : hk_tommylam, E-mail : tlamhappy10@gmail.com ")
        location = 'index.html'
    }
}
GetParams();

if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) {
    alert("此網站暫時僅支援電腦或IPad ! ")
    window.close();
}