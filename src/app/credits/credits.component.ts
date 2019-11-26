import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credit } from 'src/app/shared/credit/credit';
import { CreditService } from '../shared/credit/credit.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  creditsObs$: Observable<Credit[]>;

  constructor(private creditService: CreditService) { }

  ngOnInit() {
    this.getCredits();
  }

  getCredits() {
    this.creditsObs$ = this.creditService.getAllCredits();
  }
}
