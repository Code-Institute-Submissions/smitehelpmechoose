// storing all gods in one object... nope, array for .filter() function
// ordered by pantheon and then alphabetically


//misses godicon and note

const gods = [
  {
    name: "Achilles",
    pantheon: "greek",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: "kill",
    subfunction: ""
  },
  {
    name: "Anhur",
    pantheon: "egyptian",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: "kill",
    subfunction: ""
  },
  {
    name: "Anubis",
    pantheon: "egyptian",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: ["annoy", "kill"],
    subfunction: "stun"
  },
  {
    name: "Ao Kuang",
    pantheon: "chinese",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: ["annoy", "kill"],
    subfunction: "just annoy"
  },
  {
    name: "Aphrodite",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: "heal",
    subfunction: ""
  },
  {
    name: "Apollo",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: "mobility",
    subfunction: ""
  },
  {
    name: "Arachne",
    pantheon: "greek",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: "kill",
    subfunction: "truedmg"
  },
  {
    name: "Ares",
    pantheon: "greek",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: "annoy",
    subfunction: "cc"
  },
  {
    name: "Artemis",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: ["annoy", "protect"],
    subfunction: "cc"
  },
  {
    name: "Athena",
    pantheon: "greek",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: "annoy",
    subfunction: "just annoy"
  },
  {
    name: "Bastet",
    pantheon: "egyptian",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: "kill",
    subfunction: ""
  },
  {
    name: "Cerberus",
    pantheon: "greek",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: ["annoy", "kill"],
    subfunction: "cc"
  },
  {
    name: "Chang'e",
    pantheon: "chinese",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: "heal",
    subfunction: ""
  },
  {
    name: "Chiron",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: "kill",
    subfunction: ""
  },
  {
    name: "Chronos",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: "annoy",
    subfunction: "stun"
  },
  {
    name: "Da Ji",
    pantheon: "chinese",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: "kill",
    subfunction: ""
  },
  {
    name: "Erlang Shen",
    pantheon: "chinese",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: "kill",
    subfunction: ""
  },
  {
    name: "Fafnir",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: "mobility",
    subfunction: ""
  },
  {
    name: "Fenrir",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: "mobility",
    subfunction: ""
  },
  {
    name: "Freya",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: "",
    subfunction: ""
  },
  {
    name: "Geb",
    pantheon: "egyptian",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: "protect",
    subfunction: ""
  },
  {
    name: "Guan Yu",
    pantheon: "chinese",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: "heal",
    subfunction: ""
  },
  {
    name: "Hades",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: "annoy",
    subfunction: "cc"
  },
  {
    name: "He Bo",
    pantheon: "chinese",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: ["annoy", "kill"],
    subfunction: "just annoy"
  },
  {
    name: "Hel",
    pantheon: "norse",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: ["heal", "protect"],
    subfunction: ""
  },
  {
    name: "Hera",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: "annoy",
    subfunction: "cc"
  },
  {
    name: "Horus",
    pantheon: "egyptian",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: "protect",
    subfunction: ""
  },
  {
    name: "Hou Yi",
    pantheon: "chinese",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: "annoy",
    subfunction: "stun"
  },
  {
    name: "Isis",
    pantheon: "egyptian",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: ["protect", "kill"],
    subfunction: ""
  },
  {
    name: "Jing Wei",
    pantheon: "chinese",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: ["mobility", "kill"],
    subfunction: ""
  },
  {
    name: "Jormungandr",
    pantheon: "norse",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: "",
    subfunction: ""
  },
  {
    name: "Khepri",
    pantheon: "egyptian",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: "protect",
    subfunction: ""
  },
  {
    name: "Loki",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: "annoy",
    subfunction: "just annoy"
  },
  {
    name: "Medusa",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: "kill",
    subfunction: ""
  },
  {
    name: "Ne Zha",
    pantheon: "chinese",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: "kill",
    subfunction: ""
  },
  {
    name: "Neith",
    pantheon: "egyptian",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: "kill",
    subfunction: ""
  },
  {
    name: "Nemesis",
    pantheon: "greek",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: "kill",
    subfunction: ""
  },
  {
    name: "Nike",
    pantheon: "greek",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: "protect",
    subfunction: ""
  },
  {
    name: "Nu Wa",
    pantheon: "chinese",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: "annoy",
    subfunction: "stun"
  },
  {
    name: "Odin",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: "mobility",
    subfunction: ""
  },
  {
    name: "Osiris",
    pantheon: "egyptian",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: "",
    subfunction: ""
  },
  {
    name: "Persephone",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: "",
    subfunction: ""
  },
  {
    name: "Poseidon",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: "annoy",
    subfunction: "cc"
  },
  {
    name: "Ra",
    pantheon: "egyptian",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: ["annoy", "heal"],
    subfunction: "just annoy"
  },
  {
    name: "Ratatoskr",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: ["mobility", "kill"],
    subfunction: ""
  },
  {
    name: "Scylla",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: "kill",
    subfunction: ""
  },
  {
    name: "Serqet",
    pantheon: "egyptian",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: "mobility",
    subfunction: ""
  },
  {
    name: "Set",
    pantheon: "egyptian",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: "",
    subfunction: ""
  },
  {
    name: "Skadi",
    pantheon: "norse",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: "kill",
    subfunction: ""
  },
  {
    name: "Sobek",
    pantheon: "egyptian",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: "annoy",
    subfunction: "cc"
  },
  {
    name: "Sol",
    pantheon: "norse",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: "kill",
    subfunction: ""
  },
  {
    name: "Sun Wukong",
    pantheon: "chinese",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: ["annoy", "mobility"],
    subfunction: "cc"
  },
  {
    name: "Thanatos",
    pantheon: "greek",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: "annoy",
    subfunction: "just annoy"
  },
  {
    name: "Thor",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: "mobility",
    subfunction: ""
  },
  {
    name: "Thoth",
    pantheon: "egyptian",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: "kill",
    subfunction: ""
  },
  {
    name: "Tyr",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: "",
    subfunction: ""
  },
  {
    name: "Ullr",
    pantheon: "norse",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: "",
    subfunction: ""
  },
  {
    name: "Xing Tian",
    pantheon: "chinese",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: ["annoy", "kill"],
    subfunction: "cc"
  },
  {
    name: "Ymir",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: "annoy",
    subfunction: ["cc", "stun"]
  }
];


/*const gods = [
  
  //chinese pantheon
  {
      name: "Ao Kuang",
      godicon: "",
      attacktype: "melee",
      powertype: "magical",
      pantheon: "Chinese",
      smiteclass: "mage",
      preffunction: "annoy",
      subfunction: "just annoy",
      
  },
  //egyptian pantheon
    {
        name: "Ra",
        godicon: "ra.jpg",
        attacktype: "ranged",
        powertype: "magical",
        pantheon: "Egyptian",
        smiteclass: "mage",
        preffunction: ["heal", "annoy"],
        subfunction: "just annoy",
        note: "1. Spamming [VEL] Laugh will definitely annoy your teammates early in the game \n 2. with Chibi Ra skin just play the game and your abilities will make everyone on both teams scream internally \n 3. With 40% reduction cooldowns and a bit of sniper reflex you will make opposing teams game a nightmare."
    },

    {
        name: "Loki",
        godicon: "loki.jpg",
        attacktype: "melee",
        powertype: "physical",
        pantheon: "Norse",
        smiteclass: "assassin",
        preffunction: ["kill", "annoy"],
        subfunction: "just annoy",
        note: "It's just Loki. You know you want to play him. "
    }
];*/