## Branch Descriptions:

**main** - Keeps the most stable version of the app/
        all stable changes that were reviewed should be merged with this branch.

**localStorageSave** - Substitutes database from Google Firebase to Browser's local storage to keep the infomration of user local to the device of user.
                - adds Event listener for Enter key to add elemetns to the list
                - adds push() and remove() functions to push item to local storage and remove item from local storage


**noodlesEasterEgg** - Adds new Easter Egg: when user enters the word "noodles" (case insensetive) the main image on the home display changes to the noodles related image.
                + adds if condition to process user input for "noodles" keyword (ignores letter case)

**upd001** - adds branchlog markdown-type file to keep track of updates and issues history.
                + markdown file "branchlog" added to the file system

### TEMPLATE
**[branch name]** - [branch description]
                + [code/function modifications]

[Markdown Cheet Sheet Reference](https://www.markdownguide.org/cheat-sheet/)
