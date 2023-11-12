using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;

namespace _20T1020413.Web
{
    public static class converter
    {
        public static DateTime? DMYStringToDateTime(string s, string fomat = "d/M/yyyy")
        {
            try
            {
                return DateTime.ParseExact(s, fomat, CultureInfo.InvariantCulture);
            }
            catch
            {
                return null;
            }
        }
    }
}