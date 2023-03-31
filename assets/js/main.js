let colors=["#ff206e","#8a20ff","#20ffcc","#42ff20"];
let root = document.querySelector(":root");
let x = root.style.cssText;
root.style.cssText=x+`--main-coler:#ff206e;`;
let width =$(".color-box").outerWidth();
console.log(width);
for (let index = 0; index < colors.length; index++) {
    $(".color").eq(index).css("backgroundColor",colors[index]);
}
$(".color").click(function () {
    let color =$(this).css("backgroundColor");
    root.style.cssText=x+`--main-coler:${color};`;
});
$(".color-option").css("left",-width);
$(".color-option .icon").click(function(){
    if($(".color-option").css("left")=="0px"){
        $(".color-option").animate({"left":-width},500);
    }
        else{
        $(".color-option").animate({"left":"0px"},500);
        }
})