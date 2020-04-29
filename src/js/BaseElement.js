class BaseElement extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <div class="container">
    </div>
    `;
  }
}
customElements.define('base-element', BaseElement);