import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { InputModel } from './investment-input.model';
import { InvestmentsResultsComponent } from "./investments-results/investments-results.component"; 
import { ResultModel } from './result.model';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentsResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  investmentService = inject(InvestmentService)
    
  get results(){
    return this.investmentService.investmentResults()
  }

  onCalculateInvestmentResults(data: InputModel) {
    return this.investmentService.onCalculateInvestmentResults(data);
  }

}
