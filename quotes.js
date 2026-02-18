const quotes = [
  { text: "God will give you a testimony that will cancel years of mockery." },
  { text: "The presence of God is the cure for pressure." },
  { text: "When you are in the will of God, every storm works for your good." },
  { text: "Your worship is a weapon. It breaks chains you don't even see." },
  { text: "If you want to see God's hand, obey His voice." },
  { text: "you can't make a difference without a reason." },
  {
    text: "If you don't aim well you can't end well. Your aim determines your end.",
  },
  {
    text: "Nothing purposed is nothing pursued and nothing pursued is nothing possessed.",
  },
  { text: "Your possibilities in life are tied around your potentials." },
  {
    text: "Your endowment is linked to your uplifting. Your gift is key to your lift.",
  },
  {
    text: "Not every business is your business. There is one that would make you known in the world-find it.",
  },
  { text: "If God leads the way, a table is prepared." },
  {
    text: "Your place is where blessing that is in a hurry looks for you. Look for that place.",
  },
  { text: "You cannot get anywhere living anyhow." },
  { text: "You cannot live carelessly and end gloriously." },
  { text: "You cannot out love God." },
  {
    text: "Once you have the desire and you don't have the discipline, all you have is a wish.",
  },
  { text: "You cannot out worship God." },
  { text: "those who place themselves under commandments become commanders." },
  {
    text: "You cannot out give God, because He is the source of all blessings.",
  },
  { text: "Until questions are asked, answers are not accessed." },
  {
    text: "The will of God will never take you where the grace of God will not protect you.",
  },
  { text: "There is the voice in the verse, the spirit behind the letter." },
  { text: " Who can make a door against the way." },
  {
    text: "When you are in the will of God, you are in the place of peace, provision, protection, promotion, power and purpose.",
  },
  { text: "When you are in the will of God, you are in the place of peace." },
  {
    text: "When you are in the will of God, you are in the place of provision.",
  },
  {
    text: "When you are in the will of God, you are in the place of protection.",
  },
  {
    text: "When you are in the will of God, you are in the place of promotion.",
  },
  { text: "When you are in the will of God, you are in the place of power." },
  { text: "When you are in the will of God, you are in the place of purpose." },
  {
    text: "When you are in the will of God, you are in the place of peace, provision, protection, promotion, power and purpose.",
  },
  { text: "Don't be in a hurry to show up otherwise you blow up." },
  {
    text: "People may mock your praise but God will bless you for your praise.",
  },
  { text: "The way you start a thing is the way you finish it." },
  { text: "You cannot give what you do not have." },
  {
    text: "Your level of success is determined by your level of discipline and perseverance.",
  },
  {
    text: "The only thing that can stop you from fulfilling your destiny is you.",
  },
  {
    text: "You are not where you are by mistake, you are where you are by divine appointment.",
  },
  { text: "The greatest enemy of progress is comfort." },
  {
    text: "If you want to fly, you have to give up the things that weigh you down.",
  },
  { text: "Don't over celebrate principles, celebrate practices." },
  { text: "Knowledge is not power until it is applied." },
  { text: "The value of knowledge is not in knowing, but in doing." },
  {
    text: "Even though you live by faith, there are times where faith becomes foolishness.",
  },
  {
    text: "When you lose the mentality of the Almighty, you decend into the calamity of stupidity.",
  },
  {
    text: "What you know makes you intelligent but what you do with what you know makes you wise.",
  },
  {
    text: "don't over celebrate what you know, celebrate what you are doing with what you know.",
  },
  { text: "When you lose the mentality of a winner, you become a loser." },
  { text: "A wise man is a specialist of difficulties." },
  {
    text: "It is better to take a stand for good even if you have to stand alone.",
  },
  {
    text: "You are not careful about your destiny until you are careful about your company.",
  },
  { text: "There is a connection between reasoning and sinfulness." },
  {
    text: "Society's influence can affect character. It may be popular but not necessarily proper.",
  },
  {
    text: "It is better for people to follow you in doing right than for you to follow them in doing wrong.",
  },
  {
    text: "When you are far from the Word, you get lost in the world; but when you are close to the Word, you stay faraway from the world,",
  },
  {
    text: "Loveless hearts are behind sinful lives. The fear of God is the bedrock of godly character.",
  },
  { text: "Nothing corrupts character like bad company." },
  {
    text: "Character can be corrected by good company and corrupted by bad compny.",
  },
  {
    text: "Love will lead you to end your journey with God why hate will lead you to end your journey with the devil.",
  },
  { text: "The bankruptcy of love is the bankruptcy of character" },
  {
    text: "In love, wether people are present or absent, their value remaiins the same in your eyes.",
  },
  {
    text: "The absence of love is the presence of selfishness. Lovelessness is characterless.",
  },
  { text: "Gospel without power is gossip." },
  { text: "Study is the cure of shame." },
  { text: "Nonody can know God's will for yoou more than you" },
  { text: "Title without mantle is a battle" },
  {
    text: "When you are worded you are loaded and when you are loaded you needed.",
  },
  { text: "Anything about the anionted is anionted." },
  { text: "What you eat eat's you up." },
  { text: "In this kingdom every war is fought by the word." },
  { text: "Any christian without the word is a native doctor." },
  { text: "What you are afraid of is also afraid of the word of God." },
  { text: "sin will make you sink" },
  { text: "You are not just on earth to be counted but to be counted upon." },
  {
    text: "Where evever or whatever you find yourself no matter how crowded, there is room for you. Cause your father owns the whole world and you are His heir.",
  },
  { text: "Everything you do to make you aninonted enthrones you." },
  {
    text: "The devil cant't finish a man who has already finish himself for Christ.",
  },
  { text: "If it doesn't cross ypur mind it can never cross your life." },
  {
    text: "Who can be your friend is determined by the direction he is headed.",
  },
  { text: "Arrogance is the killer of direction." },
  { text: "Assumption will bring frustration." },
  { text: "Interest is the birth place of insight." },
  {
    text: "You cannot access God's direction if you are comfortable without it.",
  },
  { text: "Where direction is needed faith is not a substitue." },
  {
    text: "When you are instructed you are informed but when you are thought by the Holy Spirit, you are impacted and powered.",
  },
  { text: "Vision suffers abortion where it lacks direction." },
  { text: "Your habit determines your habitant." },
  { text: "Your lifestyle determines your outcome." },
  {
    text: "Your generation is not permitted to see you bigger or better than you see yourself.",
  },
  { text: "If it is too biig to picture it will be too big to capture." },
  { text: "The light is the answer to the night." },
  { text: "The light is the secret of the lift." },
  {
    text: "Have the mind of turning people to righteousness and there will be no end to your stardom.",
  },
  {
    text: "If you want to be found in the company of kings, ensure that your hand is active.",
  },
  { text: "Where you are going is guaranteed if God is the one leadingg." },
  { text: "One of the greatest gift of man is the help of God." },
  { text: "Help made men are superior to man made men." },
  { text: "The way you see yourself is the way the devil will see you." },
  {
    text: "You are in a class with God, you do not have a class mate. God is the determinant of your class per time.",
  },
  { text: "Man was created in the image and likeness of a sickless God." },
  { text: "Sonship without power is a claim without proof." },
  { text: "God will not border you with what does not border you." },
  {
    text: "When the voice of God comes to you, you become a God to you world.",
  },
  { text: "Humility is not stupidity, it is high mentality." },
  {
    text: "The greatest challenge of a fool is that he doesn't know that he does not know.",
  },
  { text: "There is a wisdom inside you, think it out, reason it out." },
  {
    text: "There is a time to Pray through and there is a time to think through.",
  },
  { text: "You think best when you think on paper." },
  { text: "Pray through to solution and reason out of frustration." },
  { text: "Everthing you are seeing is saying something to you." },
  {
    text: "Always ask yourself what are you hearing from what you are seeing.",
  },
  { text: "Lord what are you telling me from what am seeing." },
  {
    text: "They are things God will make you hear when you open your eyes to see.",
  },
  { text: "Wisdom makes a person bold." },
  { text: "When you are not inspired you will expire." },
  {
    text: "When you are not inspired you will perspire. Inspiration is the answer to perspiration.",
  },
  {
    text: "When you put your mind under pressure, your life will step into pleassure.",
  },
  { text: "Wisdom is like a house, and there are many ways into the house." },
  {
    text: "It is possible to be armed to the teeth and loose but it is impossible to be wise and loose.",
  },
];
