function GetParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const pages = urlParams.get('pages');
    const redirect_url = urlParams.get('redirect');
  
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
        document.getElementById('pages1').style.display = 'none'
        document.getElementById('pages2').style.display = 'none'
        document.getElementById('pages3').style.display = 'none'
        document.getElementById('contact').style.display = 'none'
        document.getElementById('download').style.display = ''
        
    }
    else if (pages === "contact") {
        document.getElementById('pages1').style.display = 'none'
        document.getElementById('pages2').style.display = 'none'
        document.getElementById('pages3').style.display = 'none'
        document.getElementById('contact').style.display = ''
    }

    if (redirect_url != null) {
        redirectpage(redirect_url)
    }
}
GetParams();

function redirectpage(url) {
    window.location.replace(url);
}

function menu() {
    document.getElementById('pages1').style.display = 'none'
    document.getElementById('pages2').style.display = 'none'
    document.getElementById('pages3').style.display = 'none'
    document.getElementById('contact').style.display = 'none'
    document.getElementById('download').style.display = 'none'
    document.getElementById('menupage').style.display = ''
}