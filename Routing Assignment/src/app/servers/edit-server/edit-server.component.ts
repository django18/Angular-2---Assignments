import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit:boolean=false;    

  constructor(private serversService: ServersService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    const id=+this.route.params['id'];
    this.server =this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.route.queryParams.subscribe(
      (queryParams:Params)=>{
        //this.server=this.serversService.getServer(+queryParams['id']);
        this.allowEdit=queryParams['allowEdit']==='1'?true:false;
      }
    )

    this.route.params.subscribe(
      (param:Params)=>{
        this.server=this.serversService.getServer(+param['id']);
        //this.allowEdit=queryParams['allowEdit']==='1'?true:false;
      }
    )
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
