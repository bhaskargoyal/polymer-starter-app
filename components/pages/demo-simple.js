import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class DemoSimple extends PolymerElement {
  
  static get properties() {
    return {};
  }

  static get template() {
    return html`
      Demo Simple
    `;
  }

}

customElements.define('demo-simple', DemoSimple);