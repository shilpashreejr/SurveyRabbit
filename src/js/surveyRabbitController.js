/*
 * Controller
 */

// a controller is where the model and the view are used together.
var SurveyRabbitController = function () {
	this.model = new SurveyRabbitModel;
	this.view = new SurveyRabbitView(this.model);
	return this;
};

SurveyRabbitController.prototype.loadView = function () {
	this.view.renderWidgets();
};

SurveyRabbitController.prototype.bindEvents = function () {
	var type,
		index,
		self = this,
		question = '',
		answer = '';

	$('#sr-widgetContainer').delegate('input', 'click', function (event) {
		$(this).prop("checked", false);
		self.view.renderSurvey(event.target.type);
	});

	$('#sr-title input').change(function () {
		self.model.updateTitle($(this).val());
	});

	$('#sr-surveyQuestionContainer').delegate('button', 'click', function () {
		var index = $(this).data('index');
		self.view.removeSurveyQuestion($(this));
		self.model.removeModelObject(index);
	});

	$('#sr-surveyQuestionContainer').delegate('input', 'change', function (event) {
		$(this).parentsUntil('#sr-surveyQuestionContainer').find('input').each(function () {
			if ($(this).attr('type') === 'radio' || ($(this).attr('type') === 'checkbox')) {
				type = $(this).attr('type');
			} else if ($(this).attr('name') === 'question') {
				question = $(this).val();
			} else if ($(this).attr('name') === 'answer') {
				answer = $(this).val();
			}
			index = $(this).data('index');
		});

		if (question !== '' && answer !== '') {
			self.model.updateModel(type, question, answer, index);
		}

	});

	$('#sr-previewButton').click(function (event) {
		event.preventDefault();
		self.view.renderPreview();
	});
};