import { OpponentType, SpriteInfo } from "../helpers/types";

const normalCharProps = {
  srcX: 1,
  srcWidth: 16,
  srcHeight: 16,
  gap: 2,
};

export const opponentSprites: Record<OpponentType, SpriteInfo[]> = {
  bee: [
    {
      ...normalCharProps,
      srcY: 91,
      columns: 8,
    },
  ],
  butterfly: [
    {
      ...normalCharProps,
      srcY: 73,
      columns: 8,
    },
  ],
  bossGalaga: [
    {
      ...normalCharProps,
      srcY: 37,
      columns: 8,
    },
    {
      ...normalCharProps,
      srcY: 55,
      columns: 8,
    },
  ],
};

const scoringInfo = {
  bee: {
    formation: 50,
    diving: 100,
  },

  butterfly: {
    formation: 80,
    diving: 160,
  },
  bossGalaga: {
    formation: 150,
    divingAlone: 400,
    divingWithOneEscort: 800,
    divingWithTwoEscorts: 1600,
  },
  capturedFighter: 1000,
  groupOfEnemies: {
    firstAndSecondChallengingStages: 1000,
    thirdAndFourthChallengingStages: 1500,
    fifthAndSixthChallengingStages: 2000,
    seventhAndSubsequentChallengingStages: 3000,
  },
  transform: 160,
  scorpions: 1000,
  bosconianShips: 2000,
  galaxianFlagships: 3000,
} as const;
