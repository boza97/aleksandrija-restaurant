$(document).ready(function () {
  

    var title = document.getElementById("new-menu");
    var content = document.getElementById('hide-show');
    var flag = false;

    title.addEventListener("click", function () {
        if(flag){
            content.style.display = 'none';
            flag = false;
        }else{
            content.style.display = 'block';
            flag = true;
        }
    });
});