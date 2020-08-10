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
    [Route("api/tl_states/{action}", Name = "tl_statesApi")]
    public class tl_statesController : ApiController
    {
        private TLDBEntities _context = new TLDBEntities();

        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions)
        {
            var tl_states = _context.tl_states.Select(i => new {
                i.id,
                i.state
            });
            return Request.CreateResponse(DataSourceLoader.Load(tl_states, loadOptions));
        }

        [HttpGet]

        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form)
        {
            var model = new tl_states();
            var values = JsonConvert.DeserializeObject<IDictionary>(form.Get("values"));
            PopulateModel(model, values);

            Validate(model);
            if (!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, GetFullErrorMessage(ModelState));

            var result = _context.tl_states.Add(model);
            _context.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.Created, result.id);
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {
            var key = Convert.ToInt32(form.Get("key"));
            var model = _context.tl_states.FirstOrDefault(item => item.id == key);
            if (model == null)
                return Request.CreateResponse(HttpStatusCode.Conflict, "State not found");

            var values = JsonConvert.DeserializeObject<IDictionary>(form.Get("values"));
            PopulateModel(model, values);

            Validate(model);
            if (!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, GetFullErrorMessage(ModelState));

            _context.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpDelete]
        public void Delete(FormDataCollection form)
        {
            var key = Convert.ToInt32(form.Get("key"));
            var model = _context.tl_states.FirstOrDefault(item => item.id == key);

            _context.tl_states.Remove(model);
            _context.SaveChanges();
        }


        private void PopulateModel(tl_states model, IDictionary values)
        {
            string ID = nameof(tl_states.id);
            string STATE = nameof(tl_states.state);

            if (values.Contains(ID))
            {
                model.id = Convert.ToInt32(values[ID]);
            }

            if (values.Contains(STATE))
            {
                model.state = Convert.ToString(values[STATE]);
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
                _context.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}