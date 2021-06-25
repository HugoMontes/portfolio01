import { Component, OnInit } from '@angular/core';
import { IJob } from './job';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  public title = 'EXPERIENCES';

  constructor() { }

  ngOnInit(): void {
  }

  jobs : IJob[] = [
    {
      "title": "Lead Developer",
      "time": "2019 - Present",
      "company": "Startup Hubs, San Francisco",
      "details": "Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo."
    },
    {
      "title": "Senior Software Engineer",
      "time": "2018 - 2019",
      "company": "Google, London",
      "details": "Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
    },
    {
      "title": "UI Developer",
      "time": "2016 - 2018",
      "company": "Amazon, London",
      "details": "Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."   
    }
  ];
}
