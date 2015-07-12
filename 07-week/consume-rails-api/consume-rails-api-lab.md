# Consume Your Hippo API - LAB
---

### Learning Objectives
- Practice building a Rails app from scratch that uses an API as its data source.

### Lab
---

#### Context

Thus far in class, you've ridden the Rails to create several web applications with varying CRUD capability. You've also accessed data available from public APIs, such as Rotten Tomatoes, with the HTTParty gem.

One of Project 3's core requirements is to expose your application's key data via a REST API. Earlier today, you created your very own API application that provides data about Hippos for sale to any client application that uses the REST methodology. Your API is fully CRUD capable, meaning that it also provides outside applications with the ability to update and delete those Hippos.

In this lab, you will practice your Rails skills by creating a a Rails application that, at a minimum, consumes the Hippo API you created.  The bonus and challenge specifications will increase your application's functionality to full CRUD capability and beyond.

#### Hippo Inventory MVP Requirements

Your Hippo Inventory application should:

- Display an _index_ page with each Hippo's name, price and a link to the details page (_show_ action).
- Provide a Hippo details page that also displays the hippo's weight and age in addition to its name and price.  Also on this page, show a link to return to the _index_ page.

#### Running Both Applications Simultaneously

Remember, the data API application and consuming application are typically completely different applications running on different devices.

Note: However, this will not be the case with your Project 3 as it will combine its data service API capability into the main application.

Because we're going to be running two distinct apps simultaneously, both requiring a Rails server, we need to run one or the other on a different port to prevent "A server is already running" error from occurring. As you know, the default port is 3000. This is how you would start another Rails server on port 3001:

```
? rails s -p 3001
```

__Don't forget to use the correct URL for accessing your API with HTTParty that includes the port number of the server serving your API app.__

#### Hints

- This application will not be persisting or manipulating __its own__ data. Therefore, a database is not necessary; nor are models. This is how you can create a new Rails app without a database:<br>

  ```
  ? rails new hippo_inventory -T -O
  ```

- HTTParty will be returning JSON to your controller from your API. You will want to parse it into either an array of hashes (for the _index_ action) or a hash (for the _show_ action) before assigning it to an instance variable for your view.

#### Demo Time

The final 5 to 10 minutes of this module will be reserved for volunteers to demo what they've built.

#### Bonus Specifications
- Provide the ability to edit any of the hippo's data, except the hippo's name.  Add an "edit" link to the _show_ page.
- Provide the ability to permanently remove a hippo. Add a "delete" link to the _show_ page.

##### Hints for the above Bonus Specifications
- Using a partial view shared between the new and edit views will make your code more DRY.
- Remember, you will not have models in which to base your _form_for_ helpers on

#### Challenges
- Provide the ability to sort on any of the data fields.
- Provide search/filtering capability.