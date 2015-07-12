#HTTParty Time!

 

##Learning Objectives

* Gain a deeper understanding of APIs, by working with another API.
* Connect your rails app to an API and get useful data back. 
* Work with an API Response and pick out information to use in your app.

## Road Map
1. Rotten Tomatoes API
2. HTTParty - work with JSON 
3. `rails new` and display the API info on a webpage
4. Lab Time!

## Part 1 (browser)
* http://developer.rottentomatoes.com/docs
* Create an account
* Register for an API key
* Try the URL in the browser
 	http://api.rottentomatoes.com/api/public/v1.0/movies/770672122.json?apikey=[your_api_key]
* Use JSON view (chrome extension) 
* What kind of data are we getting?

## Part 2 (rails c)
* Add gem ‘httparty’ to Gemfile ```gem 'httparty', '0.11.0'``` (we are specifically going to use this version of HTTParty for the purpose of this lab)
* bundle
* go to the rails console
* ```response = HTTParty.get “http://api.rottentomatoes.com/api/public/v1.0/movies/770672122.json?apikey=[your_api_key]”```
* Working with the response hash

```ruby
response.each do | key, value |
puts key
puts value
end
```
* How do we get title?

```ruby
response[“title”]
```

* Getting to nested hashes
* Help! Tom Hanks needs to be saved!
```ruby
response[“x”][“y”]
```

## Part 3 (Show the info on the web page)
* ```rails new```
* ```rails g controller movies```
* Make an instance variable in the controller & convert JSON into hash JSON.parse:

```ruby
uri =  HTTParty.get"http://api.rottentomatoes.com/api/public/v1.0/movies/770672122.json?apikey=a4ydrcy7u5sfwjjtvt2ebkxu"
    @response = JSON.parse(uri.body)
```

* Loop through response in index.html.erb
* Format this data and make it pretty!

##Lab Time!
#####Research an API of your choice, and try and get some data from that API via HTTParty
###Bonus Challenge
#####Use this starter code below to try and search off of the Rotten Tomatoes API:
```html
<h1>Search</h1>
<%= form_tag movies_path, :method => 'get' do %>
    <%= text_field_tag :response, params[:response] %>
    <%= submit_tag "Search", :name => nil %>
<% end %>
<br>
Not sure which movie you want? Try <%= link_to "Cars" , movies_path(response: "cars") %>
```




 