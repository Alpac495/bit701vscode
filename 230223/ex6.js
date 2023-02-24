//

$(function(){
    $("h1.title").click(function(){
        $("ul.music-list").slideDown('slow');
    });

    $("ul.music-list li").click(function(){
        //노래 제목을 얻어서 h1 타이틀에 넣기
        $("h1.title").text($(this).text());
        
        let selectClass=$(this).attr("class");
        //$("#cd").attr("class",selectClass);
        
        $("#cd").animate({width:"0"},'slow',function(){
            $("#cd").attr("class", selectClass);
            $(this).animate({width:'300px'},'slow');
        })

        $(this).parent().slideUp();

    });
});