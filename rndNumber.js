$( "#rndNumber" ).blur(function() {
  var trArray = Array.from($("#tblRandomNumber tr td"));
var rndNumber = $("#rndNumber").val();
trArray.map(function(a){
  if(a.innerText === rndNumber){
    $(a).css("background-color","red");
  }
  else{
    $(a).css("background-color","#fff");
  }
});
});
