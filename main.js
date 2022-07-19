var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
var block_image_object = "";

player_x = 10;
player_y = 10;
var player_object= "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x

        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image,   function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set ({
            top:player_y,
            left:player_x
        });
    
    canvas.add(block_image_object);
    });
}

//class 87//

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
keyPressed = e.keyCode;
console.log(keyPressed);

if(e.shiftKey == true && keyPressed == '80')
{
    console.log("P and Shift are pressed together, size increased");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}

if(e.shiftKey == true && keyPressed == '77')
{
    console.log("M and Shift are pressed together, size decreased");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}

if(keyPressed = '38') {
    up();
    console.log("Up has been pressed, character moves up");
}
if(keyPressed = '40') {
    down();
    console.log("Down has been pressed, character moves down");
}
if(keyPressed = '37') {
    left();
    console.log("Left has been pressed, character moves left");
}
if(keyPressed = '39') {
    right();
    console.log("Right has been pressed, character moves right");
}
if(keyPressed = '87') {
    new_image('wall.jpg');
    console.log("W has been pressed, wall img has been printed");
}
if(keyPressed = '71') {
    new_image('ground.png');
    console.log("G has been pressed, ground img has been printed");
}
if(keyPressed = '76') {
    new_image('light_green.png');
    console.log("I has been pressed, light green img has been printed");
}
if(keyPressed = '84') {
    new_image('trunk.jpg');
    console.log("T has been pressed, trunk img has been printed");
}
if(keyPressed = '82') {
    new_image('roof.jpg');
    console.log("R has been pressed, roof img has been printed");
}
if(keyPressed = '89') {
    new_image('yellow_wall.png');
    console.log("Y has been pressed, yellow wall img has been printed");
}
if(keyPressed = '68') {
    new_image('dark_green.png');
    console.log("D has been pressed, dark green img has been printed");
}
if(keyPressed = '85') {
    new_image('unique.png');
    console.log("U has been pressed, unique img has been printed");
}
if(keyPressed = '67') {
    new_image('cloud.jpg');
    console.log("C has been pressed, clouds img has been printed"); 
}
}

// C 88 //

function up() {
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When the up arrow has been pressed, X of the player =" + player_x + " , Y of the player = "+ player_y );
    canvas.remove(player_object);
    player_update();
    }
}

function down() {
    if (player_y <=500)
    {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When down arrow has been pressed, X of the player = " + player_x + " , Y of the player = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >0) {
        player_x = player_x - block_image_width;
        console.log("block image width = " +block_image_width);
        console.log("When left arrow has been pressed, X of the player =" + player_x + ", Y of the player = " + player_y);
   canvas.remove(player_object);
   player_update();
    }
}
    function right() {
        if (player_x <=850) {
            player_x = player_x + block_image_width;
            console.log("block image width = " + block_image_width);
            console.log("When right arrow has been pressed, X of the player = " + player_x + ", Y of the player - " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }