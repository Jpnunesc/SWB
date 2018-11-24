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
    public class ContatoController : ControllerBase
    {
        private readonly ControleContatoContext _context;

        public ContatoController(ControleContatoContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<RetornoModel> GetContato()
        {
            RetornoModel resultado = new RetornoModel();
            var result = _context.Contato.Include(x => x.Areas).Include(x => x.Empresas).AsQueryable();
            resultado.Object = result.Select(x => new
            {
                x.id,
                x.NomeUsuario,
                x.Telefone,
                x.Areas.Area,
                x.Empresas.Nome
            }).ToList();
            return await Task.Run(() => resultado);
        }
        [HttpPost]
        public async Task<RetornoModel> PostContatoModel([FromBody] ContatoModel contatoModel)
        {
            RetornoModel resultado = new RetornoModel();
            contatoModel.Areas = null;
            contatoModel.Empresas = null;

            if (contatoModel.id.Equals(Guid.Empty))
            {
                contatoModel.id = Guid.NewGuid();
                try
                {
                    _context.Contato.Add(contatoModel);
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
            } else
            {
                try
                {
                    _context.Contato.Update(contatoModel);
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
            }
            
            return resultado;
        }

        [HttpGet("{id}")]
        public async Task<RetornoModel> editar(Guid id)
        {
            RetornoModel resultado = new RetornoModel();
            resultado.Object = _context.Contato.Where(x => x.id == id).FirstOrDefault();
            return await Task.Run(() => resultado);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> deletar([FromRoute] Guid id)
        {

            var contato = await _context.Contato.FindAsync(id);
            if (contato == null)
            {
                return NotFound();
            }

            _context.Contato.Remove(contato);
            await _context.SaveChangesAsync();

            return Ok(contato);
        }
    }
}