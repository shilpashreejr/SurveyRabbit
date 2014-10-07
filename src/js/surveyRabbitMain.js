/*
 * Main File
 */

function bootstrapper() {
	var controller = new SurveyRabbitController;
	controller.loadView();
	controller.bindEvents();
}

bootstrapper();