![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")

#How The Internet Works

##Objectives
	
	- Understand that the internet is simply a wire
	- Explain what a server is
	- Explain what a client is
	- Understand what a Internet Protocol (IP) address is
	- Illustrate how data travels through the internet 
	
##Roadmap

###What exactly is the internet?

	It is not a CLOUD!

	Basically if you connect two devices, you have a network. Let's say that that network connected with another network, now you have a system of INTERconnected NETworks (INTER-NET).
	
	The internet is simply a wire underground, and any two computers connected directly to this wire can communicate.

###History

	1957 - Sputnik 1 was sent to orbit, forcing the US to take action.
	
	1958 - US founded DARPA (Defense Advanced Research Project Agency). Initial concept of packet networking led DARPA to development ARPANET, which is the first network to use Transmission Control Protocol (TCP).
	
	1969 - Only 4 servers were live in the entire network. All of these were in the west-coast. (West-syde!)

	1972 - The first message was sent by Professor Leonard Kleinrock's laboratory at UCLA to Standford
	
	1973 - TCP started being replaced by IP (Internet Protocol) and by 1983 IP was being used web-wide
	
	1992 - Introduction of the World Wide Web
	
	1993 - Mosaic, the first web-broweser, changes the way we interacted with the web.
	
	1994 - Society reached the pinnacle as PizzaHut introduces Online-Ordering.
	

###Servers

	Also known as "Host Computers"

	Servers are special computers connected directly to the Internet. 

	Web pages are files on that hard-drive
	
	Domain names are simply aliases of the IP address
	
	
###Clients

	Your computer is a client. So is your tablet. They are connected through an Internet Service Provider (ISP)
		
###Routers

Routers exist where two or more parts of the Internet intersect. They direct the packets around the Internet. 
	
	
	Modems - Your modems and home wireless routers are the first step on your short but long internet journey. They connect you directly to your ISP.
	
	POPs - "Points of Presence" are local connection points owned by your ISP. They are usually windowless, climate-controlled buildings filled with computers.
	
	NAPs - "Network Accesss Points" are similar to POPs except larger. They are usually located in cities.

###Class Activity
***

	Explain to the person next to you the difference in client and server

###Emails

	When sending an email, the email gets sent through your ISP to the Internet and into the server (gmail, yahoo, aol, etc.). When the client visits the server, they can view the email

###Sending of information

	When an email, image, or webpage gets requested, the Internet breaks them down into smaller pieces called packets and sent. They are then reassembled to form what it was originally. 

So when you hear about bandwidth, its simply the data transfer rate (amount of data sent from point A to point B in a time period)

This is measured in bits per second (bps) / megabits per second (mbps) / gigabits per second (gbps)

###IP Address 

	Everything connected directly or indirectly to the Internet has an IP address! (servers, computers, cellphones)
	



Let's look at the world's first webpage:

###[The world's first webpage:](http://info.cern.ch/hypertext/WWW/TheProject.html)

###How to check if a site is alive

	ping http://info.cern.ch/hypertext/WWW/TheProject.html

###How to be a Browser

+ Given a domain name, a name server search is performed on the domain name to get the IP address:

		nslookup google.com

+ If there are several IP addresses associated with the domain, the name server chooses one at random and sends it to your browser.

+ We can see the name server sending a random IP by
	
		traceroute google.com

+ Now, the root resource is requested. Port 80 is the standard HTTP port. To obtain the HTML code, we send an HTTP request (GET / HTTP/1.1) to the IP address. Press Return twice after typing in the below:

		curl https://www.google.com

##Other Terminal Commands

###Domain Registration Registry Search

View the public registration information for a given domain name:

	whois generalassemb.ly

###Name Server Search
	
View all of the name server entries for a domain name (or subdomain+domain) by using dig. (A - IP address to route to. MX - Mail exchange server where to route emails.)

	dig generalassemb.ly any
	
	
###What is the future?

	Look around you. Your classmates and you are the future of the internet. (*No Pressure)
	
###Class Activity
***
Spend 5 minutes writing down what you learned today. Then share it with the person next to you!

###Questions

- What is the purpose of a router?
- How is information sent over the Internet?
- Does everything connected to the Internet (directly and indirectly) have an IP address?
- How are IPs linked to domain names?