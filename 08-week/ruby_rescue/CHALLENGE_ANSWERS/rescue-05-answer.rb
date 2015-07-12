# A method to check whether something is actually awesome or not. Some are obvious. 
# But it only works if you pass in an argument to check.

AWESOME_THINGS = ['cake', 'bowling', 'Keyan', 'coding', 'Ruby']

class String
  def awesome?
    if AWESOME_THINGS.include?(self)
      return "• #{self} is awesome"
    else
      raise StandardError, self
    end
  end
end

# Let's check to see if these things are awesome. 
# Start using rescues here to make sure they work no matter what.


begin
  puts "cake".awesome?
  puts "bowling".awesome?
  puts "Keyan".awesome?
  puts "coding".awesome?
  puts "Ruby".awesome?
  puts "Wordpress".awesome?
rescue StandardError => e
  puts "Uh-oh, #{e} is not awesome"
end
