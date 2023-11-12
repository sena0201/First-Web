using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using _20T1020413.DomainModels;
using _20T1020413.BusinessLayers;
using _20T1020413.Web.Models;
using System.Globalization;

namespace _20T1020413.Web.Controllers
{
    public class FilmController : Controller
    {
        private const int PAGE_SIZE = 10;
        private const string FILM_SEARCH = "SearchFilmCondition";
        public ActionResult Index()
        {

            PaginationSearchInput condition = Session[FILM_SEARCH] as PaginationSearchInput;

            if (condition == null)
            {
                condition = new PaginationSearchInput()
                {
                    Page = 1,
                    PageSize = PAGE_SIZE,
                    SearchValue = ""
                };
            }
            return View(condition);
        }

        public ActionResult Search(PaginationSearchInput condition)
        {

            int rowCount = 0;
            var data = CommonDataService.ListOfFilms(condition.Page, condition.PageSize, condition.SearchValue, out rowCount);
            var result = new FilmSearchOutput()
            {
                Page = condition.Page,
                PageSize = condition.PageSize,
                SearchValue = condition.SearchValue,
                RowCount = rowCount,
                Data = data
            };

            Session[FILM_SEARCH] = condition;

            return View(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public ActionResult Create()
        {
            var data = new Film()
            {
                FilmID = 0
            };
            ViewBag.Title = "Bổ sung Phim";
            return View("Edit",data);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Save(Film data, string showTime, HttpPostedFileBase uploadPhoto)
        {
            try
            {
                DateTime? d = converter.DMYStringToDateTime(showTime);
                DateTime minDate = DateTime.ParseExact("2/1/1753", "d/M/yyyy", CultureInfo.InvariantCulture);
                DateTime maxDate = DateTime.ParseExact("30/12/9999", "d/M/yyyy", CultureInfo.InvariantCulture);
                if (d == null)
                    ModelState.AddModelError("BirthDate", $"Ngày { showTime}  không hợp lệ. Vui lòng nhập theo định dạng dd/MM/yyyy");
                else if (d < minDate || d > maxDate)
                {
                    ModelState.AddModelError("BirthDate", $"Ngày { showTime}  không hợp lệ.");
                }
                else
                    data.ShowTime = d.Value;
                //Kiểm soát đầu vào
                if (string.IsNullOrWhiteSpace(data.FilmName))
                    ModelState.AddModelError("FilmName", "Tên phim không hợp lệ");

                if (string.IsNullOrWhiteSpace(data.Director))
                    ModelState.AddModelError("Director", "Tên đạo diễn không hợp lệ");

                if (string.IsNullOrWhiteSpace(data.Performer))
                    ModelState.AddModelError("Performer", "Diễn viên chính không hợp lệ");
                
                if (string.IsNullOrWhiteSpace(data.Description))
                    ModelState.AddModelError("Description", "Mô tả không hợp lệ");

                if (string.IsNullOrWhiteSpace(data.Poster))
                    data.Poster = "";

                if (string.IsNullOrWhiteSpace(data.Time.ToString()))
                    ModelState.AddModelError("Time", "Thời lượng phim không hợp lệ");

                if (string.IsNullOrWhiteSpace(data.Trailer))
                    ModelState.AddModelError("Trailer", "Trailer không hợp lệ");

                if (uploadPhoto != null)
                {
                    string path = Server.MapPath("~/Photo");
                    string fileName = $"{DateTime.Now.Ticks}_{uploadPhoto.FileName}";
                    string filePath = System.IO.Path.Combine(path, fileName);
                    uploadPhoto.SaveAs(filePath);
                    data.Poster = fileName;
                }

                //...

                if (!ModelState.IsValid)
                {
                    ViewBag.Title = data.FilmID == 0 ? "Bổ sung phim" : "Cập nhật phim";
                    return View("Edit", data);
                }

                if (data.FilmID == 0)
                {
                    CommonDataService.AddFilm(data);
                }
                else
                {
                    CommonDataService.UpdateFilm(data);
                }
                return RedirectToAction("Index");
            }
            catch
            {
                //Ghi lại log lỗi
                return Content("Có lỗi xảy ra. Vui lòng thử lại!!");
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public ActionResult Edit(int id)
        {
            if (id == 0) return RedirectToAction("Index");

            var data = CommonDataService.GetFilm(id);

            if (data == null) return RedirectToAction("Index");

            ViewBag.Title = "Cập nhật phim";
            return View(data);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public ActionResult Delete(int id)
        {
            if (id == 0) return RedirectToAction("Index");

            if (Request.HttpMethod == "GET")
            {
                var data = CommonDataService.GetFilm(id);
                if (data == null) return RedirectToAction("Index");
                return View(data);
            }
            else
            {
                CommonDataService.DeleteFilm(id);
                return RedirectToAction("Index");
            }
        }
    }
}