import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from '../shared/credit/credit';
import { CreditService } from '../shared/credit/credit.service';
import { Router } from '@angular/router';
import { SolicitationService } from '../shared/solicitation/solicitation.service';

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.scss']
})
export class CreditDetailComponent implements OnInit {

  user: string = '';
  credit: string = '';
  value: number = 1;
  quantityInstallments: number = 0;

  creditsObs$: Observable<Credit>;

  constructor(private creditService: CreditService, private solicitationService: SolicitationService , private router: Router) { }

  ngOnInit() {
    this.getId();
    this.getCredit();
  }

  getId() {
    let creditId = '';
    const urlExp = this.router.url;
    creditId = urlExp.split('/').pop();
    return creditId;
  }


  getCredit() {
    this.creditsObs$ = this.creditService.getOneCredit(this.getId());
  }

  saveSolicitation() {
    this.solicitationService.createSolicitation({
      user: '',
      credit: this.getId(),
      value: this.value,
      quantityInstallments: this.quantityInstallments
    }).subscribe((solicitation) => {
      console.log(solicitation);
    }, (err) => console.error(err));
  }

}
