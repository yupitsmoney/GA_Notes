# A method to check whether something is actually awesome or not. Some are obvious. 
# But it only works if you pass in an argument to check.

AWESOME_THINGS = ['cake', 'bowling', 'Keyan', 'coding', 'Ruby']

class NotAwesomeError < StandardError
end

class String
  def awesome?
    if AWESOME_THINGS.include?(self)
      return "• #{self} is awesome"
    else
      raise NotAwesomeError, self
    end
  end
end

# Let's check to see if these things are awesome. 
# Start using rescues here to make sure they work no matter what.

	puts "cake".awesome?
	puts "bowling".awesome?
	puts "Keyan".awesome?
	puts "coding".awesome?
	puts "Ruby".awesome?

begin
	puts "Wordpress".awesome?
rescue NotAwesomeError => e
  puts "Uhoh, '#{e}' is not awesome"
end
