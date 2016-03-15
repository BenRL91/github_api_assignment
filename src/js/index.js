// Javascript Entry Point
import $ from 'jquery';

var urlOfAPI = "https://api.github.com/users/wycats/orgs"

$.ajax(urlOfAPI).then(function (dataLoaded){
	dataLoaded.forEach(function({login, avatar_url}){
		$(".app").append(`<div class="org_slot">
							<img class="avatar" src="${avatar_url}"" alt="${login} logo">
							<span>${login}</span>
						  </div>
			`)
	})
})