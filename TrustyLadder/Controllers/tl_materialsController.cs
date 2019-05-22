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
    [Route("api/tl_materials/{action}", Name = "tl_materialsApi")]
    public class tl_materialsController : ApiController
    {
        private TLDBEntities _context = new TLDBEntities();

        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions) {
            var tl_materials = _context.tl_materials.Select(i => new {
                i.id,
                i.description,
                i.price,
                i.cost
            });
            return Request.CreateResponse(DataSourceLoader.Load(tl_materials, loadOptions));
        }

        [HttpGet]
        public HttpResponseMessage GetMaterialByProject(int projectId, DataSourceLoadOptions loadOptions)
        {
            // Get materials tied to project.
            var queryProject = from i in _context.tl_project_materials
                               where i.projectid == projectId
                               select i;

            // Get list of material IDs that are on project.
            foreach (tl_project_materials item in queryProject){

            }

            // Build query to get materials.
            var query = from i in _context.tl_materials
                        where i.id == projectId
                        select new
                        {
                            i.id,
                            i.description,
                            i.price,
                            i.cost
                        };
            return Request.CreateResponse(DataSourceLoader.Load(query, loadOptions));
        }

        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form) {
            var model = new tl_materials();
            var values = JsonConvert.DeserializeObject<IDictionary>(form.Get("values"));
            PopulateModel(model, values);

            Validate(model);
            if (!ModelState.IsValid)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, GetFullErrorMessage(ModelState));

            var result = _context.tl_materials.Add(model);
            _context.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.Created, result.id);
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form) {
            var key = Convert.ToInt32(form.Get("key"));
            var model = _context.tl_materials.FirstOrDefault(item => item.id == key);
            if(model == null)
                return Request.CreateResponse(HttpStatusCode.Conflict, "Material not found");

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
            var model = _context.tl_materials.FirstOrDefault(item => item.id == key);

            _context.tl_materials.Remove(model);
            _context.SaveChanges();
        }


        private void PopulateModel(tl_materials model, IDictionary values) {
            string ID = nameof(tl_materials.id);
            string DESCRIPTION = nameof(tl_materials.description);
            string PRICE = nameof(tl_materials.price);
            string COST = nameof(tl_materials.cost);

            if (values.Contains(ID)) {
                model.id = Convert.ToInt32(values[ID]);
            }

            if(values.Contains(DESCRIPTION)) {
                model.description = Convert.ToString(values[DESCRIPTION]);
            }

            if(values.Contains(PRICE)) {
                model.price = Convert.ToDouble(values[PRICE]);
            }

            if (values.Contains(COST))
            {
                model.cost = Convert.ToDouble(values[COST]);
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