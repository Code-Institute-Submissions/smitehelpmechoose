// storing all gods in one object... nope, array for .filter() function
// ordered alphabetically


//misses godicon and note

var gods = [{
    name: "Achilles",
    pantheon: "greek",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: "kill",
    subfunction: "execute"
  },
  {
    name: "Anhur",
    pantheon: "egyptian",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: "kill",
    subfunction: "crits"
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
    preffunction: ["kill"],
    subfunction: "execute"
  },
  {
    name: "Aphrodite",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: ["heal"],
    subfunction: ""
  },
  {
    name: "Apollo",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: ["mobility"],
    subfunction: ""
  },
  {
    name: "Arachne",
    pantheon: "greek",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: ["kill"],
    subfunction: "truedmg"
  },
  {
    name: "Ares",
    pantheon: "greek",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: ["annoy"],
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
    preffunction: ["annoy"],
    subfunction: "just annoy"
  },
  {
    name: "Bastet",
    pantheon: "egyptian",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: ["kill"],
    subfunction: "truedmg"
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
    preffunction: ["heal"],
    subfunction: ""
  },
  {
    name: "Chiron",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: ["kill"],
    subfunction: "crits"
  },
  {
    name: "Chronos",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: ["annoy"],
    subfunction: "stun"
  },
  {
    name: "Da Ji",
    pantheon: "chinese",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: ["kill"],
    subfunction: "truedmg"
  },
  {
    name: "Erlang Shen",
    pantheon: "chinese",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: ["kill"],
    subfunction: "truedmg"
  },
  {
    name: "Fafnir",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: ["mobility"],
    subfunction: ""
  },
  {
    name: "Fenrir",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: ["mobility"],
    subfunction: ""
  },
  {
    name: "Freya",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: [],
    subfunction: ""
  },
  {
    name: "Geb",
    pantheon: "egyptian",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: ["protect"],
    subfunction: ""
  },
  {
    name: "Guan Yu",
    pantheon: "chinese",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: ["heal"],
    subfunction: ""
  },
  {
    name: "Hades",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: ["annoy"],
    subfunction: "cc"
  },
  {
    name: "He Bo",
    pantheon: "chinese",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: ["kill"],
    subfunction: "truedmg"
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
    preffunction: ["annoy"],
    subfunction: "cc"
  },
  {
    name: "Horus",
    pantheon: "egyptian",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: ["protect"],
    subfunction: ""
  },
  {
    name: "Hou Yi",
    pantheon: "chinese",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: ["annoy"],
    subfunction: "stun"
  },
  {
    name: "Isis",
    pantheon: "egyptian",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: ["protect", "kill"],
    subfunction: "truedmg"
  },
  {
    name: "Jing Wei",
    pantheon: "chinese",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: ["mobility", "kill"],
    subfunction: "crits"
  },
  {
    name: "Jormungandr",
    pantheon: "norse",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: [],
    subfunction: ""
  },
  {
    name: "Khepri",
    pantheon: "egyptian",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: ["protect"],
    subfunction: ""
  },
  {
    name: "Loki",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: ["annoy"],
    subfunction: "just annoy"
  },
  {
    name: "Medusa",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: ["kill"],
    subfunction: "crits"
  },
  {
    name: "Ne Zha",
    pantheon: "chinese",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: ["kill"],
    subfunction: "execute"
  },
  {
    name: "Neith",
    pantheon: "egyptian",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: ["kill"],
    subfunction: "crits"
  },
  {
    name: "Nemesis",
    pantheon: "greek",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: ["mobility"],
    subfunction: ""
  },
  {
    name: "Nike",
    pantheon: "greek",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: ["protect"],
    subfunction: ""
  },
  {
    name: "Nu Wa",
    pantheon: "chinese",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: ["annoy"],
    subfunction: "stun"
  },
  {
    name: "Odin",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: ["mobility"],
    subfunction: ""
  },
  {
    name: "Osiris",
    pantheon: "egyptian",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: [],
    subfunction: ""
  },
  {
    name: "Persephone",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: [],
    subfunction: ""
  },
  {
    name: "Poseidon",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: ["annoy"],
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
    subfunction: "truedmg"
  },
  {
    name: "Scylla",
    pantheon: "greek",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: ["kill"],
    subfunction: "truedmg"
  },
  {
    name: "Serqet",
    pantheon: "egyptian",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: ["mobility"],
    subfunction: ""
  },
  {
    name: "Set",
    pantheon: "egyptian",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: [],
    subfunction: ""
  },
  {
    name: "Skadi",
    pantheon: "norse",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: ["kill"],
    subfunction: "truedmg"
  },
  {
    name: "Sobek",
    pantheon: "egyptian",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: ["annoy"],
    subfunction: "cc"
  },
  {
    name: "Sol",
    pantheon: "norse",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: ["kill"],
    subfunction: "truedmg"
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
    preffunction: ["annoy"],
    subfunction: "just annoy"
  },
  {
    name: "Thor",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "assassin",
    preffunction: ["mobility"],
    subfunction: ""
  },
  {
    name: "Thoth",
    pantheon: "egyptian",
    attacktype: "Ranged",
    powertype: "magical",
    smiteclass: "mage",
    preffunction: ["kill"],
    subfunction: "truedmg"
  },
  {
    name: "Tyr",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "physical",
    smiteclass: "warrior",
    preffunction: [],
    subfunction: ""
  },
  {
    name: "Ullr",
    pantheon: "norse",
    attacktype: "Ranged",
    powertype: "physical",
    smiteclass: "hunter",
    preffunction: [],
    subfunction: ""
  },
  {
    name: "Xing Tian",
    pantheon: "chinese",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: ["annoy"],
    subfunction: "cc"
  },
  {
    name: "Ymir",
    pantheon: "norse",
    attacktype: "Melee",
    powertype: "magical",
    smiteclass: "guardian",
    preffunction: "annoy",
    subfunction: "stun"
  }
];


