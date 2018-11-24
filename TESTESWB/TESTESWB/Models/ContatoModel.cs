using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TESTESWB.Models
{
    [Table("Contato")]
    public class ContatoModel
    {
        [Key]
        public Guid id { get; set; }
        [Required]
        public string NomeUsuario { get; set; }
        [Required]
        public int Telefone { get; set; }

        public Guid IdEmpresa { get; set; }
        public Guid IdArea { get; set; }

        [ForeignKey("IdArea")]
        public virtual AreasModel Areas { get; set; }
        [ForeignKey("IdEmpresa")]
        public virtual EmpresaModel Empresas { get; set; }
    }
}
