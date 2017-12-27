import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // @ViewChild('f')form:NgForm;
  // defaultSubscription='Basic';

  // onSubmit(){
  //   console.log(this.form.value);
  // }


  //Reactive Forms
  status=['Stable','Critical','Finished'];
  projectForm:FormGroup;

  ngOnInit(){
    this.projectForm=new FormGroup({
      'ProjectName':new FormControl(null,[Validators.required],this.projectNameValidatorAsync.bind(this)),
      'Email':new FormControl(null,[Validators.required,Validators.email]),
      'Status':new FormControl('Stable')
    });
  }

  onSubmit(){
    console.log(this.projectForm);
  }

  // projectNameValidator(control:FormControl):{[s:string]:boolean}{
  //   if(control.value=='Test')
  //   return {'ProjectNameValidate':true};
  //   return null;
  // }

  projectNameValidatorAsync(control:FormControl):Observable<any>|Promise<any>{
    const promise=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value=='Test')
        resolve({'ProjectNameValidate':true});
        else resolve(null);
      },2000);
    });
    return promise;
  }
 

}
