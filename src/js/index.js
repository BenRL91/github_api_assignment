// Javascript Entry Point
import $ from 'jquery';

var urlOfAPI = "https://api.github.com/users/wycats/orgs"
console.time("renderHtml")
console.time("loadInfo");
$.ajax(urlOfAPI).then(function (dataLoaded){
	console.timeEnd("loadInfo");
	dataLoaded.forEach(function({login, avatar_url}){
		$(".app").append(`<div class="org_slot">
							<img class="avatar" src="${avatar_url}"" alt="${login} logo">
							<span>${login}</span>
						  </div>
			`)
	})
})
console.timeEnd("renderHtml");