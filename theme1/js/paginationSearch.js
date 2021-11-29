
/* * * * * * * * * * * * * * * * *
 * Pagination
 * javascript page navigation
 * * * * * * * * * * * * * * * * */

var PaginationSearch = {

	code: '',
	searchPath:'',

	// --------------------
	// Utility
	// --------------------

	// converting initialize data
	Extend: function(data) {
		data = data || {};
		PaginationSearch.size = data.size || 300;
		PaginationSearch.page = data.page || 1;
		PaginationSearch.step = data.step || 3;
	},

	// add pages by number (from [s] to [f])
	Add: function(s, f) {
		for (var i = s; i < f; i++) {
			PaginationSearch.code += "<a id='" + i + "' class='btn-page-no' href='" + searchPath + "&pageIndex=" + i + "'>" + i + "</a>";
		}
	},

	// add last page with separator
	
	Last: function() {
		PaginationSearch.code += "<i>...</i><a id='" + PaginationSearch.size + "' class='btn-page-no' href='" + searchPath + "&pageIndex=" + PaginationSearch.size + "'>" + PaginationSearch.size + "</a>";
	},

	// add first page with separator
	First: function() {
		PaginationSearch.code += '<a id="1" class="btn-page-no" href="' + searchPath + '&pageIndex=1">1</a><i>...</i>';
		
	},



	// --------------------
	// Handlers
	// --------------------

	// change page
	Click: function() {
		PaginationSearch.page = +this.innerHTML;
		PaginationSearch.Start();
	},

	// previous page
	Prev: function() {
		PaginationSearch.page--;
		if (PaginationSearch.page < 1) {
			PaginationSearch.page = 1;
		}
		PaginationSearch.Start();
		document.getElementById('btn-prev-page').click();

	},

	// next page
	Next: function() {
		PaginationSearch.page++;
		if (PaginationSearch.page > PaginationSearch.size) {
			PaginationSearch.page = PaginationSearch.size;
		}
		PaginationSearch.Start();
		document.getElementById('btn-next-page').click();
	},



	// --------------------
	// Script
	// --------------------

	// binding pages
	Bind: function() {
		var a = PaginationSearch.e.getElementsByTagName('a');
		for (var i = 0; i < a.length; i++) {
			if (+a[i].innerHTML === PaginationSearch.page);
			a[i].addEventListener('click', PaginationSearch.Click, false);
		}
	},

	// write PaginationSearch
	Finish: function() {
		PaginationSearch.e.innerHTML = PaginationSearch.code;
		PaginationSearch.code = '';
		PaginationSearch.Bind();
	},

	// find PaginationSearch type
	Start: function() {
		if (PaginationSearch.size < PaginationSearch.step * 2 + 6) {
			PaginationSearch.Add(1, PaginationSearch.size + 1);
		}
		else if (PaginationSearch.page < PaginationSearch.step * 2 + 1) {
			PaginationSearch.Add(1, PaginationSearch.step * 2 + 4);
			PaginationSearch.Last();
		}
		else if (PaginationSearch.page > PaginationSearch.size - PaginationSearch.step * 2) {
			PaginationSearch.First();
			PaginationSearch.Add(PaginationSearch.size - PaginationSearch.step * 2 - 2, PaginationSearch.size + 1);
		}
		else {
			PaginationSearch.First();
			PaginationSearch.Add(PaginationSearch.page - PaginationSearch.step, PaginationSearch.page + PaginationSearch.step + 1);
			PaginationSearch.Last();
		}
		PaginationSearch.Finish();
	},



	// --------------------
	// Initialization
	// --------------------

	// binding buttons
	Buttons: function(e) {
		var nav = e.getElementsByTagName('a');
		nav[0].addEventListener('click', PaginationSearch.Prev, false);
		nav[1].addEventListener('click', PaginationSearch.Next, false);
	},

	// create skeleton
	Create: function(e) {

		var html = [
			'<a><i class="fa fa-angle-left"></i></a>', // previous button
			'<span class="pagination-span"></span>',  // pagination container
			'<a><i class="fa fa-angle-right"></i></a>'  // next button
		];

		e.innerHTML = html.join('');
		PaginationSearch.e = e.getElementsByTagName('span')[0];
		PaginationSearch.Buttons(e);
	},

	// init
	Init: function(e, data) {
		PaginationSearch.Extend(data);
		PaginationSearch.Create(e);
		PaginationSearch.Start();
	}
};




