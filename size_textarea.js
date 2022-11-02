
$(".btn-near").on("mouseover", function(e){
    id= e.target.id;

    if(id =='first-btn'){
        $('#second-btn').addClass('fuzzy');
        $('#second-btn').siblings().addClass('fuzzy');
    }
    else{
        $('#first-btn').addClass( 'fuzzy');
        $('#first-btn').siblings().addClass( 'fuzzy');
    }
});

$(".btn-near").on("mouseout", function(e){

    $(".btn-near").removeClass('fuzzy')
    $(".btn-near").siblings().removeClass('fuzzy')

});


$("#first-btn").on("click",(e)=>{
    window.location.href= "https://docs.google.com/forms/d/e/1FAIpQLScHzNiUlM-VfoBJ6VMNZrv_XSZ1jkxqC2qBe8cUEJBdnfXFWw/viewform?usp=sf_link%D0%AB";
})

$("#second-btn").on("click",(e)=>{
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfIWQW0DGLe_rrtI2uIVzh3z-42jte3ZTPhj0fbMrxw-rgNIw/viewform?usp=sf_link";
})


$(window).scroll(function() {
    var currentHeight = $(window).scrollTop();

    var first_line = document.getElementById("man-svg").getElementById("first-line");
    var sec_line = document.getElementById("man-svg").getElementById("second-line");
    var thir_line = document.getElementById("man-svg").getElementById("third-line");


    var first_position = first_line.getBoundingClientRect();
    var sec_position = sec_line.getBoundingClientRect();
    var thir_position = thir_line.getBoundingClientRect();
    // var thir_position=0


    if (currentHeight > (first_position.top+500)) {

        setTimeout(function() {
        currentElems = document.querySelectorAll('.first-line');
        currentElems.forEach(element => {
            element.classList.add('element-show');
        });
        first_line.classList.add('element-show');
    }, (1 * 1000));

        setTimeout(function() {
            currentElems = document.querySelectorAll('.second-line');
            currentElems.forEach(element => {
                element.classList.add('element-show');
            });
            sec_line.classList.add('element-show');
        }, (2 * 1000));

        setTimeout(function() {
            currentElems = document.querySelectorAll('.third-line');
            currentElems.forEach(element => {
                element.classList.add('element-show');
            });
            thir_line.classList.add('element-show');
        }, (3 * 1000));
    }
     if (currentHeight > sec_position.top) {
        
        
        
    }
     if (currentHeight > thir_position.top) {
        
        
    }
});


var limit = 300;
$('#span-contenteditable').keypress(function() {
  return this.innerHTML.length < limit;
}).on({
  'paste': function(e) {
    var len = this.innerHTML.length,
      cp = e.originalEvent.clipboardData.getData('text');
    if (len < limit)
      this.innerHTML += cp.substring(0, limit - len);
    return false;
  },
  'drop': function(e) {
    e.preventDefault();
    e.stopPropagation();
  }
});