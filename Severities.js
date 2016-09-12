#pragma strict

static var LargeScore : int = 0;
static var MediumScore : int = 0;
static var SmallScore : int = 0;
var testLarge = 0;
var testMedium = 0;
var testSmall = 0;

function Start () 
{
LargeScore = 0;
MediumScore = 0;
SmallScore = 0;
}


function Update () 
{
testLarge = LargeScore;
testMedium = MediumScore;
testSmall = SmallScore;
}