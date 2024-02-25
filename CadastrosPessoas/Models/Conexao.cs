using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CadastrosPessoas.Models
{
    public class Conexao : DbContext
    {
        public Conexao() : base("CadastroPessoas") 
        { 
        
        }

        public DbSet <Pessoas> Pessoa{ get; set; }
    }
}