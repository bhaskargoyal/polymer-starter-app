import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class AppResources extends PolymerElement {
  
  static get properties() {
    return {};
  }

  static get template() {
    return html`
      Resources
    `;
  }

}

customElements.define('app-resources', AppResources);