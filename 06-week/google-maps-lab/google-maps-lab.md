# Google Maps API - Lab
---

## Learning Objective
- Practice thinking through a problem and researching answers
- Be able to use the Google Maps JavaScript library in your projects

## Roadmap
- Intro to Google Maps JavaScript API
- Build an extreme MVP web app using the Google Maps API
- The client wants what?
- Bonus features

### Intro to Google Maps JavaScript API

In today's lab, you will build an app that uses Google Maps JavaScript API to show markers you create by clicking on a Google map.

You will find Google Maps shockingly easy to work with and you can easily create your first app by following these steps in the [Docs for Google Maps](https://developers.google.com/maps/).

As the docs will point out, the use of an _API Key_ is optional, but a best practice...

### Build an extreme MVP web app using the Google Maps API

This lab is designed to give you practice with breaking a problem into steps and writing code to accomplish those steps.  It will provide you with the opportunity to use both your JavaScript and Rails skillset. It will also require you to use documentation that's readily available.  When completing this lab, feel free to collaborate with your fellow developers.

Imagine that you've just landed you first web development gig and your Project Manager asks you to develop an app that has these requirements:

  - The web app will need to display a single page that shows a Google Map in 100% of the browser's window's area immediately upon loading.
  - The web app will use a Rails server as the backend.
  - This MVP version of the app will not persist any markers, therefore the map will be empty upon loading.
  - When a user clicks on the map, place a marker in that location on the map.

### The client wants what?

The client now insists that all markers be persisted so that if the page is refreshed or the next time the site is visited, previously added markers will be shown on the map - darn those crazy clients!

To help get you started with adding this functionality, here are some things that your app will now require:

  - Your JavaScript to make an AJAX post to your server that includes the marker data when a user clicks to add a marker. Hint, Rails apps automatically include jQuery and here's a relevant section of [jQuery's documentation](http://api.jquery.com/jQuery.ajax/).
  - A Rails model to represent markers.
  - A Rails route that will accept the AJAX post sent from the browser.
  - A Rails controller that includes an action that the route maps to.  Your action method will have to add a new marker to your database and then _render_ an appropriate _response code_ [this Rails doc lists standard response codes](http://guides.rubyonrails.org/layouts_and_rendering.html). In other words, the AJAX request, that your controller will handle, will simply expect a header with a status code returned, not a view!

Now, get to work!

### Bonus features

  - Overlay a button near the bottom right corner that when clicked removes all markers from the database and map.
  - Overlay a button near the bottom left corner that removes the most recently added marker from the database and map each time it's clicked.
  - Use a cool custom style from [SNAZZY MAPS](https://snazzymaps.com/) to style your map by adding a `styles` key to the `mapOptions` object.
  - Use a custom icon for the markers.
