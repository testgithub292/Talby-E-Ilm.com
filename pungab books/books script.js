/* top screen btn script start -------------------------------------------------
-------------------------------------------------------------------------------------
-----------------------------------------------------------------------------*/

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
  
 

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



/* top screen btn script end -------------------------------------------------
-------------------------------------------------------------------------------------
-----------------------------------------------------------------------------*/

/*-----------search bar start---------------------------------------
----------------------------------------------------------------------------
-------------------------------------------------------------------*/

//search bar code
/*$("#txtsearch").keyup(function () {
  var typevalue = $(this).val();
  $("tbody tr").each(function () {
      if ($(this).text().search(new RegExp(typevalue, "i")) < 0) {
          $(this).fadeOut();
      }
      else {
          $(this).show();
      }
  })
});*/


$(document).ready(function() {
  $("#txtsearch").keyup(function() {
      var typevalue = $(this).val().toLowerCase();
      $("#book-list li").each(function() {
          var listItemText = $(this).text().toLowerCase();
          if (listItemText.search(typevalue) < 0) {
              $(this).fadeOut();
          } else {
              $(this).show();
          }
      });
  });
});

