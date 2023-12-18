import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  ButtonModule,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  FormModule,
  ModalModule,
  TableModule,
  UtilitiesModule,
} from '@coreui/angular';
import { Competition } from '../../models/competition.model';
import { CompetitionService } from '../../services/competition.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competitions',
  standalone: true,
  imports: [
    CommonModule,
    ColComponent,
    CardComponent,
    CardBodyComponent,
    TableModule,
    UtilitiesModule,
    ModalModule,
    ButtonModule,
    FormModule,
    FormsModule,
  ],
  templateUrl: './competitions.component.html',
  styleUrl: './competitions.component.scss',
})
export class CompetitionsComponent implements OnInit {
  @ViewChild('closeModal') closeModal: ElementRef | undefined;
  competitionForm: any;

  competitions: Competition[] = [];

  competition: Competition = {};

  constructor(private competitionService: CompetitionService) {}

  ngOnInit(): void {
    this.competitionForm = {};

    this.competitionService
      .getAllCompetitions(0, 10)
      .subscribe((competitions) => {
        console.log(competitions);
        this.competitions = competitions;
        console.log(this.competitions);
      });
  }

  onSubmit(formValue: any): void {
    const competition: Competition = {
      date: formValue.date,
      startTime: formValue.startTime,
      endTime: formValue.endTime,
      numberOfParticipants: formValue.numberOfParticipants,
      location: formValue.location,
    };
    this.competitionService
      .createCompetition(competition)
      .subscribe((competition) => {
        this.competitions.unshift(competition);
        this.closeModal?.nativeElement.click();
      });
  }
}
