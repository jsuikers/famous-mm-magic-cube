'use strict';

var Famous = require('famous/core/FamousEngine');
var DOMElement = require('famous/dom-renderables/DOMElement');

var Rotation = require('famous/components/Rotation');
var Position = require('famous/components/Position');

var Quaternion  = require('famous/math/Quaternion');
var Mesh = require('famous/webgl-renderables/Mesh');

import Material from 'famous/webgl-materials/Material';

var scene = Famous.createScene();
var rootNode = scene.addChild();
//var sepNode = scene.addChild();

//scene.setOrigin(0.5,1);
//var width = window.innerHeight/1.5;
//var height = window.innerHeight/1.5;
var width = 300;
var height = 300;
var depth = 300;
var HEIGHT_OFFSET = 50;

var freeRotationFlag = false;
var rotationSyncFlag = false;
var currentAngleAsPerTime = 0;
var currentAngleAsPerRotation = 0;
var currentAngleDiff = 0;
var currentRadAngle = 0;

//var freeYRotationFlag = false;

/*

sepNode.setSizeMode('absolute', 'absolute', 'absolute')
          .setAbsoluteSize(width, height , 5)
          //since position is static we use
          //.setPosition(x,y,z) on the node
          //.setAlign(0.25,0.15)
          .setOrigin(0.5,0.5,0)
          //.setRotation(0,0,Math.PI/4)
          .setPosition(300,300,0);

var sepfrontNode = sepNode.addChild();
sepfrontNode.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(width, height)
          //.setOrigin(0.5,0.5)


var sepblueDIV = new DOMElement(sepfrontNode, {
  properties:{
    'background-color':'#49afeb'
  }
});

var sepbackNode = sepNode.addChild();
sepbackNode.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(width, height)
          .setPosition(0,0,0)
          .setOrigin(0.5,0.5,0)
          .setRotation(0,Math.PI,0);

var seporangeDIV = new DOMElement(sepbackNode, {
  content : "Hello There",
    properties:{
    'background-color':'orange'
  }
});

*/


rootNode.setSizeMode('absolute', 'absolute', 'absolute')
          .setAbsoluteSize(width, height , height)
          //since position is static we use
          //.setPosition(x,y,z) on the node
          //.setAlign(0.25,0.15)
          .setOrigin(0.5,0.5,0)
          //.setRotation(0,0,Math.PI/4)
          .setPosition((window.innerWidth - width)/2,((window.innerHeight - height)/2) - 50 , 0 );




var buttonNode = scene.addChild();
buttonNode.setSizeMode('absolute', 'absolute', 'absolute')
          .setAbsoluteSize(100, 100)
          .setAlign(0.48,0.85)


var rotateComp = new Rotation(rootNode);
rotateComp.set(0,0,0);

/*
var positionComp = new Position(rootNode);
positionComp.set(50,0,0, {duration:2000});
*/

var glNode1 = rootNode.addChild();
glNode1.setSizeMode('absolute', 'absolute', 'absolute')
          .setAbsoluteSize(300, 300 , 300)
          .setAlign(0,0,0)


var mesh1 = new Mesh(glNode1);

// Give the mesh a geometry.
mesh1.setGeometry('Torus')
  .setBaseColor(Material.normal());


var glNode2 = rootNode.addChild();
glNode2.setSizeMode('absolute', 'absolute', 'absolute')
            .setAbsoluteSize(150, 150 , 150)
            .setAlign(0.25,0.25,0)


var mesh2 = new Mesh(glNode2);

// Give the mesh a geometry.
mesh2.setGeometry('Icosahedron')
    .setBaseColor(Material.normal());


var frontNode = rootNode.addChild();
frontNode.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(width, height)
          //.setOrigin(0.5,0.5)


var blueDIV = new DOMElement(frontNode, {
  id : "frontDom",
  properties:{
    'background-color':'#49afeb',
    'text-align' : 'center',
    'line-height': '50px',
    'font-size' : '5vh'
  }
});

var frontChild = frontNode.addChild();
frontChild.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(100, 50 , 50)
          .setAlign(0.25,0.25,0.5)


var blueChildDIV = new DOMElement(frontChild, {
    properties:{
      'background-color':'#49ddeb'
    }
});




var backNode = rootNode.addChild();
backNode.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(width, height)
          .setPosition(0,0,0)
          .setOrigin(0.5,0,0)
          .setRotation(0,Math.PI,0);

var orangeDIV = new DOMElement(backNode, {

    properties:{
    'background-color':'orange'
  }
});





var rightNode = rootNode.addChild();
rightNode.setSizeMode('absolute', 'absolute','absolute')
          .setAbsoluteSize(width, height,0)
          //.setOrigin(1,0)
          .setRotation(0,Math.PI/2,0)
          .setPosition(width,0,0);

var cyanDIV = new DOMElement(rightNode, {
  id : "rightDom",
  properties:{
    'background-color':'cyan'
  }
});


var leftNode = rootNode.addChild();

leftNode.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(width, height)
          //.setOrigin(0.5,0.5)
          .setRotation(0,3/2 * Math.PI,0)
          .setPosition(0,0,-depth)

var grayDIV = new DOMElement(leftNode, {
  id : "leftDom",
  properties:{
    'background-color':'gray'
  }
});


var bottomNode = rootNode.addChild();

var bottomNodeOpenStatus = false;

var bottomNodeRotation = new Rotation(bottomNode);

bottomNodeRotation.set(3 * Math.PI/2,0,0);

bottomNode.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(width, width)

          .setRotation(3 * Math.PI/2,0,0)
          //.setRotation(3/4 * Math.PI,0,0)
          .setPosition(0,height,0)

var redDIV = new DOMElement(bottomNode, {
  id : "bottomDom",
  properties:{
    'background-color':'red'
  }
});


var topNode = rootNode.addChild();

topNode.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(width, width)
          .setOrigin(1,0)
          .setRotation(-Math.PI/2,-Math.PI,0)
          .setPosition(-width,0,0)

var greenDIV = new DOMElement(topNode, {
  id : "topDom",

  properties:{
    'background-color':'green'
  }
});

greenDIV.setProperty('z-index',1);

var spinner = scene.addComponent({
  onUpdate: function(time) {

    currentAngleAsPerTime = ((time/1000) * 180 / Math.PI)%360;

    console.log("Current Angle as per time " + currentAngleAsPerTime);

    if(rotationSyncFlag){


      console.log("Current Angle as per rotation " + currentAngleAsPerRotation);

      currentAngleDiff = currentAngleAsPerTime - currentAngleAsPerRotation;
      rotationSyncFlag = false;


    } else {

        currentAngleAsPerRotation = currentAngleAsPerTime - currentAngleDiff

        currentRadAngle = currentAngleAsPerRotation * Math.PI / 180;

        rotateComp.set( -(currentRadAngle),currentRadAngle,0);

    }

    if(freeRotationFlag){
        scene.requestUpdateOnNextTick(spinner);
    }

  }
});


var topArrow = buttonNode.addChild()
topArrow.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(25, 25)
          .setAlign(0.25,0)

var topDom = new DOMElement(topArrow, {
  id : 'topButton',
  properties:{
    'width': 0,
  	'height': 0,
  	'border-left': '25px solid transparent',
  	'border-right': '25px solid transparent',

  	'border-bottom': '25px solid black'
  }
});
topDom.setProperty('zIndex', '2');
topDom.setProperty('cursor', 'pointer');


var bottomArrow = buttonNode.addChild()
bottomArrow.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(25, 25)
          .setAlign(0.25,0.75)

var bottomDom = new DOMElement(bottomArrow, {
  id : 'bottomButton',
  properties:{
    'width': 0,
	  'height': 0,
	  'border-left': '25px solid transparent',
	  'border-right': '25px solid transparent',

	   'border-top': '20px solid black'
  }
});
bottomDom.setProperty('zIndex', '2');
bottomDom.setProperty('cursor', 'pointer');


var rightArrow = buttonNode.addChild()
rightArrow.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(25, 25)
          .setAlign(0.75,0.25)

var rightDom = new DOMElement(rightArrow, {
  id : 'rightButton',
  properties:{
      'width': 0,
	    'height': 0,
	    'border-top': '25px solid transparent',
	    'border-bottom': '25px solid transparent',

	    'border-left': '25px solid black'
  }
});
rightDom.setProperty('zIndex', '2');
rightDom.setProperty('cursor', 'pointer');


var leftArrow = buttonNode.addChild()
leftArrow.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(25, 25)
          .setAlign(0,0.25)

var leftDom = new DOMElement(leftArrow, {
  id : 'leftButton',
  properties:{
      'width': 0,
	    'height': 0,
      'border-top': '25px solid transparent',
  	  'border-bottom': '25px solid transparent',

  	  'border-right': '25px solid black'
  }
});
leftDom.setProperty('zIndex', '2');
leftDom.setProperty('cursor', 'pointer');


var centerArrow = buttonNode.addChild()
centerArrow.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(50, 50)
          .setAlign(.25,0.25)


var centerDom = new DOMElement(centerArrow, {
  id : 'centerButton',
  properties:{
      'border-radius': '50%',
      'background-color' : 'black'
  }
});
centerDom.setProperty('zIndex', '2');
centerDom.setProperty('cursor', 'pointer');



Famous.init();

$('body').on('click','#centerButton',function(){

  if(freeRotationFlag){
    freeRotationFlag = false;
  } else {
    freeRotationFlag = true;
    rotationSyncFlag = true;

    // Start spinning
    scene.requestUpdate(spinner);

  }

});

function animateOrigami(){

  var duration = 800;
	var bird = Snap.select("#bird");
  var parts = ['wing_b','head','body','wing_f'];
  var elements = [];
  var w = bird.attr('width');
  var h = bird.attr('height');


  for (var i = 0; i < parts.length; i++) {
    var element = bird.select("#" + parts[i]);
    element.attr('d1',element.attr('d'));
    elements.push(element);
  }

  var anim1 = function(){
    bird.stop().animate({height:h*.85},duration,mina.easeinout);
    for (var i = 0; i < elements.length; i++) {
      elements[i].stop().animate({
        d: elements[i].attr('d2')
      }, duration, mina.easeinout,anim2);
  	}
  }

  var anim2 = function(){
    bird.stop().animate({width:w, height:h},duration, mina.easeinout);
    for (var i = 0; i < elements.length; i++) {
      elements[i].stop().animate({
        d: elements[i].attr('d1')
      },duration, mina.easeinout,anim1);
  	}
  }

  anim1();
}

$('body').on('click','#topDom',function(){


  $('#topDom').html('<div style="z-index:1000000;width:100%;height:99%;"><video width="100%" height="100%" controls loop> \
      <source src="assets/SampleVideo_1080x720_30mb.mp4" type="video/mp4"> \
      Your browser does not support the video tag. \
    </video></div>');

});

$('body').on('click','#frontDom',function(){


  $('#frontDom').html('<div style="z-index:1000000;width:100%;height:100%;"> \
    <span>Hello</span> \
    </br> \
    <span>Famous</span> \
  </div>');

});

$('body').on('click','#rightDom',function(){


  $('#rightDom').html('<div style="z-index:1000000;width:100%;height:99%;" class="container"> \
  <svg id="bird" version="1.0" xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 515 515"> \
    <g transform="scale(0.5),translate(100,100)"> \
      <path id="wing_b" d="M55 50 L375 300 L207 402Z" d2="M190 510 L375 280 L210 380Z" fill="#ED2424"/> \
      <path id="head" d="M380 195 L488 252 L375 263Z" d2="M380 195 L478 252 L375 263Z" fill="#ED1D24"/> \
      <path id="body" d="M20 516 L380 195 L375 300Z" d2="M20 496 L380 195 L375 280Z" fill="#BE2026"/> \
      <path id="wing_f" d="M375 300 L220 394 L120 0Z" d2="M375 280 L210 380 L310 500Z" fill="#CB2126"/> \
    </g> \
  </svg> \
</div>');

  animateOrigami();

});

$('body').on('click','#leftDom',function(){


  $('#leftDom').html('<div class="ui equal width center aligned padded grid"> \
      <div class="row"> \
        <div class="olive column"> \
          Olive \
        </div> \
        <div class="black column"> \
          Black \
        </div> \
      </div> \
      <div class="row" style="background-color: #869D05;color: #FFFFFF;"> \
        <div class="column">Custom Row</div> \
      </div> \
      <div class="row"> \
        <div class="black column"> \
          Black \
        </div> \
        <div class="olive column"> \
          Olive \
        </div> \
      </div> \
    </div>');



});


$('body').on('click','#bottomDom',function(){

  if(bottomNodeOpenStatus){
      bottomNodeRotation.set(3 * Math.PI/2,0,0,{duration : 500})
      bottomNodeOpenStatus = false;
  } else {
      bottomNodeRotation.set(2.5 * Math.PI,0,0,{duration : 500});
      bottomNodeOpenStatus = true;
  }




});
