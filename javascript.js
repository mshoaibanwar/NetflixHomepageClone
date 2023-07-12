var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    for (i = 0; i < coll.length; i++) {
        if(this != coll[i])
        {
            var content = coll[i].nextElementSibling;
            if (content.style.maxHeight){
                coll[i].classList.toggle("active");
                content.style.maxHeight = null;
            }
        }
    }
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}