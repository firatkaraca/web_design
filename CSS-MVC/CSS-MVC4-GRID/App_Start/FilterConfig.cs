using System.Web;
using System.Web.Mvc;

namespace CSS_MVC4_GRID
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
