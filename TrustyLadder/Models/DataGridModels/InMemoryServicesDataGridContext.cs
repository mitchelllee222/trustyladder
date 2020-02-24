using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrustyLadder.Models.DataGridModels
{
    public class InMemoryServicesDataGridContext
    {
        const string SessionKey = "8c6f2106-d4fA-4057-b267-55afa3cf3890";

        public ICollection<ServicesDataGrid> Services
        {
            get
            {
                TLDBEntities _context = new TLDBEntities();
                var session = HttpContext.Current.Session;
                if (session[SessionKey] == null)
                {
                    session[SessionKey] = _context.tl_services.Select(i => new ServicesDataGrid
                    {
                        id = i.id,
                        description = i.description,
                        rate = i.rate,
                    })
                    .ToList();
                }


                    var tl_services = _context.tl_services.Select(i => new ServicesDataGrid{
                    id = i.id,
                    description = i.description,
                    rate = i.rate,
                })
                .ToList();

                return (ICollection<ServicesDataGrid>)session[SessionKey];
            }
        }

        public void SaveChanges()
        {
            foreach (var service in Services.Where(a => a.id == 0))
            {
                service.id = Services.Max(a => a.id) + 1;
            }
        }
    }
}