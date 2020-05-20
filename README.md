# Trip Advisor

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage
> Please run npm install in the project directory's root <br/> </br>
> Seeding the MySQL database
1. Prep <br/>
  1a. If your default MySQL user is 'root', <strong>and you do not have a password</strong>, proceed to Step 2 </br>
  1b. Please create a file called config.js in the root of this directory </br>
  1c. Add the following to the config.js file </br>
  ```
  module.exports.mysqlConfig = {
    host: 'localhost',
    user: [Add your MySQL username here as a string],
    password: [Add your MySQL password here as a string],
    database: 'tripAdvisorGallery'
  };
  ```
  1d. Create database
  ```
  mysql -u root -p < schema.sql
  ```
2. In the root directory, copy / paste the following command: npm run seed

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

