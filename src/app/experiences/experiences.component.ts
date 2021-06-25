import { Component, OnInit } from '@angular/core';
import { IJob } from './job';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  public title : string
  public jobs : IJob[];

  constructor(private jobService : JobService) { 
    this.title = 'EXPERIENCES'
    this.jobs = this.jobService.getJobs();
  }

  ngOnInit(): void {
  }
    
}
