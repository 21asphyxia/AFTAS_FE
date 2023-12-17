import { Component, OnInit } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  ColComponent,
  TableModule,
  UtilitiesModule,
} from '@coreui/angular';
import { Competition } from '../../models/competition.model';
import { CompetitionService } from '../../services/competition.service';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-competitions',
  standalone: true,
  imports: [
    ColComponent,
    CardComponent,
    CardBodyComponent,
    TableModule,
    UtilitiesModule,
  ],
  templateUrl: './competitions.component.html',
  styleUrl: './competitions.component.scss',
})
export class CompetitionsComponent {
    competitions: Competition[] = [];

    constructor(competitionService: CompetitionService) { }
    
    OnInit() {
        competitionService.
    }
}
