import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar Date
  # https://api.sandbox.bunchball.com/docs/#/users/{userId}/badges
  type Badge {
    title: String!
    thumbUrl: String!
    lastEarnedTime: Date!
  }
  # https://api.sandbox.bunchball.com/docs/#/users/{userId}/points
  type Point {
    count: Int!
    category: String!
  }
  type LockedStatus {
    locked: Boolean!
    reason: String
  }
  # https://api.sandbox.bunchball.com/docs/#/Challenges/get_challenges
  type Mission {
    completed: Boolean!
    featured: Boolean!
    id: String!
    name: String!
    imageUrl: String!
    thumbUrl: String!
    description: String!
    point: Point!
    expiringDate: Date!
    lockedStatus: LockedStatus!
    repeats: Boolean!
    expiringSoon: Boolean!
    inProgress: Boolean!
    tasks: [ExternalUrl]
    earns: Badge
  }
  # https://api.sandbox.bunchball.com/docs/#/Users/get_levels
  type Level {
    currentLevel: String
    currentPoints: Int
    nextLevelPoints: Int
  }
  # We need urls to...
  # Badge Wall on Xchange
  # games
  # merchandise stores (merchandise, experiences, homeWORKS)
  # notification center
  # privacy policy maybe? Unsure about that one
  # Also unsure of having the iconUrl in the backend, but seems like something we might want
  # I would like the name of the stores for example to come back from the backend
  type ExternalUrl {
    displayText: String!
    href: String!
    iconUrl: String
  }
  enum MissionFlag {
    FEATURED
    IN_PROGRESS
  }
  # https://api.sandbox.bunchball.com/docs/#/Users/get_one_user
  type User {
    photoUrl: String!
    badges: [Badge]!
    missions(flag: MissionFlag!): [Mission!]!
    notificationCount: Int # the api for this doesn't exist yet, but it'll come from Xchange
    games: Int
    level: Level
    points: Int!
  }
  type Query {
    me: User
  }
`;