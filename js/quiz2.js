// write jQuery or vanilla javascript to do the following:
//  - loop through the list items in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next bullet point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

  //Changed the formatting of this a little bit
  //Has same functionality!
  $(document).ready(function(){
    $(".links li a").click(function(e){
      e.preventDefault();
      alert('you clicked a link, good for you');
    });

   console.log("this is a message for you!!!");

   //Create an accordion
   $(".accordion-title-text").click(function(){
     $(this).next().slideToggle('slow');
     $(".accordion-content").next().slideUp('slow');
   });

   //Loops throught the list of items in ol and changes the text and color of the ol items
   $('ol li').addClass('red');
   $('ol li').text("This text is amazing");

  //Created a function that will be fired off and the html will fade
  $("#amazing-button").click(function(){
    $("body").fadeOut("slow", function(){
      $("body").replaceWith("Goodbye. Thanks for coming!");
    });
  });

  //This function makes me happy because I like big letters
  $("#secondarySection").click(function(){
    $("#secondarySection").addClass('big-font');
  });

  //Used js and html to make an accordion
});

