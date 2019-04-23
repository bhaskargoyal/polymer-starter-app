import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class AboutMe extends PolymerElement {
  
  static get properties() {
    return {};
  }

  static get template() {
    return html`
      About-me
    `;
  }

}

customElements.define('about-me', AboutMe);