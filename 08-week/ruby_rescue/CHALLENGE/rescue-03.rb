require 'open-uri'

# Two example URLs – one that'll work, one that won't
# url = "http://dribbble.com/"
url = "iamnotarealdomain"

# Open the URL and read the lines
web_contents  = open(url)
web_contents.each_line do |line|
  puts line
end 