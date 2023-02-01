class MyHeader extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallBack() {
        this.innerHTML = 
        `
        <div id="header">
        <h1>Header is here</h1>
        </div>`;
    }
}
customElements.define('my-header', MyHeader)