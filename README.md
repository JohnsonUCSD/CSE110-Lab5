# Lab 5 - Starter
Name: Johnson Chung  
PID: A17479310  
Expose: [https://johnsonucsd.github.io/Lab5_Starter/expose.html](https://johnsonucsd.github.io/Lab5_Starter/expose.html)  
Explore: [https://johnsonucsd.github.io/Lab5_Starter/explore.html](https://johnsonucsd.github.io/Lab5_Starter/explore.html)

1. I would not use unit test for a "messaging" feature because messaging has many components. You need a connection between the users, a server to host the messaging, writing messages, sending messages, the user interface, and many more. These smaller components also interact with each other. Because of this, it is hard to test messaging between two users with just unit tests. Unit tests are better for testing smaller components of messaging, but the whole thing of messaging I wouldn't unit test on. 
2. I would use unit testing to test the max message length. The max message length is a small component of messaging and is very easy to make a test for. It is very clear what we would need to test for and the what the result should be. For this, it would just be if the message length is more than 80. We could test messages such as one being 80 characters and the other being 81, where 80 should work and 81 shouldn't. 