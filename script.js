$(function(){
	wordInput = function(){
		var query = $('#searchBox').val();
		var number = $('#num').val()
		console.log(query)
		console.log(number)
		$.ajax({
			type: 'GET',
			dataType: 'json',
			url: 'http://api.wordnik.com:80/v4/word.json/' + query + '/relatedWords?useCanonical=false&relationshipTypes=rhyme&limitPerRelationshipType=' + number + '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
			success: function(data){
				console.log(data)
				//console.log(data[0].words)
				var rhymeWords = [];
				if(data[0]){
					for(i=0; i<data[0].words.length; i++){
					rhymeWords.push(data[0].words[i])
					//console.log(data[0].words[i])
				}
					}
					else{
        		$('#explain').append('<li id="error">' + 'Choose another word! (p.s. no $ymb0l$!)' + '</li>') 
        		$('#error').fadeOut(8000, function(){
        			$(this).remove(); 
        		});
					}
				$('#rhymeBox').empty()
				for(i=0; i<rhymeWords.length; i++){
					$('#rhymeBox').append('<p>' + rhymeWords[i] + '<p>')
				};
				console.log(rhymeWords)
			 },
			 error: function (ajaxContext) {
        		$('#explain').append('<li id="error">' + 'Please enter a word!' + '</li>') 
        		$('#error').fadeOut(5000, function(){
        			$(this).remove(); 
        		});
        	}
			})
		return false
		}
		$('#subBut').on('click', wordInput)
		// $('#subBut').on('click', addDiv)
	})

$(function(){
    $('#searchBox').focus().css('outline-color', '#FF0000')
    })

$(function(){
    $('#subBut').focus().css('outline-color', '#FF0000')
    })
	

// addDiv = function(){
// 				$('#subBut').on('click', function(){
// 					for(i=0; i<rhymeWords.length; i++){
// 					$('#rhymeBox').append( $("#rhymeBox").append() + rhymeWords[i] + '<br/>');
// $('#subBut').on('click', function(){
// 	return 

// })


// $('').click(function(){
// 	alert('handler is clicked')
// })
