using System;

namespace taxpolicylibrary
{
    public class Bracket
    {
        public decimal floor { get; set; }
        public decimal ceiling { get; set; }
        public decimal rate { get; set; }
        public Bracket(decimal inputFloor, decimal inputCeiling, decimal inputRate)
        {
            floor = inputFloor;
            ceiling = inputCeiling;
            rate = inputRate;
        }
    }
}
