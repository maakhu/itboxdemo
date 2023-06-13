# itbox demo
## Implemented so far
currently the basic backend part is done, tested on local server:
  - SQL scripts for creating the database, tables and fill with random items
  - Node.js backend in JS
  - Express framework for API writing
  - Connection to database and queries:
    - list of all items at http://localhost:8080/cikktetelek
    - list one item by id at http://localhost:8080/cikktetelek/:id
    - return the number of items in rent on a given date, which was the query of the task. Reach at http://localhost:8080/berbeadottak/:date , in our case for the task it would be http://localhost:8080/berbeadottak/2014-12-31
    - other requests like post, update, delete not implemented due to not specified by the task.
    - error handling in not implemented, only a basic error handling was added, due to the task
  - sensitive sql data like user and password are on the local ```.env ``` file, which in our case should contain the following:
   ```
    MYSQL_HOST='127.0.0.1'
    MYSQL_USER='root'
    MYSQL_PASSWORD='password'
    MYSQL_DB='itbox'
   ```
  ## To Be Implemented
  - Frontend
    - create the admin page with possible selections
     - show all
     - show one
     - show in rent by date  
     - add design 
  - Backend improvement
    - Error handling on backend
    - add the rest of the crud operations
    - authentication
    - authorisation for the admin page
