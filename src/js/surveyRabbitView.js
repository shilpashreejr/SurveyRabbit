/*
 * View
 */

var RADIO = 'Radio',
	CHECKBOX = 'CheckBox',
	counter = 0;

var SurveyRabbitView = function (model) {
		this.model = model;
		return this;
	},

	_renderPreview = function (value) {
		var previewSurveyQuestion = '<fieldset><legend>' + value.question + '</legend>',
			previewSurveyOptions = [];
		for (i = 0; i < value.answer.length; i++) {
			previewSurveyOptions += '<div class="' + value.type + '">' +
				'<label>' +
				'<input type="' + value.type + '">' +
				value.answer[i] +
				'</label>' +
				'</div>';
		}
		return (previewSurveyQuestion + previewSurveyOptions + '</fieldset>');
	};

SurveyRabbitView.prototype.renderWidgets = function () {
	var allWidgets = [];

	$.each(this.model.widgets, function (key, value) {
		lowerCaseKey = key.toLowerCase();
		allWidgets += '<div class=' + lowerCaseKey + '>' +
			'<label><input type="' + lowerCaseKey + '"id="' + lowerCaseKey +
			'widget">' + key + '</label></div>';

	});

	$('#sr-widgetContainer').append(allWidgets);
};

SurveyRabbitView.prototype.renderSurvey = function (type) {
	var allSurvey,
		typeCamelCase = (type === 'radio') ? RADIO : CHECKBOX;

	allSurveyView = '<div class="sr-questionWrapper"><div class="col-sm-offset-1 col-sm-10">' +
		'<div class="' + type + '">' +
		'<label>' +
		'<input type="' + type + '" data-index="' + counter + '" id="' + type + counter + '">' +
		typeCamelCase +
		'</label>' +
		'<button type="button" class="close" data-index="' + counter + '" id="close' + counter + '"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
		'</div>' +

	'</div>' +
		'<div class="col-sm-offset-1 col-sm-10">' +
		'<input type="text" class="form-control question" data-index="' + counter + '" name="question" id="question' + counter + '">' +
		'</div>' +
		'<div class="col-sm-offset-1 col-sm-10">' +
		'<input type="text" class="form-control answer" data-index="' + counter + '" name="answer" id="answer' + counter + '">' +
		'</div></div>';

	$('#sr-surveyQuestionContainer').append(allSurveyView);

	counter++;
};

SurveyRabbitView.prototype.removeSurveyQuestion = function ($this) {
	$this.parentsUntil('#sr-surveyQuestionContainer').remove();
};

SurveyRabbitView.prototype.renderPreview = function () {

	var surveytitle = '<h2>' + this.model.surveyTitle + '</h2>',
		previewSurvey = [];

	$('h1').text('Preview');

	$.each(this.model.allSurveyQuestions, function (key, value) {
		previewSurvey += _renderPreview(value);
	});

	$('.form-horizontal').children().remove();
	$('.form-horizontal').append(previewSurvey);
};