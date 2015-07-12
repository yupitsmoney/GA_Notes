![](http://cdn.meme.am/instances/500x/55256315.jpg)



###Open up the file fun_with_dev_tools/index.html

####Content

1. Right click on our header, and click **inspect element**.
2. Change the text of our header so that it reads "My boxes in order"
3. Add the class of "box" to the object with the text **Box 3**
4. Created a fifth box with the same class and h1 content as the others, type **Box 4** into the h1.
5. Drag the box elements to the correct order so that they are counting up from 1 to 5.
6. Delete **Box 5**

####Style

1. Click inspect on one of the boxes. In the styling sidebar, turn off the style attribute **font-family:** to remove *"OpenSansRegular", Helvetica, Arial, sans-serif* from the boxes
2. Add **display: inline-block** to the boxes.
3. Select the box titled **Box 1** and give it a border of *5px dashed gray* (remember to only make the changes to this element using element.style)

####Source

1. Select our header again and look in the styles sidebar.
2. Click on the **style.css** link beside #header
3. Add a border *5px dotted gray* to the header.
4. Notice the * (star) by the filename? This means that you have made changes and they are ready to save. Type *command + s* to save.
5. Right click within that file and open up *local modifications*
6.  Click on the arrow next to the timestamp. You should see the changes that we just made. Click **apply original content** and see it return to original. Also notice how a new change/timestamp has been created to mark a revision for us applying our original content. Alternatively, if we made several changes the *revert* button will return all changes back to original state.

####Console

1. Notice the error in the console. Click the arrow to see exactly which file is causing the error.
2. Create a new variable called **title** the shortcut $( ) selector to select our object with the id header and assign it to our variable.
3. Using javascript, align the text of **title** to the center.
4. Using javascript, add a new class to *title* called "cloudy".
5. Call our premade function named **skyify**
6. Use *inspect()* with the selector shortcut *$( )* to select the element class **box**. This should highlight the first instance of *box* inside of our element.
7. Add the class **cloudy** to the selected box.
8. Run our function **skyify** again. 