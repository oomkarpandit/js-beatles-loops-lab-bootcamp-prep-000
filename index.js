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
 
  const shoutFact=[]
  var ii=0
  while (ii<factsArray.length){
 // shoutFact.push(`${factsArray[ii]}!!!`)
  factsArray[ii]=`${factsArray[ii]}!!!`
  ii++
  }
  //console.log(shoutFact)
  return factsArray
}
