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
    [Route("api/tl_serviceaddresses/{action}", Name = "tl_serviceaddressesApi")]
    public class tl_serviceaddressesController : ApiController
    {
        private TLDBEntities _context = new TLDBEntities();

        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions) {
            var tl_serviceaddresses = _context.tl_serviceaddresses.Select(i => new {
                i.ID,
                i.CUSTOMERID,
                i.BUSINESSNAME,
                i.ADDRESS1,
                i.ADDRESS2,
                i.CITY,
                i.STATE,
                i.ZIP
            });
            return Request.CreateResponse(DataSourceLoader.Load(tl_serviceaddresses, loadOptions));
        }

        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form) {
            var model = new tl_serviceaddresses();
            var values = JsonConvert.DeserializeObject<IDictionary>(form.Get("values"));
            PopulateModel(model, values);

            Validate(model);
            if (!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, GetFullErrorMessage(ModelState));

            var result = _context.tl_serviceaddresses.Add(model);
            _context.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.Created, result.ID);
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var model = _context.tl_serviceaddresses.FirstOrDefault(item => item.ID == key);
            if(model == null)
                return Request.CreateResponse(HttpStatusCode.Conflict, "tl_serviceaddresses not found");

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
            var model = _context.tl_serviceaddresses.FirstOrDefault(item => item.ID == key);

            _context.tl_serviceaddresses.Remove(model);
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

        private void PopulateModel(tl_serviceaddresses model, IDictionary values) {
            string ID = nameof(tl_serviceaddresses.ID);
            string CUSTOMERID = nameof(tl_serviceaddresses.CUSTOMERID);
            string BUSINESSNAME = nameof(tl_serviceaddresses.BUSINESSNAME);
            string ADDRESS1 = nameof(tl_serviceaddresses.ADDRESS1);
            string ADDRESS2 = nameof(tl_serviceaddresses.ADDRESS2);
            string CITY = nameof(tl_serviceaddresses.CITY);
            string STATE = nameof(tl_serviceaddresses.STATE);
            string ZIP = nameof(tl_serviceaddresses.ZIP);

            if(values.Contains(ID)) {
                model.ID = Convert.ToInt32(values[ID]);
            }

            if(values.Contains(CUSTOMERID)) {
                model.CUSTOMERID = Convert.ToInt32(values[CUSTOMERID]);
            }

            if(values.Contains(BUSINESSNAME)) {
                model.BUSINESSNAME = Convert.ToString(values[BUSINESSNAME]);
            }

            if(values.Contains(ADDRESS1)) {
                model.ADDRESS1 = Convert.ToString(values[ADDRESS1]);
            }

            if(values.Contains(ADDRESS2)) {
                model.ADDRESS2 = Convert.ToString(values[ADDRESS2]);
            }

            if(values.Contains(CITY)) {
                model.CITY = Convert.ToString(values[CITY]);
            }

            if(values.Contains(STATE)) {
                model.STATE = Convert.ToString(values[STATE]);
            }

            if(values.Contains(ZIP)) {
                model.ZIP = Convert.ToInt32(values[ZIP]);
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