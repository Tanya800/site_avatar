
$(".btn-near").on("mouseover", function(e){
    id= e.target.id;

    if(id =='first-btn'){
        $('#second-btn').addClass('fuzzy');
        console.log();
        $('#second-btn').siblings()[0].classList.add('fuzzy');


    }
    else{
        $('#first-btn').addClass( 'fuzzy');
        $('#first-btn').siblings()[0].classList.add('fuzzy');
    }
});

$(".btn-near").on("mouseout", function(e){

    $.each($(".fuzzy"), function(i, v){
        v.classList.remove('fuzzy')
    });
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

function changeFlipdownPadding() {

    width_example_block = $(".example")[0].offsetWidth;
    flip_block = $("#flipdown")[0];
    width_flipdown_block = flip_block.childNodes[0].clientWidth * 4;
    padding_left = (width_example_block - width_flipdown_block)/2;
    flip_block.style.paddingLeft = padding_left  + "px";
}


document.addEventListener('DOMContentLoaded', () => {

    // Unix timestamp (in seconds) to count down to
    var twoDaysFromNow = (new Date(2022, 10, 26, 12, 0, 0, 0).getTime() / 1000) ;
  
    // Set up FlipDown
    var flipdown = new FlipDown(twoDaysFromNow)
  
      // Start the countdown
      .start()
  
      // Do something when the countdown ends
      .ifEnded(() => {
        console.log('The countdown has ended!');
      });

    // const windowInnerWidth = document.documentElement.clientWidth;
    // console.log(windowInnerWidth);


    changeFlipdownPadding();

  });

$("#btn_send_message").on('click',function (e){

    message = e.currentTarget.previousElementSibling.textContent;

    if (message.length > 0){
        href = "mailto:support@avatar.su?";
        href += 'body=' + message.replaceAll(' ','+');
        window.location.href = href;
    }
});

window.onresize = function (event) {
    changeFlipdownPadding();
};