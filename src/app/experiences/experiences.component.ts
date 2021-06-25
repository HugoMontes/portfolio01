import { Component, OnInit } from '@angular/core';
import { IJob } from './job';
import { JobService } from '../services/job.service';
import { JitSummaryResolver } from '@angular/compiler';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  public title : string
  public jobs : IJob[]

  constructor(private jobService : JobService) { 
    this.title = 'EXPERIENCES'
    this.jobs = []
  }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(jobs => this.jobs = jobs)
  }

}
