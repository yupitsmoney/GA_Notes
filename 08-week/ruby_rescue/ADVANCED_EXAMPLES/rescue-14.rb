require 'open-uri'
require 'timeout'

# Get user to enter a URL:
puts "Enter a url: "
urlspec = gets

# Open the URL and read the lines
my_max_retries = 5
my_try_count = 0
web_contents = ""

begin
  my_try_count = my_try_count + 1
  Timeout.timeout(3) do
    puts "Getting site with timeout of 3"
    web_contents  = open(urlspec)
  end
rescue Timeout::Error => e
  if my_try_count < my_max_retries
    puts "Timed out on attempt #{my_try_count}. Retrying... "
    sleep 1
    retry
  else
    puts
    puts "FAILED: Timed out on attempt #{my_try_count}."
    puts "URL: " + urlspec + "."
    puts "Internal error report: #{e}"
    puts 
  end 
rescue OpenURI::HTTPError => e
  msg = e.io
  puts
  puts "FAILED: Retrieval error."
  puts "URL: " + urlspec + "."
  puts "Internal error report: #{e}"
  puts msg
  puts   
rescue StandardError=>e
  puts
  puts "FAILED General error."
  puts "URL: " + urlspec + "."
  puts "Internal error report: #{e}"
  puts
else
  puts "SUCCESS: retrieved site - ready to output lines:"
  puts "retrieved site - ready to output lines:"
  web_contents.each_line do |line|
    puts line
  end
ensure
    puts
    puts "This program has completed"
end
