using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TESTESWB.Contexto;
using TESTESWB.Models;

namespace TESTESWB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresaController : ControllerBase
    {
        private readonly ControleContatoContext _context;

        public EmpresaController(ControleContatoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<RetornoModel> GetEmpresa()
        {
            RetornoModel resultado = new RetornoModel();
            resultado.Object = _context.Empresa.ToList();

            return await Task.Run(() => resultado);
        }

        [HttpPost]
        public async Task<RetornoModel> PostEmpresaModel([FromBody] EmpresaModel empresaModel)
        {
            RetornoModel resultado = new RetornoModel();
            empresaModel.Id = Guid.NewGuid();
            if (empresaModel.Nome == string.Empty)
            {
                resultado.Message = "Nome obrigatorio!";
            }
            try
            {
                _context.Empresa.Add(empresaModel);
                await _context.SaveChangesAsync();
                resultado.Success = true;
                resultado.Message = "Operação realizada com sucesso!";
            }
            catch (Exception ex)
            {
                resultado.Success = false;
                resultado.Message = "Erro ocorrendo!";
                throw ex;
            }


            return resultado;
        }

        // [HttpPut("{id}")]

    }
}