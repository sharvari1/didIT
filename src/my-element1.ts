import {LitElement, html, customElement} from 'lit-element';

@customElement("my-element1")
export class myElement1 extends LitElement{
    render() {
        return html `<h1>I am new component</h1>`
    }
}