// if hover -> display txt
function displayTxt(evt) {
    evt.currentTarget.parentNode.querySelector( '.intro_element-textbox' ).classList.remove( 'hide' );
}
// if leave -> hide txt
function removeTxt(evt) {
    evt.currentTarget.querySelector( '.intro_element-textbox' ).classList.add( 'hide' );
}

/* mouseover and mouseout events to `.wrapper` element */
var $wrapper = document.querySelector( '.intro_element-text' );
$wrapper.addEventListener( 'mouseover', displayTxt );
$wrapper.addEventListener( 'mouseout', removeTxt );