//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TrustyLadder.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tl_serviceaddresses
    {
        public int ID { get; set; }
        public Nullable<int> CUSTOMERID { get; set; }
        public string BUSINESSNAME { get; set; }
        public string ADDRESS1 { get; set; }
        public string ADDRESS2 { get; set; }
        public string CITY { get; set; }
        public string STATE { get; set; }
        public Nullable<int> ZIP { get; set; }
    
        public virtual tl_customers tl_customers { get; set; }
    }
}
