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
};

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
      "dates": "15 Dec, 2016",
      "url": "https://www.udacity.com/"
    }
  ]
};

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
};

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
};

bio.display = function () {
  var $header = $('#header');
  var $contacts = $('#topContacts, #footerContacts');
  var skillMarkup = '';
  $header.prepend(HTMLheaderRole.replace('%data%', bio.role));
  $header.prepend(HTMLheaderName.replace('%data%', bio.name));
  $header.append(HTMLbioPic.replace('%data%', bio.biopic));
  $header.append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
  $header.append(HTMLskillsStart);
  $contacts.append(HTMLmobile.replace('%data%', bio.contacts.mobile));
  $contacts.append(HTMLemail.replace('%data%', bio.contacts.email));
  $contacts.append(HTMLgithub.replace('%data%', bio.contacts.github));
  $contacts.append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
  $contacts.append(HTMLlocation.replace('%data%', bio.contacts.location));
  bio.skills.forEach(function (skill) {
    skillMarkup = skillMarkup + HTMLskills.replace('%data%', skill);
  });
  $('#skills').append(skillMarkup);
};

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
};

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
};

education.display = function () {
  var $education = $('#education');
  var $onlineCoursesEntry, $schoolEntry;
  var schoolMarkup = '', onlineCoursesMarkup = '';

  $education.append(HTMLschoolStart);
  $schoolEntry = $('.education-entry');
  education.schools.forEach(function (school) {
    schoolMarkup = schoolMarkup + HTMLschoolName.replace('%data%', school.name);
    schoolMarkup = schoolMarkup + HTMLschoolDegree.replace('%data%', school.degree);
    schoolMarkup = schoolMarkup + HTMLschoolDates.replace('%data%', school.dates);
    schoolMarkup = schoolMarkup + HTMLschoolLocation.replace('%data%', school.location);
    school.majors.forEach(function (course) {
      schoolMarkup = schoolMarkup + HTMLschoolMajor.replace('%data%', course);
    });
  });
  $schoolEntry.append(schoolMarkup);

  $education.append(HTMLonlineClasses);
  $education.append(HTMLschoolStart);
  $onlineCoursesEntry = $('.education-entry:last');
  education.onlineCourses.forEach(function (course) {
    onlineCoursesMarkup = onlineCoursesMarkup + HTMLonlineTitle.replace('%data%', course.title);
    onlineCoursesMarkup = onlineCoursesMarkup + HTMLonlineSchool.replace('%data%', course.school);
    onlineCoursesMarkup = onlineCoursesMarkup + HTMLonlineDates.replace('%data%', course.dates);
    onlineCoursesMarkup = onlineCoursesMarkup + HTMLonlineURL.replace('%data%', course.url);
  });
  $onlineCoursesEntry.append(onlineCoursesMarkup);
};

function appendMap() {
  $('#mapDiv').append(googleMap);
}


bio.display();
work.display();
projects.display();
education.display();
appendMap();
