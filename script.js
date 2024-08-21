console.log( "this is portfolio website" )
console.log( '1:21:41' );

var tablinks = document.getElementsByClassName( "tab-links" )
var tabcontents = document.getElementsByClassName( "tab-contents" )

function opentab ( tabname ) {
    for ( tablink of tablinks ) {
        tablink.classList.remove( "active-link" );
    }

    for ( tabcontent of tabcontents ) {
        tabcontent.classList.remove( "active-tab" );
    }

    event.currentTarget.classList.add( "active-link" );
    document.getElementById( tabname ).classList.add( "active-tab" );
}

document.getElementById( "close" ).addEventListener( "click", () => {
    document.querySelector( "nav ul" ).style.right = -100 + "%";
    document.querySelector( "nav ul" ).style.transition = 1 + "s";
} )

document.getElementById( "open" ).addEventListener( "click", () => {
    document.querySelector( "nav ul" ).style.right = 0;
} )