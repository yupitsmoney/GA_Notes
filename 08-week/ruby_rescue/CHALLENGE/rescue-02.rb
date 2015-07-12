require 'open-uri'

# Two example URLs – one that'll work, one that won't
url = "http://www.theleagueofmoveabletype.com"
# url = "iamnotarealdomain"
# Switch the comment around and then try it again

# Open the URL and read the lines
web_contents  = open(url)
web_contents.each_line do |line|
  puts line
end 