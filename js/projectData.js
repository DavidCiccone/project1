var projects = {
	project: ko.observableArray([
			
			 { items: [  {dataTarget: "#myModal1",
						  image: "images/neighborhoodmodal.jpg",
						  altTag: "project 1",
						  title: "Neighborhood Map Project",
						  link: "http://davidciccone.github.io/project-5/",
						  linkText: "davidciccone.github.io/project-5/",
						  id: "myModal1",
						  sourceCodeButton: "https://github.com/DavidCiccone/project-5",
						  viewProjectButton: "http://davidciccone.github.io/project-5/",
						  description: "A single-page web application, built using the Knockout framework, that displays a Google Map that includes popular CrossFit gyms of Columbus Ohio. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the Yelp API."
                         },		
			            { dataTarget: "#myModal2",
						  image: "images/SOMBWpic.jpg",
						  altTag: "project 2",
						  title: "South of Main Block Watch",
						  link: "http://davidciccone.github.io/SOMBW-site/",
						  linkText: "davidciccone.github.io/SOMBW-site/",
						  id: "myModal2",
						  sourceCodeButton: "https://github.com/DavidCiccone/SOMBW-site",
						  viewProjectButton: "http://davidciccone.github.io/SOMBW-site/",
						  description: "A single-page website created for a local non-profit organization using Bootstrap 3, the Google Maps API, HTML, and CSS. The page is fully responsive and works on mobile, tablet, and desktop browsers."
	                     },
	                    { dataTarget: "#myModal3",
						  image: "images/bugattachpic.jpg",
						  altTag: "project 3",
						  title: "Bug Attack",
						  link: "http://davidciccone.github.io/ArcadeGame",
						  linkText: "davidciccone.github.io/ArcadeGame",
						  id: "myModal3",
						  sourceCodeButton: "https://github.com/DavidCiccone/ArcadeGame",
						  viewProjectButton: "http://davidciccone.github.io/ArcadeGame/",
						  description: "An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript."
	                     }
	                  ]
	         },
	         { items: [  { dataTarget: "#myModal4",
						   image: "images/pizzapic.jpg",
						   altTag: "project 4",
						   title: "Website Optimization",
						   link: "http://davidciccone.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html",
						   linkText: "davidciccone.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html",
						   id: "myModal4",
						   sourceCodeButton: "https://github.com/DavidCiccone/frontend-nanodegree-mobile-portfolio",
						   viewProjectButton: "http://davidciccone.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html",
						   description: "Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90."
	                      },
	                      { dataTarget: "#myModal5",
						   image: "images/portpicture.jpg",
						   altTag: "project 5",
						   title: "Interactive Resume",
						   link: "http://davidciccone.github.io/frontend-nanodegree-resume/",
						   linkText: "http://davidciccone.github.io/frontend-nanodegree-resume",
						   id: "myModal5",
						   sourceCodeButton: "https://github.com/DavidCiccone/frontend-nanodegree-resume",
						   viewProjectButton: "http://davidciccone.github.io/frontend-nanodegree-resume/",
						   description: "Using jQuery, developed an interactive resume application that reads all data from a JSON file and then dynamically modifies the DOM to display the information. Further customized the project by personalizing the design using CSS."
	                      },
	                      { dataTarget: "#myModal6",
						    image: "images/feedreaderpicture.jpg",
						    altTag: "project 6",
						    title: "Feed Reader Testing",
						    link: "http://davidciccone.github.io/project-6/",
						    linkText: "davidciccone.github.io/project-6/",
						    id: "myModal6",
						    sourceCodeButton: "https://github.com/DavidCiccone/project-6",
						    viewProjectButton: "http://davidciccone.github.io/project-6/",
						    description: "Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API."
	                       }
	                  ]
	         },
	          { items: [  { dataTarget: "#myModal7",
						   image: "images/weatherapppic.jpg",
						   altTag: "project 7",
						   title: "Weather App",
						   link: "https://davidciccone.github.io/Weather-app/",
						   linkText: "davidciccone.github.io/Weather-app/",
						   id: "myModal7",
						   sourceCodeButton: "https://github.com/DavidCiccone/Weather-app",
						   viewProjectButton: "https://davidciccone.github.io/Weather-app/",
						   description: "A simple weather app that shows the conditions of the weather based on the users physical location. Uses the Dark Stormes API and the Skycons icon set."
	                      },
	                      { dataTarget: "#myModal8",
						   image: "images/shippingcalcimg.jpg",
						   altTag: "project 8",
						   title: "Shipping Calculator",
						   link: "https://github.com/DavidCiccone/ShippingCalc",
						   linkText: "davidciccone.github.io/ShippingCalc/",
						   id: "myModal8",
						   sourceCodeButton: "https://github.com/DavidCiccone/ShippingCalc",
						   viewProjectButton: "https://davidciccone.github.io/ShippingCalc/",
						   description: "A shipping app that utilizes the USPS API.  Built on HTML5 BOILERPLATE template  Written with JavaScript and JQuery."
	                      }
	                   ]
	           }
	])
}

ko.applyBindings(projects);


