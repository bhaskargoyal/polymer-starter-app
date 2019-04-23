import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class AppHome extends PolymerElement {
  
  static get properties() {
    return {};
  }

  static get template() {
    return html`
      Home
    `;
  }

}

customElements.define('app-home', AppHome);