using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TrustyLadder.Controllers {
    public class HomeController : Controller {
        public ActionResult Index() {
            return View();
        }

        public ActionResult Customers()
        {
            return View();
        }

        public ActionResult Projects()
        {
            return View();
        }

        public ActionResult Services()
        {
            return View();
        }

        public ActionResult Materials()
        {
            return View();
        }
    }
}