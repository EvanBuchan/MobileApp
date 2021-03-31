// Variables for accessing last.fm API
var apiKey = "046600dc854adf7ca0ccd3e69d02925a";
var query=  "foo fighters";
var method = "album.search&album=";
var url = "http://ws.audioscrobbler.com/2.0/?method=" + method + query + "&api_key=" + apiKey + "&format=json"; 
console.log(url);


// Filter down results from API search
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

// Search the api using the URL
$.getJSON(url, function(data){
    // Send the data to the displayResults function
    displayResults(data);
});


// Display the text results 
function displayResults(json){
	
	// Print the text results to the console for testing purposes
	console.log("SEARCH RESULTS: " + JSON.stringify(json));
		
		// Add the 1st text result to the list
		document.getElementById('apiresult0').innerHTML += "<h1>" + json.results.albummatches.album[0].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[0].artist + "</h2>"
	
		// Add the 1st img result to the list
		document.getElementById('imgresult0').innerHTML += 
        "<img src='" + json.results.albummatches.album[0].image[1]["#text"] + "'>";
	


		// Add the 2nd text result to the list
		document.getElementById('apiresult1').innerHTML += "<h1>" + json.results.albummatches.album[1].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[1].artist + "</h2>"
	
		// Add the 2nd img result to the list
		document.getElementById('imgresult1').innerHTML += 
        "<img src='" + json.results.albummatches.album[1].image[1]["#text"] + "'>";
		


		// Add the 3rd text result to the list
		document.getElementById('apiresult2').innerHTML += "<h1>" + json.results.albummatches.album[2].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[2].artist + "</h2>"
	
		// Add the 3rd img result to the list
		document.getElementById('imgresult2').innerHTML += 
        "<img src='" + json.results.albummatches.album[2].image[1]["#text"] + "'>";



		// Add the 4th text result to the list
		document.getElementById('apiresult3').innerHTML += "<h1>" + json.results.albummatches.album[3].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[3].artist + "</h2>"
	
		// Add the 4th img result to the list
		document.getElementById('imgresult3').innerHTML += 
        "<img src='" + json.results.albummatches.album[3].image[1]["#text"] + "'>";



		// Add the 5th text result to the list
		document.getElementById('apiresult4').innerHTML += "<h1>" + json.results.albummatches.album[4].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[4].artist + "</h2>"
	
		// Add the 5th img result to the list
		document.getElementById('imgresult4').innerHTML += 
        "<img src='" + json.results.albummatches.album[4].image[1]["#text"] + "'>";



		// Add the 6th text result to the list
		document.getElementById('apiresult5').innerHTML += "<h1>" + json.results.albummatches.album[5].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[5].artist + "</h2>"
	
		// Add the 6th img result to the list
		document.getElementById('imgresult5').innerHTML += 
        "<img src='" + json.results.albummatches.album[5].image[1]["#text"] + "'>";



        // Add the 7th text result to the list
		document.getElementById('apiresult6').innerHTML += "<h1>" + json.results.albummatches.album[6].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[6].artist + "</h2>"
	
		// Add the 7th img result to the list
		document.getElementById('imgresult6').innerHTML += 
        "<img src='" + json.results.albummatches.album[6].image[1]["#text"] + "'>";



        // Add the 8th text result to the list
		document.getElementById('apiresult7').innerHTML += "<h1>" + json.results.albummatches.album[7].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[7].artist + "</h2>"
	
		// Add the 8th img result to the list
		document.getElementById('imgresult7').innerHTML += 
        "<img src='" + json.results.albummatches.album[7].image[1]["#text"] + "'>";



        // Add the 9th text result to the list
		document.getElementById('apiresult8').innerHTML += "<h1>" + json.results.albummatches.album[8].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[8].artist + "</h2>"
	
		// Add the 9th img result to the list
		document.getElementById('imgresult8').innerHTML += 
        "<img src='" + json.results.albummatches.album[8].image[1]["#text"] + "'>";



        // Add the 10th text result to the list
		document.getElementById('apiresult9').innerHTML += "<h1>" + json.results.albummatches.album[9].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[9].artist + "</h2>"
	
		// Add the 10th img result to the list
		document.getElementById('imgresult9').innerHTML += 
        "<img src='" + json.results.albummatches.album[9].image[1]["#text"] + "'>";



        // Add the 11th text result to the list
		document.getElementById('apiresult10').innerHTML += "<h1>" + json.results.albummatches.album[10].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[10].artist + "</h2>"
	
		// Add the 11th img result to the list
		document.getElementById('imgresult10').innerHTML += 
        "<img src='" + json.results.albummatches.album[10].image[1]["#text"] + "'>";
	


		// Add the 12th text result to the list
		document.getElementById('apiresult11').innerHTML += "<h1>" + json.results.albummatches.album[11].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[11].artist + "</h2>"
	
		// Add the 12th img result to the list
		document.getElementById('imgresult11').innerHTML += 
        "<img src='" + json.results.albummatches.album[11].image[1]["#text"] + "'>";
		


		// Add the 13th text result to the list
		document.getElementById('apiresult12').innerHTML += "<h1>" + json.results.albummatches.album[12].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[12].artist + "</h2>"
	
		// Add the 13th img result to the list
		document.getElementById('imgresult12').innerHTML += 
        "<img src='" + json.results.albummatches.album[12].image[1]["#text"] + "'>";



		// Add the 14th text result to the list
		document.getElementById('apiresult13').innerHTML += "<h1>" + json.results.albummatches.album[13].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[13].artist + "</h2>"
	
		// Add the 14th img result to the list
		document.getElementById('imgresult13').innerHTML += 
        "<img src='" + json.results.albummatches.album[13].image[1]["#text"] + "'>";


		
		// Add the 15th text result to the list
		document.getElementById('apiresult14').innerHTML += "<h1>" + json.results.albummatches.album[14].name+ "</h1>"
        + "<h2>" + json.results.albummatches.album[14].artist + "</h2>"
	
		// Add the 15th img result to the list
		document.getElementById('imgresult14').innerHTML += 
        "<img src='" + json.results.albummatches.album[14].image[1]["#text"] + "'>";
};


