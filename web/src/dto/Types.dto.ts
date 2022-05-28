export interface HeartRate {
  // original
  dateTime: Date;
  bpm: number;
  confidence: number;

  //additional
  date: Date;
  userId: number;
}

export interface Calories {
  //original
  dateTime: Date;
  value: number;

  //additional
  date: Date;
  userId: number;
}

export interface Distance {
  //original
  dateTime: Date;
  value: number;

  //additional
  date: Date;
  userId: number;
}

export interface Steps {
  //original
  dateTime: Date;
  value: number;

  //additional
  date: Date;
  userId: number;
}

export interface VeryActiveMinutes {
  //original
  dateTime: Date;
  value: number;

  //additional
  date: Date;
  userId: number;
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
  logId: number;
  activityName: string;
  activityTypeId: number;
  activityLevel: ActivityLevel[];
  averageHeartRate: number;
  calories: number;
  duration: number;
  activeDuration: number;
  steps: number;
  logType: string;
  manualValuesSpecified: ManualValuesSpecified;
  heartRateZones: HeartRateZone[];
  lastModified: string;
  startTime: string;
  originalStartTime: string;
  originalDuration: number;
  elevationGain: number;
  hasGps: boolean;
  shouldFetchDetails: boolean;
}

// for HeartRate
export interface HeartRateValue {
  bpm: number;
  confidence: number;
}

export interface LightlyActiveMinutes {
  dateTime: Date;
  value: number;
}

export interface ModeratlyActiveMinutes {
  dateTime: Date;
  value: number;
}

// for RestingHeartRate
export interface RestingHeartRateValue {
  date: string;
  value: number;
  error: number;
}

export interface RestingHeartRate {
  dateTime: Date;
  value: RestingHeartRateValue;
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

export interface SummaryType {
  count: number;
  minutes: number;
  thirtyDayAvgMinutes: number;
}

export interface Summary {
  deep: SummaryType;
  wake: SummaryType;
  light: SummaryType;
  rem: SummaryType;
}

export interface SleepLevelsData {
  dateTime: Date;
  level: string;
  seconds: number;
}

export interface SleepLevelsShortData {
  dateTime: Date;
  level: string;
  seconds: number;
}

export interface SleepLevel {
  summary: Summary;
  data: SleepLevelsData[];
  shortData: SleepLevelsShortData[];
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
  levels: SleepLevel;
  mainSleep: boolean;
}

export interface TimeInHeartRateZonesValue {
  valuesInZones: TimeInHeartRateZonesValuesInZones;
}

export interface TimeInHeartRateZonesValuesInZones {
  BELOW_DEFAULT_ZONE_1: number;
  IN_DEFAULT_ZONE_1: number;
  IN_DEFAULT_ZONE_3: number;
  IN_DEFAULT_ZONE_2: number;
}

export interface TimeInHeartRateZones {
  dateTime: Date;
  value: TimeInHeartRateZonesValue;
}
