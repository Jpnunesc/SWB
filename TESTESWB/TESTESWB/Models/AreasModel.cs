using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TESTESWB.Models
{
    [Table("Areas")]
    public class AreasModel
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Area  { get; set; }

        public virtual ICollection<ContatoModel> Contato { get; set; }
    }
}
