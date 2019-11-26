import { Component, OnInit } from '@angular/core';
import { Solicitation } from '../shared/solicitation/solicitation';
import { Observable } from 'rxjs';
import { SolicitationService } from '../shared/solicitation/solicitation.service';

@Component({
  selector: 'app-solicitations',
  templateUrl: './solicitations.component.html',
  styleUrls: ['./solicitations.component.scss']
})
export class SolicitationsComponent implements OnInit {

  solicitationsObs$: Observable<Solicitation[]>;

  constructor(private solicitationService: SolicitationService) { }

  ngOnInit() {
    this.getSolicitations();
  }

  getSolicitations() {
    this.solicitationsObs$ = this.solicitationService.getAllSolicitations();
  }

}
