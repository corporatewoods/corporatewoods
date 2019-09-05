using System;

namespace taxpolicylibrary
{
    public class TaxUtility
    {
        public static decimal CalculateTaxPayable(decimal taxableIncome, Bracket[] brackets)
        {
            decimal taxPayable = 0m;
            foreach(Bracket bracket in brackets)
            {
                if (taxableIncome > bracket.floor)
                {
                    var taxableBracket =  Math.Min(bracket.ceiling - bracket.floor, taxableIncome - bracket.floor);
                    var taxBracket = taxableBracket * bracket.rate;
                    taxPayable += taxBracket;
                }
            }
            return taxPayable;
        }
    }
}
