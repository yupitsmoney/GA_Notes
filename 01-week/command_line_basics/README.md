![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")

#Command Line


	Look Ma! No Mouse!

####Introduction
The UNIX operating system was originally created at Bell Labs (AT&T) by Ken Thompson and Dennis Ritchie in 1969. It was released to the public in 1975. Apple Computer transitioned its origianal home grown operating system over to a BSD variant of UNIX in 2000 know as OSX. In 2007 OSX became a certified UNIX.

What are UNIX machines and why does it matter?

Workstation machines and Super computers run Linux (a cloned version of Unix). It's built to be more robust, reliable and powerful. It's not built for the masses its built for systems that need to NOT FAIL.

[Take a peek at the top 500 super computers in the world. Click the "SYSTEM" name for any of the top ten](http://www.top500.org/lists/2014/11/)

`You won't find Windows.`

<br>

	Most of the internets servers run a variant of UNIX called Linux. Many of the commands you will learn here are available on these other systems.


####Command Line Basics

We will be covering some unix commands that you will be using most of your time here in class. We will also learn some other usefull commands, some tools and some neat tricks!

####Objectives

	- change into a directory
	- use cd .. to navigate up a tree
	- make a directory
	- remove a directory
	- list directory contents (horizontal & vertical)
	- create a file with "touch"
	- move files
	- delete files
	- how to get help (manpages)


######THE MOST IMPORTANT COMMANDS WE WILL COVER

* cd and cd ..
* mkdir --- make directory
* rmdir --- remove a directory
* rm --- remove a file (and why rm -rf * is hot so don't touch it)
* mv --- move a file from A to B
* ls --- list all elements of directory
* touch --- create a file
* pwd --- (where the heck are we?)
* history --- (and the up arrow)
* sudo


####Activity
Pair up and practice.

---

######GOOD TRICKS/TIPS

* clear the screen (cmd +k)
* remap caps lock to ctrl
* open [file]
* open .
* subl . (open all the files in sublime - we will do this A LOT)
 
	Check this link out for instructions: [sublime text command line tool](https://www.sublimetext.com/docs/2/osx_command_line.html)

* command+f to find a thing
* option + arrows skips to the beginning and end of command words

######TOOLS

	tree - use tree to display conents of working directory and all children directories (a snapshot of "where" you are)
	
	'brew install tree'

	iterm2
	
	[This is an enhanced terminal tool download it here](http://www.iterm2.com/#/section/home) 


######EVEN MORE COMMANDS

* man --- learn about a command---man [name_of_command]
* top --- display running proccess and information (it's just cool)
* ps --- see all running processes with ids
* kill --- kill [id number]
* find --- Search for files
	* `find /Users -name "test.txt"`
* mdfind --- cooler than regular find --- mdfind [fileName]
* cal --- displays a calendar
* date --- the date-nuf said
* pushd --- similar to cd, saves working directory to a stack for quick access
* popd --- return to the last directory in your 'pushd' stack

##Your Turn!

* Make a new directory called `dresser`
* Navigate into the dresser directory (hint use `pwd` to see where you are)
* Touch the following files (they do not need an file-type extension):
	* `green_socks`
	* `blue_socks`
	* `red_shirt`
	* `orange_shirt`
* Create two new folders:
	* `sock_drawer`
	* `shirt_drawer`
* Move all the socks to the sock_drawer and all the shirts to the shirt_drawer
* You just decided you don't like the way you look in orange. Remove the orange_shirt from your dresser.