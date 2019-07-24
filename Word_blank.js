function myWordGame(myNoun,myAdjective,myVerb,myAdverb)
{
    var result;
    result += "The rule follows"+" "+myNoun+" "+"is "+myAdjective+" girl that completetes her " 
    +myVerb+" "+myAdverb;
    return result;
}
console.log(myWordGame("Neha","good","work","quickly"));