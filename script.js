$(function() {
    wordInput = function() {
        var query = $('#searchBox').val().toLowerCase();
        var number = $('#num').val()
        console.log(query)
        console.log(number)
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'http://api.wordnik.com:80/v4/word.json/' + query + '/relatedWords?useCanonical=false&relationshipTypes=rhyme&limitPerRelationshipType=' + number + '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
            success: function(data) {
                console.log(data)
                    //console.log(data[0].words)
                var rhymeWords = [];
                if (data[0]) {
                    $('#errorMessage').text('')
                    for (i = 0; i < data[0].words.length; i++) {
                        rhymeWords.push(data[0].words[i])
                            //console.log(data[0].words[i])
                    }
                } else {
                    $('#errorMessage').text('Choose another word! (p.s. no $ymb0l$!)')
                    localStorage.removeItem(JSON.stringify(words[i]))
                }
                $('#rhymeBox').empty()
                for (i = 0; i < rhymeWords.length; i++) {
                    $('#rhymeBox').append('<p>' + rhymeWords[i] + '<p>')
                };
                localStorage.setItem(query, JSON.stringify(rhymeWords))
            },
            error: function(ajaxContext) {
                $('#errorMessage').text('Please enter a word!')
                localStorage.removeItem(JSON.stringify(words[i]))
            }
        })
        return false
    }
    $('#subBut').on('click', wordInput)
})
$(function() {
    $('#searchBox').focus().css('outline-color', '#FF0000')
})
$(function() {
    $('#subBut').focus().css('outline-color', '#FF0000')
})
$(function() {
    for (var i = 0, len = localStorage.length; i < len; ++i) {
        console.log(localStorage.getItem(localStorage.key(i)));
        var $div = $('<div class=columnDivs>' + '<p class=highlight>' + localStorage.key(i) + '</p>' + '</div>')
        $("#recentWords").append($div)
            //below works, above testing
            //$("#recentWords").append('<div id=div'+ i + '>' + '<p>' + localStorage.key(i) + '</p>' + '</div>');
            // for(var i=0; len = localStorage.getItem(localStorage.key(i).length), i < len; ++i){
        var recentWord = JSON.parse(localStorage.getItem((localStorage.key(i))))
        for (var j = 0; len = recentWord.length, j < len; ++j) {
            // $('#recentWords').append('<p>' + recentWord[i] + '</p>')
            $div.append('<p>' + recentWord[j] + '</p>')
        }
        console.log(recentWord)
    }
})