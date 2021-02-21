
# Gallery
### How to run this project

To run project on your localhost, follow the steps below :

### `Installing npm`

If you dont have Node.js and node package manages also known as 'npm', you'll need to install it first.
You can do it by download it from [official website](https://nodejs.org/en/download/) and installing it on your machine.

To check if everything is working properly, you can open command prompt and type in `npm -v` and `node -v`.

### `step 1`

Clone this repository

### `step 2`

Open command prompt and run `cd replace-with-path-to-the-project-folder` command.
(example `cd C:/Users/user/desktop/project-folder/`)

Path to the folder now should be shown before your input marker.
Enter `npm install .` in the command prompt and hit Enter. This should install all modules this project is dependent on.

### `step 3`

When dependencies are installed, you can run `npm start` command.
Local server will set up, and browser tab with the localhost:port link opened.

### `step 4`

Open another command prompt and run `cd C:/replace-with-path-to-the-project-folder/srv` command.
(example `cd C:/Users/user/desktop/project-folder/srv`)

Type `node index` command to start API server from which we will fetch data.

Refresh the page in the browser which opened during step 3.
You can use the app now.

