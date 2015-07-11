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
var HEIGHT_OFFSET = 50;

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

/*
var rotateComp = new Rotation(rootNode);
rotateComp.set(Math.PI,0,0, {duration:2000});
*/
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
  properties:{
    'background-color':'#49afeb'
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
  content : "Hello There",
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
  properties:{
    'background-color':'cyan'
  }
});


var leftNode = rootNode.addChild();

leftNode.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(width, height)
          //.setOrigin(0.5,0.5)
          .setRotation(0,Math.PI/2,0)
          .setPosition(0,0,0)

var grayDIV = new DOMElement(leftNode, {
  properties:{
    'background-color':'gray'
  }
});


var bottomNode = rootNode.addChild();

bottomNode.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(width, width)

          .setRotation(3 * Math.PI/2,0,0)
          .setPosition(0,height,0)

var redDIV = new DOMElement(bottomNode, {
  properties:{
    'background-color':'red'
  }
});

/*
var topNode = rootNode.addChild();

topNode.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(width, width)
          //.setOrigin(0.5,0.5)
          .setRotation(-Math.PI/2,0,0)
          .setPosition(0,0,0)

var greenDIV = new DOMElement(topNode, {
  properties:{
    'background-color':'green'
  }
});
*/

var spinner = scene.addComponent({
  onUpdate: function(time) {
    //console.log(time/5000);
    //rootNode.setRotation(time/1000,time/1000,0);
    rootNode.setRotation(0,time/1000,0);
    //sepNode.setRotation(0,time/1000,0);


    scene.requestUpdateOnNextTick(spinner);
  }
});

// Start spinning
scene.requestUpdate(spinner);

var topArrow = buttonNode.addChild()
topArrow.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(25, 25)
          .setAlign(0.25,0)

var topDom = new DOMElement(topArrow, {

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



Famous.init();

/*
var myComponent = {
    onReceive: function(event, payload) {
        console.log(
            'Received ' + event + ' event!'
            );
        }
    };
rootNode.addComponent(myComponent);
*/


frontNode.onReceive = function(e,v){

    console.log(
            'Received ' + e + ' event!'
            );
}



setTimeout(function(){

    console.log("Fired");
    rootNode.emit("eventoo",{data : "payload"});

},5000);
