
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

    public int id { get; set; }

    public Nullable<int> customerid { get; set; }

    public string business_name { get; set; }

    public string address1 { get; set; }

    public string address2 { get; set; }

    public string city { get; set; }

    public Nullable<int> state { get; set; }

    public Nullable<int> zip_code { get; set; }



    public virtual tl_customers tl_customers { get; set; }

}

}
