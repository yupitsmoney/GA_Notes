# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Hero.create(name: "Squidman", identity: "Kevin Portugal", powers: "super accurate ink squirting", location: "Los Angeles", nemesis: "Jiro (who dreams of sushi)", weakness: "Sham-Wows", description: "righteous through and through")

Hero.create(name: "Hackerella", identity: "Val Ngai", powers: "slick encrypted password stealing", location: "Los Angeles", nemesis: "Grant Roy, Code Security Genius", weakness: "unreadable sloppy code", description: "nonchalant-chaotic")

Hero.create(name: "The Slow Clapper", identity: "Jamel Guerrero", powers: "super hypnotic slow clapping", location: "Los Angeles", nemesis: "Earless Joe", weakness: "mittens", description: "a necessary evil")

50.times do
  Hero.create(name: Superhero.name, identity: Superhero.alias, powers: Superhero.power, location: Faker::Address.city, nemesis: Superhero.nemesis, weakness: Superhero.weakness, description: Superhero.alignment)
end

Hero.create(name: "Ironing Board Man", identity: "Keyan Bagheri", powers: "super ironing board surfing", location: "Los Angeles", nemesis: "Pleated Pants Man", weakness: "wrinkled t-shirts", description: "sorta good")

Hero.create(name: "Jimbotron", identity: "Ruby Jim", powers: "creating awesome apps in a single bound", location: "Los Angeles", nemesis: "The Copy and Paste Crew", weakness: "blazing hot angular fire", description: "the best of the best")
