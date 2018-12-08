import { Component, OnInit, Input } from '@angular/core';
import { SigninService } from './../../signin.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  submitted = false;
  submitSuccess = false;
  score: number;
  assignmentForm = this.fb.group({
    answer0: [null, Validators.required],
    answer1: [null, Validators.required],
    answer2: [null, Validators.required]

  });

  constructor(private ser: SigninService, private router: Router, private fb: FormBuilder) {
    this.score = null;
  }
  @Input() assignment: any;
  @Input() magazinID: any;
  @Input() chapterID: any;
  @Input() user: any;


  ngOnInit() {
  }

  get f() { return this.assignmentForm.controls; }

  onSubmit() {
    this.submitted = true;

    console.warn(this.assignmentForm.value);

    if (this.assignmentForm.invalid) {
      return;
    }

    if (this.assignmentForm.valid) {

      var score = 0;
      

      if (this.assignment[0].answer == this.assignmentForm.value.answer0) {
        score += 33;
      }
      if (this.assignment[1].answer == this.assignmentForm.value.answer1) {
        score += 33;
      }
      if (this.assignment[2].answer == this.assignmentForm.value.answer2) {
        score += 34;
      }
      
      if (this.ser.setAnswer(this.magazinID, this.chapterID, this.assignmentForm.value.answer0, this.assignmentForm.value.answer1, this.assignmentForm.value.answer2, score))
      {
        this.score = score;
      }
      this.submitSuccess = true;

    }

  }

}
