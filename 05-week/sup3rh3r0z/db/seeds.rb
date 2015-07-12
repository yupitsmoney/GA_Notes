# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
superheros = Superhero.create ([{ name: 'superdaddy', immortal?: true, power_level: 22000, weakness: 'moms cookies', image_url: 'http://www.safeinthebitterroot.org/SAFE/wp-content/uploads/2014/06/superdad-1.jpg'}, {name: 'Turbo Hacker', immortal?: true, power_level: 823, weakness: 'Trojan Virus', image_url: 'http://i.kinja-img.com/gawker-media/image/upload/s--AQYxhA_l--/18hyfk3t3yfo7jpg.jpg'}, {name: 'Crazy cat lady', immortal?: false, power_level: 10, weakness: 'kids', image_url: 'http://cdn2.hellogiggles.com/wp-content/uploads/2014/06/10/simpsons_cat_lady_fox_thumb_560x392.jpg?123'}])