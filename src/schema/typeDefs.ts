import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar Date

  # https://api.sandbox.bunchball.com/docs/#/users/{userId}/badges
  type Badge {
    title: String!
    thumbUrl: String
    lastEarnedTime: Date
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
    completed: Boolean
    featured: Boolean
    id: String!
    name: String
    imageUrl: String
    thumbUrl: String
    description: String
    point: Point
    expiringDate: Date
    lockedStatus: LockedStatus
    repeats: Boolean
    expiringSoon: Boolean
    inProgress: Boolean
    tasks: [TasksUnion!]
    earnBadges: [Badge!]!
  }

  union TasksUnion = ClickThrough | Quiz | Video

  type ClickThrough {
    displayText: String
    url: String
    completed: Boolean
  }

  type Video {
    displayText: String
    srcUrl: String
    completed: Boolean
  }

  # https://api.sandbox.bunchball.com/docs/#/Users/get_levels
  type Level {
    currentLevel: String
    currentPoints: Int
    nextLevelPoints: Int
  }

  type Quiz {
    displayText: String
    token: String!
    server: String!
    userId: String!
    quizId: String!
    completed: Boolean
  }

  # We need urls to...
  # NitroUserBadge Wall on Xchange
  # games
  # merchandise stores (merchandise, experiences, homeWORKS)
  # notification center
  # privacy policy maybe? Unsure about that one
  # Also unsure of having the iconUrl in the backend, but seems like something we might want
  # I would like the name of the stores for example to come back from the backend
  # type ExternalUrl {
  #    displayText: String
  #    href: String
  #    iconUrl: String
  # }

  enum MissionFlag {
    FEATURED
    ELIGIBLE
  }

  # https://api.sandbox.bunchball.com/docs/#/Users/get_one_user
  type User {
    id: String!
    photoUrl: String
    badges: [Badge!]!
    level: Level
    missions(flag: MissionFlag!): [Mission!]
    notificationCount: Int # the api for this doesn't exist yet, but it'll come from Xchange
    games: Int
    points: Int
  }

  type Query {
    me: User
    mission(id: String!): Mission

    demoSync: Boolean!
    demoAsync: Boolean!

    nackleOAuthToken: String!
    availableGamePlays: Int
  }

  type MediaConsumedResult {
    eventId: String
    success: Boolean!
  }

  type Mutation {
    linkClicked(url: String!): MediaConsumedResult
    videoWatched(url: String!): MediaConsumedResult
  }
`;
