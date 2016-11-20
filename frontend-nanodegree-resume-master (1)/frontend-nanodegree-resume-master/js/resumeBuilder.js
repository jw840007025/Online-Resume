var bio = {
    "name": "Joshua Webb",
    "role": "Web Developer",
    "contacts": {
        "mobile": "9106250821",
        "email": "jw0023@bravemail.uncp.edu",
        "github": "jw840007025",
        "location": "Shanghai",
    },
	"welcomeMessage": "Our paths have finally crossed!",
    "skills": ["CSS", "Creative Writing", "Teaching", "Illustration"],
    "biopic": "images/biopic.jpg"
};

var education = {
    "schools": [{
        "name": "University of North Carolina at Pembroke",
        "dates": "2009-2012",
        "location": "Pembroke, NC, US",
        "degree": "BA",
        "majors": ["English Language and Literature"],
		"url": "http://www.uncp.edu/"
    }, {
        "name": "Southeastern Community College",
        "dates": "2005-2008",
        "location": "Whiteville, NC, US",
        "degree": "AS",
        "majors": ["English Education"],
		"url": "http://sccnc.edu/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016-2017",
        "url": "udacity.com"
    }]
};

var work = {
    "jobs": [{
        "employer": "Expertise Education",
        "title": "English Teacher",
        "dates": "September 2016 - Current",
        "location": "Beijing, China",
        "description": "I develop lesson plans for young children (ages three to six) in Le Mei Kindergarten.  Students engage their English content through Howard Gardner's multiple intelligences.  There are six classes, and each one is thirty minutes long.  I also help teachers with preparing decorations and coordinating games before and during activity days."
    }, {
        "employer": "Hampson English",
        "title": "English Teacher",
        "dates": "October 2013 - September 2015",
        "location": "Beijing, China",
        "description": "I taught English one-on-one to students preparing to go to high school overseas, children with parents seeking to improve their English scores at school, and adults looking to go on a trip to a country where English is the dominant language."
    }]
};

var projects = {
    "projects": [{
        "title": "Build a Portfolio Website",
        "dates": "August 2016",
        "description": "Create a portfolio website using CSS and HTML",
        "images": ["images/build_a_portfolio_website1.jpg"]
    }, {
        "title": "Flying Wolf Album Cover",
        "dates": "October 2016",
        "description": "Used Photoshop and Corel Painter 12 to create an album cover",
        "images": ["images/albumcover1.jpeg"]
    }, ]
};

bio.display = function() {
	
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts, #topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts, #topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts, #topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts, #topContacts").append(formattedLocation);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
	var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedwelcomeMessage);
    var formatteedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formatteedBioPic);
	
	$("#header").append(HTMLskillsStart);
	
	bio.skills.forEach(function(skill) {
    var formattedSkill = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkill);
});
};

bio.display();



work.display = function() {
	
work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    $(".work-entry:last").append(formattedEmployer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    $(".work-entry:last").append(formattedTitle);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedDescription);
	
});
};

work.display();


education.display = function() {
	
$("#education").append(HTMLschoolStart);

education.schools.forEach(function(school) {

    var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
    $(".education-entry").append(formattedschoolName);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry").append(formattedschoolDates);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry").append(formattedschoolLocation);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    $(".education-entry").append(formattedschoolDegree);
	var formattedURL = HTMLonlineURL.replace("%data%", school.url);
	$(".education-entry").append(formattedURL);
	
	for (var b = 0; b < school.majors.length; b++) {
	var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors[b]);
    $(".education-entry").append(formattedschoolMajor);
	}
});

	$("#education").append(HTMLonlineClasses);

education.onlineCourses.forEach(function(course) {
	
    $("#education").append(HTMLschoolStart);
	
    var formattedonlinetTitle = HTMLonlineTitle.replace("%data%", course.title);
    $(".education-entry:last").append(formattedonlinetTitle);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
    $(".education-entry:last").append(formattedonlineSchool);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", course.dates);
    $(".education-entry:last").append(formattedonlineDates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", course.url);
    $(".education-entry:last").append(formattedonlineURL);
});
};

education.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

projects.display = function() {
    projects.projects.forEach(function(project) {
   
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

		for (var x = 0; x < project.images.length; x++ ) {
        var formattedImages = HTMLprojectImage.replace("%data%", project.images[x]);	
		$(".project-entry:last").append(formattedImages);
			}
    });
};

projects.display();


function locationizer(work_obj) {
    var locationArray = [];

    for (var job = 0; job < work_obj.jobs; job++) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).tolowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);