class Shelter

	attr_accessor :name, :location, :animals, :clients

	def initialize(name,location)
		@name = name
		@location = location
		@animals = {}
		@clients = {}
	end

	def to_s
		"#{@name} shelter at #{@location} has #{@animals.length} animals and #{@clients.length} people"
	end

	def client_count
		@clients.length
	end

	def animal_count
		@animals.length
	end

	def display_animals
		@animals.each { |k, v| puts k }
	end

	def display_clients
		@clients.each { |k, v| puts k }
	end

	def give_away_animal(animal_name)
		@animals.delete(animal_name)
	end

	def accept_animal(name,description="an animal")
		@animals[name] = description
	end

	def accept_client(name,description="a client")
		@clients[name] = description
	end


end