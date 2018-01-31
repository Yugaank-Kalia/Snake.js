
var height = 1000;
var width = 500;
var scl = 10;
var score = 0;


function setup() { 
		
		// Setups the canvas and objects to be rendered 
		
    createCanvas(1000,500);
    snake = new Snake
    apple = new Food
    frameRate(60);
    apple.update();
}

function draw() {
    
    background(25,70,86);
    snake.death();
    snake.update();
    snake.show();
    apple.show(255,255,0);
    if(snake.eat(apple.x,apple.y)){
        
        apple.update();
        
    } 

    string();
    win();
    
}

function win(){
    
    if( score === 30){
        clear();
        background(25,70,86);
        str = "You Won !!";
        fill(255);
        textSize(60);
        strokeWeight(1);
        text(str,400,250);
        
    }
    
}

function string() {
    
    str = "Score : "+score;
    fill(255);
    textSize(20);
    strokeWeight(1);
    text(str,850,70);
    
}

function Snake(){
    
    this.x = width/2;
    this.y = height/2;
    this.speedx = 0;
    this.speedy = 0;
    this.trail = 0;
    this.tail = [];

    this.eat = function(x,y){
        
        var d = dist(this.x,this.y,x,y)
        
        if(d<25){
            
            score++;
            this.trail++;
            return true;
            
        } else {
            
            return false;
            
        }
        
    }
    
    this.update = function(){
        
        if(this.trail === this.tail.length){
        for(var i = 0 ; i< this.tail.length-1 ; i++){
            
            this.tail[i] = this.tail[i+1];
    
            }
        }
        
        this.tail[this.trail-1] = createVector(this.x,this.y);
        
        this.x += this.speedx * scl;
        this.y += this.speedy * scl;
        
        if(this.x >= width ){
            
            this.x = 0
            
        } else if(this.x <= 0){
            
            this.x = width;
            
        } 
        
        
        else if(this.y >= height){
            
            this.y = 0
            
        } else if(this.y <= 0){
            
            this.y = height;
            
        } 

    }

    this.direction = function(x,y){

        this.speedx = x;
        this.speedy = y;

    }

    this.show = function(){

        fill(255);
        stroke(0);
        ellipse(this.x,this.y,20,20);
        for(var i = 0 ; i< this.tail.length ; i++){
            ellipse(this.tail[i].x,this.tail[i].y,20,20);
    
        }
    }
    
    this.death = function(){
        
        for(var i = 0 ; i < this.tail.length ; i++ ){
            
            var position = this.tail[i];
            var d = dist(this.x,this.y,position.x,position.y)
            
            if(d<1){
                
                this.trail = 0;
                this.tail = [];
                score = 0;
            }
            
        }
        
    }
}

    this.move = function(){
        
        if(this.isMovingUp){
            
            snake.direction(0,-2)
            
        } else if(this.isMovingDown){
                  
            snake.direction(0,2)
                  
        } else if(this.isMovingLeft){
            
            snake.direction(-2,0)
            
        } else if(this.isMovingLeft){
            
            snake.direction(2,0)
            
    }
}

function Food(){
    
    this.update = function(){
        
        var cols = floor(height/scl);
        var rows = floor(width/scl);
        
        this.x = floor(random(rows))*scl;
        this.y = floor(random(cols))*scl; 
    
    }
    
    this.show = function(r,g,b){

        fill(r,g,b,150);
        noStroke();
        ellipse(this.x,this.y,20,20);
        fill(0);
        ellipse(this.x,this.y-5,2,2);
        fill(165,42,42)
        rect(this.x,this.y-5,2,-10)

    }

}


function keyPressed(){
    
    if(keyCode === UP_ARROW){

        snake.direction(0,-0.5);
        
    }
    

    else if(keyCode === DOWN_ARROW){
        
        snake.direction(0,0.5);        
    }
    
    else if(keyCode === LEFT_ARROW){
        
        snake.direction(-0.5,0);
        
    }
    
    
    else if(keyCode === RIGHT_ARROW){
        
        snake.direction(0.5,0);
        
    }
}
