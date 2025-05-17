export function MoviesData() {
  const movies = [
    {
      title: "Extraction",
      genre: "Action",
      language: "English",
      year: 2020,
      image: "/src/images/extraction.jpeg",
      description: "A black-market mercenary rescues the kidnapped son of a crime lord in a deadly underworld.",
      cast: ["Chris Hemsworth", "Rudhraksh Jaiswal", "Randeep Hooda", "Golshifteh Farahani"],
      maturity_rating: "R"
    },
    {
      title: "John Wick",
      genre: "Action",
      language: "English",
      year: 2014,
      image: "/src/images/john_wick.jpeg",
      description: "A retired hitman seeks vengeance against those who wronged him.",
      cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen", "Ian McShane"],
      maturity_rating: "R"
    },
    {
      title: "Mad Max: Fury Road",
      genre: "Action",
      language: "English",
      year: 2015,
      image: "/src/images/mad_max.jpeg",
      description: "In a post-apocalyptic wasteland, rebels fight a tyrant controlling resources.",
      cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
      maturity_rating: "R"
    },
    {
      title: "The Pursuit of Happyness",
      genre: "Drama",
      language: "English",
      year: 2006,
      image: "/src/images/pursuit_hapyness.jpeg",
      description: "A salesman struggles to build a better life for his son.",
      cast: ["Will Smith", "Jaden Smith", "Thandiwe Newton"],
      maturity_rating: "PG-13"
    },
    {
      title: "Marriage Story",
      genre: "Drama",
      language: "English",
      year: 2019,
      image: "/src/images/marriage.jpeg",
      description: "A couple navigates a painful divorce with personal and professional challenges.",
      cast: ["Adam Driver", "Scarlett Johansson", "Laura Dern"],
      maturity_rating: "R"
    },
    {
      title: "The Social Network",
      genre: "Drama",
      language: "English",
      year: 2010,
      image: "/src/images/social.jpeg",
      description: "The founding of Facebook and the legal battles it sparked.",
      cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
      maturity_rating: "PG-13"
    },
    {
      title: "The Hangover",
      genre: "Comedy",
      language: "English",
      year: 2009,
      image: "/src/images/hangover.jpeg",
      description: "Three friends retrace their wild night in Vegas to find their missing companion.",
      cast: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"],
      maturity_rating: "R"
    },
    {
      title: "Superbad",
      genre: "Comedy",
      language: "English",
      year: 2007,
      image: "/src/images/superbad.jpeg",
      description: "Two friends aim for a wild night before graduation with unexpected results.",
      cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"],
      maturity_rating: "R"
    },
    {
      title: "Step Brothers",
      genre: "Comedy",
      language: "English",
      year: 2008,
      image: "/src/images/step_brothers.jpeg",
      description: "Two adult men become stepbrothers and cause chaos in their new family.",
      cast: ["Will Ferrell", "John C. Reilly"],
      maturity_rating: "R"
    },
    {
      title: "La La Land",
      genre: "Romance",
      language: "English",
      year: 2016,
      image: "/src/images/la_la_land.jpeg",
      description: "An actress and a jazz musician fall in love while pursuing their dreams.",
      cast: ["Ryan Gosling", "Emma Stone", "John Legend"],
      maturity_rating: "PG-13"
    },
    {
      title: "The Notebook",
      genre: "Romance",
      language: "English",
      year: 2004,
      image: "/src/images/notebook.jpeg",
      description: "An old man reads a love story to a woman with Alzheimer's.",
      cast: ["Ryan Gosling", "Rachel McAdams"],
      maturity_rating: "PG-13"
    },
    {
      title: "To All the Boys I've Loved Before",
      genre: "Romance",
      language: "English",
      year: 2018,
      image: "/src/images/loved.jpeg",
      description: "A teen girl's secret love letters are exposed to her crushes.",
      cast: ["Lana Condor", "Noah Centineo"],
      maturity_rating: "TV-14"
    },
    {
      title: "Inception",
      genre: "Sci-Fi",
      language: "English",
      year: 2010,
      image: "/src/images/inception.jpeg",
      description: "A thief who steals corporate secrets through dream-sharing is given a final job.",
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      maturity_rating: "PG-13"
    },
    {
      title: "Interstellar",
      genre: "Sci-Fi",
      language: "English",
      year: 2014,
      image: "/src/images/inter.jpeg",
      description: "Explorers travel through a wormhole in search of a new home for humanity.",
      cast: ["Matthew McConaughey", "Anne Hathaway"],
      maturity_rating: "PG-13"
    },
    {
      title: "The Matrix",
      genre: "Sci-Fi",
      language: "English",
      year: 1999,
      image: "/src/images/matrix.jpeg",
      description: "A hacker learns about the true nature of his reality and joins a rebellion.",
      cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      maturity_rating: "R"
    },
    {
      title: "Get Out",
      genre: "Horror",
      language: "English",
      year: 2017,
      image: "/src/images/out.jpeg",
      description: "A man uncovers disturbing secrets while visiting his girlfriend’s family.",
      cast: ["Daniel Kaluuya", "Allison Williams"],
      maturity_rating: "R"
    },
    {
      title: "A Quiet Place",
      genre: "Horror",
      language: "English",
      year: 2018,
      image: "/src/images/quiet.jpeg",
      description: "A family must live in silence to survive blind monsters with acute hearing.",
      cast: ["Emily Blunt", "John Krasinski"],
      maturity_rating: "PG-13"
    },
    {
      title: "The Conjuring",
      genre: "Horror",
      language: "English",
      year: 2013,
      image: "/src/images/conjuring.jpeg",
      description: "Paranormal investigators help a family terrorized by a dark presence.",
      cast: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"],
      maturity_rating: "R"
    },
    {
      title: "Coco",
      genre: "Animated",
      language: "English",
      year: 2017,
      image: "/src/images/coco.jpeg",
      description: "A young boy journeys to the Land of the Dead to discover his family’s legacy.",
      cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
      maturity_rating: "PG"
    },

     {
    title: "The Office",
    genre: "US TV Shows, TV Comedies",
    language: "English",
    year: 2005,
    image: "/src/images/the_office.jpeg",
    description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
    cast: ["Steve Carell", "John Krasinski", "Jenna Fischer"],
    maturity_rating: "TV-14"
  },
  {
    title: "Brooklyn Nine-Nine",
    genre: "US TV Shows, TV Comedies",
    language: "English",
    year: 2013,
    image: "/src/images/brooklyn99.jpeg",
    description: "Comedy series following the exploits of the 99th precinct of the NYPD, as they solve crimes while navigating their personal lives.",
    cast: ["Andy Samberg", "Terry Crews", "Stephanie Beatriz"],
    maturity_rating: "TV-14"
  },
  
  {
    title: "The Witch",
    genre: "Horror",
    language: "English",
    year: 2015,
    image: "/src/images/witch.jpeg",
    description: "In 1630s New England, a family is torn apart by the forces of witchcraft, black magic, and possession.",
    cast: ["Anya Taylor-Joy", "Ralph Ineson", "Kate Dickie"],
    maturity_rating: "R"
  },
  {
    title: "Blade Runner 2049",
    genre: "Sci-Fi",
    language: "English",
    year: 2017,
    image: "/src/images/blade_runner_2049.jpeg",
    description: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
    maturity_rating: "R"
  },

  {
        title: "Dhamaka 2",
        genre: "Action, Thriller",
        language: "Hindi",
        year: 2024,
        image: "/src/images/dhamaka2.jpeg",
        description: "The high-octane sequel to Dhamaka, where the protagonist faces a new threat in the digital age.",
        cast: ["Kartik Aaryan", "Mrunal Thakur", "Amruta Subhash"],
        maturity_rating: "U/A"
    },
    {
        title: "Brahmastra",
        genre: "Fantasy, Action",
        language: "Hindi",
        year: 2024,
        image: "/src/images/brahmastra.jpeg",
        description: "The second installment of the epic saga, continuing the battle between forces of good and evil with powerful elemental weapons.",
        cast: ["Ranbir Kapoor", "Alia Bhatt", "Amitabh Bachchan", "Mouni Roy"],
        maturity_rating: "U/A"
    },
    {
        title: "Pathaan 2",
        genre: "Action, Thriller",
        language: "Hindi",
        year: 2025,
        image: "/src/images/pathaan2.jpeg",
        description: "The much-anticipated sequel to Pathaan, continuing the action-packed saga of espionage and revenge.",
        cast: ["Shah Rukh Khan", "Deepika Padukone", "John Abraham"],
        maturity_rating: "U/A"
    },
    {
        title: "Kalki 2898 AD",
        genre: "Sci-Fi, Action",
        language: "Hindi",
        year: 2025,
        image: "/src/images/kalki2898.jpeg",
        description: "A futuristic sci-fi thriller set in the year 2898, where the protagonist embarks on a journey to save Earth from destruction.",
        cast: ["Hrithik Roshan", "Deepika Padukone", "Amitabh Bachchan"],
        maturity_rating: "U/A"
    },
    {
        title: "Sardar 2",
        genre: "Action, Drama",
        language: "Tamil",
        year: 2024,
        image: "/src/images/sardar2.jpeg",
        description: "A gripping action drama following the journey of an undercover agent tasked with bringing down a corrupt empire.",
        cast: ["Karthi", "Raashi Khanna", "Chunky Pandey"],
        maturity_rating: "U/A"
    },
    {
        title: "Gully Boy 2",
        genre: "Drama, Music",
        language: "Hindi",
        year: 2025,
        image: "/src/images/gullyboy2.jpeg",
        description: "The sequel to Gully Boy, continuing the story of an aspiring rapper from the streets of Mumbai as he rises to fame.",
        cast: ["Ranveer Singh", "Alia Bhatt", "Siddhant Chaturvedi"],
        maturity_rating: "U/A"
    },
    {
        title: "Don 3",
        genre: "Action, Thriller",
        language: "Hindi",
        year: 2024,
        image: "/src/images/don3.jpeg",
        description: "The third chapter in the thrilling Don franchise, where the notorious gangster takes on more powerful adversaries.",
        cast: ["Shah Rukh Khan", "Priyanka Chopra", "Siddhant Chaturvedi"],
        maturity_rating: "U/A"
    },
    {
        title: "Bholaa 2",
        genre: "Action, Drama",
        language: "Hindi",
        year: 2025,
        image: "/src/images/bhola2.jpeg",
        description: "The sequel to the action-packed thriller Bholaa, where the protagonist faces new challenges while protecting his loved ones.",
        cast: ["Ajay Devgn", "Tabu", "Raai Laxmi"],
        maturity_rating: "U/A"
    },
    {
        title: "Baahubali 3: The Finale",
        genre: "Action, Drama, Fantasy, Indian Action Films",
        language: "Telugu",
        year: 2024,
        image: "/src/images/baahubali3.jpeg",
        description: "The final chapter in the epic Baahubali saga, as the battle for the throne reaches its climax with epic war sequences.",
        cast: ["Prabhas", "Anushka Shetty", "Rana Daggubati"],
        maturity_rating: "U/A"
    },
    {
        title: "Jersey 2",
        genre: "Sports, Drama",
        language: "Hindi",
        year: 2025,
        image: "/src/images/jersey2.jpeg",
        description: "The sequel to the inspiring sports drama Jersey, where the protagonist continues his journey of redemption on the cricket field.",
        cast: ["Shahid Kapoor", "Mrunal Thakur", "Pankaj Kapur"],
        maturity_rating: "U/A"
    },

  {
    title: "Descendants of the Sun",
    genre: "East Asian Medical TV Shows, Korean",
    language: "Korean",
    year: 2016,
    image: "/src/images/descendants_of_the_sun.jpeg",
    description: "A love story between a special forces captain and a doctor who meet in a war-torn country.",
    cast: ["Song Joong-ki", "Song Hye-kyo", "Jin Goo"],
    maturity_rating: "TV-14"
  },
  {
    title: "Memories of Murder",
    genre: "Korean, Crime, Thriller",
    language: "Korean",
    year: 2003,
    image: "/src/images/memories_of_murder.jpeg",
    description: "In a small Korean province in 1986, two detectives struggle with the case of multiple young women being found raped and murdered.",
    cast: ["Song Kang-ho", "Kim Sang-kyung", "Kim Roe-ha"],
    maturity_rating: "R"
  },
  {
    title: "RRR",
    genre: "Indian Action Films",
    language: "Telugu",
    year: 2022,
    image: "/src/images/rrr.jpeg",
    description: "A fictional tale about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.",
    cast: ["N.T. Rama Rao Jr.", "Ram Charan", "Alia Bhatt"],
    maturity_rating: "U/A"
  },
  {
    title: "Singham",
    genre: "Indian Action Films",
    language: "Hindi",
    year: 2011,
    image: "/src/images/singham.jpeg",
    description: "An honest police officer fights against corruption and injustice in his town.",
    cast: ["Ajay Devgn", "Kajal Aggarwal", "Prakash Raj"],
    maturity_rating: "U/A"
  },
  {
    title: "The Handmaiden",
    genre: "Korean, Thriller",
    language: "Korean",
    year: 2016,
    image: "/src/images/the_handmaiden.jpeg",
    description: "A woman is hired as a handmaiden to a Japanese heiress, but secretly involved in a plot to defraud her.",
    cast: ["Kim Min-hee", "Kim Tae-ri", "Ha Jung-woo"],
    maturity_rating: "R"
  },
  
  {
    title: "Annihilation",
    genre: "Sci-Fi",
    language: "English",
    year: 2018,
    image: "/src/images/annihilation.jpeg",
    description: "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.",
    cast: ["Natalie Portman", "Jennifer Jason Leigh", "Tessa Thompson"],
    maturity_rating: "R"
  },
  {
    title: "Oldboy",
    genre: "Korean, Action, Drama, Mystery",
    language: "Korean",
    year: 2003,
    image: "/src/images/oldboy.jpeg",
    description: "After being kidnapped and imprisoned for fifteen years, Oh Dae-su is released, only to find that he must find his captor in five days.",
    cast: ["Choi Min-sik", "Yoo Ji-tae", "Kang Hye-jung"],
    maturity_rating: "R"
  },
  {
    title: "The Villainess",
    genre: "Korean, Action",
    language: "Korean",
    year: 2017,
    image: "/src/images/the_villainess.jpeg",
    description: "A female assassin leaves a trail of bodies behind her as she seeks revenge.",
    cast: ["Kim Ok-bin", "Shin Ha-kyun", "Sung Joon"],
    maturity_rating: "R"
  },
  {
    title: "Kaante",
    genre: "Indian Action Films",
    language: "Hindi",
    year: 2002,
    image: "/src/images/kaante.jpeg",
    description: "Six bank robbers find themselves stranded in Los Angeles after a heist goes wrong.",
    cast: ["Amitabh Bachchan", "Sanjay Dutt", "Suniel Shetty"],
    maturity_rating: "U/A"
  },
  {
    title: "Enthiran",
    genre: "Indian Action Films",
    language: "Tamil",
    year: 2010,
    image: "/src/images/enthiran.jpeg",
    description: "A scientist creates an android that develops human emotions and falls in love with the scientist's girlfriend.",
    cast: ["Rajinikanth", "Aishwarya Rai Bachchan", "Danny Denzongpa"],
    maturity_rating: "U/A"
  },
  {
    title: "The Wailing",
    genre: "Korean, Horror",
    language: "Korean",
    year: 2016,
    image: "/src/images/the_wailing.jpeg",
    description: "A mysterious sickness spreads in a small Korean village, leading to suspicion and hysteria.",
    cast: ["Kwak Do-won", "Hwang Jung-min", "Jun Kunimura"],
    maturity_rating: "R"
  },

   { 
    title: "The Expanse", 
    genre: "Drama, Mystery, Sci-Fi", 
    language: "English", 
    year: 2015, 
    image: "/src/images/expanse.jpeg", 
    description: "In a future where humanity has colonized the Solar System, a conspiracy threatens the peace between Earth, Mars, and the Asteroid Belt.", 
    cast: ["Thomas Jane", "Steven Strait", "Cas Anvar"], 
    maturity_rating: "TV-MA"
  },
  { 
    title: "Black Mirror", 
    genre: "Drama, Sci-Fi, Thriller", 
    language: "English", 
    year: 2011, 
    image: "/src/images/black_mirror.jpeg", 
    description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.", 
    cast: ["Daniel Lapaine", "Toby Kebbell", "Hannah John-Kamen"], 
    maturity_rating: "TV-MA"
  },

  { 
    title: "Money Heist", 
    genre: "Action, Crime, Drama", 
    language: "Spanish", 
    year: 2017, 
    image: "/src/images/money_heist.jpeg", 
    description: "A criminal mastermind and his crew of robbers attempt to carry out an ambitious plan to rob the Royal Mint of Spain.", 
    cast: ["Álvaro Morte", "Úrsula Corberó", "Itziar Ituño"], 
    maturity_rating: "TV-MA"
  },

  {
        title: "Avatar: Fire and Ash",
        genre: "Sci-Fi, Action",
        language: "English",
        year: 2025,
        image: "/src/images/avatar_fire_and_ash.jpeg",
        description: "The third installment in James Cameron's Avatar franchise, focusing on Neytiri's journey as she confronts the 'Ash People'.",
        cast: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Kate Winslet", "Giovanni Ribisi"],
        maturity_rating: "PG-13"
    },
    {
        title: "Dune: Part Two",
        genre: "Sci-Fi, Drama",
        language: "English",
        year: 2024,
        image: "/src/images/dune_part_two.jpeg",
        description: "The epic continuation of Paul Atreides' journey, as he battles on the desert planet of Arrakis.",
        cast: ["Timothée Chalamet", "Zendaya", "Oscar Isaac", "Rebecca Ferguson", "Stellan Skarsgård"],
        maturity_rating: "PG-13"
    },
    {
        title: "The Hunger Games: The Ballad of Songbirds and Snakes",
        genre: "Action, Sci-Fi",
        language: "English",
        year: 2024,
        image: "/src/images/hunger_games_ballad.jpeg",
        description: "A prequel set in Panem, focusing on Coriolanus Snow’s rise to power during the 10th Hunger Games.",
        cast: ["Rachel Zegler", "Tom Blyth", "Hunter Schafer", "Jason Schwartzman"],
        maturity_rating: "PG-13"
    },
    {
        title: "Deadpool 3",
        genre: "Action, Comedy, Superhero",
        language: "English",
        year: 2024,
        image: "/src/images/deadpool_3.jpeg",
        description: "Deadpool is back with new adventures, crossing over with the X-Men universe and joined by Wolverine.",
        cast: ["Ryan Reynolds", "Hugh Jackman", "Karan Soni", "Morena Baccarin"],
        maturity_rating: "R"
    },
    {
        title: "Fantastic Four",
        genre: "Action, Sci-Fi",
        language: "English",
        year: 2025,
        image: "/src/images/fantastic_four.jpeg",
        description: "Marvel's new take on the classic superhero team, as they face a universe-threatening villain.",
        cast: ["John Krasinski", "Emily Blunt", "Kurt Russell", "Meryl Streep"],
        maturity_rating: "PG-13"
    },
   
    {
        title: "Mission: Impossible – Dead Reckoning Part One",
        genre: "Action, Thriller",
        language: "English",
        year: 2024,
        image: "/src/images/mission_impossible_dead_reckoning.jpeg",
        description: "Ethan Hunt faces his toughest mission yet in a thrilling continuation of the Mission: Impossible saga.",
        cast: ["Tom Cruise", "Hayley Atwell", "Simon Pegg", "Rebecca Ferguson"],
        maturity_rating: "PG-13"
    },
    {
        title: "Aquaman and the Lost Kingdom",
        genre: "Action, Adventure, Superhero",
        language: "English",
        year: 2024,
        image: "/src/images/aquaman_lost_kingdom.jpeg",
        description: "Aquaman faces his most dangerous threat yet as he uncovers ancient secrets of the ocean.",
        cast: ["Jason Momoa", "Amber Heard", "Patrick Wilson", "Yahya Abdul-Mateen II"],
        maturity_rating: "PG-13"
    },
    {
        title: "Guardians of the Galaxy Vol. 3",
        genre: "Action, Adventure, Sci-Fi",
        language: "English",
        year: 2024,
        image: "/src/images/guardians_vol_3.jpeg",
        description: "The Guardians return for one last adventure in space, with the fate of the universe at stake.",
        cast: ["Chris Pratt", "Zoe Saldaña", "Dave Bautista", "Bradley Cooper", "Vin Diesel"],
        maturity_rating: "PG-13"
    },
    {
        title: "The Marvels",
        genre: "Action, Adventure, Sci-Fi",
        language: "English",
        year: 2024,
        image: "/src/images/the_marvels.jpeg",
        description: "Captain Marvel, Monica Rambeau, and Kamala Khan team up to face a new cosmic threat.",
        cast: ["Brie Larson", "Teyonah Parris", "Iman Vellani", "Zawe Ashton"],
        maturity_rating: "PG-13"
    },

    {
        title: "Fighter",
        genre: "Action, Drama",
        language: "Hindi",
        year: 2024,
        image: "/src/images/fighter.jpeg",
        description: "A high-octane action film about an elite fighter, played by Hrithik Roshan, preparing for the biggest challenge of his career.",
        cast: ["Hrithik Roshan", "Deepika Padukone", "Anil Kapoor"],
        maturity_rating: "U/A"
    },
    {
        title: "Dunki",
        genre: "Drama, Comedy",
        language: "Hindi",
        year: 2025,
        image: "/src/images/dunki.jpeg",
        description: "A heartwarming comedy about an NRI returning to India, starring Shah Rukh Khan in a dramatic yet funny role.",
        cast: ["Shah Rukh Khan", "Taapsee Pannu"],
        maturity_rating: "U/A"
    },
    {
        title: "Lal Singh Chaddha 2",
        genre: "Drama, Comedy",
        language: "Hindi",
        year: 2025,
        image: "/src/images/lal_singh_chaddha_2.jpeg",
        description: "A sequel to the successful 'Lal Singh Chaddha', this film follows the life and journeys of Lal Singh as he travels across India.",
        cast: ["Aamir Khan", "Kareena Kapoor Khan"],
        maturity_rating: "U/A"
    },

    {
        title: "The Night Owl",
        genre: "Thriller, Mystery",
        language: "Korean",
        year: 2024,
        image: "/src/images/night_owl.jpeg",
        description: "A gripping thriller about a man seeking revenge after his family's tragic death, uncovering deep conspiracies.",
        cast: ["Kim So-eun", "Lee Sung-min"],
        maturity_rating: "18+"
    },
    {
        title: "The King's Fate",
        genre: "Historical, Drama",
        language: "Korean",
        year: 2024,
        image: "/src/images/kings_fate.jpeg",
        description: "Set in the Joseon era, the film follows a young king caught in a battle between loyalty and justice.",
        cast: ["Park Seo-joon", "Kim Ji-won", "Ahn Jae-hong"],
        maturity_rating: "15+"
    },
    {
        title: "Nightmare in Seoul",
        genre: "Horror, Thriller",
        language: "Korean",
        year: 2025,
        image: "/src/images/nightmare_seoul.jpeg",
        description: "A terrifying tale of a group of friends who accidentally awaken a deadly spirit while on a weekend getaway.",
        cast: ["Kim Soo-hyun", "Han So-hee"],
        maturity_rating: "18+"
    },
    {
        title: "Call Boy",
        genre: "Romance, Drama",
        language: "Korean",
        year: 2025,
        image: "/src/images/call_boy.jpeg",
        description: "A romantic drama about the life of a call boy navigating complex relationships and self-discovery.",
        cast: ["Lee Jung-jae", "Jeon Yeo-bin"],
        maturity_rating: "18+"
    },
    {
        title: "The Devil's Game",
        genre: "Action, Mystery, Thriller",
        language: "Korean",
        year: 2024,
        image: "/src/images/devils_game.jpeg",
        description: "A detective hunts down a criminal mastermind who has been controlling major criminal activities from the shadows.",
        cast: ["Lee Byung-hun", "Kim Woo-bin"],
        maturity_rating: "15+"
    },
  
      {
        title: "Toy Story 4",
        genre: "Animated",
        language: "English",
        year: 2019,
        image: "/src/images/toy.jpeg",
        description: "Woody, Buzz Lightyear, and the rest of the toys embark on a road trip with Bonnie and a new toy called Forky. Their adventure leads to old friends and unexpected challenges.",
        cast: ["Tom Hanks", "Tim Allen", "Annie Potts", "Tony Hale"],
        episodes: "1 (Movie)",
        maturityRate: "U/A",
      },
      {
        title: "Soul",
        genre: "Animated",
        language: "English",
        year: 2020,
        image: "/src/images/soul.jpeg",
        description: "A middle school music teacher's soul is accidentally separated from his body and must find a way back with the help of a spirited soul named 22 before it's too late.",
        cast: ["Jamie Foxx", "Tina Fey", "Phyllis Smith", "Questlove"],
        episodes: "1 (Movie)",
        maturityRate: "U",
      },
      {
        title: "Parasite",
        genre: "Thriller",
        language: "Korean",
        year: 2019,
        image: "/src/images/parasite.jpeg",
        description: "A poor family schemes to become employed by a wealthy family, leading to unexpected consequences as they infiltrate their lives.",
        cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Park So-dam"],
        episodes: "1 (Movie)",
        maturityRate: "U/A",
      },
      {
        title: "Train to Busan",
        genre: "Horror",
        language: "Korean",
        year: 2016,
        image: "/src/images/busan.jpeg",
        description: "A father and daughter struggle to survive when a zombie virus breaks out on a train headed to Busan. They must overcome their fears to survive.",
        cast: ["Gong Yoo", "Jung Yu-mi", "Ma Dong-seok", "Choi Woo-shik"],
        episodes: "1 (Movie)",
        maturityRate: "U/A",
      },
      {
        title: "Minari",
        genre: "Drama",
        language: "Korean",
        year: 2020,
        image: "/src/images/minari.jpeg",
        description: "A Korean-American family moves to rural Arkansas in search of their own American Dream. The film explores their experiences and struggles as they adjust to a new life.",
        cast: ["Steven Yeun", "Yeri Han", "Alan Kim", "Noel Kate Cho"],
        episodes: "1 (Movie)",
        maturityRate: "U",
      },
      {
        title: "The Dark Knight",
        genre: "Action, Crime, Drama",
        language: "English",
        year: 2008,
        image: "/src/images/dark.jpeg",
        description: "Batman faces off against the Joker, a criminal mastermind who seeks to create chaos and dismantle Gotham City. This battle forces Batman to confront his own ethical boundaries.",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
        episodes: "1 (Movie)",
        maturityRate: "U/A",
      },
      {
        title: "The Godfather",
        genre: "Crime, Drama",
        language: "English",
        year: 1972,
        image: "/src/images/godfather.jpeg",
        description: "The story of the powerful Corleone family, focusing on the transition of power from the aging Vito Corleone to his reluctant son Michael.",
        cast: ["Marlon Brando", "Al Pacino", "James Caan", "Diane Keaton"],
        episodes: "1 (Movie)",
        maturityRate: "U/A",
      },
      {
        title: "Avengers: Endgame",
        genre: "Action, Adventure, Drama",
        language: "English",
        year: 2019,
        image: "/src/images/avengers.jpeg",
        description: "The Avengers assemble once more to undo the damage done by Thanos in the previous film. They must navigate time and space to stop the villain and restore the universe.",
        cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
        episodes: "1 (Movie)",
        maturityRate: "U/A",
      },
      {
        title: "The Lion King",
        genre: "Animation, Adventure, Drama",
        language: "English",
        year: 1994,
        image: "/src/images/lion.jpeg",
        description: "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery when he is called to reclaim his place as the rightful king.",
        cast: ["Matthew Broderick", "James Earl Jones", "Jeremy Irons", "Whoopi Goldberg"],
        episodes: "1 (Movie)",
        maturityRate: "U",
      },
      {
        title: "Titanic",
        genre: "Drama, Romance",
        language: "English",
        year: 1997,
        image: "/src/images/titanic.jpeg",
        description: "A young couple from different social classes fall in love aboard the ill-fated R.M.S. Titanic during its maiden voyage, leading to a tragic love story amidst the disaster.",
        cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Danny Nucci"],
        episodes: "1 (Movie)",
        maturityRate: "U/A",
      },

      
  {
    title: "Kantara",
    genre: "Action, Thriller",
    language: "Kannada",
    year: 2022,
    image: "/src/images/kantara.jpeg",
    description: "A gripping tale of action and mystery set against the backdrop of rural life in Karnataka.",
    cast: ["Rishab Shetty", "Kishore", "Sapthami Gowda"],
    maturity_rating: "U/A"
  },
  {
    title: "Bahubali: The Beginning",
    genre: "Action, Drama",
    language: "Telugu",
    year: 2015,
    image: "/src/images/bahubali.jpeg",
    description: "A historical drama about the struggle for power in the kingdom of Mahishmati.",
    cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannaah"],
    maturity_rating: "U/A"
  },
  {
    title: "My Sassy Girl",
    genre: "Romantic Comedy",
    language: "Korean",
    year: 2001,
    image: "/src/images/sassy.jpeg",
    description: "A man falls in love with an eccentric and unpredictable woman, leading to a series of comedic and emotional events.",
    cast: ["Jun Ji-hyun", "Cha Tae-hyun"],
    maturity_rating: "PG"
  },
  {
    title: "Silenced",
    genre: "Drama",
    language: "Korean",
    year: 2011,
    image: "/src/images/silenced.jpeg",
    description: "A teacher fights to expose the sexual abuse and atrocities against children in a Korean school.",
    cast: ["Gong Yoo", "Jung Yu-mi"],
    maturity_rating: "R"
  },
  {
    title: "Mother",
    genre: "Mystery",
    language: "Korean",
    year: 2009,
    image: "/src/images/mother.jpeg",
    description: "A mother investigates the case of her mentally challenged son, who is accused of a crime he may not have committed.",
    cast: ["Kim Hye-ja", "Won Bin"],
    maturity_rating: "R"
  },
  {
    title: "Secretly Greatly",
    genre: "Action",
    language: "Korean",
    year: 2013,
    image: "/src/images/secretly.jpeg",
    description: "Three North Korean spies live undercover as ordinary South Korean citizens, until one of them discovers a deep secret.",
    cast: ["Kim Soo-hyun", "Park Ki-woong", "Lee Hyun-woo"],
    maturity_rating: "PG-13"
  },
  {
    title: "A Werewolf Boy",
    genre: "Romance",
    language: "Korean",
    year: 2012,
    image: "/src/images/werewolf.jpeg",
    description: "A young girl befriends a mysterious boy who has the ability to transform into a werewolf, leading to a deep and unusual love story.",
    cast: ["Song Joong-ki", "Park Bo-young"],
    maturity_rating: "PG-13"
  },
  {
    title: "Okja",
    genre: "Adventure",
    language: "Korean",
    year: 2017,
    image: "/src/images/okja.jpeg",
    description: "A young girl and her super pig, Okja, must evade a large corporation trying to capture Okja for its own greedy purposes.",
    cast: ["Tilda Swinton", "Jake Gyllenhaal", "Seo Hyun"],
    maturity_rating: "R"
  },
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    language: "English",
    year: 1994,
    image: "/src/images/shawshank.jpeg",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    maturity_rating: "R"
  },
  {
    title: "Joker",
    genre: "Crime, Drama, Thriller",
    language: "English",
    year: 2019,
    image: "/src/images/joker.jpeg",
    description: "A troubled comedian's descent into madness and his transformation into the infamous criminal mastermind known as the Joker.",
    cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    maturity_rating: "R"
  },

  {
        title: "KGF: Chapter 2",
        genre: "Action, Drama",
        language: "Kannada",
        year: 2022,
        image: "/src/images/kgf2.jpeg",
        description: "The story of Rocky's rise to power and his fight against enemies in the Kolar Gold Fields.",
        cast: ["Yash", "Sanjay Dutt", "Raveena Tondon"],
        maturity_rating: "U/A"
    },
    {
        title: "Brahmastra: Part One – Shiva",
        genre: "Action, Adventure, Fantasy",
        language: "Hindi",
        year: 2022,
        image: "/src/images/brahmastra.jpeg",
        description: "A young man embarks on a journey to unlock the mysteries of the powerful Astras.",
        cast: ["Ranbir Kapoor", "Alia Bhatt", "Amitabh Bachchan", "Shah Rukh Khan"],
        maturity_rating: "U/A"
    },
    {
        title: "The Glory",
        genre: "Korean, Drama, Thriller",
        language: "Korean",
        year: 2022,
        image: "/src/images/theglory.jpeg",
        description: "A woman seeks revenge on her school bullies years after the trauma they inflicted on her.",
        cast: ["Song Hye-kyo", "Lee Do-hyun", "Im Ji-yeon"],
        maturity_rating: "U/A"
    },
    {
        title: "A Model Family",
        genre: "Korean, Crime, Drama, Thriller",
        language: "Korean",
        year: 2022,
        image: "/src/images/amodelfamily.jpeg",
        description: "A struggling middle-aged man stumbles into the criminal world and tries to balance his family's safety while navigating it.",
        cast: ["Woo Jung", "Park Hee-soon", "Jang Ryul"],
        maturity_rating: "U/A"
    },
    {
        title: "My Liberation Notes",
        genre: "Korean, Drama",
        language: "Korean",
        year: 2022,
        image: "/src/images/myliberationnotes.jpeg",
        description: "The story of three siblings who are trapped in an unremarkable life and yearn for a way to escape.",
        cast: ["Kim Ji-won", "Lee Min-ki", "Son Seok-koo"],
        maturity_rating: "U/A"
    },
    {
    title: "The Silent Sea",
    genre: "Korean, Sci-Fi, Thriller, Mystery",
    language: "Korean",
    year: 2022,
    image: "/src/images/silentsea.jpeg",
    description: "A team of astronauts is sent on a mission to the moon to retrieve a mysterious sample, uncovering shocking secrets along the way.",
    cast: ["Bae Doona", "Gong Yoo", "Lee Joon"],
    maturity_rating: "U/A"
  },
  {
    title: "Snowdrop",
    genre: "Korean, Drama, Romance, Thriller",
    language: "Korean",
    year: 2021,
    image: "/src/images/snowdrop.jpeg",
    description: "A love story set during a politically charged time in Korea, focusing on a student activist and a woman who harbors him.",
    cast: ["Jisoo", "Jung Hae-in", "Yoon Se-ah"],
    maturity_rating: "U/A"
  },
  {
    title: "Vikram",
    genre: "Action, Thriller, Indian Action Films",
    language: "Tamil",
    year: 2022,
    image: "/src/images/vikram.jpeg",
    description: "A cop investigates a series of mysterious killings, discovering a larger conspiracy.",
    cast: ["Kamal Haasan", "Fahadh Faasil", "Vijay Sethupathi"],
    maturity_rating: "U/A"
  },
  {
    title: "Pushpa: The Rise – Part 1",
    genre: "Action, Drama, Thriller Indian Action Films",
    language: "Telugu",
    year: 2022,
    image: "/src/images/pushpa.jpeg",
    description: "The rise of Pushpa Raj, a red sandalwood smuggler, in the forests of Andhra Pradesh.",
    cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"],
    maturity_rating: "U/A"
  },
  {
    title: "Shamshera",
    genre: "Action, Adventure, Drama",
    language: "Hindi",
    year: 2022,
    image: "/src/images/shamshera.jpeg",
    description: "A dacoit and his battle against the British army for the freedom of his tribe.",
    cast: ["Ranbir Kapoor", "Sanjay Dutt", "Vaani Kapoor"],
    maturity_rating: "U/A"
  },
  {
    title: "Antim: The Final Truth",
    genre: "Action, Indian Action Films, Crime, Drama",
    language: "Hindi",
    year: 2021,
    image: "/src/images/antim.jpeg",
    description: "A clash between a tough cop and a powerful gangster leads to a violent struggle for justice.",
    cast: ["Salman Khan", "Aayush Sharma", "Mahima Makwana"],
    maturity_rating: "U/A"
  },
  {
    title: "Satyamave Jayate 2",
    genre: "Action, Indian Action Films, Drama",
    language: "Hindi",
    year: 2021,
    image: "/src/images/satyamave_jayate2.jpeg",
    description: "A vigilante film that challenges the corrupt system with dramatic action and intense combat.",
    cast: ["John Abraham", "Divya Khosla Kumar"],
    maturity_rating: "U/A"
  },
  

   {
        title: "Hospital Playlist",
        genre: "East Asian Medical TV Shows, Drama, Comedy",
        language: "Korean",
        year: 2020,
        image: "/src/images/hospitalplaylist.jpeg",
        description: "Follows the lives of five doctors who have been friends since medical school, sharing the challenges of work and life.",
        cast: ["Jo Jung-suk", "Yoo Yeon-seok", "Jung Kyung-ho"],
        maturity_rating: "U/A"
    },
    {
        title: "Dr. Romantic",
        genre: "East Asian Medical TV Shows, Drama, Romance",
        language: "Korean",
        year: 2016,
        image: "/src/images/drromantic.jpeg",
        description: "A surgeon with a mysterious past mentors young doctors and challenges the medical world with his unconventional approach.",
        cast: ["Han Suk-kyu", "Lee Sung-kyung", "Ahn Hyo-seop"],
        maturity_rating: "U/A"
    },
    {
        title: "The Good Doctor",
        genre: "East Asian Medical TV Shows, Drama",
        language: "Korean",
        year: 2013,
        image: "/src/images/thegooddoctor.jpeg",
        description: "A talented surgeon with autism and savant syndrome must prove himself in the medical field while dealing with prejudice.",
        cast: ["Joo Won", "Moon Chae-won", "Kim Min-seo"],
        maturity_rating: "U/A"
    },
    {
        title: "Life",
        genre: "East Asian Medical TV Shows, Drama, Thriller",
        language: "Korean",
        year: 2018,
        image: "/src/images/life.jpeg",
        description: "A hospital's top management must deal with internal conflicts, corporate politics, and ethical dilemmas.",
        cast: ["Lee Dong-wook", "Cho Seung-woo", "Won Jin-ah"],
        maturity_rating: "U/A"
    },
    {
        title: "Doctors",
        genre: "East Asian Medical TV Shows, Drama, Romance",
        language: "Korean",
        year: 2016,
        image: "/src/images/doctors.jpeg",
        description: "A story about a rebellious woman who becomes a skilled neurosurgeon and navigates her relationships with mentors and love interests.",
        cast: ["Park Shin-hye", "Kim Rae-won", "Lee Sung-kyung"],
        maturity_rating: "U/A"
    },
    {
        title: "Grey's Anatomy: Korea",
        genre: "East Asian Medical TV Shows, Drama",
        language: "Korean",
        year: 2020,
        image: "/src/images/greysanatomykorea.jpeg",
        description: "Korean adaptation of the popular American series, following the complex relationships and medical cases in a hospital.",
        cast: ["Jung Kyung-ho", "Jeon Mi-do", "Kim Hye-eun"],
        maturity_rating: "U/A"
    },
    {
        title: "Emergency Couple",
        genre: "East Asian Medical TV Shows, Drama, Romance",
        language: "Korean",
        year: 2014,
        image: "/src/images/emergencycouple.jpeg",
        description: "A divorced couple who both work in the emergency department must overcome their past while dealing with medical crises.",
        cast: ["Song Ji-hyo", "Choi Jin-hyuk", "Lee Pil-mo"],
        maturity_rating: "U/A"
    },
    
    {
        title: "The Smile Has Left Your Eyes",
        genre: "East Asian Medical TV Shows, Drama, Thriller",
        language: "Korean",
        year: 2018,
        image: "/src/images/thesmilehasleftyoureyes.jpeg",
        description: "A psychological thriller about a doctor caught in a complex relationship while investigating a mysterious death.",
        cast: ["Seo In-guk", "Jang Na-ra", "Park Sung-woong"],
        maturity_rating: "U/A"
    },
    {
        title: "Suits (Korean Version)",
        genre: "East Asian Medical TV Shows, Drama, Legal",
        language: "Korean",
        year: 2018,
        image: "/src/images/suitskorean.jpeg",
        description: "A young lawyer with a brilliant memory and no legal degree joins a prestigious law firm, using his skills to solve cases.",
        cast: ["Jang Dong-gun", "Park Hyung-sik", "Choi Gwi-hwa"],
        maturity_rating: "U/A"
    },
    {
        title: "Frozen II",
        genre: "Animated, Adventure, Fantasy",
        language: "English",
        year: 2019,
        image: "/src/images/frozen2.jpeg",
        description: "Elsa, Anna, Kristoff, and Olaf embark on a dangerous journey to discover the origins of Elsa's magical powers.",
        cast: ["Idina Menzel", "Kristen Bell", "Josh Gad"],
        maturity_rating: "PG"
    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        genre: "Animated, Action, Adventure",
        language: "English",
        year: 2018,
        image: "/src/images/spiderverse.jpeg",
        description: "Miles Morales becomes Spider-Man and must team up with other Spider-People from different dimensions to save the multiverse.",
        cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
        maturity_rating: "PG"
    },
   
    {
        title: "Zootopia",
        genre: "Animated, Adventure, Comedy",
        language: "English",
        year: 2016,
        image: "/src/images/zootopia.jpeg",
        description: "A rabbit police officer and a fox con artist team up to uncover a conspiracy in the city of Zootopia.",
        cast: ["Ginnifer Goodwin", "Jason Bateman", "Shakira"],
        maturity_rating: "PG"
    },
    {
        title: "Moana",
        genre: "Animated, Adventure, Comedy",
        language: "English",
        year: 2016,
        image: "/src/images/moana.jpeg",
        description: "A young Polynesian girl sets out on a journey to save her island and discover her true destiny.",
        cast: ["Auli'i Cravalho", "Dwayne Johnson", "Rachel House"],
        maturity_rating: "PG"
    },
    {
        title: "Shrek",
        genre: "Animated, Adventure, Comedy",
        language: "English",
        year: 2001,
        image: "/src/images/shrek.jpeg",
        description: "An ogre named Shrek goes on a quest to rescue Princess Fiona, with the help of his best friend, Donkey.",
        cast: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
        maturity_rating: "PG"
    },
    {
        title: "How to Train Your Dragon",
        genre: "Animated, Action, Adventure",
        language: "English",
        year: 2010,
        image: "/src/images/dragons.jpeg",
        description: "A young Viking befriends a dragon, which changes the fate of his village and its relationship with dragons.",
        cast: ["Jay Baruchel", "Gerard Butler", "America Ferrera"],
        maturity_rating: "PG"
    },

     {
        title: "Stranger Things",
        genre: "US TV Shows, Horror, Sci-Fi",
        language: "English",
        year: 2016,
        image: "/src/images/strangerthings.jpeg",
        description: "A group of kids in a small town uncover supernatural secrets as they search for their missing friend.",
        cast: ["Winona Ryder", "David Harbour", "Millie Bobby Brown"],
        maturity_rating: "TV-14"
    },
    {
        title: "Breaking Bad",
        genre: "US TV Shows, Crime, Drama, Thriller",
        language: "English",
        year: 2008,
        image: "/src/images/breakingbad.jpeg",
        description: "A high school chemistry teacher turned methamphetamine producer tries to navigate the dangerous criminal world.",
        cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
        maturity_rating: "TV-MA"
    },
    {
        title: "Game of Thrones",
        genre: "US TV Shows, Fantasy, Drama",
        language: "English",
        year: 2011,
        image: "/src/images/got.jpeg",
        description: "Noble families vie for control of the Iron Throne in a fantasy world where power and betrayal reign.",
        cast: ["Emilia Clarke", "Kit Harington", "Peter Dinklage"],
        maturity_rating: "TV-MA"
    },
    {
        title: "The Mandalorian",
        genre: "US TV Shows, Action, Adventure, Sci-Fi",
        language: "English",
        year: 2019,
        image: "/src/images/mandalorian.jpeg",
        description: "A lone bounty hunter in the outer reaches of the galaxy seeks out new missions in the post-Empire era.",
        cast: ["Pedro Pascal", "Gina Carano", "Carl Weathers"],
        maturity_rating: "TV-PG"
    },
    {
        title: "The Crown",
        genre: "US TV Shows, Biography, Drama, History",
        language: "English",
        year: 2016,
        image: "/src/images/crown.jpeg",
        description: "A biographical story of the reign of Queen Elizabeth II, exploring the challenges of leading a nation.",
        cast: ["Claire Foy", "Olivia Colman", "Matt Smith"],
        maturity_rating: "TV-MA"
    },
    {
        title: "The Witcher",
        genre: "US TV Shows, Action, Adventure, Drama, Fantasy",
        language: "English",
        year: 2019,
        image: "/src/images/witcher.jpeg",
        description: "Geralt of Rivia, a monster hunter, navigates a world filled with political intrigue and dangerous creatures.",
        cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
        maturity_rating: "TV-MA"
    },
    {
        title: "Friends",
        genre: "US TV Shows, Comedy, Romance",
        language: "English",
        year: 1994,
        image: "/src/images/friends.jpeg",
        description: "Six friends navigate their careers, relationships, and personal lives in New York City.",
        cast: ["Jennifer Aniston", "Courteney Cox", "Lisa Kudrow"],
        maturity_rating: "TV-PG"
    },
    {
        title: "The Boys",
        genre: "US TV Shows, Action, Comedy, Drama",
        language: "English",
        year: 2019,
        image: "/src/images/theboys.jpeg",
        description: "A group of vigilantes set out to expose corrupt superheroes who abuse their powers.",
        cast: ["Karl Urban", "Jack Quaid", "Anthony Starr"],
        maturity_rating: "TV-MA"
    },
    {
        title: "Narcos",
        genre: "US TV Shows, Crime, Drama, History",
        language: "English, Spanish",
        year: 2015,
        image: "/src/images/narcos.jpeg",
        description: "The story of Colombia’s infamously violent and powerful drug cartels, and the law enforcement’s attempts to bring them down.",
        cast: ["Wagner Moura", "Pedro Pascal", "Boyd Holbrook"],
        maturity_rating: "TV-MA"
    },
    

    {
        title: "Ratatouille",
        genre: "Animated, Adventure, TV Comedies",
        language: "English",
        year: 2007,
        image: "/src/images/ratatouille.jpeg",
        description: "A rat who dreams of becoming a chef teams up with a young kitchen worker in a Parisian restaurant.",
        cast: ["Patton Oswalt", "Ian Holm", "Lou Romano"],
        maturity_rating: "G"
    },
    {
        title: "The Incredibles",
        genre: "Animated, Action, Adventure",
        language: "English",
        year: 2004,
        image: "/src/images/incredibles.jpeg",
        description: "A family of superheroes must come out of retirement to save the world from a new villain.",
        cast: ["Craig T. Nelson", "Holly Hunter", "Samuel L. Jackson"],
        maturity_rating: "PG"
    },
    {
        title: "Inside Out",
        genre: "Animated, Adventure, TV Comedies",
        language: "English",
        year: 2015,
        image: "/src/images/insideout.jpeg",
        description: "Inside the mind of an 11-year-old girl, her emotions try to navigate the challenges of moving to a new city.",
        cast: ["Amy Poehler", "Phyllis Smith", "Bill Hader"],
        maturity_rating: "PG"
    },

    {
    title: "Parks and Recreation",
    genre: "TV Comedies, Drama",
    language: "English",
    year: 2009,
    image: "/src/images/parks_and_recreation.jpeg",
    description: "The quirky employees of the Parks and Recreation department of a small town navigate hilarious situations, led by the optimistic Leslie Knope.",
    cast: ["Amy Poehler", "Rashida Jones", "Nick Offerman"],
    maturity_rating: "U/A"
  },
  {
    title: "Arrested Development",
    genre: "TV Comedies, Drama",
    language: "English",
    year: 2003,
    image: "/src/images/arrested_development.jpeg",
    description: "The dysfunctional Bluth family faces absurd and hilarious situations as they try to salvage their business empire.",
    cast: ["Jason Bateman", "Michael Cera", "Portia de Rossi"],
    maturity_rating: "U/A"
  },
  {
    title: "How I Met Your Mother",
    genre: "TV Comedies, Romance",
    language: "English",
    year: 2005,
    image: "/src/images/how_i_met_your_mother.jpeg",
    description: "A man recounts to his children the story of how he met their mother, filled with comedic moments with his close-knit group of friends.",
    cast: ["Josh Radnor", "Neil Patrick Harris", "Cobie Smulders"],
    maturity_rating: "U/A"
  },
  {
    title: "Community",
    genre: "TV Comedies, Drama",
    language: "English",
    year: 2009,
    image: "/src/images/community.jpeg",
    description: "A group of diverse students at a community college form a study group and experience many hilarious and offbeat adventures.",
    cast: ["Joel McHale", "Gillian Jacobs", "Chevy Chase"],
    maturity_rating: "U/A"
  },
  {
    title: "30 Rock",
    genre: "TV Comedies",
    language: "English",
    year: 2006,
    image: "/src/images/30_rock.jpeg",
    description: "A behind-the-scenes look at a fictional live sketch comedy show, filled with eccentric characters and hilarious antics.",
    cast: ["Tina Fey", "Alec Baldwin", "Tracy Morgan"],
    maturity_rating: "U/A"
  },
  {
    title: "The Good Place",
    genre: "TV Comedies, Fantasy, Drama",
    language: "English",
    year: 2016,
    image: "/src/images/the_good_place.jpeg",
    description: "A woman finds herself in the afterlife, but soon discovers she was mistakenly sent to 'The Good Place,' where hilarious adventures unfold.",
    cast: ["Kristen Bell", "Ted Danson", "William Jackson Harper"],
    maturity_rating: "U/A"
  },
  {
    title: "It's Always Sunny in Philadelphia",
    genre: "TV Comedies",
    language: "English",
    year: 2005,
    image: "/src/images/its_always_sunny_in_philadelphia.jpeg",
    description: "A group of self-absorbed friends runs a bar in Philadelphia, getting into hilarious and morally questionable situations.",
    cast: ["Charlie Day", "Rob McElhenney", "Glenn Howerton"],
    maturity_rating: "U/A"
  },
  {
    title: "Ted Lasso",
    genre: "TV Comedies, Drama, Sports",
    language: "English",
    year: 2020,
    image: "/src/images/ted_lasso.jpeg",
    description: "An American football coach is hired to manage a British soccer team, despite having no experience with the sport, bringing humor and heart.",
    cast: ["Jason Sudeikis", "Hannah Waddingham", "Brett Goldstein"],
    maturity_rating: "U/A"
  },
  {
    title: "Scrubs",
    genre: "TV Comedies, Drama",
    language: "English",
    year: 2001,
    image: "/src/images/scrubs.jpeg",
    description: "A group of young doctors experiences the ups and downs of life and work at Sacred Heart Hospital, blending humor with heartfelt moments.",
    cast: ["Zach Braff", "Sarah Chalke", "Donald Faison"],
    maturity_rating: "U/A"
  },
  {
    title: "That '70s Show",
    genre: "TV Comedies, Drama",
    language: "English",
    year: 1998,
    image: "/src/images/that_70s_show.jpeg",
    description: "Set in the 1970s, this sitcom follows a group of teenagers as they navigate life, friendship, and hilarious misadventures.",
    cast: ["Topher Grace", "Mila Kunis", "Ashton Kutcher"],
    maturity_rating: "U/A"
  }

    ];
    
    
  return movies;

  }
  