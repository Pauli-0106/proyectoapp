import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-apitest',
  templateUrl: './apitest.page.html',
  styleUrls: ['./apitest.page.scss'],
})
export class ApitestPage implements OnInit {

  constructor(private api:ApiService) { 

    this.api.getPosts().subscribe((res: any[])=>{
      console.log(res[11]);
    },(error: any)=>{
      console.log(error)
    });
    
  }

  ngOnInit() {
  }

}
