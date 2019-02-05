// Self executing function (surrounded by brackets and bracket at end)

(function(){

  var carimages = document.querySelector('.carimages');

  // Add EventListener on click and initiate function
  carimages.addEventListener('click', function(e){

    if(e.target.tagName == 'IMG'){

      // create overlay variable to create onclick on image
      var overlay = document.createElement('div');
      overlay.id = "overlay";

      // set styles
      overlay.style.position = 'absolute';
      overlay.style.top = 0;
      overlay.style.background = 'rgba(0,0,0,0.7)';
      overlay.style.cursor = 'pointer';

      // Size overlay to same size as inner window
      overlay.style.width = window.innerWidth + "px";
      overlay.style.height = window.innerHeight + "px";

      // Append overlay
      document.body.appendChild(overlay);

      // Get image source
      var imageSrc = e.target.src;

      // Create large image
      var popUpImage = document.createElement('img');
      popUpImage.id = "popimage";
      popUpImage.src = imageSrc;

      // Style the image
      popUpImage.style.display = "block";
      popUpImage.style.width = "50%";
      popUpImage.style.margin = "0 auto";
      popUpImage.style.marginTop = "10%";

      // Append image
      overlay.appendChild(popUpImage);

      // Add EventListener to close image on second onclick
      popUpImage.addEventListener('click', function(){

        if(overlay){

          overlay.parentElement.removeChild(overlay);

        }
      });

      // Add EventListener to make overlay move with scroll and resize







      console.log(popUpImage)

    }



  });

  // console.log(carimages);

}());
