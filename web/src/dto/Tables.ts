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