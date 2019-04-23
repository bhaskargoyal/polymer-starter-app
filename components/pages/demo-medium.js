import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class DemoMedium extends PolymerElement {
  
  static get properties() {
    return {};
  }

  static get template() {
    return html`
      Demo Medium
    `;
  }

}

customElements.define('demo-medium', DemoMedium);