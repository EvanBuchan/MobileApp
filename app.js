var apiKey = "046600dc854adf7ca0ccd3e69d02925a";
var query=  "foo fighters";
var method = "album.search&album=";
var url = "http://ws.audioscrobbler.com/2.0/?method=" + method + query + "&api_key=" + apiKey + "&format=json"; 
console.log(url);


// Search the api using the URL
$.getJSON(url, function(data){
    // Send the data to the displayResults function
    displayResults(data);
});


const searchbar = document.querySelector('ion-searchbar');
    const items = Array.from(document.querySelector('ion-list').children);

    searchbar.addEventListener('ionInput', handleInput);

    function handleInput(event) {
      const query = event.target.value.toLowerCase();
      requestAnimationFrame(() => {
        items.forEach(item => {
          const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
          item.style.display = shouldShow ? 'block' : 'none';
        });
      });
    }


// Display the text results 
function displayResults(json){
	
	// Print the text results to the console for testing purposes
	console.log("SEARCH RESULTS: " + JSON.stringify(json));
		
		// Add the first text result to the list
		document.getElementById('apiresult0').innerHTML += "<h1>" + json.results.albummatches.album[0].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[0].artist + "</h2>"
	
		// Add the first img result to the list
		document.getElementById('imgresult0').innerHTML += 
        "<img src='" + json.results.albummatches.album[0].image[1]["#text"] + "'>";
	

		// Add the second text result to the list
		document.getElementById('apiresult1').innerHTML += "<h1>" + json.results.albummatches.album[1].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[1].artist + "</h2>"
	
		// Add the second img result to the list
		document.getElementById('imgresult1').innerHTML += 
        "<img src='" + json.results.albummatches.album[1].image[1]["#text"] + "'>";
		

		// Add the third text result to the list
		document.getElementById('apiresult2').innerHTML += "<h1>" + json.results.albummatches.album[2].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[2].artist + "</h2>"
	
		// Add the third img result to the list
		document.getElementById('imgresult2').innerHTML += 
        "<img src='" + json.results.albummatches.album[2].image[1]["#text"] + "'>";


		// Add the fourth text result to the list
		document.getElementById('apiresult3').innerHTML += "<h1>" + json.results.albummatches.album[3].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[3].artist + "</h2>"
	
		// Add the fourth img result to the list
		document.getElementById('imgresult3').innerHTML += 
        "<img src='" + json.results.albummatches.album[3].image[1]["#text"] + "'>";


		// Add the fifth text result to the list
		document.getElementById('apiresult4').innerHTML += "<h1>" + json.results.albummatches.album[4].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[4].artist + "</h2>"
	
		// Add the fifth img result to the list
		document.getElementById('imgresult4').innerHTML += 
        "<img src='" + json.results.albummatches.album[4].image[1]["#text"] + "'>";


		// Add the sixth text result to the list
		document.getElementById('apiresult5').innerHTML += "<h1>" + json.results.albummatches.album[5].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[5].artist + "</h2>"
	
		// Add the sixth img result to the list
		document.getElementById('imgresult5').innerHTML += 
        "<img src='" + json.results.albummatches.album[5].image[1]["#text"] + "'>";

};


