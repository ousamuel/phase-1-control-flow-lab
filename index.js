function scuberGreetingForFeet(ft){
  // Write your code here!
  if (ft <= 400) {
    return 'This one is on me!';
  } else if (ft >= 400 && ft <= 2000){
    return 'That will be twenty bucks.';
  } else if (ft > 2000 && ft <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (ft > 2500){
    return 'No can do.';
  }

}

function ternaryCheckCity(city){
  // Write your code here!
  let cityCheck = true;
  if(city == 'NYC'){
    cityCheck = true;
  } else {
    cityCheck = false;
  }
  return (cityCheck ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}