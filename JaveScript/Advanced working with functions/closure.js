// If a variable daclared a code block {...}, that variable only visible inside a block.
{
    // show message
    let message = "Pradeep";
    console.log(message);
  }
  
  {
    // show another message
    let message = "Alex";
    console.log(message);
  }
// ===========================================

// Nested Function

  function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    console.log("Hello, " + getFullName() );
    console.log("Bye, " + getFullName() );
  
  }
  sayHiBye("Peeps","Pandian")
