##Rails commands cheat sheet

The most common `rails` commands:

* `new` [APP-PATH] Create a new Rails application. "rails new my_app" creates a
             new application called MyApp in "./my_app". This command requires an argument of app path (which you might as well consider to be the app name) `rails new APP_PATH` [options]
	* `-d`, [--database=DATABASE] # If not specified, default will be sqlite3. Preconfigure for selected database (options: mysql/oracle/postgresql/sqlite3/frontbase/ibm_db/sqlserver/jdbcmysql/jdbcsqlite3/jdbcpostgresql/jdbc)
	* `-T`, [--skip-test-unit], [--no-skip-test-unit]          # Skip Test::Unit files
	* `-h`, [--help], [--no-help]        # Show help message
	* `-v`, [--version], [--no-version]  # Show Rails version number

* `generate`    Generate new code (short-cut alias: "g")
	* `model` generates a new model. Always use singular naming convention for your model.
	* `controller` generates a new controller. Always use plural naming convention for controllers.
	* `helper` 
	* `mailer`
	* `migration`
	* `scaffold` good learning tool to experiment with, but try holding off on this for as long as possible. It will do lots of stuff that you don't understand. 
 
* `console`     Start the Rails console (short-cut alias: "c")
 
* `server`      Start the Rails server (short-cut alias: "s") 
 
* `dbconsole`   Start a console for the database specified in config/database.yml
             (short-cut alias: "db")

* `destroy`      Undo code generated with "generate" (short-cut alias: "d")
 
 ---
 
 The most common rake commands are:
 
* `rake routes` shows a list of all available routes
* `rake db:migrate` runs all db migrations that follow the current schema version number
* `rake db:seed` runs the seed file and populates our database with seed records (if there are any)
* `rake db:create` not necessary for sqlite3, however it is essential for postgres. 
* `rake db:drop` drops the current db

---
You will also need to bundle install your gems:

* `bundle install` you can also just run `bundle` as the default `bundle` command is `bundle install` # there is no difference. 






beans = Bean.create([
    {name: "Mer's Mellow Roast", roast: "medium", origin: "Colombia", quantity: 100},
    {name: "David's Dangerous Blend", roast: "hella strong", origin: "Los Angeles", quantity: 101}
  ])



