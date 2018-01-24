


$(document).ready(function(){


  $("input").keyup(function() {
    $(".fa").show();
    var search = $(this).val();
    if (!search) $(".fa").hide();
  }); 
   
//search function   
function theSearch(){
    var searchItem = $(".searchEnter").val();
    var url  = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=&list=search&srsearch="+searchItem+"&callback=?"; 
    $.getJSON(url, function(data) {      
     function wikiDisplay (color, numbr){
      var title = data.query.search[numbr].title; 
      $(color).html("<a href=\"https://en.wikipedia.org/wiki/" + title + "\" target=\"blank\">" + "<h2>" + title + "</h2>" + data.query.search[numbr].snippet + "..." + "</a>");
 }    
      wikiDisplay("#red", 0);
      wikiDisplay("#redOrange", 1);
      wikiDisplay("#Orange", 2);
      wikiDisplay("#Yellow", 3);
      wikiDisplay("#YellowGreen", 4);
      wikiDisplay("#Green", 5);
      wikiDisplay("#BlueGreen", 6);
      wikiDisplay("#Blue", 7);
      wikiDisplay("#Indigo", 8);
      wikiDisplay("#Violet", 9);      
      });
  } //end search function 

 $("#searchClick").on("click", function(){
   theSearch(); 
 });
  
  $("form").submit( function(event){
   theSearch();
   event.preventDefault();    
  });

 //search reset
  $(".fa-times").on("click", function(){
    $(".fa").hide();
    $("input").val(" ");
    $(".viewer").html(" ");
  });
 

 }); //end jquery
 
