$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
});

/* toggle navbar/menu scripts */
$('.navmenu-btn').click(function(){
    $('.navbar .menu').toggleClass('active')
    $('.navmenu-btn i').toggleClass('active')
})