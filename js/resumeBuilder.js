var bio = {
  "name": "Rehan Umar",
  "role": "Front End Developer",
  "contacts": {
    "mobile": "0000-0000000",
    "email": "rehanumardogar(at)gmail.com",
    "github": "github.com/rehanumar",
    "twitter": "twitter.com/RehanUmar8",
    "location": "Azam Garden Main Bivd., Lahore, Pakistan"
  },
  "welcomeMessage": "Welcome here!",
  "skills": [
    "HTML",
    "CSS",
    "JavaScript",
    "JQuery",
    "AngularJS",
    "And Many More!"
  ],
  "biopic":"images/fry.png"
}

var education = {
  "schools": [
    {
      "name": "Superior College",
      "location": "Lahore",
      "degree": "F.sc Pre Engineering",
      "majors": ["Physics","Chimstry","Math"],
      "dates": "25 Dec, 2013",
      "url": "https://www.superior.edu.pk/"
    }
  ],
  "onlineCourses":[
    {
      "title": "Front End Nano Degree",
      "school": "udacity",
      "date": "15 Dec, 2016",
      "url": "https://www.udacity.com/"
    }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "Arbisoft",
      "title": "Front End Developer",
      "location": "Lahore",
      "dates": "25 Dec, 2013",
      "description": "My job is to build the stunning front end experiences for users"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Portfolio Site",
      "dates": "03 Nov, 2016",
      "description": "My personal portfolio site. Where I occasionally write blog posts.",
      "images": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    },
    {
      "title": "Classic Arcade Game",
      "dates": "25 Dec, 2016",
      "description": "A classic Arcade game (Frogger) which I have created using the canvas APIs",
      "images": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    }
  ]
}

bio.display = function () {
  var $header = $('#header');
  var $topContacts = $('#topContacts');
  var $footerContacts = $('#footerContacts');
  var skillMarkup = '';
  $header.prepend(HTMLheaderRole.replace('%data%', bio.role));
  $header.prepend(HTMLheaderName.replace('%data%', bio.name));
  $header.append(HTMLbioPic.replace('%data%', bio.biopic));
  $header.append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
  $header.append(HTMLskillsStart);
  $topContacts.append(HTMLmobile.replace('%data%', bio.contacts.mobile));
  $topContacts.append(HTMLemail.replace('%data%', bio.contacts.email));
  $topContacts.append(HTMLgithub.replace('%data%', bio.contacts.github));
  $topContacts.append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
  $topContacts.append(HTMLlocation.replace('%data%', bio.contacts.location));
  $footerContacts.append(HTMLmobile.replace('%data%', bio.contacts.mobile));
  $footerContacts.append(HTMLemail.replace('%data%', bio.contacts.email));
  $footerContacts.append(HTMLgithub.replace('%data%', bio.contacts.github));
  $footerContacts.append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
  $footerContacts.append(HTMLlocation.replace('%data%', bio.contacts.location));
  bio.skills.forEach(function (skill) {
    skillMarkup = skillMarkup + HTMLskills.replace('%data%', skill);
  });
  $('#skills').append(skillMarkup);
}
bio.display();

work.display = function () {
  var $work = $('#workExperience');
  $work.append(HTMLworkStart);
  var $workStart = $('.work-entry:last');
  var workMarkup = '';
  work.jobs.forEach(function (job) {
    workMarkup = workMarkup + HTMLworkEmployer.replace('%data%', job.employer);
    workMarkup = workMarkup + HTMLworkTitle.replace('%data%', job.title);
    workMarkup = workMarkup + HTMLworkDates.replace('%data%', job.dates);
    workMarkup = workMarkup + HTMLworkLocation.replace('%data%', job.location);
    workMarkup = workMarkup + HTMLworkDescription.replace('%data%', job.description);
  });
  $workStart.append(workMarkup);
}
work.display();

projects.display = function () {
  var $projects = $('#projects');
  var projectMarkup = '';
  $projects.append(HTMLprojectStart);
  var $projectStart = $('.project-entry');
  projects.projects.forEach(function (project) {
    projectMarkup = projectMarkup + HTMLprojectTitle.replace('%data%', project.title);
    projectMarkup = projectMarkup + HTMLprojectDates.replace('%data%', project.dates);
    projectMarkup = projectMarkup + HTMLprojectDescription.replace('%data%', project.description);
    project.images.forEach(function (image) {
      projectMarkup = projectMarkup + HTMLprojectImage.replace('%data%', image);
    });
  });
  $projectStart.append(projectMarkup);
}
projects.display();
