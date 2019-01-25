using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.ModelBinding;

namespace TrustyLadder.Models.Controllers
{
    [Route("api/tl_projects/{action}", Name = "tl_projectsApi")]
    public class tl_projectsController : ApiController
    {
        private TLDBEntities _context = new TLDBEntities();

        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions) {
            var query = from i in _context.tl_projects
                        join c in _context.tl_customers on i.customerid equals c.id
                        select new
                        {
                            i.id,
                            i.customerid,
                            c.business_name,
                            c.first_name,
                            c.last_name
                        };
            return Request.CreateResponse(DataSourceLoader.Load(query, loadOptions));

            var tl_projects = _context.tl_projects.Select(i => new {
                i.id,
                i.customerid,
                i.customerserviceaddressid
            });
            return Request.CreateResponse(DataSourceLoader.Load(tl_projects, loadOptions));
        }

        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form) {
            var model = new tl_projects();
            var values = JsonConvert.DeserializeObject<IDictionary>(form.Get("values"));
            PopulateModel(model, values);

            Validate(model);
            if (!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, GetFullErrorMessage(ModelState));

            var result = _context.tl_projects.Add(model);
            _context.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.Created, result.id);
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var model = _context.tl_projects.FirstOrDefault(item => item.id == key);
            if(model == null)
                return Request.CreateResponse(HttpStatusCode.Conflict, "tl_projects not found");

            var values = JsonConvert.DeserializeObject<IDictionary>(form.Get("values"));
            PopulateModel(model, values);

            Validate(model);
            if (!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, GetFullErrorMessage(ModelState));

            _context.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpDelete]
        public void Delete(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var model = _context.tl_projects.FirstOrDefault(item => item.id == key);

            _context.tl_projects.Remove(model);
            _context.SaveChanges();
        }


        [HttpGet]
        public HttpResponseMessage tl_customersLookup(DataSourceLoadOptions loadOptions) {
            var lookup = from i in _context.tl_customers
                         orderby i.first_name
                         select new {
                             Value = i.id,
                             Text = i.first_name
                         };
            return Request.CreateResponse(DataSourceLoader.Load(lookup, loadOptions));
        }

        [HttpGet]
        public HttpResponseMessage tl_serviceaddressesLookup(DataSourceLoadOptions loadOptions) {
            var lookup = from i in _context.tl_serviceaddresses
                         orderby i.business_name
                         select new {
                             Value = i.id,
                             Text = i.business_name
                         };
            return Request.CreateResponse(DataSourceLoader.Load(lookup, loadOptions));
        }

        private void PopulateModel(tl_projects model, IDictionary values) {
            string ID = nameof(tl_projects.id);
            string CUSTOMERID = nameof(tl_projects.customerid);
            string CUSTOMERSERVICEADDRESSID = nameof(tl_projects.customerserviceaddressid);

            if(values.Contains(ID)) {
                model.id = Convert.ToInt32(values[ID]);
            }

            if(values.Contains(CUSTOMERID)) {
                model.customerid = Convert.ToInt32(values[CUSTOMERID]);
            }

            if(values.Contains(CUSTOMERSERVICEADDRESSID)) {
                model.customerserviceaddressid = Convert.ToInt32(values[CUSTOMERSERVICEADDRESSID]);
            }
        }

        private string GetFullErrorMessage(ModelStateDictionary modelState) {
            var messages = new List<string>();

            foreach(var entry in modelState) {
                foreach(var error in entry.Value.Errors)
                    messages.Add(error.ErrorMessage);
            }

            return String.Join(" ", messages);
        }

        protected override void Dispose(bool disposing) {
            if (disposing) {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}