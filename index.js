// add solution here
function theBeatlesPlay(arrayMusician,arrayInstruments){
  const array=[]
  for(let i=0;i<arrayMusician.length;i++){
    array.push(`${arrayMusician[i]} plays ${arrayInstruments[i]}`)
    console.log(array[i])
  }
return array
}

//second function
function johnLennonFacts(factsArray){
  var ii=0
  while (ii<factsArray.length){
 // shoutFact.push(`${factsArray[ii]}!!!`)
  factsArray[ii]=`${factsArray[ii]}!!!`
  ii++
  }
  console.log(factsArray)
  return factsArray
}
//function ilovebeatles
function iLoveTheBeatles(n){
const array=[]
var i=0
do{
  array[i]='I love the Beatles!'
  n++
  i++
} while (n<15)
return array
}