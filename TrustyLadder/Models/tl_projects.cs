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
    
    public partial class tl_projects
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tl_projects()
        {
            this.tl_project_materials = new HashSet<tl_project_materials>();
            this.tl_project_services = new HashSet<tl_project_services>();
        }
    
        public int id { get; set; }
        public Nullable<int> customerid { get; set; }
        public Nullable<int> customerserviceaddressid { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tl_project_materials> tl_project_materials { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tl_project_services> tl_project_services { get; set; }
    }
}
