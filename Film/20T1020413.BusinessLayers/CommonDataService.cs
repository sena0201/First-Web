using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _20T1020413.DataLayers;
using _20T1020413.DomainModels;
using System.Configuration;

namespace _20T1020413.BusinessLayers
{
    /// <summary>
    /// 
    /// </summary>
    public static class CommonDataService
    {
        private static ICommonDAL<Film> filmDB;



        /// <summary>
        /// Ctor
        /// </summary>
        static CommonDataService()
        {
            string connectionString = ConfigurationManager.ConnectionStrings["DB"].ConnectionString;
            filmDB = new DataLayers.SQLServer.FilmDAL(connectionString);
        }

        public static List<Film> ListOfFilms(int page, int pageSize, string searchValue, out int rowCount)
        {
            rowCount = filmDB.Count(searchValue);
            return filmDB.List(page, pageSize, searchValue).ToList();
        }
        
        public static List<Film> ListOfFilms(string searchValue)
        {
            return filmDB.List(1, 0, searchValue).ToList();
        }
        
        public static int AddFilm(Film data)
        {
            return filmDB.Add(data);
        }
        
        public static bool UpdateFilm(Film data)
        {
            return filmDB.Update(data);
        }
        
        public static bool DeleteFilm(int filmID)
        {
            return filmDB.Delete(filmID);
        }

        public static Film GetFilm(int filmID)
        {
            return filmDB.Get(filmID);
        }

        public static bool InUsedFilm(int filmID)
        {
            return filmDB.InUsed(filmID);
        }
    }
}
