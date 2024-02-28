using CadastrosPessoas.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CadastrosPessoas.Controllers
{
    public class PessoaController : Controller
    {
        
        public ActionResult Cadastrar()
        {
            return View();
        }
        [HttpPost]
        public ActionResult CadastrarPost(PessoaViewModel dados)
        {
            string nome = dados.Nome;
            DateTime data = dados.DataNascimento;

            return RedirectToAction("Cadastrar");
        }
    }

}