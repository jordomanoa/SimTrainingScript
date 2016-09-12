#pragma strict

static var currentScore : int = 0;
var test = 0;
public var score0 : GameObject;
public var score1 : GameObject;
public var score2 : GameObject;
public var score3 : GameObject;
public var score4 : GameObject;
public var score5 : GameObject;
public var score6 : GameObject;
public var score7 : GameObject;
public var score8 : GameObject;
public var score9 : GameObject;
public var score10 : GameObject;
public var score11 : GameObject;
public var score12 : GameObject;
public var score13 : GameObject;
public var score14 : GameObject;
public var score15 : GameObject;
public var score16 : GameObject;

function Start (){
currentScore = 0;
}

function Update () {
test = currentScore;

if (currentScore > 6 ) 
	{
    score0.SetActive (false);
    score1.SetActive (true);
    }
    
    if (currentScore > 12 ) 
    {
    score1.SetActive (false);
    score2.SetActive (true);
    }
    
      if (currentScore > 19 ) 
    {
    score2.SetActive (false);
    score3.SetActive (true);
    }
    
      if (currentScore > 27 ) 
    {
    score3.SetActive (false);
    score4.SetActive (true);
    }
    
      if (currentScore > 33 ) 
    {
    score4.SetActive (false);
    score5.SetActive (true);
    }
    
      if (currentScore > 39 ) 
    {
    score5.SetActive (false);
    score6.SetActive (true);
    }
    
      if (currentScore > 45 ) 
    {
    score6.SetActive (false);
    score7.SetActive (true);
    }
    
      if (currentScore > 52 ) 
    {
    score7.SetActive (false);
    score8.SetActive (true);
    }
    
      if (currentScore > 58 ) 
    {
    score8.SetActive (false);
    score9.SetActive (true);
    }
    
      if (currentScore > 64 ) 
    {
    score9.SetActive (false);
    score10.SetActive (true);
    }
    
      if (currentScore > 70 ) 
    {
    score10.SetActive (false);
    score11.SetActive (true);
    }
    
      if (currentScore > 76 ) 
    {
    score11.SetActive (false);
    score12.SetActive (true);
    }
    
      if (currentScore > 82) 
    {
    score12.SetActive (false);
    score13.SetActive (true);
    }
    
      if (currentScore > 88 ) 
    {
    score13.SetActive (false);
    score14.SetActive (true);
    }
    
      if (currentScore > 94 ) 
    {
    score14.SetActive (false);
    score15.SetActive (true);
    }
}
