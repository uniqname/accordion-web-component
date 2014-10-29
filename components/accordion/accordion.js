(function () {
	var importDoc = document.currentScript.ownerDocument,
		AccordIonProto = Object.create(HTMLElement.prototype),
		AccordionPanelProto = Object.create(HTMLElement.prototype),
		accordIon;

	AccordIonProto.open = false;

	AccordIonProto.createdCallback = function () {
		var theAccordion = this,
			t = importDoc.querySelector('#accordion-template'),
			clone = document.importNode(t.content, true)
			
		theAccordion.createShadowRoot().appendChild(clone);

		console.info('An accord-ion element was created');

		this.addEventListener('click', function (clickEvt) {
			var panels,
				openPanels;

			if (clickEvt.target.nodeName === 'HEADER') {
				panels = theAccordion.querySelectorAll('accordion-panel');

				[].slice.call(panels).forEach(function (panel) {
					var targetPanel = (function () {
						var tp = clickEvt.target;

						while (tp.parentElement) {
							tp = tp.parentElement;
							if (tp.nodeName === 'ACCORDION-PANEL') {
								console.log('returning ', tp);
								return tp;
							}
						} 
						return null;
					})();

					console.log(panel, '===', targetPanel, panel === targetPanel);
					if (panel === targetPanel) {

						if (panel.open) {

							panel.removeAttribute('open');
							panel.open = false;

						} else {

							panel.setAttribute('open', 'open');
							panel.open = true;
						}
					} else {
						
						if (panel.open) {
							panel.removeAttribute('open');
							panel.open = false;
						}

					}
				});
			}
		});
	};
	AccordIonProto.attachedCallback = function () {};

	accordIon = document.registerElement('accord-ion', {
		prototype: AccordIonProto
	});
})();