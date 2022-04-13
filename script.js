function positions(firstPlace, secondPlace, lastPlace) {

  if ("Daniel"==secondPlace) {
    let array = [secondPlace, firstPlace, lastPlace]
    console.log(array)
    console.log("1° - Colocado: "+secondPlace+"\n"+"2° - Colocado: "+firstPlace+"\n"+"3° - Colocado: "+lastPlace)
  }

  else if ("Daniel"==lastPlace) {
    let array = [firstPlace,lastPlace,secondPlace]
    console.log(array)
    console.log("1° - Colocado: "+firstPlace+"\n"+"2° - Colocado: "+lastPlace+"\n"+"3° - Colocado: "+secondPlace)
  }
  else {
    let array = [firstPlace, secondPlace, lastPlace]
    console.log(array)
    console.log("1° - Colocado: "+firstPlace+"\n"+"2° - Colocado: "+secondPlace+"\n"+"3° - Colocado: "+lastPlace)
  }
}


positions("Rafael", "Daniel", "Manoel")