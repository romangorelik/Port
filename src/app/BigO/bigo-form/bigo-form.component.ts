import { Component, OnInit } from '@angular/core';
import { PullDataService } from '../../services/pull-data.service';

@Component({
  selector: 'app-bigo-form',
  templateUrl: './bigo-form.component.html',
  styleUrls: ['./bigo-form.component.scss']
})
export class BigoFormComponent implements OnInit {
  admin: boolean = true;

  title: string;
  text: string;

  data: any[];

  constructor(private service: PullDataService) { }

  ngOnInit() {
    this.pullBigOData();

  }

  pullBigOData(): void {
    this.service.getBigOData().subscribe(story => this.data = story);
  }

  sendBigOData = () => {
    this.service.postBigOData(this.title, this.text).subscribe();
    this.title = '';
    this.text = '';
  }

}
