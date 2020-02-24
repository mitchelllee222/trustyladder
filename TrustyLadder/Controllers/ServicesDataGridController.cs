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
    [Route("api/servicesdatagrid/{action}", Name = "ServicesDataGridApi")]
    public class ServicesDataController : ApiController
    {
        private DataGridModels.InMemoryServicesDataGridContext _context = new DataGridModels.InMemoryServicesDataGridContext();

        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions)
        {
            return Request.CreateResponse(DataSourceLoader.Load(_context.Services, loadOptions));
        }

        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form)
        {
            var values = form.Get("values");

            var newService = new Models.DataGridModels.ServicesDataGrid();
            JsonConvert.PopulateObject(values, newService);

            Validate(newService);
            if (!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, GetFullErrorMessage(ModelState));

            _context.Services.Add(newService);
            _context.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.Created);
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {
            var key = Convert.ToInt32(form.Get("key"));
            var values = form.Get("values");
            var service = _context.Services.First(e => e.id == key);

            JsonConvert.PopulateObject(values, service);

            Validate(service);
            if (!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, GetFullErrorMessage(ModelState));

            _context.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpDelete]
        public void Delete(FormDataCollection form)
        {
            var key = Convert.ToInt32(form.Get("key"));
            var service = _context.Services.First(e => e.id == key);

            _context.Services.Remove(service);
            _context.SaveChanges();
        }


        private void PopulateModel(tl_services model, IDictionary values)
        {
            string ID = nameof(tl_services.id);
            string DESCRIPTION = nameof(tl_services.description);
            string RATE = nameof(tl_services.rate);

            if (values.Contains(ID))
            {
                model.id = Convert.ToInt32(values[ID]);
            }

            if (values.Contains(DESCRIPTION))
            {
                model.description = Convert.ToString(values[DESCRIPTION]);
            }

            if (values.Contains(RATE))
            {
                model.rate = Convert.ToDouble(values[RATE]);
            }
        }

        private string GetFullErrorMessage(ModelStateDictionary modelState)
        {
            var messages = new List<string>();

            foreach (var entry in modelState)
            {
                foreach (var error in entry.Value.Errors)
                    messages.Add(error.ErrorMessage);
            }

            return String.Join(" ", messages);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                
            }
            base.Dispose(disposing);
        }
    }
}