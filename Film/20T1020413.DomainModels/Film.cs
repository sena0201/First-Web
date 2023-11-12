using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _20T1020413.DomainModels
{
    public class Film
    {
        public int FilmID { get; set; }
        public string FilmName { get; set; }
        public string Director { get; set; }
        public string Performer { get; set; }
        public string Description { get; set; }
        public string Poster { get; set; }
        public int Time { get; set; }
        public DateTime ShowTime { get; set; }
        public string Trailer { get; set; }
    }
}
