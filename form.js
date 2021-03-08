var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let userForm = class userForm extends LitElement {
    constructor() {
        super();
        this.empName = "sharvari";
        this.empCity = "pune";
        this.empNo = 9876543210;
    }
    sendToParent() {
        let myevent = new CustomEvent('my-event', {
            detail: {
                name: this.empName,
                no: this.empNo,
                city: this.empCity,
                bubbles: true,
                composed: true
            }
        });
        console.log(this.dispatchEvent(myevent));
    }
    get inputEl1() {
        var _a;
        return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('name');
    }
    get inputEl2() {
        var _a;
        return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('city');
    }
    get inputEl3() {
        var _a;
        return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('phoneNo');
    }
    submit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        this.empName = this.inputEl1.value;
        this.empCity = this.inputEl2.value;
        this.empNo = Number(this.inputEl3.value);
        var numbers = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        var letters = /^[A-Za-z]+$/;
        if (this.empName == "" || this.empCity == "" || this.empNo == "") {
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('nameError').innerHTML = "Enter your name";
            (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.getElementById('cityError').innerHTML = "Enter city name";
            (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.getElementById('noError').innerHTML = "Enter contact number";
            return false;
        }
        if (this.empName == "") {
            (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.getElementById('nameError').innerHTML = "Enter your name";
            return false;
        }
        if (this.empCity == "") {
            (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.getElementById('cityError').innerHTML = "Enter city name";
            return false;
        }
        if (this.empNo == "") {
            (_f = this.shadowRoot) === null || _f === void 0 ? void 0 : _f.getElementById('noError').innerHTML = "Enter contact number";
            return false;
        }
        if ((this.empNo).toString().length < 10 || (this.empNo).toString().length > 10) {
            (_h = (_g = this.shadowRoot) === null || _g === void 0 ? void 0 : _g.getElementById("noError")) === null || _h === void 0 ? void 0 : _h.innerHTML = "Mobile no must have 10 digits only";
            return false;
        }
        if (!this.empName.match(letters)) {
            (_k = (_j = this.shadowRoot) === null || _j === void 0 ? void 0 : _j.getElementById('nameError')) === null || _k === void 0 ? void 0 : _k.innerHTML = "name must have alphabet characters only";
            return false;
        }
        (_l = this.shadowRoot) === null || _l === void 0 ? void 0 : _l.getElementById('nameError').innerHTML = "";
        (_m = this.shadowRoot) === null || _m === void 0 ? void 0 : _m.getElementById('cityError').innerHTML = "";
        (_o = this.shadowRoot) === null || _o === void 0 ? void 0 : _o.getElementById('noError').innerHTML = "";
        console.log("values at child component : ", this.empName + " " + this.empNo + " " + this.empCity);
        this.sendToParent();
        return true;
    }
    render() {
        return html `
        <form>

        Name : <input type='text' id='name' value='${this.empName}' required><br><br>
        <span id='nameError'></span><br>

        City : <input type='text' id='city' value='${this.empCity}' required><br><br>
        <span id='cityError'></span><br>

        Phone no : <input type='text' id='phoneNo' value='${this.empNo}' required><br><br>
        <span id='noError'></span><br>
  
        <input type='button' value="submit" @click='${this.submit}'>  
        <input type='reset' value="cancle" >

        </form>
        `;
    }
};
__decorate([
    property({ type: String })
], userForm.prototype, "empName", void 0);
__decorate([
    property({ type: String })
], userForm.prototype, "empCity", void 0);
__decorate([
    property({ type: Number })
], userForm.prototype, "empNo", void 0);
userForm = __decorate([
    customElement('user-form')
], userForm);
export { userForm };
//# sourceMappingURL=form.js.map