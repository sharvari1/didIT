import {LitElement, html, customElement, property} from 'lit-element';
import { withForm } from 'lite-form'

@customElement('user-form')
export class userForm extends LitElement{

    @property({type:String})
    empName:String;

    @property({type:String})
    empCity:String;

    @property({type:Number})
    empNo:Number;

    constructor()
    {
        super();
        this.empName="sharvari";
        this.empCity="pune";
        this.empNo=9876543210;
    }

    sendToParent() {
        let myevent = new CustomEvent('my-event', { 
            detail: {
                name:this.empName,
                no:this.empNo,
                city:this.empCity,
                bubbles: true, 
                composed: true
              }
        });
         
         console.log(this.dispatchEvent(myevent));
      }
      
      private get inputEl1(): HTMLInputElement {
        return this.shadowRoot?.getElementById('name')! as HTMLInputElement;
      }

      private get inputEl2(): HTMLInputElement {
        return this.shadowRoot?.getElementById('city')! as HTMLInputElement;
      }

      private get inputEl3(): HTMLInputElement {
        return this.shadowRoot?.getElementById('phoneNo')! as HTMLInputElement;
      }

    submit(){
         this.empName=this.inputEl1.value;
         this.empCity=this.inputEl2.value;
         this.empNo=Number(this.inputEl3.value);
         var numbers=/^(\+\d{1,3}[- ]?)?\d{10}$/;
         var letters = /^[A-Za-z]+$/;


         if(this.empName=="" || this.empCity=="" || this.empNo=="")
         {
           this.shadowRoot?.getElementById('nameError').innerHTML="Enter your name";
           this.shadowRoot?.getElementById('cityError').innerHTML="Enter city name";
           this.shadowRoot?.getElementById('noError').innerHTML="Enter contact number";
           return false;
         }
         if(this.empName=="")
         {
           this.shadowRoot?.getElementById('nameError').innerHTML="Enter your name";
           return false;
         }
         if(this.empCity=="")
         {
           this.shadowRoot?.getElementById('cityError').innerHTML="Enter city name";
           return false;
         }
         if(this.empNo=="")
         {
           this.shadowRoot?.getElementById('noError').innerHTML="Enter contact number";
           return false;
         }
         if((this.empNo).toString().length<10 ||(this.empNo).toString().length>10)
         {
           this.shadowRoot?.getElementById("noError")?.innerHTML="Mobile no must have 10 digits only";
           return false;
         }
          if(!this.empName.match(letters))
          {
            this.shadowRoot?.getElementById('nameError')?.innerHTML="name must have alphabet characters only";
            return false;
          }
          this.shadowRoot?.getElementById('nameError').innerHTML="";
           this.shadowRoot?.getElementById('cityError').innerHTML="";
           this.shadowRoot?.getElementById('noError').innerHTML="";
          console.log("values at child component : ",this.empName+" "+this.empNo+" "+this.empCity);
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
}