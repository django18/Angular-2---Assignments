import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverIdSubscription:Subscription;

  constructor(private serversService: ServersService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    const id=+this.route.snapshot.params['id'];
    //console.log(this.route.snapshot.params['id']);
    this.server = this.serversService.getServer(id);

    this.route.params.subscribe(
      (params:Params)=>{
        this.server=this.serversService.getServer(+params['id']);
      }
    );
  }

  onEdit(){
    //var isEditable=this.route.snapshot.queryParams['allowEdit'];
    //console.log("isEditable:",isEditable);
    this.router.navigate(["edit"],{relativeTo:this.route,queryParamsHandling:'preserve'});
  }

  // ngOnDestroy(){
  //   this.serverIdSubscription.unsubscribe();
  // }

}
