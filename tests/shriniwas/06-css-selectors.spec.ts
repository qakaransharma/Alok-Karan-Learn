/*
CSS: Cascading Style Sheet
It uni-directional: It allowed node traversal from parent to child only(Top to Bottom)

id: 
input[id="small-searchterms"]
input#small-searchterms

class:
input[class="search-box-text ui-autocomplete-input"]
input.search-box-text
input.search-box-text.ui-autocomplete-input
.search-box-text.ui-autocomplete-input

Parent To Child:
form[method="get"] > input[id="small-searchterms"]

nth child:
div[class="header-menu"] > ul:nth-child(1) > li:nth-child(2) > a

AND:
input[id="small-searchterms"][value="Search store"]

OR: 
input[id="small-searchterms"],[value="Search store"]

Contains:
input[id*='searchterms']

Starts with:
input[id^='small']

Ends With:
input[id$='searchterms']
*/