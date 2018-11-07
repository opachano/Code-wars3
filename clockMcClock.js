//My code

function whatTimeIsIt(angle) {
  if(typeof angle !== "number") {
    return
  }
  if(angle < 30) {
    angle += 360
  }
  let hour = Math.floor(angle/30);
  let minutes = Math.floor((angle % 30) * 2);
  if(hour < 10) {
    if(minutes < 10) {
      return `0${hour}:0${minutes}`;
  } return `0${hour}:${minutes}`}
  if(minutes < 10) {
    return `${hour}:0${minutes}`;
  }
  return `${hour}:${minutes}`;
}


//Best Practice

var whatTimeIsIt = function(angle) {
  let h = ~~(angle/30), m = ~~((angle%30)*2);
  return `${h==0?12:h>9?h:"0"+h}:${m>9?m:"0"+m}`
}