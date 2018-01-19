
function handleKeyPress(e){
 var key=e.keyCode || e.which;
  if (key == 13){
     doIt();
  }
}

function doIt(userInput) {
   var userInput = document.getElementById('userInput').value;
   document.getElementById('userInput').value = '';
   //console.log(userInput);
    //Begin chat logic
    if (userInput.search(/^hello/i) > -1 || userInput.search(/^hi/i) > -1) {
      document.getElementById('doBotOutput').style.display ='none';
      document.getElementById('doBotMessages').style.display ='block';
      document.getElementById('doBotMessages').innerHTML = 'Hello, what can I do for you?';
    }
    else if (userInput.search(/^how are you/i) > -1) {
      document.getElementById('doBotOutput').style.display ='none';
      document.getElementById('doBotMessages').style.display ='block';
      document.getElementById('doBotMessages').innerHTML = 'Im great, what can I do for you?';
    }
    //Profanity filter
    // else if (userInput.search(/fuck/i) > -1 || userInput.search(/shit/i) > -1 || userInput.search(/bitch/i) > -1) {
    //   document.getElementById('doBotOutput').style.display ='none';
    //   document.getElementById('doBotMessages').style.display ='block';
    //   document.getElementById('doBotMessages').innerHTML = 'I\'m not allowed to talk like that. Try again.';
    // }
    //End chat logic
      //Begin keyword logic
      //Search keyword
      else if (userInput.search(/search/i) === 0) {
        document.getElementById('doBotMessages').style.display ='none';
        document.getElementById('doBotOutput').style.display ='block';
        document.getElementById('doBotOutput').innerHTML = '<iframe src="https://www.bing.com/search?q=' + userInput.replace(/search/i, '') + '"  width="95%" height="680px"></frame>';
        //window.open("https://www.bing.com/search?q=" + userInput.replace('search', ''));
      }
      //Images keyword
      else if (userInput.search(/images/i) === 0) {
        document.getElementById('doBotMessages').style.display ='none';
        document.getElementById('doBotOutput').style.display ='block';
        document.getElementById('doBotOutput').innerHTML = '<iframe src="https://www.bing.com/images/search?q=' + userInput.replace(/images/i, '') + '"  width="95%" height="680px"></frame>';
      }
      //Weather keyword
      else if (userInput.search(/weather/i) === 0) {
        document.getElementById('doBotMessages').style.display ='none';
        document.getElementById('doBotOutput').style.display ='block';
        document.getElementById('doBotOutput').innerHTML = '<iframe src="https://www.weather.com" width="95%" height="680px"></frame>';
        //window.open("https://weather.com");
      }
      //Music keyword
      else if (userInput.search(/music/i) === 0) {
        document.getElementById('doBotMessages').style.display ='none';
        document.getElementById('doBotOutput').style.display ='block';
        document.getElementById('doBotOutput').innerHTML = '<iframe src="https://www.slacker.com" width="95%" height="680px"></frame>';
      }
      //Buy or Shop keyword
      else if (userInput.search(/buy/i) === 0 || userInput.search(/shop/i) === 0) {
        var buySearch = userInput;
        document.getElementById('doBotMessages').style.display ='none';
        document.getElementById('doBotOutput').style.display ='block';
            if (userInput.search(/buy/i) === 0) {
              document.getElementById('doBotOutput').innerHTML = '<iframe src="https://www.walmart.com/search/?query=' + userInput.replace(/buy/i, '') + '" width="95%" height="680px"></iframe>';
              //window.open("https://www.walmart.com/search/?query=" + userInput.replace('buy', ''));
            } else if (userInput.search(/shop/i) === 0) {
              document.getElementById('doBotOutput').innerHTML = '<iframe src="https://www.walmart.com/search/?query=' + userInput.replace(/shop/i, '') + '" width="95%" height="680px"></iframe>';
              //window.open("https://www.walmart.com/search/?query=" + userInput.replace('shop', ''));
            }

      }
      //Travel keyword
      else if (userInput.search(/travel/i) === 0) {
        //userInput will equal something like this - travel, passengers 1, from Phoenix, to Cincinnati, start 12 24 17, end 12 25 17

        var travelArray = userInput.split(', ');

        var travelPassengers = travelArray[1].replace('passengers ', '');
        var travelHomeCity = travelArray[2].replace('from ', '');
        var travelDestinationCity = travelArray[3].replace('to ', '');
        var travelStartDate = travelArray[4].replace('start ', '');
        var travelEndDate = travelArray[5].replace('end ', '');

        document.getElementById('doBotMessages').style.display ='none';
        document.getElementById('doBotOutput').style.display ='block';
        document.getElementById('doBotOutput').innerHTML = '<iframe src="https://www.travelocity.com/Flights-Search?flight-type=on&starDate=' + travelStartDate + '&endDate=' + travelEndDate + '&_xpid=11905%7C1&mode=search&trip=roundtrip&leg1=from%3A' + travelHomeCity + '%2Cto%3A' + travelDestinationCity + '%2Cdeparture%3A' + travelStartDate + 'TANYT&leg2=from%3A' + travelDestinationCity + '%2Cto%3A' + travelHomeCity + '%2Cdeparture%3A' + travelEndDate + 'TANYT&passengers=children%3A0%2Cadults%3A' + travelPassengers + '%2Cseniors%3A0%2Cinfantinlap%3AY" width="95%" height="680px"></frame>';
        //window.open("https://www.travelocity.com/" + userInput.replace('travel', ''));
      }
      //News keyword
      else if (userInput.search(/news/i) === 0) {
        document.getElementById('doBotMessages').style.display ='none';
        document.getElementById('doBotOutput').style.display ='block';
        document.getElementById('doBotOutput').innerHTML = '<iframe src="https://www.usatoday.com/" width="95%" height="680px"></frame>';
      }
      else if (userInput.search('refresh') === 0 || userInput.search('blank') === 0) {
        location.reload();
      }

      else {
        document.getElementById('doBotOutput').style.display ='none';
        document.getElementById('doBotMessages').style.display ='block';
        document.getElementById('doBotMessages').innerHTML = 'Sorry, I didn\'t understand. Try again.';
      }



}//end doIt function
