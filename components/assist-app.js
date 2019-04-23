import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/iron-pages/iron-pages.js';

import './pages/about-me.js';
import './pages/app-resources.js';
import './pages/demo-simple.js';
import './pages/demo-medium.js';
import './pages/demo-advanced.js';
import './pages/trouble-shooting.js';
import './pages/app-home.js'


class AssistApp extends PolymerElement {

  static get properties() {
    return {
      _route: {
        type: Object
      },
      _pageData: {
        type: Object,
        observer: '_pageDataChanged',
        value: {
          page: "home"
        }
      },
      _subRoute: {
        type: Object
      },
      _idData: {
        type: Object
      },
      drawerOpened: {
        type: Boolean,
        observer: 'drawerOpenedPropertyObserver'
      }
    }
  }

  static get template() {
    return html`
      <style>
        :host {
          --color-header-2: #2196f3;
          --color-header: #c6ff00;
          --color-text-header-2: #FFF;
          --color-text-header: #000;
          --color-menu: #f5f5f5;
          --color-menu-2: #B2EBF2;
          --paper-item-selected-weight: normal;
        }
        * {
          font-family: 'Open Sans';
        }
        app-header-layout {
          
        }
        paper-icon-button {
          top:2%;
        }
        app-header {
          background-color: var(--color-header);
          color: var(--color-text-header);
        }
        div#main-title {
          margin-left: 16px;
        }
        app-drawer-layout {
          z-index: -1;
        }
        app-drawer #menu-container{
          height:100%; 
          width: 100%; 
          background-color: var(--color-menu);
          padding-top: 80px;
          border-right: 1px solid #e0e0e0;
          box-shadow: inset -2px 0px 2px #eeeeee;
        }

        paper-icon-item {
            text-align:left;
            --paper-item-selected: {
              background-color: #DCDCDC;
            };
            --paper-item-focused: {
              background: unset;
              outline: none;
            };
            --paper-item-focused-before: {
              background: unset;
            }
        }
        #navigation-links:hover {
          cursor: pointer;
        }
        a {
          text-decoration: none;
        }
        a, a:hover, a:focus, a:active {
          text-decoration: none;
          color: inherit;
        }
        paper-listbox {
          --paper-listbox-background-color: var(--color-menu);
        }

        div#content-container{
          z-index: -2;
        }

      </style>
        <app-location route='{{_route}}' use-hash-as-path></app-location>
        <app-route route="{{_route}}" pattern="/:page" data="{{_pageData}}" tail="{{_subRoute}}"></app-route>
        <app-route route="{{_subRoute}}" pattern="/:id" data="{{_idData}}"></app-route>
      
        <!-- App Header -->
        <app-header-layout fullbleed>
          <app-header fixed shadow slot="header">
            <app-toolbar>
              <paper-icon-button icon="icons:menu" id="menu-button" on-click='toggleDrawer'></paper-icon-button>
              <div id='main-title' main-title> Polymer Talk </div>
              <paper-icon-button icon="search"></paper-icon-button>
            </app-toolbar>
          </app-header>
        
        <!-- App Drawer -->
        <app-drawer-layout>
          <app-drawer slot="drawer" on-opened-changed="appDrawerOpenedChanged">
            <div id="menu-container">
              <div id="navigation-links">
              
              <paper-listbox selected="[[_pageData.page]]" attr-for-selected="name">
                
                <paper-icon-item id='app-home' on-click='handlePaperIconItemClick' name='home'>
                  <iron-icon class="grayIcon" icon="home" slot="item-icon"></iron-icon>
                  <span>Home</span>
                </paper-icon-item>

                <paper-icon-item id='about-me' on-click='handlePaperIconItemClick' name='about-me'>
                  <iron-icon class="grayIcon" icon="account-circle" slot="item-icon"></iron-icon>
                  <span>About Me</span>
                </paper-icon-item>
                
                
                <paper-icon-item id='resources' on-click='handlePaperIconItemClick' name='resources'>
                  <iron-icon class="grayIcon" icon="folder-open" slot="item-icon"></iron-icon>
                  <span>Resources</span>
                </paper-icon-item>

              
                <paper-icon-item id='demo-simple' on-click='handlePaperIconItemClick' name='demo-simple'>
                  <iron-icon class="grayIcon" icon="code" slot="item-icon"></iron-icon>
                  <span>Demo: Simple</span>
                </paper-icon-item>
                
                <paper-icon-item id='demo-medium' on-click='handlePaperIconItemClick' name='demo-medium'>
                  <iron-icon class="grayIcon" icon="code" slot="item-icon"></iron-icon>
                  <span>Demo: Medium</span>
                </paper-icon-item>

                
                <paper-icon-item id='demo-advanced' on-click='handlePaperIconItemClick' name='demo-advanced'>
                  <iron-icon class="grayIcon" icon="code" slot="item-icon"></iron-icon>
                  <span>Demo: Advanced</span>
                </paper-icon-item>

                
                <paper-icon-item id='trouble-shooting' on-click='handlePaperIconItemClick' name='trouble-shooting'>
                  <iron-icon class="grayIcon" icon="bug-report" slot="item-icon"></iron-icon>
                  <span>Trouble Shooting</span>
                </paper-icon-item>
              </paper-listbox>
              </div>
            </div>
          </app-drawer>
        </app-drawer-layout>

        <!-- Main Content -->
        <div id="content-container">
          <iron-pages selected="[[_pageData.page]]" attr-for-selected="page-name">
            <app-home page-name="home"></app-home>
            <about-me page-name="about-me"></about-me>
            <app-resources page-name="resources"></app-resources>
            <demo-simple page-name="demo-simple"></demo-simple>
            <demo-medium page-name="demo-medium"></demo-medium>
            <demo-advanced page-name="demo-advanced"></demo-advanced>
            <trouble-shooting page-name="trouble-shooting"></trouble-shooting>
          </iron-pages>
        </div>

        </app-header-layout>
    `;
  }

  ready() {
    super.ready();
  }

  toggleDrawer(event) {
    let appDrawer = this.shadowRoot.querySelector('app-drawer');
    appDrawer.toggle();
  }

  handlePaperIconItemClick(e) {
    let paperElemClicked = e.path.find((e) => {
        if (e.tagName && e.tagName.toLowerCase() === 'paper-icon-item') {
          return e;
        }
    });
    // console.log(paperElemClicked.id);
    if (paperElemClicked.id ==="app-home") {
      window.location.href = '#/home';
    } else if (paperElemClicked.id ==="about-me") {
      window.location.href = '#/about-me';
    } else if (paperElemClicked.id ==="resources") {
      window.location.href = '#/resources';
    } else if (paperElemClicked.id ==="demo-simple") {
      window.location.href = '#/demo-simple';
    } else if (paperElemClicked.id ==="demo-medium") {
      window.location.href = '#/demo-medium';
    } else if (paperElemClicked.id ==="demo-advanced") {
      window.location.href = '#/demo-advanced';
    } else if (paperElemClicked.id ==="trouble-shooting") {
      window.location.href = '#/trouble-shooting';
    } 
  }

  _pageDataChanged(pageData, oldPageData) {
    // console.log(pageData, oldPageData);
  }

  appDrawerOpenedChanged(event) {
    this.drawerOpened = event.detail.value;
  }
  drawerOpenedPropertyObserver(newValue, oldValue) {
    let contentContainer = this.shadowRoot.querySelector('div#content-container');
    let appDrawer = this.shadowRoot.querySelector('app-drawer');
    if (document.body.clientWidth <= 640) {
      contentContainer.style.marginLeft = "0px";
    } else if (newValue) {
      contentContainer.style.marginLeft = (appDrawer.offsetWidth + 1) + "px";
    } else if (oldValue) {
        contentContainer.style.marginLeft = "0px";
    }
  }
}

customElements.define('assist-app', AssistApp);