/* ==========================================================================
 * A "Survey Rabbit" using the MVC pattern.
 * ========================================================================== */

/*
 * Model
 */

/* All the model objects are being created in this constructor. */
var SurveyRabbitModel = function () {
	this.surveyTitle = '';
	this.allSurveyQuestions = [];
	this.widgets = {
		'Radio': 0,
		'Checkbox': 1
	};

	return this;
};

/* An internal function to update all the survey questions array */
var _updateAllSurvey = function (surveyObject, index, self) {
	self.allSurveyQuestions[index] = surveyObject;
	return self;
};

/* Updates the title */
SurveyRabbitModel.prototype.updateTitle = function (title) {
	this.surveyTitle = title;
	return this;
};

/* The Model is being updated here in this function */
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

/* When the widget is deleted , this function takes care of removing it from the model */
SurveyRabbitModel.prototype.removeModelObject = function (index) {
	this.allSurveyQuestions.splice(index, 1);
	return this;
};