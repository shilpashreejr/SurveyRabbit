/* ==========================================================================
 * A "Survey Rabbit" using the MVC pattern.
 * ========================================================================== */

/*
 * Model
 */

// a model is where the data object is created.
var SurveyRabbitModel = function () {
	this.surveyTitle = '';
	this.allSurveyQuestions = [];
	this.widgets = {
		'Radio': 0,
		'Checkbox': 1
	};

	return this;
};

var _updateAllSurvey = function (surveyObject, index, self) {
	self.allSurveyQuestions[index] = surveyObject;
	return self;
};

SurveyRabbitModel.prototype.updateTitle = function (title) {
	this.surveyTitle = title;
	return this;
};

SurveyRabbitModel.prototype.updateModel = function (type, question, answer, index) {
	var self = this,
		surveyObject = {};

	surveyObject = {
		type: type,
		question: question,
		answer: answer.split(','),
		index: index
	};

	_updateAllSurvey(surveyObject, index, self);

	return surveyObject;
};

SurveyRabbitModel.prototype.removeModelObject = function (index) {
	this.allSurveyQuestions.splice(index, 1);
	return this;
};