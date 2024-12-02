FROM mongo:latest

ENV MONGO_INITDB_ROOT_USERNAME=mongoadmin
ENV MONGO_INITDB_ROOT_PASSWORD=root


VOLUME /data/db

COPY playground-1.mongodb.js /docker-entrypoint-initdb.d/

# Expose the MongoDB default port
EXPOSE 27017

# MongoDB will automatically execute any JavaScript files in the /docker-entrypoint-initdb.d/ directory during initialization
