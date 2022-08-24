# Getting Started with Create React App

### Install Deps

`npm i` to install all the dependancies. Including react, remirror and other plugins.

### Start Application 

`npm run start` to start the application. it will start application on `http://localhost:3000` . 

### Current working status

In the editor if you press any key will start searching for it. Try typing `M` and it will give you list for same. Even pressing space will trigger the auto complete. Current regex in `app.tsx` file is pointed to search for any space value. `LN17`


## What is not working?

Above thing work without any issue if write something like `MAX ( MIN ( ROUND ( 10 ) ))` for example. But if you try to write something without space `MAX(MIN(ROUND(10)))` here auto complete totally break. 

## How it might fixed?
This might be regex issue. Changing `LN17` migth do the trick. Regex should including all posibility that might come in equations and still trigger the auto-complete. 


