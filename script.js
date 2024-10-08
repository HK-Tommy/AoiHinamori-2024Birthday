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
        window.open('download.html', '_blank');
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

displayMenu = false
function menu() {
    if (displayMenu)
    {
        window.location = orginalPage
        displayMenu = false
    }
    else
    {   
        console.log(document.URL)
        if (document.URL.includes('404.html'))
        {
            document.getElementById('pages1').style.display = 'none'
            document.getElementById('menupage').style.display = ''
        }
        else
        {
            document.getElementById('pages1').style.display = 'none'
            document.getElementById('pages2').style.display = 'none'
            document.getElementById('pages3').style.display = 'none'
            document.getElementById('contact').style.display = 'none'
            document.getElementById('download').style.display = 'none'
            document.getElementById('menupage').style.display = ''
        }
        displayMenu = true 
        orginalPage = document.URL
    }
}

if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
  ) {
    document.getElementById('nav').style.display = 'none'
  }