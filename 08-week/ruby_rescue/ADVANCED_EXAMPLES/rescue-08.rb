require 'open-uri'

# Get user to enter a URL:
puts "Enter a url: "
urlspec = gets

# Open the URL and read the lines
begin
  web_contents  = open(urlspec)
rescue
  puts "Could not open " + urlspec
else
  web_contents.each_line do |line|
    puts line
  end 
end