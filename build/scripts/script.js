var app=angular.module("dashApp",["angularMoment"]);app.factory("weathService",["$http",function(t){return t.get("http://api.wunderground.com/api/48f95e00cc76b246/conditions/q/CO/Denver.json").success(function(t){return t}).error(function(t){return t})}]),app.controller("masterCtrl",["$scope",function(t){var n,e=this;e.info={name:"inkblotty",date:new Date,month:(new Date).getMonth(),currBack:n},e.toDos=[{name:"To Do #1",isDone:!1}],e.addTask=function(t){13===t.keyCode&&e.taskName&&(e.toDos.push({name:e.taskName,isDone:!1}),e.taskName="")},e.completeTask=function(){}}]),app.controller("weathCtrl",["$scope","weathService",function(t,n){var e=this;n.success(function(t){e.weathData=t.current_observation,e.location=t.current_observation.display_location})}]),app.directive("parseStyle",["$interpolate",function(t){return function(n,e){var o=t(e.html()),a=function(){return o(n)};n.$watch(a,function(t){e.html(t)})}}]),app.filter("noSpace",function(){return function(t){return t.replace(/[\s]/g,"")}});