import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class TroubleShooting extends PolymerElement {
  
  static get properties() {
    return {};
  }

  static get template() {
    return html`
      Trouble Shooting
    `;
  }

}

customElements.define('trouble-shooting', TroubleShooting);