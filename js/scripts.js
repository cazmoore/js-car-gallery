// Self executing function (surrounded by brackets and bracket at end)

(function(){

  var carimages = document.querySelector('.carimages');

  // Add EventListener on click and initiate function
  carimages.addEventListener('click', function(e){

    console.log(e.target)

  });

  // console.log(carimages);

}());
