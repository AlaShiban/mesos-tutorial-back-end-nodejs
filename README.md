# What this is
This is an example of a nodejs back-end service. It's used as part of the Building Services at Scale course.

# How to run the project
First build the docker image by running the following command:
```
docker build -t your-docker-hub-account-name/mesos-tutorial-back-end-nodejs .
```
Then run the sample service:
```
docker run -p 8080:8080 -it your-docker-hub-account-name/mesos-tutorial-back-end-nodejs 
```

you should now be able to access http://localhost:8080
