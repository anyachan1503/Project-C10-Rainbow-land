var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["48c20ab2-54ca-4883-8a66-c543f509eae6","9a3586ea-646e-4dbf-831d-35ef341deb72","3f887b76-31ff-4918-81d7-2ffeba6360ae","9e6edbc4-0a46-46e9-bd5a-4fbefc839f42"],"propsByKey":{"48c20ab2-54ca-4883-8a66-c543f509eae6":{"name":"background 2","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"QiX2EIUXHZLh6Rv_pfR2iZur1Z0kU6ze","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/48c20ab2-54ca-4883-8a66-c543f509eae6.png"},"9a3586ea-646e-4dbf-831d-35ef341deb72":{"name":"purpleburst_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9s4aFFAhzDx5yIL18WhWnz..kp4ZQba1/category_retro/retro_purple_burst.png","frameSize":{"x":236,"y":237},"frameCount":1,"looping":true,"frameDelay":2,"version":"9s4aFFAhzDx5yIL18WhWnz..kp4ZQba1","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":236,"y":237},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9s4aFFAhzDx5yIL18WhWnz..kp4ZQba1/category_retro/retro_purple_burst.png"},"3f887b76-31ff-4918-81d7-2ffeba6360ae":{"name":"unicat_2","sourceUrl":"assets/api/v1/animation-library/gamelab/ds6tFbUz6rK49A8_WcKlK4eGrPOLsmcZ/category_stickers/sticker_12.png","frameSize":{"x":398,"y":326},"frameCount":1,"looping":true,"frameDelay":2,"version":"ds6tFbUz6rK49A8_WcKlK4eGrPOLsmcZ","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":326},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ds6tFbUz6rK49A8_WcKlK4eGrPOLsmcZ/category_stickers/sticker_12.png"},"9e6edbc4-0a46-46e9-bd5a-4fbefc839f42":{"name":"ground_cake_1","sourceUrl":null,"frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"VLPzT9pghKRtLO4IarA_qBJgjKe1xHPe","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/9e6edbc4-0a46-46e9-bd5a-4fbefc839f42.png"}}};
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

var b = createSprite(200, 200);
b.setAnimation("background 2");

var unicat = createSprite(200,345,180,330);
unicat.setAnimation("unicat_2");
unicat.scale=0.2;

var crystal1 = createSprite(100,250,200,200);
crystal1.setAnimation("purpleburst_1");
crystal1.scale=0.2;

var crystal2 = createSprite(300,150,200,200);
crystal2.setAnimation("purpleburst_1");
crystal2.scale=0.2;

var crystal3 = createSprite(100,50,200,200);
crystal3.setAnimation("purpleburst_1");
crystal3.scale=0.2;

var Fline = createSprite(200,5,200,10);
Fline.setAnimation("ground_cake_1");
Fline.scale=0.2;

var goal =0;
var death = 0;

crystal1.setVelocity(-10,0);
crystal2.setVelocity(10,0);
crystal3.setVelocity(-10,0);

playSound("assets/Video-Game.mp3", true);


function draw() {
  
//background(b);

  
createEdgeSprites();

crystal1.bounceOff(edges);
crystal2.bounceOff(edges);
crystal3.bounceOff(edges);


if(keyDown(UP_ARROW)){
 unicat.y=unicat.y-2
}

if(keyDown(DOWN_ARROW)){
 unicat.y=unicat.y+2
}

if(keyDown(LEFT_ARROW)){
  unicat.x=unicat.x-2
}

if(keyDown(RIGHT_ARROW)){
  unicat.x=unicat.x+2
}

if(unicat.isTouching(crystal1)|| unicat.isTouching(crystal2)|| unicat.isTouching(crystal3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3", false);
  unicat.x=200
  unicat.y=350
  death = death+1
}
if(unicat.isTouching(Fline)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3", false);
  unicat.x=200
  unicat.y=345
  goal=goal+1
}






drawSprites();  
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
