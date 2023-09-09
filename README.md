
################################################################################################################################
Developer side comments:
This is a basic web application which has only frint-end and no back-end.Back-end could not be done due to insufficient time and i need to learn how to integrate bacnk-end to frontend.This is my first application using react .The main page is where we display the blocks and for each block there will be a hash time stamp ,When we click on the hash it will open a pop up which will diplay the transaction of the block.Each transaction will display the sender and receiever when we click on the transaction no it will display more details about the transactions and it will close the previous pop up.Thus if we close the transaction popup it will go back to homepage.The data set of the blockchain has been taken in realtime from polygonscan.
We have used several things in our code but the main concept i have used is popup .Here, three pieces of state are declared using  useState hook. These states are used to check which block and transaction details are currently being displayed.selectedBlock stores the currently selected block for displaying its details.selectedTransaction stores the currently selected transaction for displaying its details.Whenever we click on the hash or transaction we check whether a previous popup is open and it if it open we will close it. The zIndex style is used to control which popup appears on top.

We displayed all the information in the form of tables to simplify the views and using CSS we were able to make it look better.
Components:

src/ - Contains the application source code.
Components/ - React components used in the application.(Mainly used for NAVBAR)
Styles/ - CSS styles for the application.(and all resources images,etc)
App.js - The main application component.
home.js - Includes the home page where everything is displayed


The conclusion from this website is as follows:
-Each Block has a number of transaction and a hash and each block is validated by someone.
-Each transaction in blockchain has a from and to ,Be it contract integration or sending or receiving crypto.There is always an from address and a to address.Each transactrion will require Gas fees no transaction can be done without giving gas fees.Gas is calculated in GWEI and is given as such in this website.For each transaction goes through a number of blocks to be validated.

References:
https://www.youtube.com/watch?v=QwarZBtFoFA
https://create-react-app.dev/
################################################################################################################################

USAGE:
Initially when we open it is home page and ther eis a navigation bar with 2 buttons home and about.
The about button will open a new link to /about.In the home we see block their corresponding timestamps and their hash .If we click the block no we get transactions for each block and a more detailed view of the block details like 
Hash: 0xc427322be277e0bcae3a5d1afe23d92f20d3a1734ea4d7691857b5bcefaf8ae2

Validated By: 0x83d69448f88bf9c701c1b93f43e1f753d39b2632

Block Reward: 0.3898850647584445

And then transactions will be displayed after this With 
Transaction Details
Transaction No: 0x745f5d32c6bccda040415a85e2526940804edec0611cb2845c5594d906af680f

From: 0x5ef4b21f14863d843108ee1d7598a40f89b521f4

To: 0xfcd60b2d8acbc3869cbe1ddcda60d0a92da2d4cb

Amount: 10.89

Blocks Recorded: 422

When we click close all the popups will be closed.
