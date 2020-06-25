import { Component, OnInit } from '@angular/core';
import { SignInForm } from '../sign-in-form';
import { EnrollmentService } from "../enrollment.service";
@Component({
  selector: 'app-signin',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private _enrollmentService: EnrollmentService) { }
  countrys = [
    "India","Afghanistan", "Australia", "Austria", "Bangladesh", "Belgium", "Brazil","Chile","China","Cuba","Denmark","Egypt","Finland","France","Germany","Hungary","Iceland","Indonesia","Italy","Jamaica","Japan","Kenya","Libya","Madagascar","Malaysia","Maldives","Micronesia","Nepal","Netherlands","Niger","Oman","Pakistan","Philippines","Poland","Portugal","Romania","Russia","Saudi Arabia","Singapore","South Africa","Spain","Sweden","Thailand","Turkey","Uganda","United Arab Emirates","United Kingdom","Venezuela","Yemen","Zimbabwe","Other"
  ];
  user = new SignInForm('','','','',new Date(),"");
  submitted = false;
  onSubmit() { 
    this.submitted = true;
    alert("Done");
    console.log( JSON.stringify(this.user));
    this._enrollmentService.enroll(this.user)
    .subscribe(
      data => console.log('Done',data),
      error => console.error('Error',error)
    )  
  }

  ngOnInit(): void {
  }

}
