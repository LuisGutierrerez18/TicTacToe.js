var WIDTH = 400;
var HEIGHT = 400;
setSize(WIDTH, HEIGHT);
var circle;

var data = new Grid(3, 3);

var row;
var col;

var player = 1;
var gameOver = false;

var WINNING_LINE_WIDTH = 10;
var WINNING_LINE_COLOR = Color.red;


function start()
{
    lines();
    mouseClickMethod(handleMethod);
    //checkWin(row,col);
}

// Function to create the four lines
function lines()
{
    // Verical Line number 1
    var verticalLine1 = new Line(getWidth()/2 - 75, getHeight() - HEIGHT /**/ , getWidth()/2 - 75, getHeight());
    verticalLine1.setColor(Color.black);
    verticalLine1.setLineWidth(4);
    add(verticalLine1);
    
    // Vertical Line number 2
    var verticalLine2 = new Line(getWidth()/2 + 75, getHeight() - HEIGHT /**/ , getWidth()/2 + 75, getHeight());
    verticalLine2.setColor(Color.black);
    verticalLine2.setLineWidth(4);
    add(verticalLine2);
     
    
    // Horizontal Line number 1
    var horizontalLine1 = new Line(getWidth()/2 - getWidth(), getHeight()/2  - 75 /**/, getWidth()/2  + getWidth(), getHeight()/2 - 75);
    horizontalLine1.setColor(Color.black);
    horizontalLine1.setLineWidth(4);
    add(horizontalLine1);
    
    // Horizontal Line number 2
    var horizontalLine2 = new Line(getWidth()/2 - getWidth(), getHeight()/2  + 75 /**/, getWidth()/2  + getWidth(), getHeight()/2 + 75);
    horizontalLine2.setColor(Color.black);
    horizontalLine2.setLineWidth(4);
    add(horizontalLine2);
}

function handleMethod(e)
{
    //circle.setPosition(e.getX(), e.getY());
    //circle2.setPosition(e.getX(), e.getY());
    
    var row = getColForClick(e.getY());
    var col = getColForClick(e.getX());
    
    if(data.get(row, col) == null && !gameOver)
    {
        if(player ==1)
        {
            drawX(row,col);
            data.set(row, col, player);
            player =2;
        }
        else if(player ==2 )
        {
            draw0(row,col);
            data.set(row, col, player);
            player =1;
        
        }
    
    checkWin(row,col);
    }
}

// Function will return the column number when clicked
// Starts at 0
function getColForClick(x)
{
    if(x < (getWidth()/2 - 75) )
    {
        return 0;
    }
    if(x > (getWidth()/2 + 75) )
    {
        return 2;
    }
    else
    {
        return 1;
    }
}

// Function  will return the row number when clicked 
// Starts at 0
function getRowForClick(y)
{
    if(y < getHeight()/2 - 75)
    {
        return 0;
    }
    if(y > getHeight()/2 + 75)
    {
        return 2;
    }
    else
    {
        return 1;
    }
}

// Draws the "X" character for the game
function drawX(row,col)
{
    var xpos;
    var ypos;
    
     
    
    if(col==0)
    {
         xpos = 50;
    }
    else if(col==1)
    {
    
        xpos = 190;
    } 
    else if(col == 2)
    {
        xpos = 328;
    }
    
    if(row == 0)
    {
        ypos = 50;
    }
    else if(row == 1)
    {
        ypos = 190;
    }
    else if(row == 2)
    {
        ypos = 328;
    }
   
    
    var verticalLine1 = new Line(xpos-48, ypos-48, xpos+70, ypos+70);
    verticalLine1.setLineWidth(5);
    add(verticalLine1);
    
    var verticalLine2 = new Line(xpos+70, ypos-48, xpos-48, ypos+70);
    verticalLine2.setLineWidth(5);
    add(verticalLine2);
}

// Creates the 0 character for the game
function draw0(row, col)
{
    var xpos=0;
    var ypos;
    
    if(col==0)
    {
         xpos = 60;
    }
    else if(col==1)
    {
    
        xpos = 200;
    } 
    else if(col == 2)
    {
        xpos = 338;
    }
    
    if(row == 0)
    {
        ypos = 60;
    }
    else if(row == 1)
    {
        ypos = 200;
    }
    else if(row == 2)
    {
        ypos = 338;
    }
    
    var circle = new Circle(55);
    circle.setPosition(xpos, ypos);
    circle.setColor(Color.white);
    circle.setBorderColor(Color.black);
    circle.setBorderWidth(5);
    add(circle);
}

function checkWin(row,col)
{
    gameOver = winnerInRow(row)||winnerInCol(col)||winnerInDownDiagonal()||winnerInUpDiagonal();
    var x1;
    var x2;
    var y1;
    var y2;
    
    var text = new Text("Game Over", "40pt Arial");
    text.setPosition(getWidth()/2-130, getHeight()/2 + 20);
    text.setColor(Color.blue);
    
    var winRectangle = new Rectangle(280,50);
    winRectangle.setPosition(70,177);
    winRectangle.setColor(Color.green);
    
    /*
   /* var gameOver; */
     /*
    if(winnerInRow(row)
    {
        WinLine.setPosition(row,row);
        WinLine.setEndpoint(row, row);
        add(WinLine);
    }
    ||winnerInCol(col)||winnerInDownDiagonal()||winnerInUpDiagonal()
      //add(text);
     */
    ///*
    if(winnerInRow(row))
    {
        print("Winner in Row");
        x1 = 0;
        x2 = 400;
        y1 = 140*row+60;
        y2 = y1;
    }
    if(winnerInCol(col))
    {
        print("Winner in Column");
        x1 = 140*col+60;
        x2= x1;
        y1 = 0;
        y2 = 400;
    }
    if(winnerInDownDiagonal())
    {
        print("Winner in Down Diag");
        x1 = 0;
        x2 = 400;
        y1 = 0;
        y2 = 400;
        
    }
    if(winnerInUpDiagonal())
    {
        print("Winner in Up Diag");
        x1 = 400;
        x2 = 0;
        y1 = 0;
        y2 = 400;
    }
    if(gameOver)
    {
        var WinLine = new Line(x1,y1, x2, y2);
        WinLine.setColor(Color.red);
        WinLine.setLineWidth(8);
        add(WinLine);
        add(winRectangle);
        add(text);
    }
    
}

// This function returns true if there is a winner 
// in the row passed in as a parameter,
// returns false otherwise.
function winnerInRow(row)
{
    var play = data.get(row,0);
    
    for(var i = 1; i < 3; i++)
    {
        if(play != data.get(row,i))
        {
            return false;
        }
    }
    return true;
    
}

// This function returns true if there is a winner
// in the col passed in as a parameter,
// returns false otherwise.
function winnerInCol(col)
{
    var play2 = data.get(0,col);
    
    for(var i = 1; i < 3; i++)
    {
        if(play2 != data.get(i,col))
        {
            return false;
        }
    }
    return true;
}

// This function returns true if there is a winner in
// the diagonal from top left to bottom right,
// returns false otherwise.
function winnerInDownDiagonal()
{
    var diagCheck1 = data.get(0,0);
    var diagCheck2 = data.get(1,1);
    var diagCheck3 = data.get(2,2);
    
    if(diagCheck1!=null && diagCheck1==diagCheck2 && diagCheck1==diagCheck3)
    {
        return true;
    }
    else
    {
        return false;
    }
}

// This function returns true if there is a winner in
// the diagonal from bottom left to top right,
// returns false otherwise.
function winnerInUpDiagonal()
{
    var diagCheck4 = data.get(0,2);
    var diagCheck5 = data.get(1,1);
    var diagCheck6 = data.get(2,0);
    
    if(diagCheck4!=null && diagCheck4==diagCheck5 &&  diagCheck4==diagCheck6)
    {
        return true;
    }
    else
    {
        return false;
    }
    
    for(var i = 1; i < 3; i++)
    {
        if(data.get(row,col))
        {
            return false;
        }
    
    }
    return true;
    
}
