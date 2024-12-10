import { Injectable, signal, Signal } from "@angular/core";
import { InputModel } from "./investment-input.model";
import { ResultModel } from "./result.model";

@Injectable({providedIn:'root'})

export class InvestmentService{

    investmentResults = signal<ResultModel[] | undefined>(undefined);
    
    onCalculateInvestmentResults(data: InputModel) {

        const {initialInvestment, annualInvestment, duration, expectedReturn} = data;
    
        const annualData = [];
    
        let investmentValue = initialInvestment;
      
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
    
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    
          investmentValue += interestEarnedInYear + annualInvestment;
    
          const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
    
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
      
        this.investmentResults.set(annualData);
      }

}