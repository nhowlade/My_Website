// if hover -> display txt
function displayTxt(evt) {
    const x = document.querySelector('.intro_element-textbox');
    x.classList.remove('hide');
}
// if leave -> hide txt
function removeTxt(evt) {
    document.querySelector( '.intro_element-textbox' ).classList.add( 'hide' );
}

/* mouseover and mouseout events to `.wrapper` element */
var $wrapper = document.querySelector( '.intro_element-img-image-guelph' );
$wrapper.addEventListener( 'mouseover', displayTxt );
$wrapper.addEventListener( 'mouseout', removeTxt );