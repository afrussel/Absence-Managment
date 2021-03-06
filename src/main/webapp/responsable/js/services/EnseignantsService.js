angular.module('responsableApp.EnseignantsService', [])
	.service('EnseignantsModel',function ($http) {
		this.getEtudiants = function () {
			var etudiants = [];
			var config = {
		        params: {
		            'rows': 15,
		            'id': '{randomNumber|100}',
		            'nom': '{firstName}',
		            'prenom': '{lastName}',
		            'numCarte': '{zip}',
		            'delay':0,
		            'callback': "JSON_CALLBACK"
		        }
		    }
		    $http.jsonp("http://www.filltext.com", config, {})
		    	.success(function (data) {
			        angular.forEach(data, function (etudiant) {
			        	etudiants.push(etudiant);
			        });
		    	});
		    return etudiants;
		};
		this.getEnseignement = function (ensId) {
			var enseignement = [];
			var config = {
		        params: {
		            'rows': 1,
		            'code' : '{randomNumber|100}',
		            'module': '{firstName}',
		            'groupe': '{lastName}',
		            'chapitre':'{lorem|3}',
		            'titre':'{lorem|5}',
		            'etat': '{lorem|20}',
		            'date':'{date|1-3-2014,1-6-2014}',
		            'callback': "JSON_CALLBACK"
		        }
		    };
		    $http.jsonp("http://www.filltext.com", config, {})
		    	.success(function (data) {
			        angular.forEach(data, function (ens) {
			        	enseignement.push(ens);
			        });
		    	});
		  	return enseignement;
		};
	});