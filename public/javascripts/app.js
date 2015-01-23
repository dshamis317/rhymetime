var RhymeTime = RhymeTime ||
{
	Models: {},
	Collections: {},
	Views: {},
	Router: null
};

function stretchHeader() {
	$('.logo').bigtext();
}

function getQueryData() {
	$('.form').on('submit', function(e) {
		e.preventDefault();
		var $searchInput = $('.search-input');
		var $query = $searchInput.val().toLowerCase();
    // $searchInput.val('');
    var $searchDiv = $('.search-term');
    $searchDiv.html($query);
    getWordData($query);
})
}

function getWordData(word) {
	$.ajax({
		url: '/' + word,
		method: 'get',
		dataType: 'json',
		success: function(data) {
			if (typeof data === 'string') {
				renderErrorMsg();
			} else {
				renderSyllables(data.syllables);
				console.log(data);
			}
		}
	});
}

function renderErrorMsg() {
	console.log('NO DATA HERE');
}

function renderSyllables(array) {
	var $container = $('<div>').addClass('syllable-container').appendTo($('.search-term-container'));
	var $syllableCount = $('<div>').addClass('syllable-count').html(array.count).appendTo($container);
	var $syllableList = $('<h2>').addClass('syllable-list').appendTo($container);
	$.each(array.list, function() {
		$('<span>').addClass('syllable').html(this).appendTo($syllableList);
	});
	return;
}

RhymeTime.initialize = function() {
	stretchHeader();
	getQueryData();
}

$(function() {
	RhymeTime.initialize();
});
