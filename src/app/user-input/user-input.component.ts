import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputModel } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService){

  }

  enteredInitialInvestment = signal("0");
  enteredAnnualInvestment = signal("0");
  enteredExpectedReturn = signal("5");
  duration = signal("10");

  onSubmit(){
    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.duration()
    });
    this.duration.set('0');
    this.enteredAnnualInvestment.set('0')
    this.enteredExpectedReturn.set('0')
    this.enteredInitialInvestment.set('0')
  }
}
