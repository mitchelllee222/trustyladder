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