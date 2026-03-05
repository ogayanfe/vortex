export type GameType = {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  maxPlayers: number;
  howToPlay: string[];
};

export const GAMES_LIST: GameType[] = [
  {
    id: "ludo",
    name: "Ludo",
    shortDesc: "The classic board game, modernized and fully decentralized.",
    description:
      "Play Ludo against up to 3 other players securely on-chain. Roll the dice, move your tokens, and get all your pieces to the center while capturing your opponents along the way.",
    maxPlayers: 4,
    howToPlay: [
      "Pay the entry fee to join or create a match.",
      "Wait for opponents to fill the available seats.",
      "Take turns rolling the on-chain random dice.",
      "The first player to get all four tokens home wins the pot.",
    ],
  },
  {
    id: "whot",
    name: "Whot",
    shortDesc: "The popular shedding card game brought to Web3.",
    description:
      "Face off in a fast-paced game of Whot. Match shapes and numbers, play action cards intelligently to delay your opponents, and be the first to shed all your cards to claim the bounty.",
    maxPlayers: 5,
    howToPlay: [
      "Set your entry stake and join a Whot table.",
      "Match the top card by symbol or number.",
      "Strategically use special action cards.",
      "Automatically receive the prize pool upon playing your last card.",
    ],
  },
  {
    id: "chess",
    name: "Chess",
    shortDesc: "The ultimate game of strategy, 1v1 on-chain.",
    description:
      "Challenge another player to a 1-on-1 game of Chess. Every move is verified via smart contract to ensure a completely trustless and fair competition of pure skill.",
    maxPlayers: 2,
    howToPlay: [
      "Create a match and set up the bounty.",
      "Your opponent joins and matches your wager.",
      "Play your moves within the set time limits.",
      "Checkmate your opponent or win on time to claim the reward.",
    ],
  },
];
