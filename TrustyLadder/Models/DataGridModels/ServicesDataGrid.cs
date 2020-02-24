using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace TrustyLadder.Models.DataGridModels
{
    public class ServicesDataGrid
    {
        public int id { get; set; }

        [Required]
        public string description { get; set; }

        [Required]
        public Nullable<double> rate { get; set; }
    }
}