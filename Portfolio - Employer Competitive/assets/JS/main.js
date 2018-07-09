//Add on Click Events for each page
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });

  // Or with jQuery

  $('.dropdown-trigger').dropdown();

  
  var instance = M.Dropdown.getInstance(elem);

  /* jQuery Method Calls
    You can still use the old jQuery plugin method calls.
    But you won't be able to access instance properties.

    $('.dropdown-trigger').dropdown('methodName');
    $('.dropdown-trigger').dropdown('methodName', paramName);
  */

 instance.open();

 instance.close();
 instance.recalculateDimensions();
 instance.destroy();