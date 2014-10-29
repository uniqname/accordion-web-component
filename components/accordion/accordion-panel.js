(function () {
	var AccordionPanelProto = Object.create(HTMLElement.prototype),
		importDoc = document.currentScript.ownerDocument,
		accordionPanel;

	//AccordionPanelProto Stuff
	AccordionPanelProto.createdCallback = function () {
		var thePanel = this,
			t = importDoc.querySelector('#accordion-panel-template'),
			clone = document.importNode(t.content, true);

		thePanel.createShadowRoot().appendChild(clone);

		console.info('An accordion-panel element was created');
	};

	accordionPanel = document.registerElement('accordion-panel', {
		prototype: AccordionPanelProto
	});
})();