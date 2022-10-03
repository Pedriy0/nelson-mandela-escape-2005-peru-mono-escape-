var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9ef91975-c484-464b-847d-2a5446199451","3ae4626f-788f-4a6f-a25b-3fe4d421fe9b","2531d8d1-ffa9-45e9-9fda-fab132f08acf","f5cd2213-2c93-4be7-9a9f-114f3cc54fa5","e32b62b8-91f2-4a2c-b293-c4dad243754b"],"propsByKey":{"9ef91975-c484-464b-847d-2a5446199451":{"name":"Nelson.png","sourceUrl":"assets/v3/animations/OdAB-3Pnn3F8NKf0go1AHoaorZU0IgRWxc1L9DqZzIk/9ef91975-c484-464b-847d-2a5446199451.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"pP2YeMhTZIhwSvNZDZ.5CoVEZvi00mPL","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/OdAB-3Pnn3F8NKf0go1AHoaorZU0IgRWxc1L9DqZzIk/9ef91975-c484-464b-847d-2a5446199451.png"},"3ae4626f-788f-4a6f-a25b-3fe4d421fe9b":{"name":"peru.jpg_1","sourceUrl":"assets/v3/animations/OdAB-3Pnn3F8NKf0go1AHoaorZU0IgRWxc1L9DqZzIk/3ae4626f-788f-4a6f-a25b-3fe4d421fe9b.png","frameSize":{"x":1344,"y":604},"frameCount":1,"looping":true,"frameDelay":4,"version":"Gf9PEUvdpz93pdYMurJMwUZf6FwNDbxW","loadedFromSource":true,"saved":true,"sourceSize":{"x":1344,"y":604},"rootRelativePath":"assets/v3/animations/OdAB-3Pnn3F8NKf0go1AHoaorZU0IgRWxc1L9DqZzIk/3ae4626f-788f-4a6f-a25b-3fe4d421fe9b.png"},"2531d8d1-ffa9-45e9-9fda-fab132f08acf":{"name":"fallout guy con armas (1).png_1","sourceUrl":"assets/v3/animations/OdAB-3Pnn3F8NKf0go1AHoaorZU0IgRWxc1L9DqZzIk/2531d8d1-ffa9-45e9-9fda-fab132f08acf.png","frameSize":{"x":251,"y":315},"frameCount":1,"looping":true,"frameDelay":4,"version":"qKr_b0qLPzYX6CNnXkewDVwyXWHnuw1Z","loadedFromSource":true,"saved":true,"sourceSize":{"x":251,"y":315},"rootRelativePath":"assets/v3/animations/OdAB-3Pnn3F8NKf0go1AHoaorZU0IgRWxc1L9DqZzIk/2531d8d1-ffa9-45e9-9fda-fab132f08acf.png"},"f5cd2213-2c93-4be7-9a9f-114f3cc54fa5":{"name":"Bullet-kin.png_1","sourceUrl":null,"frameSize":{"x":424,"y":480},"frameCount":1,"looping":true,"frameDelay":12,"version":"KxDbP3WWglVRH9RmepN.ES.k6zQ0JW75","loadedFromSource":true,"saved":true,"sourceSize":{"x":424,"y":480},"rootRelativePath":"assets/f5cd2213-2c93-4be7-9a9f-114f3cc54fa5.png"},"e32b62b8-91f2-4a2c-b293-c4dad243754b":{"name":"planefront_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/4SkN1lmmaZBvT.p1PJIpiK.0Bj0Xdyb1/category_vehicles/planefront_01.png","frameSize":{"x":394,"y":154},"frameCount":1,"looping":true,"frameDelay":2,"version":"4SkN1lmmaZBvT.p1PJIpiK.0Bj0Xdyb1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":154},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4SkN1lmmaZBvT.p1PJIpiK.0Bj0Xdyb1/category_vehicles/planefront_01.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var peru = createSprite(200,30,3,3);
peru.setAnimation("peru.jpg_1");
peru.scale = 0.22;
var endgame = 0;

var  nelson = createSprite(375,30,15,15);
nelson.setAnimation("Nelson.png");
nelson.scale = 0.2;
nelson.debug;

var paredes = createGroup();
var pared1 = createSprite(230,160,350,5);
var pared2 = createSprite (190,210,270,5);
pared2.velocityY = 1.5;

var pared3 = createSprite (230,330,350,5);
paredes.add(pared1);
paredes.add(pared3);
paredes.add(pared2);

var guardia1 = createSprite(20,30);
guardia1.setAnimation("fallout guy con armas (1).png_1");
guardia1.scale = 0.2;

var disparo = createSprite(25,30);
disparo.setAnimation("Bullet-kin.png_1");
disparo.scale = 0.05;
disparo.velocityY = 7;

var avion = createSprite(320,370);
avion.setAnimation("planefront_01_1");
avion.scale = 0.3;


paredes.setColorEach("black");



function draw() {
  background("white");
drawSprites();  
createEdgeSprites();
nelson.bounceOff(edges);
pared2.bounceOff(pared1);
pared2.bounceOff(pared3);








if (disparo.isTouching(bottomEdge)){
  disparo.x = 25;
  disparo.y = 30;
}



if (nelson.isTouching(paredes)||nelson.isTouching(peru)|| nelson.isTouching(disparo)||nelson.isTouching(pared2)){
nelson.x=375;
nelson.y=30;}



if (keyDown("right")){
  nelson.x = nelson.x + 3; }
if (keyDown("left")){
  nelson.x = nelson.x - 3; }
if (keyDown("down")){
  nelson.y = nelson.y + 3; }
if (keyDown("up")){
  nelson.y = nelson.y - 3; }


if (nelson.isTouching(avion)){
  endgame = 1;
}
if (endgame == 1){
  disparo.visible = false;
 nelson.visible = false;
 avion.visible = false;
  paredes.setVisibleEach(false);
  guardia1.visible = false;
  peru.visible = false;
  textSize(40);
  text("felicidades, escapaste de peru",1,200);
  textSize(40);
  text("de peru",1,300);
}
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
