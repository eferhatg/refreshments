# Questions To Ask

* How many employee do you have
* Company spesific question
* How do you valuate the candidates


# behavioral

* how to design twitter youtube vs..
* a platform that I like and why?
* What’s your biggest strength
* Tell me about yourself.
* Why do you want to work here
* Tell me your biggest weakness as an engineer.
* Describe a tricky bug you’ve encountered.
* What’s the biggest project you’ve shipped?
* What’s your favorite programming language? Why?
* How do you overcome interpersonal conflicts with coworkers?
* example of an interesting technical problem you solved
* example of an interpersonal conflict you overcame
* example of leadership or ownership
* story about what you should have done differently in a past project
* piece of trivia about your favorite language, and something you do and don't like about said language
* question about the company's product/business
* question about the company's engineering strategy (testing, Scrum, etc)



# What happens when you type an URL in the browser and press enter?

* You type maps.google.com into the address bar of your browser.
* The browser checks the cache for a DNS record to find the corresponding IP address of maps.google.com.
  * First, it checks the browser cache
  * Second, the browser checks the OS cache
  * Third, it checks the router cache
  * Fourth, it checks the ISP cache
* If the requested URL is not in the cache, ISP’s DNS server initiates a DNS query to find the IP address of the server that hosts maps.google.com 
  * Makes a DNS query is to search multiple DNS servers on the internet until it finds the correct IP address for the website
    * .com name server (found)
    * google.com name server (found)
    * map.google.com (we found ip)
* Browser initiates a TCP connection with the server. TCP/IP three-way handshake;
  *  Client machine sends a SYN packet
  *  İf server an accept connection sends back SYN/ACK
  *  Client sends ACK
  *  Data transmission is ready!
* The browser sends an HTTP request to the web server. GET/POST/PUT vs...
  * Connection header can be keep-alive too wait new requests from same client;
* The server handles the request and sends back a response. 
  * Web Server handles request
  * Redirect it to corresponding application
  * Application generates a response (XML, HTML, JSON)
* The server sends out an HTTP response.
  * 1xx indicates an informational message only
  * 2xx indicates success of some kind
  * 3xx redirects the client to another URL
  * 4xx indicates an error on the client’s part
  * 5xx indicates an error on the server’s part
* The browser displays the HTML content (for HTML responses which is the most common).
  * Will render bone html
  * sends request to additional files like css js vs..