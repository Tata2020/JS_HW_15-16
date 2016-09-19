'use strict';
$(function() {

var textSearch;

//click button
  
$('.submit').click (function(e) {
  e.preventDefault();
  textSearch = $('#tsh').val();
  clearContainer();
  getSearch(textSearch);
});

//click 'Enter'
$('#tsh').keyup (function (e) {
   if (e.keyCode == 13) {
     textSearch = $('#tsh').val();
     clearContainer();
     getSearch(textSearch);
     return;
   };
     
  });

//clear  previous result block
function clearContainer() {
  $('.results').replaceWith('<div class="results"></div>');
};

//
function getSearch(textSearch) {
  var service_url = 'https://kgsearch.googleapis.com/v1/entities:search';
  var params = {
    'query': textSearch,
    'limit': 10,
    'indent': true,
    'key' : 'AIzaSyDqYzRILFZQghpP3aVg67D56z3Y3-3FeMk',
   };
 
  $.getJSON(service_url + '?callback=?', params, function(response) {
      $('.results').append('<div class="block__item"></div>');
      $('.block__item').append('<p class="description">Search results:</p>');
      $.each(response.itemListElement, function(i, element) {
      var resultSearch = {
             name:        element['result']['name'],
             description: element['result']['description'], 
             url:         element['result']['url'],
             detailedDescription: element['result']['detailedDescription']['articleBody'],
             detailedUrl: element['result']['detailedDescription']['url']
          };
     

       if (resultSearch.detailedUrl == undefined) {
        resultSearch.detailedUrl = ' '
        };
       if (resultSearch.description == undefined) {
        resultSearch.description = ' '
        };
        if (resultSearch.url == undefined) {
        resultSearch.url = ' '
        };
        if (resultSearch.detailedDescription == undefined) {
        resultSearch.detailedDescription = ' '
        };
        
      $('.block__item').append('<a href= "'+resultSearch.detailedUrl+'" class="name">'+ resultSearch.name + '&nbsp;-&nbsp;' +resultSearch.description+ '</a>');
      $('.block__item').append('<a href= "'+resultSearch.detailedUrl+'" class="url">'+ resultSearch.detailedUrl +'</a>');
      $('.block__item').append('<p class="description">'+ resultSearch.detailedDescription +'</p>');
      $('.block__item').append('<a href= "'+resultSearch.url+'" class="url">'+ resultSearch.url +'</a>');
     
    });
  });
};

// TWO PART HOMETASK
//class Human
function Human () {
    this.name = 'name';
    this.age = 0;
    this.gender = 'm';
    this.height = 0;
    this.weight = 0;
};

//class worker
function Worker () {
    this.status = 'worker';
    };
Worker.prototype = new Human(); //human - prototype

//class student
function Student() {
     this.status = 'student';
};

Student.prototype = new Human(); //human - prototype

 Worker.prototype.work = function() { //method work
    this.workplace = 'factory';
    this.salary = 1000;
 };

 Student.prototype.watchshows = function() { //method watchshows
        this.studyplace = 'university';
        this.award = 700;
      };

//new student
var Student2 = new Student();
Student2.name = 'Petya';
Student2.watchshows();
Student2.age = 20;

//new student
var Student3 = new Student ();
Student3.watchshows();
Student3.name = 'Fedya';
Student3.height = 180;

//new worker
var Worker1 = new Worker ();
Worker1.work();
Worker1.name = 'Vasiliy';
Worker1.weight = 90;

// print in console
  console.log('Student2 =', Student2);
  console.log('Student2.height=', Student2.height);
  console.log('Student3=', Student3);
  console.log('Student3.weight=', Student3.weight);
  console.log ('Worker1=', Worker1);
  console.log ('Worker1.age=', Worker1.age);




});