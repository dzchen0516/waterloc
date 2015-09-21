"use strict";function initialize(){console.log("initializing google map");var a={center:new google.maps.LatLng(43.472635,-80.54207),zoom:18,mapTypeId:google.maps.MapTypeId.ROADMAP};new google.maps.Map(document.getElementById("map"),a);var b={position:new google.maps.LatLng(43.472635,-80.54207)},c=new google.maps.Marker(b);c.setMap(map)}var ModelModule=function(){var a=function(){this.listeners=[]};_.extend(a.prototype,{addListener:function(a){this.listeners.push(a)},removeListener:function(a){var b=this.listeners.indexOf(a);-1!==b&&this.listeners.splice(b,1)},notify:function(a){},update:function(a){}});var b=function(b,c,d){a.apply(this,arguments)};_.extend(b.prototype,a.prototype,{});var c=function(){a.apply(this,arguments)};return _.extend(c.prototype,a.prototype,{}),{BuildingModel:b,BuildingListModel:c}}(),ServiceModule=function(){var a=function(){this.key="",this.urlPrefix="https://api.uwaterloo.ca/v2"};return _.extend(a.prototype,{queryBuildings:function(){},getBuilding:function(a){}}),{UWaterlooService:a}}(),ViewModule=function(a){var b=function(a){this.model=a,this.model.addListener(this)};_.extend(b.prototype,{init:function(){},update:function(a){}});var c=function(a,c){b.apply(this,arguments),this.UWaterlooService=c,this.init()};_.extend(c.prototype,b.prototype,{});var d=function(a,c){b.apply(this,arguments),this.UWaterlooService=c,this.init()};return _.extend(d.prototype,b.prototype,{}),{BuildingListView:c,MapView:d}}(ModelModule.BuildingModel);!function(a,b,c){$(document).ready(function(){console.log("hi!"),google.maps.event.addDomListener(window,"load",initialize)})}(ModelModule,ViewModule,ServiceModule);