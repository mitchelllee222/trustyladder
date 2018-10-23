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
    [Route("api/tl_customers/{action}", Name = "tl_customersApi")]
    public class tl_customersController : ApiController
    {
        private TLDBEntities _context = new TLDBEntities();

        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions) {
            var tl_customers = _context.tl_customers.Select(i => new {
                i.id,
                i.first_name,
                i.last_name,
                i.business_name,
                i.address1,
                i.address2,
                i.city,
                i.state,
                i.zip_code
            });
            return Request.CreateResponse(DataSourceLoader.Load(tl_customers, loadOptions));
        }

        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form) {
            var model = new tl_customers();
            var values = JsonConvert.DeserializeObject<IDictionary>(form.Get("values"));
            PopulateModel(model, values);

            Validate(model);
            if (!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, GetFullErrorMessage(ModelState));

            var result = _context.tl_customers.Add(model);
            _context.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.Created, result.id);
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var model = _context.tl_customers.FirstOrDefault(item => item.id == key);
            if(model == null)
                return Request.CreateResponse(HttpStatusCode.Conflict, "tl_customers not found");

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
            var model = _context.tl_customers.FirstOrDefault(item => item.id == key);

            _context.tl_customers.Remove(model);
            _context.SaveChanges();
        }


        private void PopulateModel(tl_customers model, IDictionary values) {
            string ID = nameof(tl_customers.id);
            string FIRST_NAME = nameof(tl_customers.first_name);
            string LAST_NAME = nameof(tl_customers.last_name);
            string BUSINESS_NAME = nameof(tl_customers.business_name);
            string ADDRESS1 = nameof(tl_customers.address1);
            string ADDRESS2 = nameof(tl_customers.address2);
            string CITY = nameof(tl_customers.city);
            string STATE = nameof(tl_customers.state);
            string ZIP_CODE = nameof(tl_customers.zip_code);

            if(values.Contains(ID)) {
                model.id = Convert.ToInt32(values[ID]);
            }

            if(values.Contains(FIRST_NAME)) {
                model.first_name = Convert.ToString(values[FIRST_NAME]);
            }

            if(values.Contains(LAST_NAME)) {
                model.last_name = Convert.ToString(values[LAST_NAME]);
            }

            if(values.Contains(BUSINESS_NAME)) {
                model.business_name = Convert.ToString(values[BUSINESS_NAME]);
            }

            if(values.Contains(ADDRESS1)) {
                model.address1 = Convert.ToString(values[ADDRESS1]);
            }

            if(values.Contains(ADDRESS2)) {
                model.address2 = Convert.ToString(values[ADDRESS2]);
            }

            if(values.Contains(CITY)) {
                model.city = Convert.ToString(values[CITY]);
            }

            if(values.Contains(STATE)) {
                model.state = Convert.ToString(values[STATE]);
            }

            if(values.Contains(ZIP_CODE)) {
                model.zip_code = Convert.ToInt32(values[ZIP_CODE]);
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