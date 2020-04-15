//////////////////////////////////////////////////////
///                                                ///
///           JS BEGINNER GROUP PROJECT            ///
///                                                ///
///              TEXT ADVENTURE GAME               ///
///                                                ///
///             (COHORT 11 | GROUP 1)              ///
///                                                ///
//////////////////////////////////////////////////////

//Global variables
let name;

//Skeleton
function roles() {
  const role = prompt(`Now tell me which role fits you best by typing the letter of one of the following options:
  
      A) Politician
      B) Scientist
      C) Nonessential civilian
      D) Frontline Worker`);

  if (role === "A" || role === "a") {
    politiciansCovidResponse();
  } else if (role === "B" || role === "b") {
    playGame();
  } else if (role === "C" || role === "c") {
    beginNonessential();
    typeOfNonessential();
  } else if (role === "D" || role === "d") {
    beginGameFrontline();
  } else if (role === null) {
    beginGame();
  } else {
    alert("Sorry that is not an option.. Try again");
    roles();
  }
}

function beginGame() {
  const initialResponse = confirm(`Welcome to 2020, the world is in a state of emergency because of the spread of Covid-19.

We want to know what your role will be in helping to eradicate this virus.

Click 'OK' to continue or 'Cancel' to exit game.`);

  if (initialResponse) {
    name = prompt("State your name!");
    roles();
  }
}

/********* POLITICAL RESPONSE - (start) *********/

// main messages for political response:
const politicsMainMessages = {
  A: `Welcome to "Political Response During COVID-19" ${name}. Click 'OK' to continue or 'Cancel' to return to main game menu.`,
  B1: `Great! You're now going to be asked to play the role of a world leader during this time of crisis. The decisions you make will impact the severity of the pandemic in your nation.`,
  B2: `No problem. Thanks for playing "Political Response During COVID-19," you'll now be redirected back to the main game menu.`,
  C: `The first decision you will be asked to make is to choose a world leader to personify. Please enter one of the two following countries or regions to be redirected to the next step in the game: USA or Asia. Entries are case-sensitive.`,
};

// a startGame() function for Beau's portion of game:
function politiciansCovidResponse() {
  const confirmation = confirm(politicsMainMessages.A);
  if (confirmation) {
    alert(politicsMainMessages.B1);
    chooseRegion();
  } else {
    alert(politicsMainMessages.B2);
    beginGame(); // call beginGame() function to start from main game menu.
  }
}

// function to choose world region:
function chooseRegion() {
  const response = prompt(politicsMainMessages.C);
  if (response === `USA`) {
    usa();
  } else if (response === `Asia`) {
    asia();
  } else if (response === null) {
    politiciansCovidResponse();
  } else {
    alert(`You've entered an incorrect value. Please try again.`);
    chooseRegion();
  }
}

// USA function:
function usa() {
  alert(`Welcome to the USA! Click 'OK' to continue.`);
  const response = prompt(
    `Type in the LAST NAME ONLY for one of the following two US politicians: Donald Trump or Bernie Sanders. Entries are case-sensitive.`
  );
  if (response === `Trump`) {
    trump();
  } else if (response === `Sanders`) {
    sanders();
  } else if (response === null) {
    politiciansCovidResponse();
  } else {
    alert(`You've entered an incorrect value. Please try again.`);
    usa();
  }
}

// Asia function:
function asia() {
  alert(`Welcome to Asia! Click 'OK' to continue.`);
  const response = prompt(
    `Type in the LAST NAME ONLY for one of the following two Asian politicians: Narendra Modi (India) or Xi Jinping (China). Entries are case-sensitive.`
  );
  if (response === `Modi`) {
    modi();
  } else if (response === `Jinping`) {
    jinping();
  } else if (response === null) {
    politiciansCovidResponse();
  } else {
    alert(`You've entered an incorrect value. Please try again.`);
    asia();
  }
}

// Donald Trump function:
function trump() {
  alert(
    `Welcome to the White House Situation Room Mr. President. Please take a seat and click 'OK' to continue.`
  );
  const response = prompt(`You need to decide whether or not to impose a nationwide shelter-in-place order or continue on with business as usual. Which will it be? Please 
enter either "lockdown" or "no lockdown". Entries are not case-sensitive.`);
  if (response === `lockdown`) {
    alert(`Safe choice Mr. President! Click 'OK' to continue.`);
    const duration = prompt(
      `You've decided to lock down the nation in hopes of saving lives as well as the economy. Your cirtics are shocked. Do you order the country to socially isolate for the remainder of the year (7 months) or only until July 4th (3 months)? Please enter 7 or 3 to continue.`
    );

    if (duration === `7`) {
      alert(
        `This was the best decision of your life. The lockdown continues until 2021, you win re-election in November & manage to buy the pharmaceutical company that patents a vaccine for COVID-19. You'll never be impeached & will rule forever!`
      );
      winningAnswer();
    } else if (duration === `3`) {
      alert(
        `Bad choice. Lifting the lockdown by the Fourth of July is too soon & the pandemic resurfaces during the summer months. Many Americans end up dying. You get impeached & are forced into exile.`
      );
      gameOver();
    }
  } else if (response === `no lockdown`) {
    const doOrDie = confirm(
      `It's your decision Mr. President. But are you sure you want to ignore the advice of some on your Coronavirus Task Force who recommend a nationwide lockdown? Click 'OK' to continue or 'Cancel' to go back.`
    );

    if (doOrDie) {
      alert(
        `You choose to ignore the advice of experienced medical professionals & instead focus entirely trying to keep America "open for business." Close to one million Americans die, you lose the 2020 presidential election & are forced to declare bankruptcy. Click 'OK' to seal your fate.`
      );
      gameOver();
    } else if (!doOrDie) {
      trump();
    }
  } else if (response === null) {
    politiciansCovidResponse();
  } else {
    alert(`You've entered an incorrect value. Please try again.`);
    trump();
  }
}

// Bernie Sanders function:
function sanders() {
  alert(
    `Good choice! Bernie Sanders is the best politician suited to serve the nation in a time such as this. He somehow stages a comeback, wins the presidential election in November, pushes several of his signature ideas through Congress & paves the way for an America that works for all - not just a few. Miracles really are possible.`
  );
  winningAnswer();
}

// Narendra Modi function:
function modi() {
  alert(
    `Good day Mr. Prime Minister. You now find yourself surrounded by your top government officials & members of your COVID-19 task force. One of your biggest decisions at hand is how to deal with the vast numbers of Indians who are stranded after you imposed a nationwide lockdown late last month.`
  );
  const response = prompt(
    `What should you do? Leave everyone to their own devices or help those who are stranded during the lockdown? Enter either help or ignore. Entries are case-sensitive.`
  );

  if (response === `help`) {
    alert(
      `Thank you Prime Minister. You & your team find ways to help shelter & feed those who are stranded far from home & your popularity surges. The pandemic runs its course & you go on to rule India for two more consecutive terms.`
    );
    winningAnswer();
  } else if (response === `ignore`) {
    const areYouSure = confirm(
      `You're free to choose as you please, but we'll give you one more chance to change your mind. Are you sure you really want to ignore the thousands of Indians who are in need of government assistance? Click 'OK' to continue or 'Cancel' to go back.`
    );

    if (areYouSure) {
      alert(
        `Sadly, millions of people end up dying in the streets - far from their homes. They die from lack of food & shelter as well as the virus. Your decision to ignore the masses costs you the prime-ministership & you are eventually jailed on charges of dereliction of duty.`
      );
      gameOver();
    } else if (!areYouSure) {
      modi();
    }
  }
}

// Xi Jinping function:
function jinping() {
  alert(
    `Safe choice! President Xi Jinping & the Chinese government didn't react to COVID-19 in a exemplary manner initially, silencing those who attempted to inform the public of its existence & severity. However, measures implemented throughout the country early this year halted the spread of the virus & saved many lives.`
  );
  winningAnswer();
}

// function to end game:
function gameOver() {
  alert(`Sorry, your luck ran out. Game over.`);
  beginGame();
}

function winningAnswer() {
  alert(`Congrats! You've survived the pandemic.`);
  const playAgain = confirm(
    `Click 'OK' to play again or 'Cancel' to return to main game menu.`
  );
  if (playAgain) {
    politiciansCovidResponse();
  } else if (!playAgain) {
    beginGame();
  }
}

/********* POLITICAL RESPONSE - (end) *********/

//Nonessential civilian
const nonessential = {
  //Intro
  A: "Welcome, you nonessential civilian!",
  //Doomsday
  B1: "Do you have 11 year's worth of toilet paper in your attic?",
  B2:
    "May your stools be loose and your TP devoured by rats. Anyway, moving on... ",
  B3: "I'm not sure I believe you...",
  B4:
    "You are obviously a hoarder and doomsday prepper. Will you stop being so selfish and change your ways?",
  B5:
    "Yeah, that's totally normal. Who doesn't lay down on a towel after completing their pasta inventory?",
  B6:
    "You tried but your Costco addiction got the best of you. You stood in line with too many people and not long after...",
  B7:
    "After taking a nice hand sanitizer bath, you blew up your grandmother's kitchen trying to distill more alcohol. An extroverted neighbor came to help and sneezed on you.",
  //Spring breaker
  C1: "Hmmmm...it better not be on the beach.",
  C2:
    "You are a spring breaker. Your brain cells have shrivelled from too much sun exposure and cheap tequila. Will you change your ways?",
  C3: "Thanks for social distancing for 5 minutes but it's too late.",
  C4: "Pass the bottle turned into pass the COVID",
  //Answers leads to spring break, netflix, or doomsday questions
  D1:
    "Are you laying down on a towel or couch right now? (Enter towel or couch)",
  D2:
    "In the past 24 hours have you 1) played beer pong 2)watched 22 hours of Netflix or 3) organized 100lbs of pasta varieties in alphabetical order (Enter 1, 2, or 3)?",
  D3:
    "In the past 24 hours have you 1) watched 22 hours of reality TV 2) organized 100lbs of pasta in alphabetical order or 3) considered showering but took a long nap instead? (Enter 1, 2, or 3)?",
  //Netflix and chill
  E1: "But also, why the towel? Anyway...",
  E2: "What did you watch on Netflix after taking your nap?",
  E3:
    "Sheesh, I expected better taste from you. But I have to admit, you're among the great Netflix and chillers. Kudos on the social distancing! Keep it up.",
  E4: "What show were you watching?",
  //Dead or alive?
  Y: "You're alive! For now.",
  Z: "You became infected and did not survive.",
};

function beginNonessential() {
  alert(nonessential.A);
  alert(`Let\'s find out what kind of person you are, ${name}`);
}

function typeOfNonessential() {
  const toiletPaper = confirm(nonessential.B1);

  if (toiletPaper) {
    alert(nonessential.B2);
  } else {
    alert(nonessential.B3);
  }

  const towelOrCouch = prompt(nonessential.D1);

  if (
    towelOrCouch === "towel" ||
    towelOrCouch === "Towel" ||
    towelOrCouch === "TOWEL"
  ) {
    alert(nonessential.C1);
    const threeChoicesD1 = prompt(nonessential.D2);
    {
      if (threeChoicesD1 == 1) {
        const springBreaker = confirm(nonessential.C2);
        {
          if (springBreaker) {
            alert(nonessential.C3);
            alert(nonessential.Z);
            dead();
          } else {
            alert(nonessential.C4);
            alert(nonessential.Z);
            dead();
          }
        }
      } else if (threeChoicesD1 == 2) {
        prompt(nonessential.E4);
        alert(nonessential.E3);
        alert(nonessential.E1);
        alert(nonessential.Y);
      } else if (threeChoicesD1 == 3) {
        alert(nonessential.B5);
        doomsdayPrepper();
      }
    }
  } else if (
    towelOrCouch == "couch" ||
    towelOrCouch == "Couch" ||
    towelOrCouch == "COUCH"
  ) {
    const threeChoicesD2 = prompt(nonessential.D3);
    if (threeChoicesD2 == 1) {
      prompt(nonessential.E4);
      alert(nonessential.E3);
      alert(nonessential.Y);
    } else if (threeChoicesD2 == 2) {
      doomsdayPrepper();
    } else if (threeChoicesD2 == 3) {
      prompt(nonessential.E2);
      alert(nonessential.E3);
      alert(nonessential.Y);
    }
  }
}

function doomsdayPrepper() {
  const doomsdayPrepper = confirm(nonessential.B4);
  {
    if (doomsdayPrepper) {
      alert(nonessential.B6);
      alert(nonessential.Z);
      dead();
    } else {
      alert(nonessential.B7);
      alert(nonessential.Z);
      dead();
    }
  }
}

function dead() {
  alert(`RIP ${name}`);
}

//Scientist
const messages = {
  A: "Welcome to the COVID19 Vaccine Hunt",
  B1: "Will you like to play for a Vaccine?",
  B2: "Awesome!  Let's get started!",
  B3: "Well have a nice day then.",
  C1:
    "Are you a Scientist or a Non-Scientist? (Enter Scientist or Not Applicable)",
  C2: "Cool, move on to the next step",
  C3: "Bummer, please exit, you do not need a vaccine.",
  E1: "Is COVID-19 real? (Enter Yes or No)",
  E2: "Nice, you are a step closer to the prize",
  E3: "It is real, try again some other time.",
  G: "Do you currently treat any sick patients?",
  H1: "It means you need a vaccine pretty soon.",
  H2: "You do not have an urgent need, try again.",
  I: "Are you working towards a cure? (Enter Yes or No)",
  J1: "Congrats, here is your vaccine",
  J2: "Oops, hard luck. Bye Felicia!",
};

function playGame() {
  alert(messages.A);
  const vaccine = confirm(messages.B1);

  if (vaccine === true) {
    alert(messages.B2);
  } else {
    alert(messages.B3);
  }

  const scientistOrNonScientist = prompt(messages.C1);

  if (scientistOrNonScientist === "Scientist") {
    alert(messages.C2);
  } else {
    alert(messages.C3);
  }

  const realCovid = prompt(messages.E1);

  if (realCovid === "Yes") {
    alert(messages.E2);
  } else {
    alert(messages.E3);
  }

  const sickPatients = confirm(messages.G);
  if (sickPatients) {
    alert(messages.H1);
  } else {
    alert(messages.H2);
  }

  const findCure = prompt(messages.I);
  if (findCure === "Yes") {
    alert(messages.J1);
  } else {
    alert(messages.J2);
  }
}

// playGame();

/********* Frontline Worker - (start) *********/

let score = 0;
let start;
let end;

const messagesFrontline = {
  A: `Greg and Peter share a ventilator. Based on his lung capacity Greg needs 5\/8 of the ventilators powers. 
  That means Peter needs 6\/16.
  
  Is that correct?`,
  B: `We used 4/9 of Amy’s medicine. 
  That means we have 15/27 left.
  
  Is that correct?`,
  C: `Tim is buying PPE from AliExpress.
  The usual price is $180. 
  Today's discount is 20%
  Tim saves $36.
  
  Is that correct?`,
  D: `Melissa has a new list of patients. 
  18 Of the 45 patients are Covid postitive.
  That is 40%.
  
  Is that correct?`,
  E: `The ratio of sick patients to ICU beds 7:4.
  There are 12 ICU  beds.
  That means there are 21 sick patients.
  
  Is that correct?`,
  X: `Not quite.. Too bad`,
  V: `That is correct!`,
};

function gameConfirm() {
  const start = confirm(
    `Okay ${name}, are you really ready for this challenge?`
  );
  if (start === true) {
    alert(
      `Nice! You have exactly 60 SECONDS to save lives.. Time starts NOW!!`
    );
  } else {
    alert("Sorry to see you go...");
    beginGame();
  }
}

function questions() {
  start = performance.now();
  console.log("timer started");

  const messagesArray = Object.values(messagesFrontline);

  for (let i = 0; i < 5; i++) {
    let response = confirm(messagesArray[i]);
    if (response === true) {
      alert(messagesFrontline.V);
      score++;
      console.log("Correct answer");
    } else {
      alert(messagesFrontline.X);
      console.log("Incorrect answer");
    }
  }
  end = performance.now();
  console.log("timer ended at: " + end - start + "ms");
}

function gameResult() {
  if (score >= 3 && end - start <= 60 * 1000) {
    alert(
      `Alright! You did it! you solved ${score} of the 5 problems in ` +
        (end - start) +
        "ms"
    );
  } else if (score < 3 && end - start <= 60 * 1000) {
    alert(
      `OH NO! You were quick, but you didn't solve enough problems. People died....`
    );
  } else {
    alert(
      `OH NO! Your time is up AND you failed to solve enough problems. People died...`
    );
  }
}

function beginGameFrontline() {
  gameConfirm();
  questions();
  gameResult();
}

//Run game
beginGame();
