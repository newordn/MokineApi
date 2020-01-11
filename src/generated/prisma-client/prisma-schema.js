module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCow {
  count: Int!
}

type AggregateHerd {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Cow {
  id: ID!
  height: Float!
  weight: Float!
  heal: Int!
  herd: Herd
  images: [String!]!
  device: String
  status: Boolean!
  localisation: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  myId: String!
}

type CowConnection {
  pageInfo: PageInfo!
  edges: [CowEdge]!
  aggregate: AggregateCow!
}

input CowCreateimagesInput {
  set: [String!]
}

input CowCreateInput {
  id: ID
  height: Float!
  weight: Float!
  heal: Int!
  herd: HerdCreateOneWithoutCowsInput
  images: CowCreateimagesInput
  device: String
  status: Boolean!
  localisation: String!
  myId: String!
}

input CowCreateManyWithoutHerdInput {
  create: [CowCreateWithoutHerdInput!]
  connect: [CowWhereUniqueInput!]
}

input CowCreateWithoutHerdInput {
  id: ID
  height: Float!
  weight: Float!
  heal: Int!
  images: CowCreateimagesInput
  device: String
  status: Boolean!
  localisation: String!
  myId: String!
}

type CowEdge {
  node: Cow!
  cursor: String!
}

enum CowOrderByInput {
  id_ASC
  id_DESC
  height_ASC
  height_DESC
  weight_ASC
  weight_DESC
  heal_ASC
  heal_DESC
  device_ASC
  device_DESC
  status_ASC
  status_DESC
  localisation_ASC
  localisation_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  myId_ASC
  myId_DESC
}

type CowPreviousValues {
  id: ID!
  height: Float!
  weight: Float!
  heal: Int!
  images: [String!]!
  device: String
  status: Boolean!
  localisation: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  myId: String!
}

input CowScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  height: Float
  height_not: Float
  height_in: [Float!]
  height_not_in: [Float!]
  height_lt: Float
  height_lte: Float
  height_gt: Float
  height_gte: Float
  weight: Float
  weight_not: Float
  weight_in: [Float!]
  weight_not_in: [Float!]
  weight_lt: Float
  weight_lte: Float
  weight_gt: Float
  weight_gte: Float
  heal: Int
  heal_not: Int
  heal_in: [Int!]
  heal_not_in: [Int!]
  heal_lt: Int
  heal_lte: Int
  heal_gt: Int
  heal_gte: Int
  device: String
  device_not: String
  device_in: [String!]
  device_not_in: [String!]
  device_lt: String
  device_lte: String
  device_gt: String
  device_gte: String
  device_contains: String
  device_not_contains: String
  device_starts_with: String
  device_not_starts_with: String
  device_ends_with: String
  device_not_ends_with: String
  status: Boolean
  status_not: Boolean
  localisation: String
  localisation_not: String
  localisation_in: [String!]
  localisation_not_in: [String!]
  localisation_lt: String
  localisation_lte: String
  localisation_gt: String
  localisation_gte: String
  localisation_contains: String
  localisation_not_contains: String
  localisation_starts_with: String
  localisation_not_starts_with: String
  localisation_ends_with: String
  localisation_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  myId: String
  myId_not: String
  myId_in: [String!]
  myId_not_in: [String!]
  myId_lt: String
  myId_lte: String
  myId_gt: String
  myId_gte: String
  myId_contains: String
  myId_not_contains: String
  myId_starts_with: String
  myId_not_starts_with: String
  myId_ends_with: String
  myId_not_ends_with: String
  AND: [CowScalarWhereInput!]
  OR: [CowScalarWhereInput!]
  NOT: [CowScalarWhereInput!]
}

type CowSubscriptionPayload {
  mutation: MutationType!
  node: Cow
  updatedFields: [String!]
  previousValues: CowPreviousValues
}

input CowSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CowWhereInput
  AND: [CowSubscriptionWhereInput!]
  OR: [CowSubscriptionWhereInput!]
  NOT: [CowSubscriptionWhereInput!]
}

input CowUpdateimagesInput {
  set: [String!]
}

input CowUpdateInput {
  height: Float
  weight: Float
  heal: Int
  herd: HerdUpdateOneWithoutCowsInput
  images: CowUpdateimagesInput
  device: String
  status: Boolean
  localisation: String
  myId: String
}

input CowUpdateManyDataInput {
  height: Float
  weight: Float
  heal: Int
  images: CowUpdateimagesInput
  device: String
  status: Boolean
  localisation: String
  myId: String
}

input CowUpdateManyMutationInput {
  height: Float
  weight: Float
  heal: Int
  images: CowUpdateimagesInput
  device: String
  status: Boolean
  localisation: String
  myId: String
}

input CowUpdateManyWithoutHerdInput {
  create: [CowCreateWithoutHerdInput!]
  delete: [CowWhereUniqueInput!]
  connect: [CowWhereUniqueInput!]
  set: [CowWhereUniqueInput!]
  disconnect: [CowWhereUniqueInput!]
  update: [CowUpdateWithWhereUniqueWithoutHerdInput!]
  upsert: [CowUpsertWithWhereUniqueWithoutHerdInput!]
  deleteMany: [CowScalarWhereInput!]
  updateMany: [CowUpdateManyWithWhereNestedInput!]
}

input CowUpdateManyWithWhereNestedInput {
  where: CowScalarWhereInput!
  data: CowUpdateManyDataInput!
}

input CowUpdateWithoutHerdDataInput {
  height: Float
  weight: Float
  heal: Int
  images: CowUpdateimagesInput
  device: String
  status: Boolean
  localisation: String
  myId: String
}

input CowUpdateWithWhereUniqueWithoutHerdInput {
  where: CowWhereUniqueInput!
  data: CowUpdateWithoutHerdDataInput!
}

input CowUpsertWithWhereUniqueWithoutHerdInput {
  where: CowWhereUniqueInput!
  update: CowUpdateWithoutHerdDataInput!
  create: CowCreateWithoutHerdInput!
}

input CowWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  height: Float
  height_not: Float
  height_in: [Float!]
  height_not_in: [Float!]
  height_lt: Float
  height_lte: Float
  height_gt: Float
  height_gte: Float
  weight: Float
  weight_not: Float
  weight_in: [Float!]
  weight_not_in: [Float!]
  weight_lt: Float
  weight_lte: Float
  weight_gt: Float
  weight_gte: Float
  heal: Int
  heal_not: Int
  heal_in: [Int!]
  heal_not_in: [Int!]
  heal_lt: Int
  heal_lte: Int
  heal_gt: Int
  heal_gte: Int
  herd: HerdWhereInput
  device: String
  device_not: String
  device_in: [String!]
  device_not_in: [String!]
  device_lt: String
  device_lte: String
  device_gt: String
  device_gte: String
  device_contains: String
  device_not_contains: String
  device_starts_with: String
  device_not_starts_with: String
  device_ends_with: String
  device_not_ends_with: String
  status: Boolean
  status_not: Boolean
  localisation: String
  localisation_not: String
  localisation_in: [String!]
  localisation_not_in: [String!]
  localisation_lt: String
  localisation_lte: String
  localisation_gt: String
  localisation_gte: String
  localisation_contains: String
  localisation_not_contains: String
  localisation_starts_with: String
  localisation_not_starts_with: String
  localisation_ends_with: String
  localisation_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  myId: String
  myId_not: String
  myId_in: [String!]
  myId_not_in: [String!]
  myId_lt: String
  myId_lte: String
  myId_gt: String
  myId_gte: String
  myId_contains: String
  myId_not_contains: String
  myId_starts_with: String
  myId_not_starts_with: String
  myId_ends_with: String
  myId_not_ends_with: String
  AND: [CowWhereInput!]
  OR: [CowWhereInput!]
  NOT: [CowWhereInput!]
}

input CowWhereUniqueInput {
  id: ID
  device: String
}

scalar DateTime

type Herd {
  id: ID!
  image: String
  location: String
  cows(where: CowWhereInput, orderBy: CowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cow!]
  status: Boolean!
  catterys(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type HerdConnection {
  pageInfo: PageInfo!
  edges: [HerdEdge]!
  aggregate: AggregateHerd!
}

input HerdCreateInput {
  id: ID
  image: String
  location: String
  cows: CowCreateManyWithoutHerdInput
  status: Boolean!
  catterys: UserCreateManyWithoutHerdInput
}

input HerdCreateOneWithoutCatterysInput {
  create: HerdCreateWithoutCatterysInput
  connect: HerdWhereUniqueInput
}

input HerdCreateOneWithoutCowsInput {
  create: HerdCreateWithoutCowsInput
  connect: HerdWhereUniqueInput
}

input HerdCreateWithoutCatterysInput {
  id: ID
  image: String
  location: String
  cows: CowCreateManyWithoutHerdInput
  status: Boolean!
}

input HerdCreateWithoutCowsInput {
  id: ID
  image: String
  location: String
  status: Boolean!
  catterys: UserCreateManyWithoutHerdInput
}

type HerdEdge {
  node: Herd!
  cursor: String!
}

enum HerdOrderByInput {
  id_ASC
  id_DESC
  image_ASC
  image_DESC
  location_ASC
  location_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type HerdPreviousValues {
  id: ID!
  image: String
  location: String
  status: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type HerdSubscriptionPayload {
  mutation: MutationType!
  node: Herd
  updatedFields: [String!]
  previousValues: HerdPreviousValues
}

input HerdSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: HerdWhereInput
  AND: [HerdSubscriptionWhereInput!]
  OR: [HerdSubscriptionWhereInput!]
  NOT: [HerdSubscriptionWhereInput!]
}

input HerdUpdateInput {
  image: String
  location: String
  cows: CowUpdateManyWithoutHerdInput
  status: Boolean
  catterys: UserUpdateManyWithoutHerdInput
}

input HerdUpdateManyMutationInput {
  image: String
  location: String
  status: Boolean
}

input HerdUpdateOneWithoutCatterysInput {
  create: HerdCreateWithoutCatterysInput
  update: HerdUpdateWithoutCatterysDataInput
  upsert: HerdUpsertWithoutCatterysInput
  delete: Boolean
  disconnect: Boolean
  connect: HerdWhereUniqueInput
}

input HerdUpdateOneWithoutCowsInput {
  create: HerdCreateWithoutCowsInput
  update: HerdUpdateWithoutCowsDataInput
  upsert: HerdUpsertWithoutCowsInput
  delete: Boolean
  disconnect: Boolean
  connect: HerdWhereUniqueInput
}

input HerdUpdateWithoutCatterysDataInput {
  image: String
  location: String
  cows: CowUpdateManyWithoutHerdInput
  status: Boolean
}

input HerdUpdateWithoutCowsDataInput {
  image: String
  location: String
  status: Boolean
  catterys: UserUpdateManyWithoutHerdInput
}

input HerdUpsertWithoutCatterysInput {
  update: HerdUpdateWithoutCatterysDataInput!
  create: HerdCreateWithoutCatterysInput!
}

input HerdUpsertWithoutCowsInput {
  update: HerdUpdateWithoutCowsDataInput!
  create: HerdCreateWithoutCowsInput!
}

input HerdWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  cows_every: CowWhereInput
  cows_some: CowWhereInput
  cows_none: CowWhereInput
  status: Boolean
  status_not: Boolean
  catterys_every: UserWhereInput
  catterys_some: UserWhereInput
  catterys_none: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [HerdWhereInput!]
  OR: [HerdWhereInput!]
  NOT: [HerdWhereInput!]
}

input HerdWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCow(data: CowCreateInput!): Cow!
  updateCow(data: CowUpdateInput!, where: CowWhereUniqueInput!): Cow
  updateManyCows(data: CowUpdateManyMutationInput!, where: CowWhereInput): BatchPayload!
  upsertCow(where: CowWhereUniqueInput!, create: CowCreateInput!, update: CowUpdateInput!): Cow!
  deleteCow(where: CowWhereUniqueInput!): Cow
  deleteManyCows(where: CowWhereInput): BatchPayload!
  createHerd(data: HerdCreateInput!): Herd!
  updateHerd(data: HerdUpdateInput!, where: HerdWhereUniqueInput!): Herd
  updateManyHerds(data: HerdUpdateManyMutationInput!, where: HerdWhereInput): BatchPayload!
  upsertHerd(where: HerdWhereUniqueInput!, create: HerdCreateInput!, update: HerdUpdateInput!): Herd!
  deleteHerd(where: HerdWhereUniqueInput!): Herd
  deleteManyHerds(where: HerdWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  cow(where: CowWhereUniqueInput!): Cow
  cows(where: CowWhereInput, orderBy: CowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cow]!
  cowsConnection(where: CowWhereInput, orderBy: CowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CowConnection!
  herd(where: HerdWhereUniqueInput!): Herd
  herds(where: HerdWhereInput, orderBy: HerdOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Herd]!
  herdsConnection(where: HerdWhereInput, orderBy: HerdOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HerdConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  cow(where: CowSubscriptionWhereInput): CowSubscriptionPayload
  herd(where: HerdSubscriptionWhereInput): HerdSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  phone: String!
  profession: String!
  localisation: String!
  nativeCountry: String!
  residentCountry: String!
  others: String!
  password: String!
  status: Boolean!
  reset_password_token: String
  createdAt: DateTime!
  updatedAt: DateTime!
  herd: Herd
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  phone: String!
  profession: String!
  localisation: String!
  nativeCountry: String!
  residentCountry: String!
  others: String!
  password: String!
  status: Boolean!
  reset_password_token: String
  herd: HerdCreateOneWithoutCatterysInput
}

input UserCreateManyWithoutHerdInput {
  create: [UserCreateWithoutHerdInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateWithoutHerdInput {
  id: ID
  name: String!
  email: String!
  phone: String!
  profession: String!
  localisation: String!
  nativeCountry: String!
  residentCountry: String!
  others: String!
  password: String!
  status: Boolean!
  reset_password_token: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  phone_ASC
  phone_DESC
  profession_ASC
  profession_DESC
  localisation_ASC
  localisation_DESC
  nativeCountry_ASC
  nativeCountry_DESC
  residentCountry_ASC
  residentCountry_DESC
  others_ASC
  others_DESC
  password_ASC
  password_DESC
  status_ASC
  status_DESC
  reset_password_token_ASC
  reset_password_token_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  phone: String!
  profession: String!
  localisation: String!
  nativeCountry: String!
  residentCountry: String!
  others: String!
  password: String!
  status: Boolean!
  reset_password_token: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  profession: String
  profession_not: String
  profession_in: [String!]
  profession_not_in: [String!]
  profession_lt: String
  profession_lte: String
  profession_gt: String
  profession_gte: String
  profession_contains: String
  profession_not_contains: String
  profession_starts_with: String
  profession_not_starts_with: String
  profession_ends_with: String
  profession_not_ends_with: String
  localisation: String
  localisation_not: String
  localisation_in: [String!]
  localisation_not_in: [String!]
  localisation_lt: String
  localisation_lte: String
  localisation_gt: String
  localisation_gte: String
  localisation_contains: String
  localisation_not_contains: String
  localisation_starts_with: String
  localisation_not_starts_with: String
  localisation_ends_with: String
  localisation_not_ends_with: String
  nativeCountry: String
  nativeCountry_not: String
  nativeCountry_in: [String!]
  nativeCountry_not_in: [String!]
  nativeCountry_lt: String
  nativeCountry_lte: String
  nativeCountry_gt: String
  nativeCountry_gte: String
  nativeCountry_contains: String
  nativeCountry_not_contains: String
  nativeCountry_starts_with: String
  nativeCountry_not_starts_with: String
  nativeCountry_ends_with: String
  nativeCountry_not_ends_with: String
  residentCountry: String
  residentCountry_not: String
  residentCountry_in: [String!]
  residentCountry_not_in: [String!]
  residentCountry_lt: String
  residentCountry_lte: String
  residentCountry_gt: String
  residentCountry_gte: String
  residentCountry_contains: String
  residentCountry_not_contains: String
  residentCountry_starts_with: String
  residentCountry_not_starts_with: String
  residentCountry_ends_with: String
  residentCountry_not_ends_with: String
  others: String
  others_not: String
  others_in: [String!]
  others_not_in: [String!]
  others_lt: String
  others_lte: String
  others_gt: String
  others_gte: String
  others_contains: String
  others_not_contains: String
  others_starts_with: String
  others_not_starts_with: String
  others_ends_with: String
  others_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  status: Boolean
  status_not: Boolean
  reset_password_token: String
  reset_password_token_not: String
  reset_password_token_in: [String!]
  reset_password_token_not_in: [String!]
  reset_password_token_lt: String
  reset_password_token_lte: String
  reset_password_token_gt: String
  reset_password_token_gte: String
  reset_password_token_contains: String
  reset_password_token_not_contains: String
  reset_password_token_starts_with: String
  reset_password_token_not_starts_with: String
  reset_password_token_ends_with: String
  reset_password_token_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  phone: String
  profession: String
  localisation: String
  nativeCountry: String
  residentCountry: String
  others: String
  password: String
  status: Boolean
  reset_password_token: String
  herd: HerdUpdateOneWithoutCatterysInput
}

input UserUpdateManyDataInput {
  name: String
  email: String
  phone: String
  profession: String
  localisation: String
  nativeCountry: String
  residentCountry: String
  others: String
  password: String
  status: Boolean
  reset_password_token: String
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  phone: String
  profession: String
  localisation: String
  nativeCountry: String
  residentCountry: String
  others: String
  password: String
  status: Boolean
  reset_password_token: String
}

input UserUpdateManyWithoutHerdInput {
  create: [UserCreateWithoutHerdInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutHerdInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutHerdInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateWithoutHerdDataInput {
  name: String
  email: String
  phone: String
  profession: String
  localisation: String
  nativeCountry: String
  residentCountry: String
  others: String
  password: String
  status: Boolean
  reset_password_token: String
}

input UserUpdateWithWhereUniqueWithoutHerdInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutHerdDataInput!
}

input UserUpsertWithWhereUniqueWithoutHerdInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutHerdDataInput!
  create: UserCreateWithoutHerdInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  profession: String
  profession_not: String
  profession_in: [String!]
  profession_not_in: [String!]
  profession_lt: String
  profession_lte: String
  profession_gt: String
  profession_gte: String
  profession_contains: String
  profession_not_contains: String
  profession_starts_with: String
  profession_not_starts_with: String
  profession_ends_with: String
  profession_not_ends_with: String
  localisation: String
  localisation_not: String
  localisation_in: [String!]
  localisation_not_in: [String!]
  localisation_lt: String
  localisation_lte: String
  localisation_gt: String
  localisation_gte: String
  localisation_contains: String
  localisation_not_contains: String
  localisation_starts_with: String
  localisation_not_starts_with: String
  localisation_ends_with: String
  localisation_not_ends_with: String
  nativeCountry: String
  nativeCountry_not: String
  nativeCountry_in: [String!]
  nativeCountry_not_in: [String!]
  nativeCountry_lt: String
  nativeCountry_lte: String
  nativeCountry_gt: String
  nativeCountry_gte: String
  nativeCountry_contains: String
  nativeCountry_not_contains: String
  nativeCountry_starts_with: String
  nativeCountry_not_starts_with: String
  nativeCountry_ends_with: String
  nativeCountry_not_ends_with: String
  residentCountry: String
  residentCountry_not: String
  residentCountry_in: [String!]
  residentCountry_not_in: [String!]
  residentCountry_lt: String
  residentCountry_lte: String
  residentCountry_gt: String
  residentCountry_gte: String
  residentCountry_contains: String
  residentCountry_not_contains: String
  residentCountry_starts_with: String
  residentCountry_not_starts_with: String
  residentCountry_ends_with: String
  residentCountry_not_ends_with: String
  others: String
  others_not: String
  others_in: [String!]
  others_not_in: [String!]
  others_lt: String
  others_lte: String
  others_gt: String
  others_gte: String
  others_contains: String
  others_not_contains: String
  others_starts_with: String
  others_not_starts_with: String
  others_ends_with: String
  others_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  status: Boolean
  status_not: Boolean
  reset_password_token: String
  reset_password_token_not: String
  reset_password_token_in: [String!]
  reset_password_token_not_in: [String!]
  reset_password_token_lt: String
  reset_password_token_lte: String
  reset_password_token_gt: String
  reset_password_token_gte: String
  reset_password_token_contains: String
  reset_password_token_not_contains: String
  reset_password_token_starts_with: String
  reset_password_token_not_starts_with: String
  reset_password_token_ends_with: String
  reset_password_token_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  herd: HerdWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  phone: String
}
`
      }
    