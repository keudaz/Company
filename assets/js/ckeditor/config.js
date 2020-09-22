/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	config.uiColor = '#e5e5e5';
//	config.extraPlugins = 'image';
	config.extraPlugins = 'dialog';
	config.extraPlugins = 'dialogui';
        config.extraPlugins = 'jsplus_image';
        config.removeButtons = 'Image';
	config.maxSimultaneousUploads = 0;
	config.selectMultiple = true; 
};