jQuery(document).ready(function($) {
	"use strict";
	var bdt_offcanvas = $('body').find('.elementor-widget-bdt-offcanvas');
	if (bdt_offcanvas) {
		$('body').wrapInner('<div class="bdt-offcanvas-content" />');
	}	
});