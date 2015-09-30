
var TimeOut;
var index=1;
Carousel={
    initial:function(){

        var PicNum=$("#Carousel ul li").length;

        //  console.log("PicNum"+PicNum);
        var CLB="<ul>";
        for(var i=1;i<PicNum+1;i++){
            CLB+="<li onclick='Carousel.Target("+PicNum+","+i+")' id='clb"+i+"'></li>"
        }
        CLB+="</ul>"
        $("#Carousel_list_btns").append(CLB)
        //console.log(CLB)
        // $("#Carousel_list_btns").html("ul");
        Carousel.RunCarousel(PicNum,index);
    },
    RunCarousel:function(Picnum,index){
        $("#Carousel #Carousel_Ul li:nth-child("+index+")").animate({"opacity":"1"},500);
        $("#Carousel_list_btns ul li:nth-child("+index+")").addClass("clbActive");
        if(index==1){
            $("#Carousel #Carousel_Ul li:nth-child("+Picnum+")").animate({"opacity":"0"},500);
            $("#Carousel_list_btns ul li:nth-child("+Picnum+")").removeClass("clbActive");
        }else{
            $("#Carousel #Carousel_Ul li:nth-child("+index+")").prev("li").animate({"opacity":"0"},500);
            $("#Carousel_list_btns ul li:nth-child("+index+")").prev("li").removeClass("clbActive");
        }
        if(index<Picnum){
            index++;

        }else{
            index=1;

        }
        //console.log(Carousel.GetIndex())
        TimeOut=setTimeout("Carousel.RunCarousel("+Picnum+","+index+")",3000);
    },
    Pre:function(index){

    },
    Next:function(index){

    },
    Target:function(PicNum,num){
        clearTimeout(TimeOut);
        //  console.log(num);
        $("#Carousel #Carousel_Ul li").each(function(){
            if($(this).css("opacity")==1){
                $(this).animate({"opacity":"0"},500);
            }
        })
        //  $("#Carousel #Carousel_Ul li:nth-child("+index+")").animate({"opacity":"0"},500);
        //    $("#Carousel #Carousel_Ul li:nth-child("+num+")").animate({"opacity":"1"},500);
        $("#Carousel_list_btns ul li").removeClass("clbActive");
        Carousel.RunCarousel(PicNum,num);
    }
}
$(function(){
    Carousel.initial();
})

