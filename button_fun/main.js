
// On Click the button should toggle between blue and red
// On Hover the button should turn green (the button should go
// back to its previous color when you hover out)

var $btn = $('.pretend-btn')
var btnState = 'default'

// event handlers
$btn.on('mouseenter', handleMouseEnter)
$btn.on('mouseleave', handleMouseLeave)
$btn.on('click', handleClick)

function handleMouseEnter(e) {
  $(this).addClass('green')
}

function handleMouseLeave(e) {
  $(this).removeClass('green').addClass(btnState)
}

function handleClick(e) {
  // if the buttons click state is default/red, remove classes and add blue
  if (btnState == 'default' || btnState == 'red') {
    btnState = 'blue'
    // add green into removeClass if you want green to imediately disappear
    // even though you have to be hovered to click the btn
    $(this).removeClass('red').addClass('blue')
  }
  // if last click state was blue, remove classes and add red
  else if (btnState == 'blue') {
    btnState = 'red'
    // here too!
    $(this).removeClass('blue').addClass('red')
  }
}
