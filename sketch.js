//Drop Down Menu element variable
let dropdownMenu;

//Different arrays of EmergencyEntry objects, 3 entries per country (3 objects per array)
var australia = [];
var china = [];
var france = [];
var germany = [];
var greece = [];
var mexico = [];
var spain = [];
var unitedKingdom = [];
var unitedStates = [];

//Position variables for entries
let entry_xPos = 62;
let entry1_yPos = 170;
let entry2_yPos = 230;
let entry3_yPos = 290;

//Flag image array
var flagArray;

function setup() {
  createCanvas(300, 440);
  textAlign(CENTER);
  dropdownMenu = createSelect();
  setupDropdownMenu();
  setupArrays(); //initialize arrays with country emergency entries
  
  //Initialize flag arrays and populate it with images of different country flags
  flagArray = [
    loadImage("assets/au_64.png"),
    loadImage("assets/cn_64.png"),
    loadImage("assets/fr_64.png"),
    loadImage("assets/de_64.png"),
    loadImage("assets/gr_64.png"),
    loadImage("assets/mx_64.png"),
    loadImage("assets/es_64.png"),
    loadImage("assets/gb_64.png"),
    loadImage("assets/us_64.png")
  ];
}


//Initialize Arrays
function setupArrays() {
  //Each country object array stores three national emergency entries: Police, Medical, Fire 
  australia = [
    new EmergencyEntry("Police", "000", 1),
    new EmergencyEntry("Medical", "000", 2),
    new EmergencyEntry("Fire", "000", 3),
  ];
  
  china = [
    new EmergencyEntry("Police", "110", 1),
    new EmergencyEntry("Medical", "120", 2),
    new EmergencyEntry("Fire", "119", 3),
  ];
  
  france = [
    new EmergencyEntry("Police", "191", 1),
    new EmergencyEntry("Medical", "112", 2),
    new EmergencyEntry("Fire", "112", 3),
  ];

  germany = [
    new EmergencyEntry("Police", "110", 1),
    new EmergencyEntry("Medical", "112", 2),
    new EmergencyEntry("Fire", "112", 3),
  ];

  greece = [
    new EmergencyEntry("Police", "100", 1),
    new EmergencyEntry("Medical", "166", 2),
    new EmergencyEntry("Fire", "199", 3),
  ];
  
  mexico = [
    new EmergencyEntry("Police", "066", 1),
    new EmergencyEntry("Medical", "065", 2),
    new EmergencyEntry("Fire", "068", 3),
  ];
  
  spain = [
    new EmergencyEntry("Police", "112", 1),
    new EmergencyEntry("Medical", "112", 2),
    new EmergencyEntry("Fire", "112", 3),
  ];
  
  unitedKingdom = [
    new EmergencyEntry("Police", "999", 1),
    new EmergencyEntry("Medical", "999", 2),
    new EmergencyEntry("Fire", "999", 3),
  ];
  
  unitedStates = [
    new EmergencyEntry("Police", "911", 1),
    new EmergencyEntry("Medical", "911", 2),
    new EmergencyEntry("Fire", "911", 3),
  ];
  
}



function draw() {
  background(255,40,60);
  fill(255);
  textSize(32);
  stroke(255,0,0);
  strokeWeight(1);
  textAlign(CENTER);
  text("iEmergency", width/2, 50);
  textSize(18);
  strokeWeight(0);
  text("Please select a country:", width/2, 83);
  
  //If user has selected one of the available options from the dropdown menu, display emergency entries for selected country
  displayEmergencyEntries();
  
  //Display Country Flag Image for Selected Country
  displayCountryFlag();
  
}

//Display emergency entries for selected country
function displayEmergencyEntries() {
  for(let i=0; i<3; i++) {
    if(dropdownMenu.value() == 'Australia') {
      australia[i].display();
      
    } else if(dropdownMenu.value() == 'China') {
      china[i].display();
      
    } else if(dropdownMenu.value() == 'France') {
      france[i].display();
      
    } else if(dropdownMenu.value() == 'Germany') {
      germany[i].display();
      
    } else if(dropdownMenu.value() == 'Greece') {
      greece[i].display();
      
    } else if(dropdownMenu.value() == 'Mexico') {
      mexico[i].display();
      
    } else if(dropdownMenu.value() == 'Spain') {
      spain[i].display();
      
    } else if(dropdownMenu.value() == 'United Kingdom') {
      unitedKingdom[i].display();
      
    } else if(dropdownMenu.value() == 'United States') {
      unitedStates[i].display();
    } 
  }
}

//Display country flag image for selected country
function displayCountryFlag() {
  
  if(dropdownMenu.value() == 'Australia') {
    //Display country flag (image)
      flagArray[0].resize(100,100);
      image(flagArray[0], width/2 - 50, height - 115);
    
  } else if(dropdownMenu.value() == 'China') {
      flagArray[1].resize(100,100);
      image(flagArray[1], width/2 - 50, height - 115);
    
  } else if(dropdownMenu.value() == 'France') {
      flagArray[2].resize(100,100);
      image(flagArray[2], width/2 - 50, height - 115);
    
  } else if(dropdownMenu.value() == 'Germany') {
      flagArray[3].resize(100,100);
      image(flagArray[3], width/2 - 50, height - 115);
    
  } else if(dropdownMenu.value() == 'Greece') {
      flagArray[4].resize(100,100);
      image(flagArray[4], width/2 - 50, height - 115);
    
  } else if(dropdownMenu.value() == 'Mexico') {
      flagArray[5].resize(100,100);
      image(flagArray[5], width/2 - 50, height - 115);
    
  } else if(dropdownMenu.value() == 'Spain') {
      flagArray[6].resize(100,100);
      image(flagArray[6], width/2 - 50, height - 115);
    
  } else if(dropdownMenu.value() == 'United Kingdom') {
      flagArray[7].resize(100,100);
      image(flagArray[7], width/2 - 50, height - 115);
    
  } else if(dropdownMenu.value() == 'United States') {
      flagArray[8].resize(100,100);
      image(flagArray[8], width/2 - 50, height - 115);
    
  } 
}

//Emergency Entry Class
class EmergencyEntry {
  constructor(title, body, sequence) {
    this.title = title; //What is this entry called?
    this.body = body; //What is the phone # for this entry?
    this.xPos = entry_xPos; //What is its x-position?
    
    //determine y-pos for entry based on its sequence in the array
    if(sequence == 1) {
      this.yPos = entry1_yPos;
    } else if(sequence == 2) {
      this.yPos = entry2_yPos;
    } else {
      this.yPos = entry3_yPos;
    }
    
    this.width = 200;
    this.height = 40;
  }
  
  //Display emergency entries + line beneath each
  display() {
    textAlign(LEFT);
    fill(255);
    textSize(22);
    text(this.title + ": ", this.xPos, this.yPos);
    textAlign(CENTER);
    text(this.body, this.xPos + 155, this.yPos);
    strokeWeight(1);
    stroke(255);
    line(this.xPos - 9, this.yPos + 20, this.xPos + 180, this.yPos + 20)
    noStroke();
  }
}

//Setup the dropdown menu - add the different available options
function setupDropdownMenu() {
  dropdownMenu.position(width/2 - 59, 103);
  dropdownMenu.option('--Not Selected--');
  dropdownMenu.option('Australia');
  dropdownMenu.option('China');
  dropdownMenu.option('France');
  dropdownMenu.option('Germany');
  dropdownMenu.option('Greece');
  dropdownMenu.option('Mexico');
  dropdownMenu.option('Spain');
  dropdownMenu.option('United Kingdom');
  dropdownMenu.option('United States');

  dropdownMenu.changed(mySelectEvent);
}

function mySelectEvent() {
  let item = dropdownMenu.value();
  background(200);
  text(item, 50, 50);
}