require 'open-uri'

# Get user to enter a URL:
puts "Enter a url: "
urlspec = gets

# Open the URL and read the lines
my_max_retries = 5
my_try_count = 0

begin
  my_try_count = my_try_count + 1
  web_contents  = open(urlspec)
rescue StandardError=>e
  if my_try_count < my_max_retries
    puts "Failed on attempt #{my_try_count}. Retrying... "
    sleep 1
    retry
  else
    puts "Failed on attempt #{my_try_count}. Process canceled. "
    puts ""
    puts "Error while trying to open " + urlspec + "."
    puts "Technical report: #{e}"
    # puts "Could not open " + urlspec
  end 
else
  web_contents.each_line do |line|
    puts line
  end 
ensure
  puts
  puts "This program has completed"
end
