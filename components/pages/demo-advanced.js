import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class DemoAdvanced extends PolymerElement {
  
  static get properties() {
    return {};
  }

  static get template() {
    return html`
      Demo Advanced
    `;
  }

}

customElements.define('demo-advanced', DemoAdvanced);