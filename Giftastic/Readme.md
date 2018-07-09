## Description of Problem
Use the GIPHY API to make a dynamic web page that populates with gifs of your choice.

## How to Use
1. There are pre-populated categories.
2. User can click on those categories or go over to the input box and add topics by clicking on the button.
3. If user likes the gif, they can click on the "Click here to add to Favorites", in which that will save it to their local storage.


## How it was solved
First off, when looking at an API, it's important to look at the documentation. Once the documentation is understood, I created a dynamic query URL string that passed through an AJAX call to pull up 10 random gifs on the selected topic. Other than the API, used local storage, so that when the user refreshes the window, it is still saved. Furthermore, I used prepend to bring up to the top the latest favorite item selected. Other than that, assigned various attributes to create a still frame or to engage the gif.


## Technical Approach
1. Understand API Documentation
2. Draw a layout
3. Create HTML framewok
4. Add JavaScript functionality
5. Style it with CSS
