const createFilm = (
  title,
  country,
  continent,
  language,
  runTime,
  director,
  releaseYear,
  description,
  img
) => {
  return {
    title: title,
    country: country,
    continent: continent,
    language: language,
    runTime: runTime,
    director: director,
    releaseYear: releaseYear,
    description: description,
    img: img,
  };
};

const films = [
  createFilm(
    'Good Morning',
    'Japan',
    'Asia',
    'Japanese',
    94,
    'Yashujiro Ozu',
    1959,
    'Two brothers want a TV.',
    'https://m.media-amazon.com/images/M/MV5BMGI5ZDdlNDItZGRiZi00NjM3LTkxZjktMTRjNDc1OGY2OGNkXkEyXkFqcGdeQXVyNTgzMzU5MDI@._V1_.jpg'
  ),
  createFilm(
    'I Am Cuba',
    'Cuba',
    'North America',
    'Spanish',
    141,
    'Mikhail Kalatozov',
    1964,
    'Four vignettes about the lives of the Cuban people set during the pre-revolutionary era.',
    'https://m.media-amazon.com/images/M/MV5BMTgyODEzNDAxM15BMl5BanBnXkFtZTcwMDk0NDA1NA@@._V1_.jpg'
  ),
  createFilm(
    'Spirited Away',
    'Japan',
    'Asia',
    'Japanese',
    125,
    'Hayao Miyazaki',
    2001,
    'During a family move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
    'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
  ),
  createFilm(
    'One Cut of the Dead',
    'Japan',
    'Asia',
    'Japanese',
    96,
    'Shinichiro Ueda',
    2017,
    'Things go badly for a hack director and film crew shooting a low budget zombie movie in an abandoned WWII Japanese facility, when they are attacked by real zombies.',
    'https://m.media-amazon.com/images/M/MV5BYmYxNTY5YjctNjA4Ni00MWUzLTljMjktZGNkMWM5YjM3NDBlXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg'
  ),
  createFilm(
    'Memories of Murder',
    'South Korea',
    'Asia',
    'Korean',
    131,
    'Bong Joon Ho',
    2003,
    'In a small Korean province in 1986, two detectives struggle with the case of multiple young women being found raped and murdered by an unknown culprit.',
    'https://d3tvwjfge35btc.cloudfront.net/Assets/64/246/L_p0027724664.jpg'
  ),
  createFilm(
    'JSA: Joint Security Area',
    'South Korea',
    'Asia',
    'Korean',
    110,
    'Park Chan-wook',
    2000,
    'After a shooting incident at the North/South Korean border/DMZ leaves 2 North Korean soldiers dead, a neutral Swiss/Swedish team investigates, what actually happened.',
    'https://m.media-amazon.com/images/M/MV5BMTI1NDA4NTMyN15BMl5BanBnXkFtZTYwNTA2ODc5._V1_FMjpg_UX1000_.jpg'
  ),
  createFilm(
    'City of Sadness',
    'Taiwan',
    'Asia',
    ['Taiwanese', 'Mandarin', 'Japanese'],
    157,
    'Hsiao-Hsien Hou',
    1989,
    'The story of a family embroiled in the "White Terror" that was wrought on the Taiwanese people by the Kuomintang government after their arrival from mainland China in the late 1940s.',
    'https://m.media-amazon.com/images/M/MV5BYzBkNzI3YWYtMWE4MC00Y2JlLWIwOGUtNjVjZDFkMTFhYzhmXkEyXkFqcGdeQXVyNDY5NjU5MDE@._V1_.jpg'
  ),
  createFilm(
    'Stray Dog',
    'Japan',
    'Asia',
    'Japanese',
    122,
    'Akira Kurosawa',
    1949,
    'During a sweltering summer, a rookie homicide detective tries to track down his stolen Colt pistol.',
    'https://m.media-amazon.com/images/M/MV5BNDVlMTFkYWUtYTU1NC00ZmMzLThkMGItODhlYjJhZWExYjE3XkEyXkFqcGdeQXVyMzAxNjg3MjQ@._V1_FMjpg_UX1000_.jpg'
  ),
  createFilm(
    'Mysterious Object at Noon',
    'Thailand',
    'Asia',
    'Thai',
    83,
    'Apichatpong Weerasethakul',
    2000,
    'A film crew documents a folk story-exquisite corpse combination by random Thai people; the story is reenacted.',
    'https://m.media-amazon.com/images/M/MV5BMjA3NDUyNDA4OV5BMl5BanBnXkFtZTYwODI0Mzg5._V1_.jpg'
  ),
  createFilm(
    'Memories of Underdevelopment',
    'Cuba',
    'North America',
    'Spanish',
    97,
    'Tomás Gutiérrez Alea',
    1968,
    'A Cuban man cycles through his opinions and memories as the threat of foreign invasion intensifies and the rest of his family moves to Miami.',
    'https://s3.amazonaws.com/criterion-production/films/ab7f9848b3ca887189e1062a54bc1cf8/KsP2XYjmdLyOg5TnhB6uZpsw2DhU95_large.jpg'
  ),
  createFilm(
    'Y tu mamá también',
    'Mexico',
    'North America',
    'Spanish',
    106,
    'Alfonso Cuarón',
    2001,
    'In Mexico, two teenage boys and an attractive older woman embark on a road trip and learn a thing or two about life, friendship, sex, and each other.',
    'https://m.media-amazon.com/images/M/MV5BNDhjMzc3ZTgtY2Y4MC00Y2U3LWFiMDctZGM3MmM4N2YzNDQ5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
  ),
  createFilm(
    'No',
    'Chile',
    'South America',
    'Spanish',
    118,
    'Pablo Larraín',
    2012,
    'An advertising executive comes up with a campaign to defeat Augusto Pinochet in the 1988 Chilean referendum.',
    'https://m.media-amazon.com/images/M/MV5BMTM3ODAzNjcwMV5BMl5BanBnXkFtZTcwMTUzMjc4OA@@._V1_.jpg'
  ),
  createFilm(
    'The Secret in their Eyes',
    'Argentina',
    'South America',
    'Spanish',
    129,
    'Juan José Campanella',
    2012,
    'A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases and for his unreciprocated love with his superior - both of which still haunt him decades later.',
    'https://m.media-amazon.com/images/M/MV5BY2FhZGI5M2QtZWFiZS00NjkwLWE4NWQtMzg3ZDZjNjdkYTJiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg'
  ),
  createFilm(
    'City of God',
    'Brazil',
    'South America',
    'Portuguese',
    130,
    'Fernando Meirelles and Kátia Lund',
    2012,
    'In the slums of Rio, the paths of two kids diverge as one struggles to become a photographer and the other a kingpin.',
    'https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
  ),
  createFilm(
    'Elite Squad',
    'Brazil',
    'South America',
    'Portuguese',
    115,
    'José Padilha',
    2007,
    'In 1997 Rio de Janeiro, Captain Nascimento has to find a substitute for his position while trying to take down drug dealers and criminals before the Pope visits.',
    'https://m.media-amazon.com/images/I/915Aja1W+CL._AC_SY550_.jpg'
  ),
  createFilm(
    'A Fantastic Woman',
    'Chile',
    'South America',
    'Spanish',
    104,
    'Sebastián Lelio',
    2017,
    'Marina, a transgender woman who works as a waitress and moonlights as a nightclub singer, is bowled over by the death of her older boyfriend.',
    'https://m.media-amazon.com/images/M/MV5BNGJhNWM4ZjItYWRhYS00N2UzLTg3OWItOGEzOWFmMGQ1ZjlkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
  ),
  createFilm(
    'Black God, White Devil',
    'Brazil',
    'South America',
    'Portuguese',
    120,
    'Glauber Rocha',
    1964,
    'After killing his employer when said employer tries to cheat him out of his payment, a man becomes an outlaw and starts following a self-proclaimed saint.',
    'https://m.media-amazon.com/images/M/MV5BMTg2Nzk3ODY1Ml5BMl5BanBnXkFtZTcwNjg3MjE5Mw@@._V1_.jpg'
  ),
  createFilm(
    'El Topo',
    'Mexico',
    'North America',
    'Spanish',
    124,
    'Alejandro Jodorowsky',
    1970,
    'A mysterious black-clad gunfighter wanders a mystical Western landscape encountering multiple bizarre characters.',
    'https://m.media-amazon.com/images/M/MV5BNmUzMWQzMTItYzZiOS00NmI1LWIzMTgtOWE4NzE1M2NhY2IxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
  ),
  createFilm(
    'Mommy',
    'Canada',
    'North America',
    'French',
    139,
    'Xavier Dolan',
    2014,
    'A widowed single mother, raising her violent son alone, finds new hope when a mysterious neighbor inserts herself into their household.',
    'https://m.media-amazon.com/images/M/MV5BMGI3YWFmNDQtNjc0Ny00ZDBjLThlNjYtZTc1ZTk5MzU2YTVjXkEyXkFqcGdeQXVyNzA4ODc3ODU@._V1_.jpg'
  ),
  createFilm(
    'Bon Cop, Bad Cop',
    'Canada',
    'North America',
    ['English', 'French'],
    117,
    'Érik Canuel',
    2006,
    'Two Canadian detectives, one from Ontario and the other from Quebec, must work together when a murdered victim is found on the Ontario-Quebec border.',
    'https://i.ebayimg.com/images/g/6QEAAOSw309gLDKt/s-l1600.jpg'
  ),
  createFilm(
    'Amores Perros',
    'Mexico',
    'North America',
    'Spanish',
    153,
    'Alejandro González Iñárritu',
    2000,
    'A horrific car accident connects three stories, each involving characters dealing with loss, regret, and the harsh realities of life, all in the name of love.',
    'https://m.media-amazon.com/images/M/MV5BMjQxMWJhMzMtMzllZi00NzMwLTllYjktNTcwZmU4ZmU3NTA0XkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_.jpg'
  ),
  createFilm(
    'Cronos',
    'Mexico',
    'North America',
    'Spanish',
    92,
    'Guillermo Del Toro',
    1993,
    'A mysterious device designed to provide its owner with eternal life resurfaces after four hundred years, leaving a trail of destruction in its path.',
    'https://s3.amazonaws.com/criterion-production/films/bf5522f9c5a76a5e8b06fa496db2c56b/qLNV9fawkZraKjbzYwdhn6ArT0cMbF_large.jpg'
  ),
  createFilm(
    'The Holy Mountain',
    'Mexico',
    'North America',
    'Spanish',
    114,
    'Alejandro Jodorowsky',
    2014,
    'In a corrupt, greed-fueled world, a powerful alchemist leads a messianic character and seven materialistic figures to the Holy Mountain, where they hope to achieve enlightenment.',
    'https://m.media-amazon.com/images/M/MV5BN2IzM2I5NTQtMTIyMy00YWM2LWI1OGMtNjI0MWIyNDZkZGFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg'
  ),
  createFilm(
    'The Day of the Beast',
    'Spain',
    'Europe',
    'Spanish',
    103,
    'Álex de la Iglesia',
    1995,
    'Bent on committing as many sins as possible to avert the birth of the beast, a Catholic priest teams up with a Black Metal aficionado and an Italian connoisseur of the occult. Now, he must become an unrelenting sinner. Is there still hope?',
    'https://m.media-amazon.com/images/M/MV5BZWRhMWI2NWUtMTQxNC00MzNmLTk4NWEtMDc3ZDBjNjdkODhkXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_FMjpg_UX1000_.jpg'
  ),
  createFilm(
    'Solaris',
    'Russia',
    'Europe',
    'Russian',
    167,
    'Andrei Tarkovsky',
    1972,
    'A psychologist is sent to a station orbiting a distant planet in order to discover what has caused the crew to go insane.',
    'https://m.media-amazon.com/images/M/MV5BZmY4Yjc0OWQtZDRhMy00ODc2LWI2NGYtMWFlODYyN2VlNDQyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
  ),
  createFilm(
    'Horse Money',
    'Portugal',
    'Europe',
    'Portuguese',
    103,
    'Pedro Costa',
    2014,
    'The time is now, a numbing and timeless present of hospital stays, bureaucratic questioning, and wandering through remembered spaces... and suddenly it is also then, the mid 70s and the time of the Carnation Revolution, when Ventura got into a knife fight with his friend Joaquim.',
    'https://m.media-amazon.com/images/M/MV5BNjk4MzgzMTEzM15BMl5BanBnXkFtZTgwNjAxNTEyNjE@._V1_.jpg'
  ),
  createFilm(
    'The Five Obstructions',
    'Denmark',
    'Europe',
    'Danish',
    90,
    'Lars Von Trier and Jørgen Leth',
    2003,
    'Filmmaker Lars Von Trier challenges Jørgen Leth, the filmmaker behind The Perfect Human (1967), to remake his classic short under circumstances of increasing constraint.',
    'https://upload.wikimedia.org/wikipedia/en/7/75/The_Five_Obstructions.jpg'
  ),
  createFilm(
    'The Gleaners and I',
    'France',
    'Europe',
    'French',
    82,
    'Agnès Varda',
    2000,
    'Varda films and interviews gleaners in France in all forms, from those picking fields after the harvest to those scouring the dumpsters of Paris.',
    'https://m.media-amazon.com/images/M/MV5BMjBlYTUzOTgtNjZlMC00NWNjLWJhMzQtYzllMjg0ZThhNGMzXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg'
  ),
  createFilm(
    'The Assassin',
    'Italy',
    'Europe',
    'Italian',
    97,
    'Elio Petri',
    1961,
    'Alfredo Martelli is picked up by the police at his apartment without justification. In the precinct, he slowly discovers what the investigation is about as we discover details about his life.',
    'https://m.media-amazon.com/images/M/MV5BMTgyNmM2ZDgtM2NjZS00NmUzLThmNzItYjlmNWYzZTMzNjI2XkEyXkFqcGdeQXVyMTAxMDQ0ODk@._V1_.jpg'
  ),
  createFilm(
    'Closely Observed Trains',
    'Czechoslovakia',
    'Europe',
    'Czech',
    92,
    'Jiří Menzel',
    1966,
    'An apprentice train dispatcher at a village station seeks his first sexual encounter and becomes despondent when he is unable to perform.',
    'https://upload.wikimedia.org/wikipedia/en/8/88/Closelywatchedtrains.jpg'
  ),
  createFilm(
    'Xala',
    'Senegal',
    'Africa',
    ['Wolof', 'French'],
    92,
    'Ousmane Sembene',
    1975,
    'A corrupt politician is cursed with impotence on the night of his third wedding after embezzling 100 tons of rice.',
    'https://m.media-amazon.com/images/M/MV5BZGEyMDdjNDMtNDRjMy00MDY3LThkYWYtMGVmODhjODg5NmU3XkEyXkFqcGdeQXVyNDMxNjY1NTU@._V1_.jpg'
  ),
  createFilm(
    'The Figurine',
    'Nigeria',
    'Africa',
    ['English', 'Yoruba'],
    120,
    'Kunle Afolayan',
    2009,
    'A story of two buddies and a girl...all down on their luck have their lives changed when one of them discovers Araromire, a mysterious figurine in an abandoned shrine which, according to legend bestows seven years of good luck. But no one told them about the next seven years...',
    'https://m.media-amazon.com/images/M/MV5BZWQyY2Q0YWItOTNkOS00YzIyLWE0NTktMzk4ODU4OGQyNGZhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
  ),
  createFilm(
    'The Battle of Algiers',
    'Algeria',
    'Africa',
    ['Arabic', 'French'],
    121,
    'Gillo Pontecorvo',
    1966,
    'In the 1950s, fear and violence escalate as the people of Algiers fight for independence from the French government.',
    'https://s3.amazonaws.com/criterion-production/films/ab70f67f7b6d8918cf05f235f52eb686/lJ7B3Ujbj96gsjJZLt2HNUNdvWr9Si_large.jpg'
  ),
  createFilm(
    'District 9',
    'South Africa',
    'Africa',
    'English',
    112,
    'Neill Blomkamp',
    2009,
    'Violence ensues after an extraterrestrial race forced to live in slum-like conditions on Earth finds a kindred spirit in a government agent exposed to their biotechnology.',
    'https://m.media-amazon.com/images/M/MV5BYmQ5MzFjYWMtMTMwNC00ZGU5LWI3YTQtYzhkMGExNGFlY2Q0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg'
  ),
  createFilm(
    'Cairo Station',
    'Egypt',
    'Africa',
    'Arabic',
    77,
    'Youssef Chahine',
    1958,
    'A newspaper salesman at the train station in Cairo develops an unhealthy obsession with a woman who sells refreshments.',
    'https://m.media-amazon.com/images/I/51Php2QtuRL._AC_SY445_.jpg'
  ),
  createFilm(
    'Touki Bouki',
    'Senegal',
    'Africa',
    'Wolof',
    85,
    'Djibril Diop Mambéty',
    1973,
    'Mory, a cowherd, and Anta, a university student, try to make money in order to go to Paris and leave their boring past behind.',
    'https://s3.amazonaws.com/criterion-production/films/1680844b530ddf4be43cf147b1777f0b/lslKYnroVBcB3gHT5XEtkaKYw87ylD_large.jpg'
  ),
  createFilm(
    'Yeelen',
    'Mali',
    'Africa',
    ['Bambara', 'Fula'],
    105,
    'Souleymane Cissé',
    1987,
    'A young man with magical powers journeys to his uncle to request help in fighting his sorcerer father.',
    'https://m.media-amazon.com/images/M/MV5BZTk5YWQ2YjktYWM4ZS00OTUxLWE2M2QtYTY2MzcyMWM5ZDE4XkEyXkFqcGdeQXVyMjY1NDMyNjM@._V1_.jpg'
  ),
  createFilm(
    'Bad Taste',
    'New Zealand',
    'Oceania',
    'English',
    91,
    'Peter Jackson',
    1987,
    'The population of a small town disappears and is replaced by aliens that chase human flesh for their intergalactic fast-food chain.',
    'https://m.media-amazon.com/images/M/MV5BNmU5YzQyODEtZjY4MC00ZDA2LTk1YTItZmNiN2MyMWU3MGUzXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_FMjpg_UX1000_.jpg'
  ),
  createFilm(
    'Walkabout',
    'Australia',
    'Oceania',
    'English',
    100,
    'Nicolas Roeg',
    1971,
    'Two city-bred siblings are stranded in the Australian Outback, where they learn to survive with the aid of an Aboriginal boy on his "walkabout": a ritual separation from his tribe.',
    'https://m.media-amazon.com/images/M/MV5BMzI1ZjA3ZDAtYmQ4My00MzZhLWJmYjMtMzc5M2FlMDk2YzExXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg'
  ),
  createFilm(
    'Wake in Fright',
    'Australia',
    'Oceania',
    'English',
    109,
    'Ted Kotcheff',
    1971,
    'After a bad gambling bet, a schoolteacher is marooned in a town full of crazy, drunk, violent men who threaten to make him just as crazy, drunk, and violent.',
    'https://resizing.flixster.com/2MwzHDEj4buTNwQX_RSwZcNDx_M=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2IxN2M1Yzc2LTc0YWUtNDk1My04NTI3LTVjM2M1NzU2NTJjZi5qcGc='
  ),
  createFilm(
    'Snowtown',
    'Australia',
    'Oceania',
    'English',
    119,
    'Justin Kurzel',
    2011,
    'Based on true events, 16 year-old Jamie falls in with his mothers new boyfriend and his crowd of self-appointed neighborhood watchmen, a relationship that leads to a spree of torture and murder.',
    'https://m.media-amazon.com/images/M/MV5BMTM1NTE3MjkxM15BMl5BanBnXkFtZTcwMjE1Nzg4NA@@._V1_.jpg'
  ),
  createFilm(
    'Picnic at Hanging Rock',
    'Australia',
    'Oceania',
    'English',
    115,
    'Peter Weir',
    1975,
    'During a rural summer picnic, a few students and a teacher from an Australian girls school vanish without a trace. Their absence frustrates and haunts the people left behind.',
    'https://m.media-amazon.com/images/M/MV5BNzk4NTljZDEtNDk0Ny00ODkxLWExMzItODVlODc4MDUxN2JkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_.jpg'
  ),
  createFilm(
    'Boy',
    'New Zealand',
    'Oceania',
    'English',
    87,
    'Taika Waititi',
    2010,
    'Boy, an 11-year-old child and devout Michael Jackson fan who lives on the east coast of New Zealand in 1984, gets a chance to know his absentee criminal father, who has returned to find a bag of money he buried years ago.',
    'https://m.media-amazon.com/images/M/MV5BMjc4MjQ2ODQyNF5BMl5BanBnXkFtZTcwOTE0NzIzNw@@._V1_.jpg'
  ),
  createFilm(
    'Tanna',
    'Vanuatu',
    'Oceania',
    'Southwest Tanna',
    104,
    'Martin Butler and Bentley Dean',
    2015,
    'Set on a remote Pacific island, covered in rain forest and dominated by an active volcano, this heartfelt story, enacted by the Yakel tribe, tells of loyalty, a forbidden love affair and the pact between the old ways and the new.',
    'https://m.media-amazon.com/images/M/MV5BODlhM2VkMTEtMzgwMy00MmEyLThmYTktZTQ4NDQ1NWE4NTY4XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg'
  ),
  createFilm(
    'A Separation',
    'Iran',
    'Asia',
    'Farsi',
    123,
    'Asghar Farhadi',
    2011,
    'A married couple are faced with a difficult decision - to improve the life of their child by moving to another country or to stay in Iran and look after a deteriorating parent who has dementia.',
    'https://m.media-amazon.com/images/M/MV5BN2JmMjViMjMtZTM5Mi00ZGZkLTk5YzctZDg5MjFjZDE4NjNkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
  ),
  createFilm(
    "Where is the Friend's House?",
    'Iran',
    'Asia',
    'Farsi',
    83,
    'Abbas Kiarostami',
    1987,
    "8 year old Ahmed has mistakenly taken his friend Mohammad's notebook. He wants to return it, or else his friend will be expelled from school. Determinedly, the conscientious boy sets out to find Mohammad's home in the neighbouring village.",
    'https://m.media-amazon.com/images/M/MV5BZDRhMGY4MzYtMTU3Mi00ZmE1LTg2ZjgtZTg3YzFmNjY0MGM0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
  ),
  createFilm(
    'Mother India',
    'India',
    'Asia',
    'Hindi',
    172,
    'Mehboob Khan',
    1957,
    'In this melodrama, a poverty-stricken woman raises her sons through many trials and tribulations. But no matter the struggles, always sticks to her own moral code.',
    'https://images-na.ssl-images-amazon.com/images/I/719j4AwIXcL._RI_.jpg'
  ),
  createFilm(
    'Pather Panchali',
    'India',
    'Asia',
    'Bengali',
    125,
    'Satyajit Ray',
    1955,
    'Impoverished priest Harihar Ray, dreaming of a better life for himself and his family, leaves his rural Bengal village in search of work.',
    'https://m.media-amazon.com/images/M/MV5BMmFkNDY5OTktNzY3Yy00OTFlLThhNjktOTRhMmZjZmIxYjAxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg'
  ),
];

export default films;
