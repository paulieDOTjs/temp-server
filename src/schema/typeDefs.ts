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

  type Sweepstake {
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
    iconImageUrl: String
    largeTileImageUrl: String # (coming from custom)
    # deprecated
    imageUrl: String
    # deprecated
    thumbUrl: String
    description: String
    # deprecated
    point: Point
    expiringDate: Date
    lockedStatus: LockedStatus
    repeats: Boolean
    expiringSoon: Boolean
    inProgress: Boolean
    rewards: [Reward!]

    # deprecated
    earnBadges: [Badge!]

    # We need to work this out. Right now this is going to cause an N+1 problem.
    # We have temporarily resolved this by adding tasksByMissionId(missionId: String!): [TasksUnion!] on User

    tasks: [TasksUnion!]
  }

  union Reward = Badge | Point | Sweepstake

  union TasksUnion = ClickThrough | ClickableLink | Quiz | Video | ExternalTask

  type ClickableLink {
    actionName: String!
    displayText: String
    url: String
    completed: Boolean
  }

  # deprecated
  type ClickThrough {
    displayText: String
    url: String
    completed: Boolean
  }

  type Video {
    actionName: String!
    displayText: String
    # deprecated
    srcUrl: String
    url: String
    completed: Boolean
  }

  type Quiz {
    displayText: String
    token: String!
    server: String!
    userId: String!
    quizId: String!
    completed: Boolean
  }

  type ExternalTask {
    displayText: String
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

  type Links {
    badges: String!
    games: String!
    messages: String!
    privacyPolicy: String!
  }

  # https://api.sandbox.bunchball.com/docs/#/Users/get_levels
  type Level {
    currentLevel: String
    currentPoints: Int
    nextLevelPoints: Int
  }

  # https://api.sandbox.bunchball.com/docs/#/Users/get_one_user
  type User {
    "A unique identifier for the user"
    id: String!

    "Badges the user has already earned"
    badges: [Badge!]!

    firstName: String

    "Number of available game plays"
    games: Int

    lastName: String

    level: Level

    "URLs of external resources"
    links: Links!

    "Retrieve details of a specific mission"
    mission(id: String!): Mission

    "Search for missions available to the user"
    missions(flag: MissionFlag!): [Mission!]

    "Number of outstanding notifications"
    notificationCount: Int # the api for this doesn't exist yet, but it'll come from Xchange
    "URL of the user's avatar"
    photoUrl: String

    "Number of unspent points"
    points: Int

    tasksByMissionId(missionId: String!): [TasksUnion!]
  }

  type Query {
    "Return the name of this application"
    applicationName: String!

    "The current user as understood by DLE"
    me: User
  }

  "Model the success or failure result after marking a video or link as clicked"
  type MediaConsumedResult {
    eventId: String
    success: Boolean!
  }

  type Mutation {
    "To be called when a user watched a video or clicked a link"
    urlActionPerformed(url: String!, action: String!): MediaConsumedResult

    # deprecated
    "To be called when a user clicks a ClickThrough link"
    linkClicked("URL of the link clicked" url: String!): MediaConsumedResult

    "To be called when a user watches a Video"
    # deprecated
    videoWatched("srcUrl of the video" url: String!): MediaConsumedResult
  }
`;
