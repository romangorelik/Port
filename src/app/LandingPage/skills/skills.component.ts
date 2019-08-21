import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: any[] = [
    {
      tech: "React",
      summary: 'Use both React and Redux to create dynamic single web page application, using good SEO practices, as well as creating reusable components. I have implemented both the classic React and React hooks, as well as using Redux to create a global store.'
    },
    {
      tech: "Angular",
      summary: 'Use Angular to create modern single web page applications all in one framework. Utilize the CLI to easily create new components, services, and more, while traversing through the architecture simply and quickly.'
    },
    {
      tech: "SCSS",
      summary: 'Use SCSS to preprocess CSS3, utilizing new features such as flexbox and CSS Grid. Take advantage of different SCSS tools such as mixins, functions, variables, as well as having an organized 7 layer structure.'
    },
    {
      tech: "NodeJS",
      summary: 'Using NodeJS with Express on top if it, create a server hosting the website that speaks not only with outside API endpoints, but also the ones created in the database. Taking advantage of Express routes, architecture is quite simple and elegant.'
    },
    {
      tech: "Database",
      summary: 'Take advantage of both NoSQL and SQL databases, such as MongoDB and PostgreSQL to create databases required for specific situations. Running both locally and hosted to suit what is needed.'
    },
    {
      tech: "Cloud",
      summary: 'Use several cloud services such as AWS EC2, RDS, and S3. Also utilize Firebase to authenticate users through multiple outlets and having a real time database.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
