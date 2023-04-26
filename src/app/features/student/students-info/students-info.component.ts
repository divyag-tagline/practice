import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Cols, CommonServiceService, Details } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-students-info',
  templateUrl: './students-info.component.html',
  styleUrls: ['./students-info.component.scss']
})
export class StudentsInfoComponent implements OnInit {
  details!: Details[];
  submitted = false;
  profileForm!: FormGroup;
  cols!: Cols[];
lastName!: FormControlName;

  constructor(private commonService: CommonServiceService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getAllDetails()
  }

  createProfileForm() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }
  getAllDetails() {
    this.commonService.getDetails().subscribe((res) => {
      this.details = res;
    });

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'body', header: 'Body' },
    ];
  }
}
