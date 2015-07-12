![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")

#Rails Helper Methods

###Objectives
You will be able to...

* Understand helper methods
* Call several different default helper methods
* Describe how to create a new helper method

####Form Helpers

Hey guys ... remember this?

```ruby
<%= form_tag('/home') do %>
  <%= text_field_tag 'input_id' %><br />
  <%= text_area_tag 'input_textarea' %><br />
  <%= submit_tag 'Save' %>
<% end %>
```

Did you know that the above code produces the same output as the code below?

```html
<form accept-charset="UTF-8" action="/home" method="post"><div style="display:none"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+MVio5GxpTTvIbikRzvaJiPJJfCqFcIRfnhWEVoX8Dk=" /></div>
  <input id="input_id" name="input_id" type="text" /><br />
  <textarea id="input_textarea" name="input_textarea">
</textarea><br />
  <input name="commit" type="submit" value="Save" />
</form>
```

####Pretty cool right?
But how does this happen? Is this just some magical shortcut that came into being by accident? 

![](http://gifrific.com/wp-content/uploads/2012/09/Kanye-West-Shaking-Head-No.gif)

####These are actually helper methods that the creators of rails made for us with their hard working, carple-tunnel inflicted hands.

Helper methods are pre-written ruby methods that can be called anywhere in our rails app. They help us with a lot of functionality and keep our code writing to a MINIMUM.

####This means less work for you!

![](https://31.media.tumblr.com/3840e4ad775110be9d1e8a8de6780519/tumblr_inline_n2wyhzJXN81qe4ieh.gif)

###Let's look at some more.

* Form helpers
* Link Helpers
* Number Helpers
* Date Helpers
* Tag Helpers
* Text Helpers
* Route Helpers

#Rails Helpers

##Step 1
In our `views>home>index.html`:

###Some fun default helper examples:

```html

<!-- STEP 1 First, let's take a look at some built-in helpers -->
	
<h1>View Helpers In Rails</h1>

<strong>Number to human: </strong>
<%= number_to_human(237654432) %><br>
	
<strong>Number to phone: </strong>
<%= number_to_phone(1235551234) %><br>
	
<strong>Number with delimiter:</strong> 
<%= number_with_delimiter(123429380750384755678) %><br>
	
<strong>Highlight: </strong>
<%= highlight('You searched for: ruby, rails, dhh', 'ruby') %><br>
	
<strong>Pluralize:</strong> 
<%= pluralize(3, 'matrix') %><br>

<h2>Link Helpers</h2>
<%= link_to "Go Home", root_path %>
<!-- <a href="/">Go Home</a> -->

<%= link_to 'Google', 'http://google.co.uk', data: { confirm: 'Are you sure?' } %>
<!-- <a data-confirm="Are you sure?" href="http://google.co.uk">Google</a> -->

<h2>Form Helpers</h2>
<%= form_tag('/home') do %>
  <%= text_field_tag 'input_id' %><br />
  <%= text_area_tag 'input_textarea' %><br />
  <%= submit_tag 'Save' %>
<% end %>
<!-- <form accept-charset="UTF-8" action="/home" method="post"><div style="display:none"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+MVio5GxpTTvIbikRzvaJiPJJfCqFcIRfnhWEVoX8Dk=" /></div>
  <input id="input_id" name="input_id" type="text" /><br />
  <textarea id="input_textarea" name="input_textarea">
</textarea><br />
  <input name="commit" type="submit" value="Save" />
</form> -->

<h2>Number Helpers</h2>
<%= number_to_currency(1234567890.50) %>
<!-- £1,234,567,890.50 -->

<%= number_to_human(1234) %>
<!-- "1.23 Thousand" -->

<%= number_to_human(12345) %>                          
<!-- "12.3 Thousand" -->

<%= number_to_human(1234567) %>
<!-- "1.23 Million" -->

<%= number_to_human(1234567890) %>
<!-- "1.23 Billion" -->

<%= number_to_human(1234567890123) %>
<!-- "1.23 Trillion" -->

<%= number_to_human(1234567890123456) %>
<!-- "1.23 Quadrillion" -->

<%= number_to_human(1234567890123456789) %>
<!-- "1230 Quadrillion" -->

<%= number_to_human(489939, :precision => 2) %>
<!-- "490 Thousand" -->

<%= number_to_human_size(1234567890) %>
<!-- "1.15 GB" -->

<h2>Date Helpers</h2>
<% from_time = Time.now %>
<%= distance_of_time_in_words(from_time, from_time + 50.minutes) %>
<!-- "about 1 hour" -->

<h2>Text Helpers</h2>
<%= pluralize(1, 'person') %>
<!-- "1 person" -->

<%= pluralize(2, 'person') %>
<!-- "2 people" -->

<%= pluralize(3, 'person', 'users') %>
<!-- "3 users" -->

<%= truncate("A long time ago, in a Galaxy far, far away.") %>
<!-- A long time ago, in a Galax... -->

<%= truncate("A long time ago, in a Galaxy far, far away.", separator: ' ') %> 
<!-- A long time ago, in a... -->

<h2>Tag Helpers</h2>
<%= tag("br") %>
<!-- <br /> -->

<%= tag("div", :data => {:name => 'Stephen', :city_state => %w(Chicago IL)}) %>
<!-- <div data-city-state="[&quot;Chicago&quot;,&quot;IL&quot;]" data-name="Stephen" /> -->

<%= tag("input", :type => 'text', :disabled => true) %>
<!-- <input disabled="disabled" type="text" /> -->

<%= tag("input", {:type => 'text', :disabled => true}) %>
<!-- <input disabled="disabled" type="text" /> -->

<%= content_tag(:div, "Hello world!") %>
<!-- <div>Hello world!</div> -->

<%= content_tag :div, :class => "strong" do %>
  Hello world!
<% end %>
<!-- <div class="strong">
 Hello world!
</div> -->
```
##Step 2

```html
	<!-- STEP 2 - Now, let's take a look at a familiar built-in helper... a link_to! -->
	<%= link_to('GO BACK HOME!!', root_path) %>
```

##Step 3
**Lets build some really simple custom helpers**

Remember this method from the list above?

```html
<h2>Date Helpers</h2>
<% from_time = Time.now %>
<%= distance_of_time_in_words(from_time, from_time + 50.minutes) %>
<!-- "about 1 hour" -->

```
What if we wanted to display an amount of time in using more common phrasing. I'm speaking of course of `ish`.
ex: how long will this lesson take? "1 hour ish"

In our app>helpers>home_helper.rb

```ruby
	def distance_of_time_in_ish(start, finish)
		x = distance_of_time_in_words(start, finish)
		str = x.gsub("about ", "")
		str = str + " ish"
	end
```

Now lets call our custom helper in the home>index.html.erb:

```html
<% from_time = Time.now %>
<%= distance_of_time_in_ish(from_time, from_time + 50.minutes) %>
<!-- "1 hour ish" -->
```

Back in our app>helpers>home_helper.rb

```ruby
	def uni_pic
			image_tag('http://images5.fanpop.com/image/forum/162000/162603_1328106458654_full.jpg')
	end
```
Now lets call our custom helper in the home>index.html.erb:


```html
	<br>
	<!-- Pull in our "uni_pic" custom helper here. -->
	<%= uni_pic %>
	<br>
```

##Step 4
Now let build another simple helper that capitalizes a word!

In our home_helper.rb:

```ruby
	def capitalize(word)
	  word.upcase
	end
```

Now lets add our helper to the view:
`home>index.html.erb`

```ruby
<h1><%= capitalize('This is our unicorn themed Rails helpers lesson! ommmmmggg.') %></h1><br>
```


##Step 5
Now lets build a simple custom helper that adds 'icorn' to a name.

in `app>helpers>application_helper.rb`:

```ruby
	def uni_er(name)
	  name + 'icorn'
	end
```


now lets add our helper to the view: `home>index.html.erb`

```html
	<!-- STEP 5 & 6- Buils a simple custom helper -->
	<!-- Pull in our custom helper with the name of "uni_er" here. -->
	<h1><%= uni_er('Jeff') %></h1>
	<h1><%= uni_er('Matt') %></h1>
	<h1><%= uni_er('Mike') %></h1>
```


##Step 6
But wait... some of the names have too many vowels in them!

Now lets build a really simple custom helper that can fix that.

in `app>helpers>application_helper.rb`:

```ruby
	def uni_er(name)
	
		if name[-1] == 'y' || name[-1] == 'e'
			name.chop + 'icorn'
		else
			name + 'icorn'
		end
	end
```

<br>
#Now Let's talk about named routes

Setting up resources
add this to your routes.rb

```ruby
resources :home
```

What does that create?

**Let's alias it!**

```ruby
resources :home, as: :hippo
```

How did this change our routes?

What if we don't need all of those routes?

**Let's Specify it!**

```ruby
resources :home, only: [:show, :edit, :update, :destroy]
```
Awesome!

Here is an example of a custom name for an individual route

```ruby
get 'home' => 'home#index', as: :landing
```

To call that route in your views you would simply need to write...

```html
<%= link_to "Home", landing_path %>
```

<br>
###and...
##that's a wrap!
![](http://i.imgur.com/dCGKCqa.gif)
