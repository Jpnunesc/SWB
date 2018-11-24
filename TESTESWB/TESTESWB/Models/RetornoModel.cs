using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TESTESWB.Models
{
    public class RetornoModel
    {
        public bool Success { get; set; }
        public object Object { get; set; }
        public string Message { get; set; }
    }
}
