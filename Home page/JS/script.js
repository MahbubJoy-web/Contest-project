// ================wlc js=================
alert("Wellcome to 'MS web Architects'")
prompt("What's your Name ?")


// ==============card js=============
var cursor = document.querySelector('.blob');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

// =============card js===============
