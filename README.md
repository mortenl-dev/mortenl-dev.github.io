Documentation

Welcome to the Documentation of my website!
This README tries to explain all the functions my website entails, and how you can replicate them on your own!

Content
1. Utilizing CSS classes/IDs
2. The Github REST API
   --> Getting repositories
   --> Getting starred repositories
   --> Getting Commit activity
3. API rate limits
   --> Caching / Local storage

I`d like to preface this text by saying that I chose not to work with any frameworks, instead focusing on exclusively HTML5, CSS3 and Javascript.
This is because I wish to learn the core mechanics of web development before I start utilizing software like React, Vue, or Angular to help myself, since doing it this
way will probably help me gain a deeper understanding further down the line.


Utilizing CSS classes/IDs

As the headline may suggest, I tried to optimize the style files of my website as much as possible by not unnecessarily repeating myself, simply by trying to make the 
classes and ID hierarchy as conventional as possible.

<Enter example image>


The Github REST API

Github's API does come with some issues for private users who don't want to use money (which I'll discuss later), but it is a very, very powerful tool nonetheless, since it
is probably the most accessible, as well as the largest free API you can find out there. (Atleast as far as I know)

By fetching f.e. the URLs of public repositories you can include quite a lot of content in your website which you would normally need to access Github for.

<image>

In the image above I fetch JSON of my own account, making me and the website viewer gain insight on my activities, as well as projects on Github.

<image>

On the website, it may look something like this. Here I'm featuring all the public repositories which I've starred, with a more elaborate description on what the projects's about.


API rate limits and how to work around them

As a free user of REST API, I am in theory only allowed one API call per minute. While this may be a bit inconsistent depending on the amount of data being sent or the current online traffic,
you will eventually run into the issue of data not being sent to the user unless they wait quite a while.

For my first implemented solution, I looked into web-caching for the first time.
By storing whatever values I've received by the API in the local storage, I can atleast still display the old values on the website instead of getting 'undefined' errors or NaNs.

<image>

If I had not implemented caching, my website would eventually look something like this, but with it being a part of my code the website will always atleast look like it's supposed to
as long as you have loaded it once.


I sincerely invite you to go take a look at my site, and feel free to copy whatever you may find useful. If there's anything you find confusing or you think could be optimized, please
let me know. :)


