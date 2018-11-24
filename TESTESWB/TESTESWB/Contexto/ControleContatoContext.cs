using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TESTESWB.Models;

namespace TESTESWB.Contexto
{
    public class ControleContatoContext : DbContext
    {
        public ControleContatoContext(DbContextOptions<ControleContatoContext> options)
            : base(options)
        {
        }

        public DbSet<ContatoModel> Contato { get; set; }
        public DbSet<AreasModel> Area { get; set; }
        public DbSet<EmpresaModel> Empresa { get; set; }
       
    }
}
