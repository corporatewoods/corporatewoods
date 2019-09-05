using System;
using System.Threading;
using Xunit;
using taxpolicylibrary;

namespace taxpolicytest
{
    public class TaxUtilityTest
    {
        Bracket[] brackets;
        static readonly decimal standardDeductionMarried2019 = 24400;
        public TaxUtilityTest()
        {
            brackets = new Bracket[]
            {
                new Bracket(0, 19400, 0.10m),
                new Bracket(19400, 78950, 0.12m),
                new Bracket(78950, 168400, 0.22m),
                new Bracket(168400, 321450, 0.24m),
                new Bracket(321450, 408200, 0.32m),
                new Bracket(408200, 612350, 0.35m),
                new Bracket(612350, decimal.MaxValue, 0.37m)
            };
        }

        [Fact]
        public void TestNoIncome()
        {
            decimal totalIncome = 0;
            decimal taxableIncome = Math.Max(0, totalIncome - standardDeductionMarried2019);
            decimal calculated = TaxUtility.CalculateTaxPayable(taxableIncome, brackets);
            Assert.Equal(0m, calculated);
        }
        [Fact]
        public void TestFiftyDollars()
        {
            decimal totalIncome = 50m + standardDeductionMarried2019;
            decimal taxableIncome = Math.Max(0, totalIncome - standardDeductionMarried2019);
            decimal calculated = TaxUtility.CalculateTaxPayable(taxableIncome, brackets);
            Assert.Equal(5m, calculated);
        }

        [Fact]
        public void TestFirstBracketLimitIncome()
        {
            decimal totalIncome = 19400m + standardDeductionMarried2019;
            decimal taxableIncome = Math.Max(0, totalIncome - standardDeductionMarried2019);
            decimal calculated = TaxUtility.CalculateTaxPayable(taxableIncome, brackets);
            Assert.Equal(1940m, calculated);
        }
    }
}