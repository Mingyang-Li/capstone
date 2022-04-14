export interface Calories {
  dateTime: Date; // dateTime has a type of Date
  value: number; // number type in typescript covers both int and floats
}

export interface Distance {
  dateTime: Date; // dateTime has a type of Date
  value: number; // number type in typescript covers both int and floats
}

export interface ActivityLevel {
  minutes: number;
  name: string;
}

export interface ManualValuesSpecified {
  calories: boolean;
  distance: boolean;
  steps: boolean;
}

export interface HeartRateZone {
  name: string;
  min: number;
  max: number;
  minutes: number;
}

export interface Exercise {
  activityLevel: ActivityLevel;
  manualValuesSpecified: ManualValuesSpecified;
  heartRateZone: HeartRateZone;

  logId: number;
  activityName: string;
  activityTypeId: number;
  averageHeartRate: number;
  calories: number;
  duration: number;
  activeDuration: number;
  steps: number;
  logType: string;
  heartRateZones: HeartRateZone[];
  lastModified: string;
  startTime: string;
  originalStartTime: string;
  originalDuration: number;
  elevationGain: number;
  hasGps: boolean;
  shouldFetchDetails: boolean;
}

export interface Value {
  bpm: number;
  confidence: number;
}

export interface HeartRate {
  value: Value;
}

export interface RootObject {
  dateTime: Date;
  value: Value;
}

export interface LightlyActiveMinutes {
  dateTime: Date;
  value: number;
}

export interface ModeratlyActiveMinutes {
  dateTime: Date;
  value: number;
}

export interface ModeratlyActiveMinutes {
  dateTime: Date;
  value: number;
}

export interface RestingHeartRate {
  dateTime: Date;
  value: Value;
}

export interface SedentaryMinutes {
  dateTime: Date;
  value: number;
}

export interface Deep {
  count: number;
  minutes: number;
  thirtyDayAvgMinutes: number;
}

export interface Wake {
  count: number;
  minutes: number;
  thirtyDayAvgMinutes: number;
}

export interface Light {
  count: number;
  minutes: number;
  thirtyDayAvgMinutes: number;
}

export interface Rem {
  count: number;
  minutes: number;
  thirtyDayAvgMinutes: number;
}

export interface Summary {
  deep: Deep;
  wake: Wake;
  light: Light;
  rem: Rem;
}

export interface Datum {
  dateTime: Date;
  level: string;
  seconds: number;
}

export interface ShortData {
  dateTime: Date;
  level: string;
  seconds: number;
}

export interface Levels {
  summary: Summary;
  data: Datum[];
  shortData: ShortData[];
}
export interface Sleep {
  logId: number;
  dateOfSleep: Date;
  startTime: Date;
  endTime: Date;
  duration: number;
  minutesToFallAsleep: number;
  minutesAsleep: number;
  minutesAwake: number;
  minutesAfterWakeup: number;
  timeInBed: number;
  efficiency: number;
  type: string;
  infoCode: number;
  levels: Levels;
  mainSleep: boolean;
}

export interface Steps {
  dateTime: Date;
  value: number;
}

export interface Steps {
  dateTime: Date;
  value: number;
}

export interface VeryActiveMinutes {
  dateTime: Date;
  value: number;
}
