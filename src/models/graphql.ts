import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Badge = {
  __typename?: 'Badge';
  lastEarnedTime?: Maybe<Scalars['Date']>;
  thumbUrl?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ClickThrough = {
  __typename?: 'ClickThrough';
  completed?: Maybe<Scalars['Boolean']>;
  displayText?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Level = {
  __typename?: 'Level';
  currentLevel?: Maybe<Scalars['String']>;
  currentPoints?: Maybe<Scalars['Int']>;
  nextLevelPoints?: Maybe<Scalars['Int']>;
};

export type LockedStatus = {
  __typename?: 'LockedStatus';
  locked: Scalars['Boolean'];
  reason?: Maybe<Scalars['String']>;
};

export type MediaConsumedResult = {
  __typename?: 'MediaConsumedResult';
  eventId?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type Mission = {
  __typename?: 'Mission';
  completed?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  earnBadges: Array<Badge>;
  expiringDate?: Maybe<Scalars['Date']>;
  expiringSoon?: Maybe<Scalars['Boolean']>;
  featured?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  inProgress?: Maybe<Scalars['Boolean']>;
  lockedStatus?: Maybe<LockedStatus>;
  name?: Maybe<Scalars['String']>;
  point?: Maybe<Point>;
  repeats?: Maybe<Scalars['Boolean']>;
  tasks?: Maybe<Array<TasksUnion>>;
  thumbUrl?: Maybe<Scalars['String']>;
};

export enum MissionFlag {
  Eligible = 'ELIGIBLE',
  Featured = 'FEATURED'
}

export type Mutation = {
  __typename?: 'Mutation';
  linkClicked?: Maybe<MediaConsumedResult>;
  videoWatched?: Maybe<MediaConsumedResult>;
};


export type MutationLinkClickedArgs = {
  url: Scalars['String'];
};


export type MutationVideoWatchedArgs = {
  url: Scalars['String'];
};

export type Point = {
  __typename?: 'Point';
  category: Scalars['String'];
  count: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  availableGamePlays?: Maybe<Scalars['Int']>;
  demoAsync: Scalars['Boolean'];
  demoSync: Scalars['Boolean'];
  me?: Maybe<User>;
  mission?: Maybe<Mission>;
  nackleOAuthToken: Scalars['String'];
};


export type QueryMissionArgs = {
  id: Scalars['String'];
};

export type Quiz = {
  __typename?: 'Quiz';
  completed?: Maybe<Scalars['Boolean']>;
  displayText?: Maybe<Scalars['String']>;
  quizId: Scalars['String'];
  server: Scalars['String'];
  token: Scalars['String'];
  userId: Scalars['String'];
};

export type TasksUnion = ClickThrough | Quiz | Video;

export type User = {
  __typename?: 'User';
  badges: Array<Badge>;
  games?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  level?: Maybe<Level>;
  missions?: Maybe<Array<Mission>>;
  notificationCount?: Maybe<Scalars['Int']>;
  photoUrl?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
};


export type UserMissionsArgs = {
  flag: MissionFlag;
};

export type Video = {
  __typename?: 'Video';
  completed?: Maybe<Scalars['Boolean']>;
  displayText?: Maybe<Scalars['String']>;
  srcUrl?: Maybe<Scalars['String']>;
};

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Badge: ResolverTypeWrapper<Partial<Badge>>;
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']>>;
  ClickThrough: ResolverTypeWrapper<Partial<ClickThrough>>;
  Date: ResolverTypeWrapper<Partial<Scalars['Date']>>;
  Int: ResolverTypeWrapper<Partial<Scalars['Int']>>;
  Level: ResolverTypeWrapper<Partial<Level>>;
  LockedStatus: ResolverTypeWrapper<Partial<LockedStatus>>;
  MediaConsumedResult: ResolverTypeWrapper<Partial<MediaConsumedResult>>;
  Mission: ResolverTypeWrapper<Partial<Omit<Mission, 'tasks'> & { tasks?: Maybe<Array<ResolversTypes['TasksUnion']>> }>>;
  MissionFlag: ResolverTypeWrapper<Partial<MissionFlag>>;
  Mutation: ResolverTypeWrapper<{}>;
  Point: ResolverTypeWrapper<Partial<Point>>;
  Query: ResolverTypeWrapper<{}>;
  Quiz: ResolverTypeWrapper<Partial<Quiz>>;
  String: ResolverTypeWrapper<Partial<Scalars['String']>>;
  TasksUnion: Partial<ResolversTypes['ClickThrough'] | ResolversTypes['Quiz'] | ResolversTypes['Video']>;
  User: ResolverTypeWrapper<Partial<User>>;
  Video: ResolverTypeWrapper<Partial<Video>>;
  _Service: ResolverTypeWrapper<Partial<_Service>>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Badge: Partial<Badge>;
  Boolean: Partial<Scalars['Boolean']>;
  ClickThrough: Partial<ClickThrough>;
  Date: Partial<Scalars['Date']>;
  Int: Partial<Scalars['Int']>;
  Level: Partial<Level>;
  LockedStatus: Partial<LockedStatus>;
  MediaConsumedResult: Partial<MediaConsumedResult>;
  Mission: Partial<Omit<Mission, 'tasks'> & { tasks?: Maybe<Array<ResolversParentTypes['TasksUnion']>> }>;
  Mutation: {};
  Point: Partial<Point>;
  Query: {};
  Quiz: Partial<Quiz>;
  String: Partial<Scalars['String']>;
  TasksUnion: Partial<ResolversParentTypes['ClickThrough'] | ResolversParentTypes['Quiz'] | ResolversParentTypes['Video']>;
  User: Partial<User>;
  Video: Partial<Video>;
  _Service: Partial<_Service>;
}>;

export type ExtendsDirectiveArgs = { };

export type ExtendsDirectiveResolver<Result, Parent, ContextType = any, Args = ExtendsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ExternalDirectiveArgs = { };

export type ExternalDirectiveResolver<Result, Parent, ContextType = any, Args = ExternalDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type KeyDirectiveArgs = {
  fields: Scalars['String'];
};

export type KeyDirectiveResolver<Result, Parent, ContextType = any, Args = KeyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ProvidesDirectiveArgs = {
  fields: Scalars['String'];
};

export type ProvidesDirectiveResolver<Result, Parent, ContextType = any, Args = ProvidesDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RequiresDirectiveArgs = {
  fields: Scalars['String'];
};

export type RequiresDirectiveResolver<Result, Parent, ContextType = any, Args = RequiresDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BadgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Badge'] = ResolversParentTypes['Badge']> = ResolversObject<{
  lastEarnedTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  thumbUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClickThroughResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClickThrough'] = ResolversParentTypes['ClickThrough']> = ResolversObject<{
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  displayText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type LevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Level'] = ResolversParentTypes['Level']> = ResolversObject<{
  currentLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentPoints?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nextLevelPoints?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LockedStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['LockedStatus'] = ResolversParentTypes['LockedStatus']> = ResolversObject<{
  locked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaConsumedResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaConsumedResult'] = ResolversParentTypes['MediaConsumedResult']> = ResolversObject<{
  eventId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mission'] = ResolversParentTypes['Mission']> = ResolversObject<{
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  earnBadges?: Resolver<Array<ResolversTypes['Badge']>, ParentType, ContextType>;
  expiringDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  expiringSoon?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  featured?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inProgress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lockedStatus?: Resolver<Maybe<ResolversTypes['LockedStatus']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  point?: Resolver<Maybe<ResolversTypes['Point']>, ParentType, ContextType>;
  repeats?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tasks?: Resolver<Maybe<Array<ResolversTypes['TasksUnion']>>, ParentType, ContextType>;
  thumbUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  linkClicked?: Resolver<Maybe<ResolversTypes['MediaConsumedResult']>, ParentType, ContextType, RequireFields<MutationLinkClickedArgs, 'url'>>;
  videoWatched?: Resolver<Maybe<ResolversTypes['MediaConsumedResult']>, ParentType, ContextType, RequireFields<MutationVideoWatchedArgs, 'url'>>;
}>;

export type PointResolvers<ContextType = any, ParentType extends ResolversParentTypes['Point'] = ResolversParentTypes['Point']> = ResolversObject<{
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _service?: Resolver<ResolversTypes['_Service'], ParentType, ContextType>;
  availableGamePlays?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  demoAsync?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  demoSync?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  mission?: Resolver<Maybe<ResolversTypes['Mission']>, ParentType, ContextType, RequireFields<QueryMissionArgs, 'id'>>;
  nackleOAuthToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type QuizResolvers<ContextType = any, ParentType extends ResolversParentTypes['Quiz'] = ResolversParentTypes['Quiz']> = ResolversObject<{
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  displayText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quizId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  server?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TasksUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TasksUnion'] = ResolversParentTypes['TasksUnion']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ClickThrough' | 'Quiz' | 'Video', ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  badges?: Resolver<Array<ResolversTypes['Badge']>, ParentType, ContextType>;
  games?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Level']>, ParentType, ContextType>;
  missions?: Resolver<Maybe<Array<ResolversTypes['Mission']>>, ParentType, ContextType, RequireFields<UserMissionsArgs, 'flag'>>;
  notificationCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  photoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Video'] = ResolversParentTypes['Video']> = ResolversObject<{
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  displayText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srcUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Service'] = ResolversParentTypes['_Service']> = ResolversObject<{
  sdl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Badge?: BadgeResolvers<ContextType>;
  ClickThrough?: ClickThroughResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Level?: LevelResolvers<ContextType>;
  LockedStatus?: LockedStatusResolvers<ContextType>;
  MediaConsumedResult?: MediaConsumedResultResolvers<ContextType>;
  Mission?: MissionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Point?: PointResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Quiz?: QuizResolvers<ContextType>;
  TasksUnion?: TasksUnionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Video?: VideoResolvers<ContextType>;
  _Service?: _ServiceResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  extends?: ExtendsDirectiveResolver<any, any, ContextType>;
  external?: ExternalDirectiveResolver<any, any, ContextType>;
  key?: KeyDirectiveResolver<any, any, ContextType>;
  provides?: ProvidesDirectiveResolver<any, any, ContextType>;
  requires?: RequiresDirectiveResolver<any, any, ContextType>;
}>;
