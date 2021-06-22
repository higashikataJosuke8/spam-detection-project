
var outputColor = document.getElementById('spamHam');
window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const content = params.get('content');
    if(content == "spam"){
        outputColor.style.border = "2px solid #ef233c";
        outputColor.style.boxShadow = "2px 5px 5px 2px #ef233c";
    }else{
        outputColor.style.border = "2px solid #7ae582";
        outputColor.style.boxShadow = "2px 5px 5px 2px #7ae582";
    }
    document.getElementById('result-content').innerHTML = content;
});