import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit{
	
	vms: any;
	ngOnInit(){
		this.vms = {
			status: 'error',  //OR success
			statusText: "Error",
			name: "Critical VMs",
			desc: "All Business-critical Vms",
			path: "/TINTRI/CRITICAL-VMS",
			vms: "16",
			error: "2"
		}
	}
}
