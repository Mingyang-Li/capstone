interface Calories {
    dateTime: Date; // dateTime has a type of Date
    value: number; // number type in typescript covers both int and floats
}

interface Distance {
    dateTime: Date; // dateTime has a type of Date
    value: number; // number type in typescript covers both int and floats
  }

  interface ActivityLevel {
    minutes: number;
    name: string;
}

interface ManualValuesSpecified {
    calories: boolean;
    distance: boolean;
    steps: boolean;
}


interface HeartRateZone {
    name: string;
    min: number;
    max: number;
    minutes: number;
}

interface Exercise {
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
};

interface Value {
    bpm: number;
    confidence: number;
}

interface Heart_rate {
    value: Value;
}

interface RootObject {
    dateTime: Date;
    value: Value;
}

interface Lightly_active_minutes {
    dateTime: Date;
  value: number;
}

interface Moderatly_active_minutes {
    dateTime: Date;
  value: number;
}

interface Moderatly_active_minutes {
    dateTime: Date;
  value: number;
}

interface Resting_heart_rate {
    dateTime: Date;
    value: Value;
}

interface Sedentary_minutes {
    dateTime: Date;
    value: number;
}


interface Deep {
    count: number;
    minutes: number;
    thirtyDayAvgMinutes: number;
}

interface Wake {
    count: number;
    minutes: number;
    thirtyDayAvgMinutes: number;
}

interface Light {
    count: number;
    minutes: number;
    thirtyDayAvgMinutes: number;
}

interface Rem {
    count: number;
    minutes: number;
    thirtyDayAvgMinutes: number;
}

interface Summary {
    deep: Deep;
    wake: Wake;
    light: Light;
    rem: Rem;
}

interface Datum {
    dateTime: Date;
    level: string;
    seconds: number;
}

interface ShortData {
    dateTime: Date;
    level: string;
    seconds: number;
}

interface Levels {
    summary: Summary;
    data: Datum[];
    shortData: ShortData[];
}
interface Sleep {
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

 interface Steps{
	dateTime: Date;
  value: number;
}

interface Steps{
	dateTime: Date;
  value: number;
}

interface Very_active_minutes {
	dateTime: Date;
  value: number;
}