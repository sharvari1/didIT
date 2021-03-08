var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import './form';
import './table';
let parentTag = class parentTag extends LitElement {
    constructor() {
        super(...arguments);
        this.empNo = 0;
        this.empCity = '';
        this.empArray = [];
    }
    render() {
        return html `<user-form @my-event='${(e) => {
            this.empName = e.detail.name;
            this.empNo = e.detail.no;
            this.empCity = e.detail.city;
            this.empObject = {
                name: this.empName,
                city: this.empCity,
                no: this.empNo
            };
            this.empArray.push(this.empObject);
            console.log("emp Obj : ", this.empObject);
            console.log("values at parent : ", this.empName, this.empNo, this.empCity);
        }}'></user-form>
        <br><br>
    
        <table-tag name='${this.empName}' no='${this.empNo}' city='${this.empCity}' empDetails='${this.empArray}'></table-tag>`;
    }
};
__decorate([
    property()
], parentTag.prototype, "empName", void 0);
__decorate([
    property({ type: Number })
], parentTag.prototype, "empNo", void 0);
__decorate([
    property({ type: String })
], parentTag.prototype, "empCity", void 0);
__decorate([
    property()
], parentTag.prototype, "empObject", void 0);
__decorate([
    property({ type: Array })
], parentTag.prototype, "empArray", void 0);
parentTag = __decorate([
    customElement('parent-tag')
], parentTag);
export { parentTag };
//# sourceMappingURL=parent.js.map