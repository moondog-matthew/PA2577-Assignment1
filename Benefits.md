# Benefits
Like most Docker apps, I get to benefit greatly from compartmentalized pieces of the app, which means each service can be replicated to handle a lot of customers shopping at once, and the database can grow to hold a lot of cards. 

Using Docker makes the app very portable, easy to run on any friends' machine or on the cloud.

# Challenges
The main security concern is that the credentials to the database are hardcoded in the configuration files. Instead, authentication mechanisms should be added to access the database. 

Additionally, I find Docker compose terminal logs to be very hard to read, and these are quite inconvenient to scroll through when you're trying to figure out a specific timestamp when something happened, like something going wrong. The logs can be read in the Docker hub, but even that is not perfect.