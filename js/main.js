
//LOGIN FORM
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


(function($) {
	
$(function() {

var	$window = $(window),
$body = $('body');



// Disable animations/transitions until the page has loaded.
$body.addClass('is-loading');

$window.on('load', function() {
window.setTimeout(function() {
$body.removeClass('is-loading');
}, 100);
});


// Forms.
var $form = $('form');
	
	
// Get the modal
var modal = document.getElementById('id01');



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// Auto-resizing textareas.
$form.find('textarea').each(function() {

var $this = $(this),
$wrapper = $('<div class="textarea-wrapper"></div>'),
$submits = $this.find('input[type="submit"]');

$this
.wrap($wrapper)
.attr('rows', 1)
.css('overflow', 'hidden')
.css('resize', 'none')
.on('keydown', function(event) {

if (event.keyCode == 13
&&	event.ctrlKey) {

event.preventDefault();
event.stopPropagation();

$(this).blur();

}

})
.on('blur focus', function() {
$this.val($.trim($this.val()));
})
.on('input blur focus --init', function() {

$wrapper
.css('height', $this.height());

$this
.css('height', 'auto')
.css('height', $this.prop('scrollHeight') + 'px');

})
.on('keyup', function(event) {

if (event.keyCode == 9)
$this
	.select();

})
.triggerHandler('--init');

});




// // Fix: Placeholder polyfill.
// $form.placeholder();




// Menu.
var $menu = $('#menu');

$menu.wrapInner('<div class="inner"></div>');

$menu._locked = false;

$menu._lock = function() {

if ($menu._locked)
return false;

$menu._locked = true;

window.setTimeout(function() {
$menu._locked = false;
}, 350);

return true;

};

$menu._show = function() {

if ($menu._lock())
$body.addClass('is-menu-visible');

};

$menu._hide = function() {

if ($menu._lock())
$body.removeClass('is-menu-visible');

};

$menu._toggle = function() {

if ($menu._lock())
$body.toggleClass('is-menu-visible');

};

$menu
.appendTo($body)
.on('click', function(event) {
event.stopPropagation();
})
.on('click', 'a', function(event) {

var href = $(this).attr('href');

event.preventDefault();
event.stopPropagation();

// Hide.
$menu._hide();

// Redirect.
if (href == '#menu')
return;

window.setTimeout(function() {
window.location.href = href;
}, 350);

})
.append('<a class="close" href="#menu">Close</a>');

$body
.on('click', 'a[href="#menu"]', function(event) {

event.stopPropagation();
event.preventDefault();

// Toggle.
$menu._toggle();

})
.on('click', function(event) {

// Hide.
$menu._hide();

})
.on('keydown', function(event) {

// Hide on escape.
if (event.keyCode == 27)
$menu._hide();

});

});

})(jQuery);