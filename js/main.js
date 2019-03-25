Snap.plugin( function( Snap, Element, Paper, global ) {

  function addLoadedFrags( whichSVG, fragList, runWhenFinishedFunc ) { // This is called once all the loaded frags are complete
    for( var count = 0; count < fragList.length; count++ ) {
        myEl = whichSVG.append( fragList[ count ] );
    }
    runWhenFinishedFunc();
  }

  Paper.prototype.loadFilesDisplayOrdered = function( list, afterAllLoadedFunc, onEachElementLoadFunc ) {
     var image, fragLoadedCount = 0, listLength = list.length, fragList = new Array(), whichSVG = this;

      for( var count = 0; count < listLength; count++ ) {
        (function() {
          var whichEl = count,
          fileName = list[ whichEl ],
          image = Snap.load( href + fileName, function ( loadedFragment ) {
	           
               fragLoadedCount++;
               onEachElementLoadFunc( loadedFragment, fileName );
               fragList[ whichEl ] = loadedFragment;
               if( fragLoadedCount >= listLength ) {
                  addLoadedFrags( whichSVG, fragList, afterAllLoadedFunc );
               }
            } );  
        })();
     }
  };
});



// use custom callback funcs below, above funcs shouldn't need to be touched much
// it uses fragments, so they aren't loaded yet into the DOM fully

function onAllLoaded() {
    console.log('all loaded');
}

function onEachLoaded( frag, fileName ) { 
	
	var f = frag.select("svg");
	var g = s.group(f);
	             

    if( myDisplayList[ fileName ] == "grow0" ) {
        f.hover(function() { g.animate({ transform: 's1.1 1.1' }, 1000, mina.bounce )},function() {g.animate({ transform: 's1 1' }, 1000, mina.bounce ) });	
    }
    if( myDisplayList[ fileName ] == "grow1" ) {
        f.hover(function() { g.animate({ transform: 's1.2 1.2' }, 1000, mina.bounce )},function() {g.animate({ transform: 's1 1' }, 1000, mina.bounce ) });	
    }
    if( myDisplayList[ fileName ] == "grow2" ) {
        f.hover(function() { g.animate({ transform: 's1.4 1.4' }, 1000, mina.bounce )},function() {g.animate({ transform: 's1 1' }, 1000, mina.bounce ) });	
    }

        
    var e = fileName.split(".")[0];
	var thisPost = theLoop.post[e];
	console.log(thisPost);
	var url = thisPost.guid;
	var title = thisPost.post_title;
	var content = thisPost.post_excerpt;
	var img = thisPost.image;
// 	const uurl = new URL(img);
	var uurl = img.replace('/', '\/');
	if (fileName == 'hotel.svg'){
		url = '/lodging/';
	}

	if (fileName == 'info.svg'){
		url = '/visitor-information-center/';
	}
	
	var tt = "<a href='" + url + "'>" + "<div class='dk_map_image' style='background-image: url(\"" + img + "\")'></div><h1 class='dk_map_title'>" + title + "</h1>" + "</a><p class='dk_map_content'>" + content + "</p>" + "<a class='dk_map_link' href='" + url + "'>Discover More >></a>";
	tippy(document.querySelector('#' + e), { content: tt });
//     console.log(fileName, ' fragment loaded');
	console.log(fileName);
}

// <img class='dk_map_image' src='" + img +  "'>

var s = Snap("#svgout");

//Paths to the SVGs
var href = path.url + '/svg/';
// var knight = "knight.svg";
// var rook = "rook.svg";
var gnp = "gnp.svg";
var airport = "airport.svg";
var bm = "bm.svg";
var golf = "golf.svg";
var btail = "btail.svg";
var cyclist = "cyclist.svg";
var fl = "fl.svg";
var hiker = "hiker.svg";
var car = "car.svg";
var indian = "indian.svg";
var downtown = "downtown1.svg";
var hotel = "hotel.svg";
var restaurant = "restaurant.svg"
var info = "info.svg";



var myLoadList = [ gnp, airport, bm, golf, btail, cyclist, fl, hiker, car, indian, downtown, hotel, restaurant, info ];
var myDisplayList = {
	"gnp.svg" : "grow0", 
	"airport.svg" : "grow2",
	"bm.svg" : "grow1",
	"golf.svg" : "grow2",
	"btail.svg" : "grow2",
	"cyclist.svg" : "grow2",
	"fl.svg" : "grow1",
	"hiker.svg" : "grow2",
	"car.svg" : "grow2",
	"indian.svg" : "grow2",
	"downtown1.svg" : "grow1",
	"hotel.svg" : "grow2",
	"restaurant.svg" : "grow2",
	"info.svg" : "grow2",
};

s.loadFilesDisplayOrdered( myLoadList, onAllLoaded, onEachLoaded );

