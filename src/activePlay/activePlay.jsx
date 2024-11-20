import './activePlay.css';
import React, { useState, useEffect } from 'react';

export function ActivePlay(props) {
  const category = props.category;
  const deckObject = props.deckObject;
  console.log("deckObjet in Active Play:", deckObject);

  const funAndGamesPhrases = [
    "Hide and Seek",
    "Spin the Bottle",
    "Charades",
    "Hopscotch",
    "Tug of War",
    "Truth or Dare",
    "Rock Paper Scissors",
    "Board Games",
    "Jump Rope",
    "Musical Chairs",
    "Marco Polo",
    "Red Light Green Light",
    "Tag You're It",
    "Pictionary",
    "Pin the Tail on the Donkey",
    "Scavenger Hunt",
    "Dodgeball",
    "Ring Around the Rosie",
    "Jigsaw Puzzle",
    "Capture the Flag",
    "Twister",
    "Kickball",
    "Duck Duck Goose",
    "Four Square",
    "Simon Says",
    "Cornhole",
    "Water Balloon Fight",
    "Laser Tag",
    "Balloon Animals",
    "Jenga",
    "Bingo",
    "Freeze Dance",
    "Chess Match",
    "Mini Golf",
    "Bowling Night",
    "Hot Potato",
    "Limbo",
    "Video Games",
    "Card Tricks",
    "Playground Slide",
    "Coloring Contest",
    "Fishing Trip",
    "Soccer Match",
    "Basketball Game",
    "Roller Skating",
    "Go Fish",
    "Puzzle Solving",
    "Hide the Penny",
    "Kite Flying"
  ];

  const theWorldPhrases = [
    "Great Wall of China",
    "Mount Everest",
    "Pyramids of Giza",
    "Amazon Rainforest",
    "Eiffel Tower",
    "Sahara Desert",
    "Sydney Opera House",
    "Niagara Falls",
    "The Grand Canyon",
    "Statue of Liberty",
    "Big Ben",
    "The Great Barrier Reef",
    "Taj Mahal",
    "Stonehenge",
    "Golden Gate Bridge",
    "Victoria Falls",
    "Machu Picchu",
    "Colosseum in Rome",
    "The Louvre",
    "The Nile River",
    "The Berlin Wall",
    "The Alps",
    "Antarctica",
    "The Dead Sea",
    "Great Lakes",
    "Hollywood Sign",
    "Christ the Redeemer",
    "Redwood Forest",
    "The Serengeti",
    "Times"
  ];

  const entertainmentPhrases = [
    "Movie Night",
    "Popcorn Bucket",
    "Broadway Musical",
    "Red Carpet",
    "Talk Show",
    "Reality TV",
    "Box Office Hit",
    "Comedy Special",
    "Binge Watching",
    "Rock Concert",
    "Jazz Band",
    "Karaoke Night",
    "Film Festival",
    "Netflix and Chill",
    "Magic Show",
    "Game Night",
    "Celebrity Gossip",
    "Soap Opera",
    "Stand-Up Comedy",
    "Indie Film",
    "Award Show",
    "Dance-Off",
    "Hollywood Blockbuster",
    "Music Video",
    "Streaming Service",
    "Late-Night Host",
    "Silent Film",
    "Cartoon Series",
    "YouTube Star",
    "Talent Show",
    "Action Movie",
    "Romantic Comedy",
    "Thriller Novel",
    "Podcast Episode",
    "Music Festival",
    "Video Game Marathon",
    "Fantasy Series",
    "Radio DJ",
    "Classic Sitcom",
    "Movie Sequel",
    "Drama Series",
    "Animated Film",
    "Superhero Movie",
    "Behind the Scenes",
    "Improv Comedy",
    "Documentary Series",
    "Cliffhanger Ending",
    "Streaming Platform",
    "Reality Show Reunion",
    "Live Theater"
  ];
  
  const slogansPhrases = [
    "Just Do It",
    "I'm Lovin' It",
    "Because You're Worth It",
    "Got Milk?",
    "Taste the Rainbow",
    "Think Different",
    "Open Happiness",
    "Finger Lickin' Good",
    "Melts in Your Mouth, Not in Your Hands",
    "Snap, Crackle, Pop",
    "The Ultimate Driving Machine",
    "Have It Your Way",
    "The Quicker Picker Upper",
    "Betcha Can’t Eat Just One",
    "What Happens Here, Stays Here",
    "It Keeps Going and Going",
    "Think Outside the Bun",
    "Red Bull Gives You Wings",
    "America Runs on Dunkin'",
    "The Breakfast of Champions",
    "A Diamond is Forever",
    "Can You Hear Me Now?",
    "Zoom Zoom",
    "Obey Your Thirst",
    "The Happiest Place on Earth",
    "Like a Good Neighbor",
    "Expect More, Pay Less",
    "Save Money. Live Better.",
    "Maybe She's Born With It",
    "The King of Beers",
    "Keeps Going and Going",
    "The Few. The Proud.",
    "I Want My MTV",
    "Built Ford Tough",
    "Impossible is Nothing",
    "Shave Time. Shave Money.",
    "We Bring Good Things to Life",
    "Don’t Leave Home Without It",
    "Drivers Wanted",
    "Strong Enough for a Man",
    "Where’s the Beef?",
    "The Night Time Sniffling Sneezing",
    "It’s in the Game",
    "Connecting People",
    "Intel Inside",
    "Good to the Last Drop",
    "Have a Break, Have a KitKat",
    "The Power of Dreams",
    "Pure Michigan"
  ];
  const sportsPhrases = [
    "Home Run",
    "Touchdown",
    "Penalty Kick",
    "Half-Time Show",
    "Three-Point Shot",
    "Hail Mary",
    "Grand Slam",
    "Fastball Pitch",
    "Free Throw",
    "Goalie Save",
    "Ice Hockey",
    "Tennis Match",
    "Soccer Goal",
    "Swimming Relay",
    "Marathon Runner",
    "Cycling Race",
    "Boxing Ring",
    "Weightlifting",
    "Gymnastics Routine",
    "Foul Ball",
    "Overtime Win",
    "First Down",
    "Double Play",
    "Golf Swing",
    "Kickoff Return",
    "Skateboarding",
    "Surfing Wave",
    "Ski Jump",
    "Buzzer Beater",
    "Diving Board",
    "Track and Field",
    "Table Tennis",
    "Badminton Smash",
    "Volleyball Spike",
    "Cheerleading Squad",
    "Sportsmanship",
    "Cricket Bat",
    "Wrestling Match",
    "Archery Target",
    "Rugby Scrum",
    "Baseball Diamond",
    "Curling Stone",
    "Pole Vault",
    "Horseback Riding",
    "Rowing Team",
    "Fencing Duel",
    "Cross-Country Skiing",
    "Roller Derby",
    "Hurdle Race",
    "Powerlifting"
  ];
  const snackTimePhrases = [
    "Potato Chips",
    "Chocolate Bar",
    "Popcorn Bowl",
    "Cheese Puffs",
    "Trail Mix",
    "Candy Corn",
    "Fruit Snacks",
    "Granola Bar",
    "Pretzel Sticks",
    "Nachos and Cheese",
    "Peanut Butter Crackers",
    "Ice Cream Sandwich",
    "Rice Cakes",
    "Gummy Bears",
    "Saltine Crackers",
    "Mini Donuts",
    "Mozzarella Sticks",
    "Corn Dogs",
    "Caramel Apples",
    "Popsicles",
    "Oatmeal Cookies",
    "Veggie Chips",
    "Chocolate-Covered Pretzels",
    "Banana Chips",
    "Fruit Roll-Ups",
    "S'mores",
    "Cupcakes",
    "Mini Pizzas",
    "Goldfish Crackers",
    "Peanuts",
    "Beef Jerky",
    "Candy Cane",
    "Lemon Bars",
    "Pita Chips",
    "Pop Tarts",
    "Milkshake",
    "Chex Mix",
    "Fudge Brownies",
    "Bagel Bites",
    "Cinnamon Rolls",
    "Yogurt Parfait",
    "Cheese Sticks",
    "Chocolate-Covered Raisins",
    "Graham Crackers",
    "Rice Krispies Treats",
    "Sugar Cookies",
    "Slushie",
    "Cereal Bar",
    "Funnel Cake",
    "Cup of Soup"
  ];

  const aroundTheHousePhrases = [
    "Vacuum Cleaner",
    "Coffee Table",
    "Ceiling Fan",
    "Throw Pillow",
    "Light Switch",
    "Front Door",
    "Bath Towel",
    "Curtain Rod",
    "Picture Frame",
    "Bookshelf",
    "TV Remote",
    "Fireplace Mantel",
    "Kitchen Sink",
    "Refrigerator",
    "Bunk Bed",
    "Shower Curtain",
    "Dining Table",
    "Dishwasher",
    "Laundry Basket",
    "Carpet Stain",
    "Garage Door",
    "Doormat",
    "Closet Hanger",
    "Bathroom Mirror",
    "Patio Furniture",
    "Wall Clock",
    "Nightstand",
    "Dog Bed",
    "Coat Rack",
    "Window Blinds",
    "Oven Mitts",
    "Trash Can",
    "Toaster Oven",
    "Microwave",
    "Pantry Shelves",
    "House Plant",
    "Chandelier",
    "Baby Crib",
    "Storage Boxes",
    "Basement Stairs",
    "Washing Machine",
    "Drying Rack",
    "Blender",
    "Garage Tools",
    "Lawn Mower",
    "Sofa Cushion",
    "Paper Towels",
    "Bed Sheets",
    "Floor Lamp",
    "Ironing Board"
  ];
  const urbanDictionaryPhrases = [
    "YOLO",
    "On Fleek",
    "Spill the Tea",
    "Basic",
    "Ghosting",
    "Savage",
    "Adulting",
    "Low-Key",
    "High-Key",
    "Shook",
    "Lit",
    "Slay",
    "Squad Goals",
    "Clap Back",
    "Thirsty",
    "Salty",
    "Bae",
    "No Cap",
    "Flexing",
    "Cringe",
    "Throwing Shade",
    "Glow Up",
    "Receipts",
    "Extra",
    "Woke",
    "DM Slide",
    "Stan",
    "Finsta",
    "Cancelled",
    "Gucci",
    "Boujee",
    "Goals AF",
    "Simp",
    "Mood",
    "Snatched",
    "Big Yikes",
    "TMI",
    "Ok Boomer",
    "Vibe Check",
    "Netflix Cheating",
    "Main Character",
    "Tea Spill",
    "Karen",
    "Hard Pass",
    "Hot Mess",
    "Ratchet",
    "Drip",
    "Fire",
    "Sus",
    "Clout"
  ];        

  const [wordBank, setWordBank] = useState([]);
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [teamAScore, setTeamAScore] = useState(0);
  // const [teamBScore, setTeamBScore] = useState(0);

  useEffect(() => {
    // Set the word bank based on the category
    if (category === "Fun and Games") {
      setWordBank(funAndGamesPhrases);
    } else if (category === "The World") {
      setWordBank(theWorldPhrases);
    } else if (category === "Entertainment") {
      setWordBank(entertainmentPhrases);
    } else if (category === "Slogans") {
      setWordBank(slogansPhrases);
    } else if (category === "Sports") {
      setWordBank(sportsPhrases);
    } else if (category === "Snack Time") {
      setWordBank(snackTimePhrases);
    } else if (category === "Around the House") {
      setWordBank(aroundTheHousePhrases);
    } else if (category === "Urban Dictionary") {
      setWordBank(urbanDictionaryPhrases);
    }
  }, [category]);

  useEffect(() => {
    if (wordBank.length > 0) {
      displayNextWord();
    }
  }, [wordBank]);

  const displayNextWord = () => {
    setCurrentWord(wordBank[currentIndex]);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % wordBank.length);
  };

  return (
    <main className="flex-grow-1 w-100">
      <div className="player-status text-center">
      </div>
      <h1 className="text-primary">{category}</h1>
      <div className="game-container">
        <div className="text-light">
          <h2 className='custom-color'>Team A</h2>
          <p className='custom-color' id="team-a-score">0</p>
        </div>
        <div className="game-center">
          <div id="word-box">{currentWord}</div>
          <button onClick={displayNextWord} id="next-button" type="button" className="btn btn-primary">
            Next
          </button>
        </div>
        <div className="text-light">
          <h2 className='custom-color'>Team B</h2>
          <p className='custom-color' id="team-b-score">0</p>
        </div>
      </div>
    </main>
  );
}