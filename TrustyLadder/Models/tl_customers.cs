
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
    
public partial class tl_customers
{

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public tl_customers()
    {

        this.tl_serviceaddresses = new HashSet<tl_serviceaddresses>();

    }


    public int id { get; set; }

    public string first_name { get; set; }

    public string last_name { get; set; }

    public string business_name { get; set; }

    public string address1 { get; set; }

    public string address2 { get; set; }

    public string city { get; set; }

    public Nullable<int> state { get; set; }

    public Nullable<int> zip_code { get; set; }



    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<tl_serviceaddresses> tl_serviceaddresses { get; set; }

}

}
