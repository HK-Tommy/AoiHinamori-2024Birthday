function GetParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const pages = urlParams.get('pages');
  
    if (pages === "1") {
        document.getElementById('pages2').style.display = 'none'
        document.getElementById('pages3').style.display = 'none'
        document.getElementById('contact').style.display = 'none'
        document.getElementById('pages1').style.display = ''
    }
    else if (pages === "2") {
        document.getElementById('pages1').style.display = 'none'
        document.getElementById('pages3').style.display = 'none'
        document.getElementById('contact').style.display = 'none'
        document.getElementById('pages2').style.display = ''

    }
    else if (pages === "3") {
        document.getElementById('pages1').style.display = 'none'
        document.getElementById('pages2').style.display = 'none'
        document.getElementById('contact').style.display = 'none'
        document.getElementById('pages3').style.display = ''
    }
    else if (pages === "download") {
        window.open('https://1drv.ms/u/s!AmxjBGhGag2mhI0cVE2fRzpNGlRcww?e=EvimS2', '_blank');
    }
    else if (pages === "contact") {
        document.getElementById('pages1').style.display = 'none'
        document.getElementById('pages2').style.display = 'none'
        document.getElementById('pages3').style.display = 'none'
        document.getElementById('contact').style.display = ''
    }
}
GetParams();

if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) {
    window.location.replace('error.html');
}