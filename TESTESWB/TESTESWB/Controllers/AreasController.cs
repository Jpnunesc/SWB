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
    public class AreasController : ControllerBase
    {
        private readonly ControleContatoContext _context;

        public AreasController(ControleContatoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<RetornoModel> GetArea()
        {
            RetornoModel resultado = new RetornoModel();
            resultado.Object =  _context.Area.ToList();
            return await Task.Run(() => resultado);
        }


        [HttpPost]
        public async Task<RetornoModel> PostAreasModel([FromBody] AreasModel areasModel)
        {
            RetornoModel resultado = new RetornoModel();
            areasModel.Id = Guid.NewGuid();
            if (areasModel.Area == string.Empty)
            {
                resultado.Message = "Nome obrigatorio!";
            }
            try
            {
                _context.Area.Add(areasModel);
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

    }
}