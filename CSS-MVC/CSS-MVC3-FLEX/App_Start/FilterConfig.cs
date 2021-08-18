using System.Web;
using System.Web.Mvc;

namespace CSS_MVC3_FLEX
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
