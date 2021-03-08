import {LitElement, html, customElement, property} from 'lit-element';
import './form';
import './table';


@customElement('parent-tag')
export class parentTag extends LitElement{

    @property()
    empName: any;

    @property({type:Number})
    empNo:Number=0;

    @property({type:String})
    empCity:String='';

    @property()
    empObject:any;

    @property({ type: Array })
    empArray: any[] = [];

    render(){
       
        return html `<user-form @my-event='${(e:any) => { 
            this.empName=e.detail.name;
            this.empNo=e.detail.no;
            this.empCity=e.detail.city;
            this.empObject={
                name:this.empName,
                city:this.empCity,
                no:this.empNo
            }
            this.empArray.push(this.empObject);
            console.log("emp Obj : ",this.empObject);
            console.log("values at parent : ",this.empName,this.empNo,this.empCity);

        }}'></user-form>
        <br><br>
    
        <table-tag name='${this.empName}' no='${this.empNo}' city='${this.empCity}' empDetails='${this.empArray}'></table-tag>`;
    }
}