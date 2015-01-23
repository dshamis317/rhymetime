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
		window.location.hash = $query;
    	// $searchInput.val('');
    	getWordData($query);
		getRhymeData($query);
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
				doBackboneDefinitions(data.results);
			}
		}
	});
}

function getRhymeData(word) {
	$.ajax({
		url: '/rhymes/' + word,
		method: 'get',
		dataType: 'json',
		success: function(data) {
			doBackboneRhymes(data.rhymes);
		}
	});
}

function doBackboneDefinitions(array) {
	var $definitionCollection = new RhymeTime.Collections.DefinitionCollection();
	var $definitionListView = new RhymeTime.Views.DefinitionListView({
		collection: $definitionCollection,
		el: $('.definitions')
	})
	$.each(array, function() {
		$definitionCollection.add({word: this})
	})
}

function doBackboneRhymes(array) {
	var $rhymeCollection = new RhymeTime.Collections.RhymeCollection();
	var $rhymeListView = new RhymeTime.Views.RhymeListView({
		collection: $rhymeCollection,
		el: $('.rhymes')
	})
	$.each(array.all, function() {
		$rhymeCollection.add({word: this})
	})
}

function renderErrorMsg() {
	console.log('NO DATA HERE');
}

function renderSyllables(array) {
	var $container = $('<div>').addClass('syllable-container').prependTo($('.definition-container'));
	//var $syllableCount = $('<div>').addClass('syllable-count').html(array.count).appendTo($container);
	var $syllableList = $('<h1>').addClass('syllable-list').appendTo($container);
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
