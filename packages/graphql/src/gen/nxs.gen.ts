/* eslint-disable */
/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { BaseContext } from "./../context/BaseContext"
import type { App } from "./../entities/App"
import type { DashboardProject } from "./../entities/DashboardProject"
import type { NavigationMenu } from "./../entities/NavigationMenu"
import type { LocalProject } from "./../entities/LocalProject"
import type { ResolvedOptionBase, ResolvedStringOption, ResolvedStringListOption, ResolvedNumberOption, ResolvedBooleanOption, ResolvedJsonOption, ResolvedConfig } from "./../entities/ResolvedConfig"
import type { Query } from "./../entities/Query"
import type { TestingTypeInfo } from "./../entities/TestingTypeInfo"
import type { Viewer } from "./../entities/Viewer"
import type { Wizard } from "./../entities/Wizard"
import type { WizardBundler } from "./../entities/WizardBundler"
import type { WizardFrontendFramework } from "./../entities/WizardFrontendFramework"
import type { WizardNpmPackage } from "./../entities/WizardNpmPackage"
import type { Browser } from "./../entities/Browser"
import type { RunGroup } from "./../entities/run/Run.js"
import type { NavigationItem } from "./../entities/NavigationItem"
import type { RunCommit } from "./../entities/run/RunCommit.js"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "JSON";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "JSON";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  BrowserFamily: "chromium" | "firefox"
  FrontendFramework: "cra" | "nextjs" | "nuxtjs" | "react" | "vue" | "vuecli"
  NavItem: "learn" | "projectSetup" | "runs" | "settings"
  PluginsState: "error" | "initialized" | "initializing" | "uninitialized"
  ResolvedConfigOption: "config" | "default" | "env" | "plugin" | "runtime"
  ResolvedType: "array" | "boolean" | "json" | "number" | "string"
  RunGroupStatus: "cancelled" | "errored" | "failed" | "noTests" | "passed" | "running" | "timedOut" | "unclaimed"
  SupportedBundlers: "vite" | "webpack"
  TestingTypeEnum: "component" | "e2e"
  WizardCodeLanguage: "js" | "ts"
  WizardNavigateDirection: "back" | "forward"
  WizardStep: "createConfig" | "installDependencies" | "selectFramework" | "setupComplete" | "welcome"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
  JSON: any
}

export interface NexusGenObjects {
  App: App;
  Browser: Browser;
  DashboardProject: DashboardProject;
  LocalProject: LocalProject;
  Mutation: {};
  NavigationItem: NavigationItem;
  NavigationMenu: NavigationMenu;
  Query: Query;
  ResolvedBooleanOption: ResolvedBooleanOption;
  ResolvedConfig: ResolvedConfig;
  ResolvedJsonOption: ResolvedJsonOption;
  ResolvedNumberOption: ResolvedNumberOption;
  ResolvedOptionBase: ResolvedOptionBase;
  ResolvedStringListOption: ResolvedStringListOption;
  ResolvedStringOption: ResolvedStringOption;
  RunCommit: RunCommit;
  RunGroup: RunGroup;
  TestingTypeInfo: TestingTypeInfo;
  Viewer: Viewer;
  Wizard: Wizard;
  WizardBundler: WizardBundler;
  WizardFrontendFramework: WizardFrontendFramework;
  WizardNpmPackage: WizardNpmPackage;
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  App: { // field return type
    activeProject: NexusGenRootTypes['LocalProject'] | null; // LocalProject
    browsers: NexusGenRootTypes['Browser'][]; // [Browser!]!
    isFirstOpen: boolean; // Boolean!
    projects: NexusGenRootTypes['LocalProject'][]; // [LocalProject!]!
  }
  Browser: { // field return type
    channel: string; // String!
    displayName: string; // String!
    family: NexusGenEnums['BrowserFamily']; // BrowserFamily!
    majorVersion: string | null; // String
    name: string; // String!
    path: string; // String!
    version: string; // String!
  }
  DashboardProject: { // field return type
    id: string; // ID!
    projectId: string | null; // String
    projectRoot: string; // String!
    recordKeys: string[] | null; // [String!]
    runs: NexusGenRootTypes['RunGroup'][] | null; // [RunGroup!]
    title: string; // String!
  }
  LocalProject: { // field return type
    id: string; // ID!
    projectId: string | null; // String
    projectRoot: string; // String!
    resolvedConfig: NexusGenRootTypes['ResolvedConfig'] | null; // ResolvedConfig
    title: string; // String!
  }
  Mutation: { // field return type
    appCreateConfigFile: NexusGenRootTypes['App'] | null; // App
    login: NexusGenRootTypes['Viewer'] | null; // Viewer
    logout: NexusGenRootTypes['Viewer'] | null; // Viewer
    navigationMenuSetItem: NexusGenRootTypes['NavigationMenu'] | null; // NavigationMenu
    wizardInstallDependencies: NexusGenRootTypes['Wizard'] | null; // Wizard
    wizardNavigate: NexusGenRootTypes['Wizard'] | null; // Wizard
    wizardNavigateForward: NexusGenRootTypes['Wizard'] | null; // Wizard
    wizardSetBundler: NexusGenRootTypes['Wizard'] | null; // Wizard
    wizardSetFramework: NexusGenRootTypes['Wizard'] | null; // Wizard
    wizardSetManualInstall: NexusGenRootTypes['Wizard'] | null; // Wizard
    wizardSetTestingType: NexusGenRootTypes['Wizard'] | null; // Wizard
    wizardValidateManualInstall: NexusGenRootTypes['Wizard'] | null; // Wizard
  }
  NavigationItem: { // field return type
    iconPath: string; // String!
    id: NexusGenEnums['NavItem']; // NavItem!
    name: string; // String!
    selected: boolean; // Boolean!
  }
  NavigationMenu: { // field return type
    items: Array<NexusGenRootTypes['NavigationItem'] | null>; // [NavigationItem]!
    selected: NexusGenEnums['NavItem']; // NavItem!
  }
  Query: { // field return type
    app: NexusGenRootTypes['App']; // App!
    navigationMenu: NexusGenRootTypes['NavigationMenu'] | null; // NavigationMenu
    viewer: NexusGenRootTypes['Viewer'] | null; // Viewer
    wizard: NexusGenRootTypes['Wizard'] | null; // Wizard
  }
  ResolvedBooleanOption: { // field return type
    from: NexusGenEnums['ResolvedConfigOption'] | null; // ResolvedConfigOption
    type: NexusGenEnums['ResolvedType']; // ResolvedType!
    value: boolean | null; // Boolean
  }
  ResolvedConfig: { // field return type
    animationDistanceThreshold: NexusGenRootTypes['ResolvedNumberOption'] | null; // ResolvedNumberOption
    baseUrl: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    blockHosts: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    chromeWebSecurity: NexusGenRootTypes['ResolvedBooleanOption'] | null; // ResolvedBooleanOption
    componentFolder: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    defaultCommandTimeout: NexusGenRootTypes['ResolvedNumberOption'] | null; // ResolvedNumberOption
    downloadsFolder: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    env: NexusGenRootTypes['ResolvedJsonOption'] | null; // ResolvedJsonOption
    execTimeout: NexusGenRootTypes['ResolvedNumberOption'] | null; // ResolvedNumberOption
    experimentalFetchPolyfill: NexusGenRootTypes['ResolvedBooleanOption'] | null; // ResolvedBooleanOption
    experimentalInteractiveRunEvents: NexusGenRootTypes['ResolvedBooleanOption'] | null; // ResolvedBooleanOption
    experimentalSessionSupport: NexusGenRootTypes['ResolvedBooleanOption'] | null; // ResolvedBooleanOption
    experimentalSourceRewriting: NexusGenRootTypes['ResolvedBooleanOption'] | null; // ResolvedBooleanOption
    experimentalStudio: NexusGenRootTypes['ResolvedBooleanOption'] | null; // ResolvedBooleanOption
    fileServerFolder: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    fixturesFolder: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    ignoreTestFiles: NexusGenRootTypes['ResolvedStringListOption'] | null; // ResolvedStringListOption
    includeShadowDom: NexusGenRootTypes['ResolvedBooleanOption'] | null; // ResolvedBooleanOption
    integrationFolder: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    nodeVersion: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    numTestsKeptInMemory: NexusGenRootTypes['ResolvedNumberOption'] | null; // ResolvedNumberOption
    pageLoadTimeout: NexusGenRootTypes['ResolvedNumberOption'] | null; // ResolvedNumberOption
    pluginsFile: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    port: NexusGenRootTypes['ResolvedNumberOption'] | null; // ResolvedNumberOption
    projectId: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    redirectionLimit: NexusGenRootTypes['ResolvedNumberOption'] | null; // ResolvedNumberOption
    reporter: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    requestTimeout: NexusGenRootTypes['ResolvedNumberOption'] | null; // ResolvedNumberOption
    resolvedNodePath: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    resolvedNodeVersion: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    retries: NexusGenRootTypes['ResolvedNumberOption'] | null; // ResolvedNumberOption
    screenshotOnRunFailure: NexusGenRootTypes['ResolvedBooleanOption'] | null; // ResolvedBooleanOption
    screenshotsFolder: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    scrollBehavior: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    supportFile: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    supportFolder: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    taskTimeout: NexusGenRootTypes['ResolvedNumberOption'] | null; // ResolvedNumberOption
    testFiles: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    trashAssetsBeforeRuns: NexusGenRootTypes['ResolvedBooleanOption'] | null; // ResolvedBooleanOption
    userAgent: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    video: NexusGenRootTypes['ResolvedBooleanOption'] | null; // ResolvedBooleanOption
    videoCompression: NexusGenRootTypes['ResolvedNumberOption'] | null; // ResolvedNumberOption
    videoUploadOnPasses: NexusGenRootTypes['ResolvedBooleanOption'] | null; // ResolvedBooleanOption
    videosFolder: NexusGenRootTypes['ResolvedStringOption'] | null; // ResolvedStringOption
    viewportHeight: NexusGenRootTypes['ResolvedNumberOption'] | null; // ResolvedNumberOption
    viewportWidth: NexusGenRootTypes['ResolvedNumberOption'] | null; // ResolvedNumberOption
    waitForAnimations: NexusGenRootTypes['ResolvedBooleanOption'] | null; // ResolvedBooleanOption
    watchForFileChanges: NexusGenRootTypes['ResolvedBooleanOption'] | null; // ResolvedBooleanOption
  }
  ResolvedJsonOption: { // field return type
    from: NexusGenEnums['ResolvedConfigOption'] | null; // ResolvedConfigOption
    type: NexusGenEnums['ResolvedType']; // ResolvedType!
    value: string | null; // String
  }
  ResolvedNumberOption: { // field return type
    from: NexusGenEnums['ResolvedConfigOption'] | null; // ResolvedConfigOption
    type: NexusGenEnums['ResolvedType']; // ResolvedType!
    value: string | null; // String
  }
  ResolvedOptionBase: { // field return type
    from: NexusGenEnums['ResolvedConfigOption'] | null; // ResolvedConfigOption
  }
  ResolvedStringListOption: { // field return type
    from: NexusGenEnums['ResolvedConfigOption'] | null; // ResolvedConfigOption
    type: NexusGenEnums['ResolvedType']; // ResolvedType!
    value: Array<string | null> | null; // [String]
  }
  ResolvedStringOption: { // field return type
    from: NexusGenEnums['ResolvedConfigOption'] | null; // ResolvedConfigOption
    type: NexusGenEnums['ResolvedType']; // ResolvedType!
    value: string | null; // String
  }
  RunCommit: { // field return type
    authorEmail: string; // String!
    authorName: string; // String!
    branch: string; // String!
    message: string; // String!
    sha: string; // String!
    url: string; // String!
  }
  RunGroup: { // field return type
    commit: NexusGenRootTypes['RunCommit']; // RunCommit!
    completedAt: string; // String!
    createdAt: string; // String!
    status: NexusGenEnums['RunGroupStatus']; // RunGroupStatus!
    totalDuration: number | null; // Int
    totalFailed: number | null; // Int
    totalPassed: number | null; // Int
    totalPending: number | null; // Int
    totalSkipped: number | null; // Int
  }
  TestingTypeInfo: { // field return type
    description: string | null; // String
    id: NexusGenEnums['TestingTypeEnum']; // TestingTypeEnum!
    title: string | null; // String
  }
  Viewer: { // field return type
    authToken: string; // String!
    email: string; // String!
    getProjectByProjectId: NexusGenRootTypes['DashboardProject'] | null; // DashboardProject
    name: string; // String!
    projects: Array<NexusGenRootTypes['DashboardProject'] | null> | null; // [DashboardProject]
  }
  Wizard: { // field return type
    allBundlers: NexusGenRootTypes['WizardBundler'][]; // [WizardBundler!]!
    bundler: NexusGenRootTypes['WizardBundler'] | null; // WizardBundler
    canNavigateForward: boolean; // Boolean!
    description: string | null; // String
    framework: NexusGenRootTypes['WizardFrontendFramework'] | null; // WizardFrontendFramework
    frameworks: NexusGenRootTypes['WizardFrontendFramework'][]; // [WizardFrontendFramework!]!
    isManualInstall: boolean; // Boolean!
    packagesToInstall: NexusGenRootTypes['WizardNpmPackage'][] | null; // [WizardNpmPackage!]
    sampleCode: string | null; // String
    step: NexusGenEnums['WizardStep']; // WizardStep!
    testingType: NexusGenEnums['TestingTypeEnum'] | null; // TestingTypeEnum
    testingTypes: NexusGenRootTypes['TestingTypeInfo'][] | null; // [TestingTypeInfo!]
    title: string | null; // String
  }
  WizardBundler: { // field return type
    id: NexusGenEnums['SupportedBundlers']; // SupportedBundlers!
    isSelected: boolean | null; // Boolean
    name: string; // String!
    package: string; // String!
  }
  WizardFrontendFramework: { // field return type
    id: NexusGenEnums['FrontendFramework']; // FrontendFramework!
    isSelected: boolean; // Boolean!
    name: string; // String!
    supportedBundlers: NexusGenRootTypes['WizardBundler'][]; // [WizardBundler!]!
  }
  WizardNpmPackage: { // field return type
    description: string; // String!
    name: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  App: { // field return type name
    activeProject: 'LocalProject'
    browsers: 'Browser'
    isFirstOpen: 'Boolean'
    projects: 'LocalProject'
  }
  Browser: { // field return type name
    channel: 'String'
    displayName: 'String'
    family: 'BrowserFamily'
    majorVersion: 'String'
    name: 'String'
    path: 'String'
    version: 'String'
  }
  DashboardProject: { // field return type name
    id: 'ID'
    projectId: 'String'
    projectRoot: 'String'
    recordKeys: 'String'
    runs: 'RunGroup'
    title: 'String'
  }
  LocalProject: { // field return type name
    id: 'ID'
    projectId: 'String'
    projectRoot: 'String'
    resolvedConfig: 'ResolvedConfig'
    title: 'String'
  }
  Mutation: { // field return type name
    appCreateConfigFile: 'App'
    login: 'Viewer'
    logout: 'Viewer'
    navigationMenuSetItem: 'NavigationMenu'
    wizardInstallDependencies: 'Wizard'
    wizardNavigate: 'Wizard'
    wizardNavigateForward: 'Wizard'
    wizardSetBundler: 'Wizard'
    wizardSetFramework: 'Wizard'
    wizardSetManualInstall: 'Wizard'
    wizardSetTestingType: 'Wizard'
    wizardValidateManualInstall: 'Wizard'
  }
  NavigationItem: { // field return type name
    iconPath: 'String'
    id: 'NavItem'
    name: 'String'
    selected: 'Boolean'
  }
  NavigationMenu: { // field return type name
    items: 'NavigationItem'
    selected: 'NavItem'
  }
  Query: { // field return type name
    app: 'App'
    navigationMenu: 'NavigationMenu'
    viewer: 'Viewer'
    wizard: 'Wizard'
  }
  ResolvedBooleanOption: { // field return type name
    from: 'ResolvedConfigOption'
    type: 'ResolvedType'
    value: 'Boolean'
  }
  ResolvedConfig: { // field return type name
    animationDistanceThreshold: 'ResolvedNumberOption'
    baseUrl: 'ResolvedStringOption'
    blockHosts: 'ResolvedStringOption'
    chromeWebSecurity: 'ResolvedBooleanOption'
    componentFolder: 'ResolvedStringOption'
    defaultCommandTimeout: 'ResolvedNumberOption'
    downloadsFolder: 'ResolvedStringOption'
    env: 'ResolvedJsonOption'
    execTimeout: 'ResolvedNumberOption'
    experimentalFetchPolyfill: 'ResolvedBooleanOption'
    experimentalInteractiveRunEvents: 'ResolvedBooleanOption'
    experimentalSessionSupport: 'ResolvedBooleanOption'
    experimentalSourceRewriting: 'ResolvedBooleanOption'
    experimentalStudio: 'ResolvedBooleanOption'
    fileServerFolder: 'ResolvedStringOption'
    fixturesFolder: 'ResolvedStringOption'
    ignoreTestFiles: 'ResolvedStringListOption'
    includeShadowDom: 'ResolvedBooleanOption'
    integrationFolder: 'ResolvedStringOption'
    nodeVersion: 'ResolvedStringOption'
    numTestsKeptInMemory: 'ResolvedNumberOption'
    pageLoadTimeout: 'ResolvedNumberOption'
    pluginsFile: 'ResolvedStringOption'
    port: 'ResolvedNumberOption'
    projectId: 'ResolvedStringOption'
    redirectionLimit: 'ResolvedNumberOption'
    reporter: 'ResolvedStringOption'
    requestTimeout: 'ResolvedNumberOption'
    resolvedNodePath: 'ResolvedStringOption'
    resolvedNodeVersion: 'ResolvedStringOption'
    retries: 'ResolvedNumberOption'
    screenshotOnRunFailure: 'ResolvedBooleanOption'
    screenshotsFolder: 'ResolvedStringOption'
    scrollBehavior: 'ResolvedStringOption'
    supportFile: 'ResolvedStringOption'
    supportFolder: 'ResolvedStringOption'
    taskTimeout: 'ResolvedNumberOption'
    testFiles: 'ResolvedStringOption'
    trashAssetsBeforeRuns: 'ResolvedBooleanOption'
    userAgent: 'ResolvedStringOption'
    video: 'ResolvedBooleanOption'
    videoCompression: 'ResolvedNumberOption'
    videoUploadOnPasses: 'ResolvedBooleanOption'
    videosFolder: 'ResolvedStringOption'
    viewportHeight: 'ResolvedNumberOption'
    viewportWidth: 'ResolvedNumberOption'
    waitForAnimations: 'ResolvedBooleanOption'
    watchForFileChanges: 'ResolvedBooleanOption'
  }
  ResolvedJsonOption: { // field return type name
    from: 'ResolvedConfigOption'
    type: 'ResolvedType'
    value: 'String'
  }
  ResolvedNumberOption: { // field return type name
    from: 'ResolvedConfigOption'
    type: 'ResolvedType'
    value: 'String'
  }
  ResolvedOptionBase: { // field return type name
    from: 'ResolvedConfigOption'
  }
  ResolvedStringListOption: { // field return type name
    from: 'ResolvedConfigOption'
    type: 'ResolvedType'
    value: 'String'
  }
  ResolvedStringOption: { // field return type name
    from: 'ResolvedConfigOption'
    type: 'ResolvedType'
    value: 'String'
  }
  RunCommit: { // field return type name
    authorEmail: 'String'
    authorName: 'String'
    branch: 'String'
    message: 'String'
    sha: 'String'
    url: 'String'
  }
  RunGroup: { // field return type name
    commit: 'RunCommit'
    completedAt: 'String'
    createdAt: 'String'
    status: 'RunGroupStatus'
    totalDuration: 'Int'
    totalFailed: 'Int'
    totalPassed: 'Int'
    totalPending: 'Int'
    totalSkipped: 'Int'
  }
  TestingTypeInfo: { // field return type name
    description: 'String'
    id: 'TestingTypeEnum'
    title: 'String'
  }
  Viewer: { // field return type name
    authToken: 'String'
    email: 'String'
    getProjectByProjectId: 'DashboardProject'
    name: 'String'
    projects: 'DashboardProject'
  }
  Wizard: { // field return type name
    allBundlers: 'WizardBundler'
    bundler: 'WizardBundler'
    canNavigateForward: 'Boolean'
    description: 'String'
    framework: 'WizardFrontendFramework'
    frameworks: 'WizardFrontendFramework'
    isManualInstall: 'Boolean'
    packagesToInstall: 'WizardNpmPackage'
    sampleCode: 'String'
    step: 'WizardStep'
    testingType: 'TestingTypeEnum'
    testingTypes: 'TestingTypeInfo'
    title: 'String'
  }
  WizardBundler: { // field return type name
    id: 'SupportedBundlers'
    isSelected: 'Boolean'
    name: 'String'
    package: 'String'
  }
  WizardFrontendFramework: { // field return type name
    id: 'FrontendFramework'
    isSelected: 'Boolean'
    name: 'String'
    supportedBundlers: 'WizardBundler'
  }
  WizardNpmPackage: { // field return type name
    description: 'String'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    appCreateConfigFile: { // args
      code: string; // String!
      configFilename: string; // String!
    }
    navigationMenuSetItem: { // args
      type: NexusGenEnums['NavItem']; // NavItem!
    }
    wizardNavigate: { // args
      direction: NexusGenEnums['WizardNavigateDirection']; // WizardNavigateDirection!
    }
    wizardSetBundler: { // args
      bundler: NexusGenEnums['SupportedBundlers']; // SupportedBundlers!
    }
    wizardSetFramework: { // args
      framework: NexusGenEnums['FrontendFramework']; // FrontendFramework!
    }
    wizardSetManualInstall: { // args
      isManual: boolean; // Boolean!
    }
    wizardSetTestingType: { // args
      type: NexusGenEnums['TestingTypeEnum']; // TestingTypeEnum!
    }
  }
  Viewer: {
    getProjectByProjectId: { // args
      projectId: string; // String!
    }
  }
  Wizard: {
    sampleCode: { // args
      lang: NexusGenEnums['WizardCodeLanguage']; // WizardCodeLanguage!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: BaseContext;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}