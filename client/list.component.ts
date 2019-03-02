import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ElectionsService } from './elec.service';
@Component ({ templateUrl: './list.component.html' })

export class CampListComponent
{
    campaigns=null;
    constructor(private http: HttpClient,private router: Router,private service:
            ElectionsService)
    {
        if (!service.authenticated()) router.navigateByUrl('/login');
        else service.sendGetRequest('campaigns',data=>this.campaigns=data);
    }

    campClicked(campaign)
    {
        this.service.selectedCamp=campaign;
        this.router.navigateByUrl('/campaign');
    }
}