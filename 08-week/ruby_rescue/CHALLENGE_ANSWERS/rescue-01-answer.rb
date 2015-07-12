a = 10
b = "hello"
begin 
  c= a + b
rescue
  puts "#{a.class} and #{b.class} can't be added together"
else
  puts "The result is #{a+b}"
end
