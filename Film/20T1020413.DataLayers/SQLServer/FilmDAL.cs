using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using _20T1020413.DomainModels;

namespace _20T1020413.DataLayers.SQLServer
{
    public class FilmDAL : _BaseDAL, ICommonDAL<Film>
    {
        public FilmDAL(string connectionString) : base(connectionString)
        {
        }

        public int Add(Film data)
        {
            throw new NotImplementedException();
        }

        public int Count(string searchValue = "")
        {
            throw new NotImplementedException();
        }

        public bool Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Film Get(int id)
        {
            throw new NotImplementedException();
        }

        public bool InUsed(int id)
        {
            throw new NotImplementedException();
        }

        public IList<Film> List(int page = 1, int pageSize = 0, string searchValue = "")
        {
            throw new NotImplementedException();
        }

        public bool Update(Film data)
        {
            throw new NotImplementedException();
        }
    }
}
