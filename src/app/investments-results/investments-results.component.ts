import { CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ResultModel } from '../result.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investments-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css'
})

export class InvestmentsResultsComponent {
  investmentService = inject(InvestmentService);

  results = this.investmentService.investmentResults.asReadonly();
  
}
