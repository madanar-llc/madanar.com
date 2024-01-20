/*scripts.js
For use @ Madanar.com and nowhere else
Copyright Madanar 2024 - Written by Futuza
*/

$(document).ready(function()
{
    
    if($('body').is("#IndexPage"))
    {
        /*if window width is too small, resize button*/
        if ( ($(window).width() < 480))
        {
            $("#madblue").text("View Products");
        }
    }
});

window.onload = function()
{
    if($('body').is("#IndexPage"))
    {
        /*resize button after loading all content if too small*/
        if ( ($(window).width() < 480)) 
        {
            $("#madblue").text("View Products");
        }
    }
}

$(window).resize(function() 
{
    
    if($('body').is("#IndexPage"))
    {
        /*when window is resized, resize button as appropriate*/
        if ($(window).width() < 480)
        {
            $("#madblue").text("View Products");
        }

        if ($(window).width() > 480 )
        {
            $("#madblue").text("View our products on Amazon");
        }
    }
});