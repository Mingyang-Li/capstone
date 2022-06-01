import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;

type Query = any;
type QueryVariables = any;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
};

/** columns and relationships of "CALORIES_BY_DATE" */
export type Calories_By_Date = {
  __typename?: 'CALORIES_BY_DATE';
  date?: Maybe<Scalars['date']>;
  sum?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "CALORIES_BY_DATE" */
export type Calories_By_Date_Aggregate = {
  __typename?: 'CALORIES_BY_DATE_aggregate';
  aggregate?: Maybe<Calories_By_Date_Aggregate_Fields>;
  nodes: Array<Calories_By_Date>;
};

/** aggregate fields of "CALORIES_BY_DATE" */
export type Calories_By_Date_Aggregate_Fields = {
  __typename?: 'CALORIES_BY_DATE_aggregate_fields';
  avg?: Maybe<Calories_By_Date_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Calories_By_Date_Max_Fields>;
  min?: Maybe<Calories_By_Date_Min_Fields>;
  stddev?: Maybe<Calories_By_Date_Stddev_Fields>;
  stddev_pop?: Maybe<Calories_By_Date_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Calories_By_Date_Stddev_Samp_Fields>;
  sum?: Maybe<Calories_By_Date_Sum_Fields>;
  var_pop?: Maybe<Calories_By_Date_Var_Pop_Fields>;
  var_samp?: Maybe<Calories_By_Date_Var_Samp_Fields>;
  variance?: Maybe<Calories_By_Date_Variance_Fields>;
};


/** aggregate fields of "CALORIES_BY_DATE" */
export type Calories_By_Date_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Calories_By_Date_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Calories_By_Date_Avg_Fields = {
  __typename?: 'CALORIES_BY_DATE_avg_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "CALORIES_BY_DATE". All fields are combined with a logical 'AND'. */
export type Calories_By_Date_Bool_Exp = {
  _and?: InputMaybe<Array<Calories_By_Date_Bool_Exp>>;
  _not?: InputMaybe<Calories_By_Date_Bool_Exp>;
  _or?: InputMaybe<Array<Calories_By_Date_Bool_Exp>>;
  date?: InputMaybe<Date_Comparison_Exp>;
  sum?: InputMaybe<Numeric_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Calories_By_Date_Max_Fields = {
  __typename?: 'CALORIES_BY_DATE_max_fields';
  date?: Maybe<Scalars['date']>;
  sum?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Calories_By_Date_Min_Fields = {
  __typename?: 'CALORIES_BY_DATE_min_fields';
  date?: Maybe<Scalars['date']>;
  sum?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "CALORIES_BY_DATE". */
export type Calories_By_Date_Order_By = {
  date?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** select columns of table "CALORIES_BY_DATE" */
export enum Calories_By_Date_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Sum = 'sum',
  /** column name */
  UserId = 'userId'
}

/** aggregate stddev on columns */
export type Calories_By_Date_Stddev_Fields = {
  __typename?: 'CALORIES_BY_DATE_stddev_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Calories_By_Date_Stddev_Pop_Fields = {
  __typename?: 'CALORIES_BY_DATE_stddev_pop_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Calories_By_Date_Stddev_Samp_Fields = {
  __typename?: 'CALORIES_BY_DATE_stddev_samp_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Calories_By_Date_Sum_Fields = {
  __typename?: 'CALORIES_BY_DATE_sum_fields';
  sum?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Calories_By_Date_Var_Pop_Fields = {
  __typename?: 'CALORIES_BY_DATE_var_pop_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Calories_By_Date_Var_Samp_Fields = {
  __typename?: 'CALORIES_BY_DATE_var_samp_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Calories_By_Date_Variance_Fields = {
  __typename?: 'CALORIES_BY_DATE_variance_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Calories" */
export type Calories = {
  __typename?: 'Calories';
  date?: Maybe<Scalars['date']>;
  dateTime?: Maybe<Scalars['timestamp']>;
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "Calories" */
export type Calories_Aggregate = {
  __typename?: 'Calories_aggregate';
  aggregate?: Maybe<Calories_Aggregate_Fields>;
  nodes: Array<Calories>;
};

/** aggregate fields of "Calories" */
export type Calories_Aggregate_Fields = {
  __typename?: 'Calories_aggregate_fields';
  avg?: Maybe<Calories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Calories_Max_Fields>;
  min?: Maybe<Calories_Min_Fields>;
  stddev?: Maybe<Calories_Stddev_Fields>;
  stddev_pop?: Maybe<Calories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Calories_Stddev_Samp_Fields>;
  sum?: Maybe<Calories_Sum_Fields>;
  var_pop?: Maybe<Calories_Var_Pop_Fields>;
  var_samp?: Maybe<Calories_Var_Samp_Fields>;
  variance?: Maybe<Calories_Variance_Fields>;
};


/** aggregate fields of "Calories" */
export type Calories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Calories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Calories_Avg_Fields = {
  __typename?: 'Calories_avg_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Calories". All fields are combined with a logical 'AND'. */
export type Calories_Bool_Exp = {
  _and?: InputMaybe<Array<Calories_Bool_Exp>>;
  _not?: InputMaybe<Calories_Bool_Exp>;
  _or?: InputMaybe<Array<Calories_Bool_Exp>>;
  date?: InputMaybe<Date_Comparison_Exp>;
  dateTime?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "Calories" */
export enum Calories_Constraint {
  /** unique or primary key constraint */
  CaloriesPkey = 'Calories_pkey'
}

/** input type for incrementing numeric columns in table "Calories" */
export type Calories_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "Calories" */
export type Calories_Insert_Input = {
  date?: InputMaybe<Scalars['date']>;
  dateTime?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Calories_Max_Fields = {
  __typename?: 'Calories_max_fields';
  date?: Maybe<Scalars['date']>;
  dateTime?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Calories_Min_Fields = {
  __typename?: 'Calories_min_fields';
  date?: Maybe<Scalars['date']>;
  dateTime?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "Calories" */
export type Calories_Mutation_Response = {
  __typename?: 'Calories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Calories>;
};

/** on_conflict condition type for table "Calories" */
export type Calories_On_Conflict = {
  constraint: Calories_Constraint;
  update_columns?: Array<Calories_Update_Column>;
  where?: InputMaybe<Calories_Bool_Exp>;
};

/** Ordering options when selecting data from "Calories". */
export type Calories_Order_By = {
  date?: InputMaybe<Order_By>;
  dateTime?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Calories */
export type Calories_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Calories" */
export enum Calories_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  DateTime = 'dateTime',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "Calories" */
export type Calories_Set_Input = {
  date?: InputMaybe<Scalars['date']>;
  dateTime?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Calories_Stddev_Fields = {
  __typename?: 'Calories_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Calories_Stddev_Pop_Fields = {
  __typename?: 'Calories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Calories_Stddev_Samp_Fields = {
  __typename?: 'Calories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Calories_Sum_Fields = {
  __typename?: 'Calories_sum_fields';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['numeric']>;
};

/** update columns of table "Calories" */
export enum Calories_Update_Column {
  /** column name */
  Date = 'date',
  /** column name */
  DateTime = 'dateTime',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Calories_Var_Pop_Fields = {
  __typename?: 'Calories_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Calories_Var_Samp_Fields = {
  __typename?: 'Calories_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Calories_Variance_Fields = {
  __typename?: 'Calories_variance_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "DISTANCE_BY_DATE" */
export type Distance_By_Date = {
  __typename?: 'DISTANCE_BY_DATE';
  date?: Maybe<Scalars['date']>;
  sum?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "DISTANCE_BY_DATE" */
export type Distance_By_Date_Aggregate = {
  __typename?: 'DISTANCE_BY_DATE_aggregate';
  aggregate?: Maybe<Distance_By_Date_Aggregate_Fields>;
  nodes: Array<Distance_By_Date>;
};

/** aggregate fields of "DISTANCE_BY_DATE" */
export type Distance_By_Date_Aggregate_Fields = {
  __typename?: 'DISTANCE_BY_DATE_aggregate_fields';
  avg?: Maybe<Distance_By_Date_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Distance_By_Date_Max_Fields>;
  min?: Maybe<Distance_By_Date_Min_Fields>;
  stddev?: Maybe<Distance_By_Date_Stddev_Fields>;
  stddev_pop?: Maybe<Distance_By_Date_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Distance_By_Date_Stddev_Samp_Fields>;
  sum?: Maybe<Distance_By_Date_Sum_Fields>;
  var_pop?: Maybe<Distance_By_Date_Var_Pop_Fields>;
  var_samp?: Maybe<Distance_By_Date_Var_Samp_Fields>;
  variance?: Maybe<Distance_By_Date_Variance_Fields>;
};


/** aggregate fields of "DISTANCE_BY_DATE" */
export type Distance_By_Date_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Distance_By_Date_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Distance_By_Date_Avg_Fields = {
  __typename?: 'DISTANCE_BY_DATE_avg_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "DISTANCE_BY_DATE". All fields are combined with a logical 'AND'. */
export type Distance_By_Date_Bool_Exp = {
  _and?: InputMaybe<Array<Distance_By_Date_Bool_Exp>>;
  _not?: InputMaybe<Distance_By_Date_Bool_Exp>;
  _or?: InputMaybe<Array<Distance_By_Date_Bool_Exp>>;
  date?: InputMaybe<Date_Comparison_Exp>;
  sum?: InputMaybe<Numeric_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Distance_By_Date_Max_Fields = {
  __typename?: 'DISTANCE_BY_DATE_max_fields';
  date?: Maybe<Scalars['date']>;
  sum?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Distance_By_Date_Min_Fields = {
  __typename?: 'DISTANCE_BY_DATE_min_fields';
  date?: Maybe<Scalars['date']>;
  sum?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "DISTANCE_BY_DATE". */
export type Distance_By_Date_Order_By = {
  date?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** select columns of table "DISTANCE_BY_DATE" */
export enum Distance_By_Date_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Sum = 'sum',
  /** column name */
  UserId = 'userId'
}

/** aggregate stddev on columns */
export type Distance_By_Date_Stddev_Fields = {
  __typename?: 'DISTANCE_BY_DATE_stddev_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Distance_By_Date_Stddev_Pop_Fields = {
  __typename?: 'DISTANCE_BY_DATE_stddev_pop_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Distance_By_Date_Stddev_Samp_Fields = {
  __typename?: 'DISTANCE_BY_DATE_stddev_samp_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Distance_By_Date_Sum_Fields = {
  __typename?: 'DISTANCE_BY_DATE_sum_fields';
  sum?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Distance_By_Date_Var_Pop_Fields = {
  __typename?: 'DISTANCE_BY_DATE_var_pop_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Distance_By_Date_Var_Samp_Fields = {
  __typename?: 'DISTANCE_BY_DATE_var_samp_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Distance_By_Date_Variance_Fields = {
  __typename?: 'DISTANCE_BY_DATE_variance_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Distance" */
export type Distance = {
  __typename?: 'Distance';
  /** An object relationship */
  User?: Maybe<User>;
  date?: Maybe<Scalars['date']>;
  dateTime?: Maybe<Scalars['timestamp']>;
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "Distance" */
export type Distance_Aggregate = {
  __typename?: 'Distance_aggregate';
  aggregate?: Maybe<Distance_Aggregate_Fields>;
  nodes: Array<Distance>;
};

/** aggregate fields of "Distance" */
export type Distance_Aggregate_Fields = {
  __typename?: 'Distance_aggregate_fields';
  avg?: Maybe<Distance_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Distance_Max_Fields>;
  min?: Maybe<Distance_Min_Fields>;
  stddev?: Maybe<Distance_Stddev_Fields>;
  stddev_pop?: Maybe<Distance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Distance_Stddev_Samp_Fields>;
  sum?: Maybe<Distance_Sum_Fields>;
  var_pop?: Maybe<Distance_Var_Pop_Fields>;
  var_samp?: Maybe<Distance_Var_Samp_Fields>;
  variance?: Maybe<Distance_Variance_Fields>;
};


/** aggregate fields of "Distance" */
export type Distance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Distance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Distance_Avg_Fields = {
  __typename?: 'Distance_avg_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Distance". All fields are combined with a logical 'AND'. */
export type Distance_Bool_Exp = {
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Distance_Bool_Exp>>;
  _not?: InputMaybe<Distance_Bool_Exp>;
  _or?: InputMaybe<Array<Distance_Bool_Exp>>;
  date?: InputMaybe<Date_Comparison_Exp>;
  dateTime?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "Distance" */
export enum Distance_Constraint {
  /** unique or primary key constraint */
  DistancePkey = 'Distance_pkey'
}

/** input type for incrementing numeric columns in table "Distance" */
export type Distance_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "Distance" */
export type Distance_Insert_Input = {
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  date?: InputMaybe<Scalars['date']>;
  dateTime?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Distance_Max_Fields = {
  __typename?: 'Distance_max_fields';
  date?: Maybe<Scalars['date']>;
  dateTime?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Distance_Min_Fields = {
  __typename?: 'Distance_min_fields';
  date?: Maybe<Scalars['date']>;
  dateTime?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "Distance" */
export type Distance_Mutation_Response = {
  __typename?: 'Distance_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Distance>;
};

/** on_conflict condition type for table "Distance" */
export type Distance_On_Conflict = {
  constraint: Distance_Constraint;
  update_columns?: Array<Distance_Update_Column>;
  where?: InputMaybe<Distance_Bool_Exp>;
};

/** Ordering options when selecting data from "Distance". */
export type Distance_Order_By = {
  User?: InputMaybe<User_Order_By>;
  date?: InputMaybe<Order_By>;
  dateTime?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Distance */
export type Distance_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Distance" */
export enum Distance_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  DateTime = 'dateTime',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "Distance" */
export type Distance_Set_Input = {
  date?: InputMaybe<Scalars['date']>;
  dateTime?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Distance_Stddev_Fields = {
  __typename?: 'Distance_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Distance_Stddev_Pop_Fields = {
  __typename?: 'Distance_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Distance_Stddev_Samp_Fields = {
  __typename?: 'Distance_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Distance_Sum_Fields = {
  __typename?: 'Distance_sum_fields';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['numeric']>;
};

/** update columns of table "Distance" */
export enum Distance_Update_Column {
  /** column name */
  Date = 'date',
  /** column name */
  DateTime = 'dateTime',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Distance_Var_Pop_Fields = {
  __typename?: 'Distance_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Distance_Var_Samp_Fields = {
  __typename?: 'Distance_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Distance_Variance_Fields = {
  __typename?: 'Distance_variance_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "HeartRate" */
export type HeartRate = {
  __typename?: 'HeartRate';
  bpm?: Maybe<Scalars['numeric']>;
  confidence?: Maybe<Scalars['numeric']>;
  date?: Maybe<Scalars['date']>;
  dateTime?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "HeartRate" */
export type HeartRate_Aggregate = {
  __typename?: 'HeartRate_aggregate';
  aggregate?: Maybe<HeartRate_Aggregate_Fields>;
  nodes: Array<HeartRate>;
};

/** aggregate fields of "HeartRate" */
export type HeartRate_Aggregate_Fields = {
  __typename?: 'HeartRate_aggregate_fields';
  avg?: Maybe<HeartRate_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<HeartRate_Max_Fields>;
  min?: Maybe<HeartRate_Min_Fields>;
  stddev?: Maybe<HeartRate_Stddev_Fields>;
  stddev_pop?: Maybe<HeartRate_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<HeartRate_Stddev_Samp_Fields>;
  sum?: Maybe<HeartRate_Sum_Fields>;
  var_pop?: Maybe<HeartRate_Var_Pop_Fields>;
  var_samp?: Maybe<HeartRate_Var_Samp_Fields>;
  variance?: Maybe<HeartRate_Variance_Fields>;
};


/** aggregate fields of "HeartRate" */
export type HeartRate_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<HeartRate_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type HeartRate_Avg_Fields = {
  __typename?: 'HeartRate_avg_fields';
  bpm?: Maybe<Scalars['Float']>;
  confidence?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "HeartRate". All fields are combined with a logical 'AND'. */
export type HeartRate_Bool_Exp = {
  _and?: InputMaybe<Array<HeartRate_Bool_Exp>>;
  _not?: InputMaybe<HeartRate_Bool_Exp>;
  _or?: InputMaybe<Array<HeartRate_Bool_Exp>>;
  bpm?: InputMaybe<Numeric_Comparison_Exp>;
  confidence?: InputMaybe<Numeric_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  dateTime?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "HeartRate" */
export enum HeartRate_Constraint {
  /** unique or primary key constraint */
  HeartRatePkey = 'HeartRate_pkey'
}

/** input type for incrementing numeric columns in table "HeartRate" */
export type HeartRate_Inc_Input = {
  bpm?: InputMaybe<Scalars['numeric']>;
  confidence?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "HeartRate" */
export type HeartRate_Insert_Input = {
  bpm?: InputMaybe<Scalars['numeric']>;
  confidence?: InputMaybe<Scalars['numeric']>;
  date?: InputMaybe<Scalars['date']>;
  dateTime?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type HeartRate_Max_Fields = {
  __typename?: 'HeartRate_max_fields';
  bpm?: Maybe<Scalars['numeric']>;
  confidence?: Maybe<Scalars['numeric']>;
  date?: Maybe<Scalars['date']>;
  dateTime?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type HeartRate_Min_Fields = {
  __typename?: 'HeartRate_min_fields';
  bpm?: Maybe<Scalars['numeric']>;
  confidence?: Maybe<Scalars['numeric']>;
  date?: Maybe<Scalars['date']>;
  dateTime?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "HeartRate" */
export type HeartRate_Mutation_Response = {
  __typename?: 'HeartRate_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<HeartRate>;
};

/** on_conflict condition type for table "HeartRate" */
export type HeartRate_On_Conflict = {
  constraint: HeartRate_Constraint;
  update_columns?: Array<HeartRate_Update_Column>;
  where?: InputMaybe<HeartRate_Bool_Exp>;
};

/** Ordering options when selecting data from "HeartRate". */
export type HeartRate_Order_By = {
  bpm?: InputMaybe<Order_By>;
  confidence?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  dateTime?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: HeartRate */
export type HeartRate_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "HeartRate" */
export enum HeartRate_Select_Column {
  /** column name */
  Bpm = 'bpm',
  /** column name */
  Confidence = 'confidence',
  /** column name */
  Date = 'date',
  /** column name */
  DateTime = 'dateTime',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "HeartRate" */
export type HeartRate_Set_Input = {
  bpm?: InputMaybe<Scalars['numeric']>;
  confidence?: InputMaybe<Scalars['numeric']>;
  date?: InputMaybe<Scalars['date']>;
  dateTime?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type HeartRate_Stddev_Fields = {
  __typename?: 'HeartRate_stddev_fields';
  bpm?: Maybe<Scalars['Float']>;
  confidence?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type HeartRate_Stddev_Pop_Fields = {
  __typename?: 'HeartRate_stddev_pop_fields';
  bpm?: Maybe<Scalars['Float']>;
  confidence?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type HeartRate_Stddev_Samp_Fields = {
  __typename?: 'HeartRate_stddev_samp_fields';
  bpm?: Maybe<Scalars['Float']>;
  confidence?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type HeartRate_Sum_Fields = {
  __typename?: 'HeartRate_sum_fields';
  bpm?: Maybe<Scalars['numeric']>;
  confidence?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** update columns of table "HeartRate" */
export enum HeartRate_Update_Column {
  /** column name */
  Bpm = 'bpm',
  /** column name */
  Confidence = 'confidence',
  /** column name */
  Date = 'date',
  /** column name */
  DateTime = 'dateTime',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type HeartRate_Var_Pop_Fields = {
  __typename?: 'HeartRate_var_pop_fields';
  bpm?: Maybe<Scalars['Float']>;
  confidence?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type HeartRate_Var_Samp_Fields = {
  __typename?: 'HeartRate_var_samp_fields';
  bpm?: Maybe<Scalars['Float']>;
  confidence?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type HeartRate_Variance_Fields = {
  __typename?: 'HeartRate_variance_fields';
  bpm?: Maybe<Scalars['Float']>;
  confidence?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "STEPS_BY_DATE" */
export type Steps_By_Date = {
  __typename?: 'STEPS_BY_DATE';
  date?: Maybe<Scalars['date']>;
  sum?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "STEPS_BY_DATE" */
export type Steps_By_Date_Aggregate = {
  __typename?: 'STEPS_BY_DATE_aggregate';
  aggregate?: Maybe<Steps_By_Date_Aggregate_Fields>;
  nodes: Array<Steps_By_Date>;
};

/** aggregate fields of "STEPS_BY_DATE" */
export type Steps_By_Date_Aggregate_Fields = {
  __typename?: 'STEPS_BY_DATE_aggregate_fields';
  avg?: Maybe<Steps_By_Date_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Steps_By_Date_Max_Fields>;
  min?: Maybe<Steps_By_Date_Min_Fields>;
  stddev?: Maybe<Steps_By_Date_Stddev_Fields>;
  stddev_pop?: Maybe<Steps_By_Date_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Steps_By_Date_Stddev_Samp_Fields>;
  sum?: Maybe<Steps_By_Date_Sum_Fields>;
  var_pop?: Maybe<Steps_By_Date_Var_Pop_Fields>;
  var_samp?: Maybe<Steps_By_Date_Var_Samp_Fields>;
  variance?: Maybe<Steps_By_Date_Variance_Fields>;
};


/** aggregate fields of "STEPS_BY_DATE" */
export type Steps_By_Date_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Steps_By_Date_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Steps_By_Date_Avg_Fields = {
  __typename?: 'STEPS_BY_DATE_avg_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "STEPS_BY_DATE". All fields are combined with a logical 'AND'. */
export type Steps_By_Date_Bool_Exp = {
  _and?: InputMaybe<Array<Steps_By_Date_Bool_Exp>>;
  _not?: InputMaybe<Steps_By_Date_Bool_Exp>;
  _or?: InputMaybe<Array<Steps_By_Date_Bool_Exp>>;
  date?: InputMaybe<Date_Comparison_Exp>;
  sum?: InputMaybe<Numeric_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Steps_By_Date_Max_Fields = {
  __typename?: 'STEPS_BY_DATE_max_fields';
  date?: Maybe<Scalars['date']>;
  sum?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Steps_By_Date_Min_Fields = {
  __typename?: 'STEPS_BY_DATE_min_fields';
  date?: Maybe<Scalars['date']>;
  sum?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "STEPS_BY_DATE". */
export type Steps_By_Date_Order_By = {
  date?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** select columns of table "STEPS_BY_DATE" */
export enum Steps_By_Date_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Sum = 'sum',
  /** column name */
  UserId = 'userId'
}

/** aggregate stddev on columns */
export type Steps_By_Date_Stddev_Fields = {
  __typename?: 'STEPS_BY_DATE_stddev_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Steps_By_Date_Stddev_Pop_Fields = {
  __typename?: 'STEPS_BY_DATE_stddev_pop_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Steps_By_Date_Stddev_Samp_Fields = {
  __typename?: 'STEPS_BY_DATE_stddev_samp_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Steps_By_Date_Sum_Fields = {
  __typename?: 'STEPS_BY_DATE_sum_fields';
  sum?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Steps_By_Date_Var_Pop_Fields = {
  __typename?: 'STEPS_BY_DATE_var_pop_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Steps_By_Date_Var_Samp_Fields = {
  __typename?: 'STEPS_BY_DATE_var_samp_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Steps_By_Date_Variance_Fields = {
  __typename?: 'STEPS_BY_DATE_variance_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Steps" */
export type Steps = {
  __typename?: 'Steps';
  /** An object relationship */
  User?: Maybe<User>;
  date?: Maybe<Scalars['date']>;
  dateTime?: Maybe<Scalars['timestamp']>;
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "Steps" */
export type Steps_Aggregate = {
  __typename?: 'Steps_aggregate';
  aggregate?: Maybe<Steps_Aggregate_Fields>;
  nodes: Array<Steps>;
};

/** aggregate fields of "Steps" */
export type Steps_Aggregate_Fields = {
  __typename?: 'Steps_aggregate_fields';
  avg?: Maybe<Steps_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Steps_Max_Fields>;
  min?: Maybe<Steps_Min_Fields>;
  stddev?: Maybe<Steps_Stddev_Fields>;
  stddev_pop?: Maybe<Steps_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Steps_Stddev_Samp_Fields>;
  sum?: Maybe<Steps_Sum_Fields>;
  var_pop?: Maybe<Steps_Var_Pop_Fields>;
  var_samp?: Maybe<Steps_Var_Samp_Fields>;
  variance?: Maybe<Steps_Variance_Fields>;
};


/** aggregate fields of "Steps" */
export type Steps_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Steps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Steps_Avg_Fields = {
  __typename?: 'Steps_avg_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Steps". All fields are combined with a logical 'AND'. */
export type Steps_Bool_Exp = {
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Steps_Bool_Exp>>;
  _not?: InputMaybe<Steps_Bool_Exp>;
  _or?: InputMaybe<Array<Steps_Bool_Exp>>;
  date?: InputMaybe<Date_Comparison_Exp>;
  dateTime?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "Steps" */
export enum Steps_Constraint {
  /** unique or primary key constraint */
  StepsPkey = 'Steps_pkey'
}

/** input type for incrementing numeric columns in table "Steps" */
export type Steps_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "Steps" */
export type Steps_Insert_Input = {
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  date?: InputMaybe<Scalars['date']>;
  dateTime?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Steps_Max_Fields = {
  __typename?: 'Steps_max_fields';
  date?: Maybe<Scalars['date']>;
  dateTime?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Steps_Min_Fields = {
  __typename?: 'Steps_min_fields';
  date?: Maybe<Scalars['date']>;
  dateTime?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "Steps" */
export type Steps_Mutation_Response = {
  __typename?: 'Steps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Steps>;
};

/** on_conflict condition type for table "Steps" */
export type Steps_On_Conflict = {
  constraint: Steps_Constraint;
  update_columns?: Array<Steps_Update_Column>;
  where?: InputMaybe<Steps_Bool_Exp>;
};

/** Ordering options when selecting data from "Steps". */
export type Steps_Order_By = {
  User?: InputMaybe<User_Order_By>;
  date?: InputMaybe<Order_By>;
  dateTime?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Steps */
export type Steps_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Steps" */
export enum Steps_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  DateTime = 'dateTime',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "Steps" */
export type Steps_Set_Input = {
  date?: InputMaybe<Scalars['date']>;
  dateTime?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Steps_Stddev_Fields = {
  __typename?: 'Steps_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Steps_Stddev_Pop_Fields = {
  __typename?: 'Steps_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Steps_Stddev_Samp_Fields = {
  __typename?: 'Steps_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Steps_Sum_Fields = {
  __typename?: 'Steps_sum_fields';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['numeric']>;
};

/** update columns of table "Steps" */
export enum Steps_Update_Column {
  /** column name */
  Date = 'date',
  /** column name */
  DateTime = 'dateTime',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Steps_Var_Pop_Fields = {
  __typename?: 'Steps_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Steps_Var_Samp_Fields = {
  __typename?: 'Steps_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Steps_Variance_Fields = {
  __typename?: 'Steps_variance_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  auth0Id?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'User_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  auth0Id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'User_pkey'
}

/** input type for incrementing numeric columns in table "User" */
export type User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  auth0Id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  auth0Id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  auth0Id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "User" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  auth0Id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  Auth0Id = 'auth0Id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  auth0Id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'User_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'User_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'User_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'User_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  Auth0Id = 'auth0Id',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'User_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'User_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'User_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "VERY_ACTIVE_MINUTES_BY_DATE" */
export type Very_Active_Minutes_By_Date = {
  __typename?: 'VERY_ACTIVE_MINUTES_BY_DATE';
  date?: Maybe<Scalars['date']>;
  sum?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "VERY_ACTIVE_MINUTES_BY_DATE" */
export type Very_Active_Minutes_By_Date_Aggregate = {
  __typename?: 'VERY_ACTIVE_MINUTES_BY_DATE_aggregate';
  aggregate?: Maybe<Very_Active_Minutes_By_Date_Aggregate_Fields>;
  nodes: Array<Very_Active_Minutes_By_Date>;
};

/** aggregate fields of "VERY_ACTIVE_MINUTES_BY_DATE" */
export type Very_Active_Minutes_By_Date_Aggregate_Fields = {
  __typename?: 'VERY_ACTIVE_MINUTES_BY_DATE_aggregate_fields';
  avg?: Maybe<Very_Active_Minutes_By_Date_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Very_Active_Minutes_By_Date_Max_Fields>;
  min?: Maybe<Very_Active_Minutes_By_Date_Min_Fields>;
  stddev?: Maybe<Very_Active_Minutes_By_Date_Stddev_Fields>;
  stddev_pop?: Maybe<Very_Active_Minutes_By_Date_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Very_Active_Minutes_By_Date_Stddev_Samp_Fields>;
  sum?: Maybe<Very_Active_Minutes_By_Date_Sum_Fields>;
  var_pop?: Maybe<Very_Active_Minutes_By_Date_Var_Pop_Fields>;
  var_samp?: Maybe<Very_Active_Minutes_By_Date_Var_Samp_Fields>;
  variance?: Maybe<Very_Active_Minutes_By_Date_Variance_Fields>;
};


/** aggregate fields of "VERY_ACTIVE_MINUTES_BY_DATE" */
export type Very_Active_Minutes_By_Date_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Very_Active_Minutes_By_Date_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Very_Active_Minutes_By_Date_Avg_Fields = {
  __typename?: 'VERY_ACTIVE_MINUTES_BY_DATE_avg_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "VERY_ACTIVE_MINUTES_BY_DATE". All fields are combined with a logical 'AND'. */
export type Very_Active_Minutes_By_Date_Bool_Exp = {
  _and?: InputMaybe<Array<Very_Active_Minutes_By_Date_Bool_Exp>>;
  _not?: InputMaybe<Very_Active_Minutes_By_Date_Bool_Exp>;
  _or?: InputMaybe<Array<Very_Active_Minutes_By_Date_Bool_Exp>>;
  date?: InputMaybe<Date_Comparison_Exp>;
  sum?: InputMaybe<Numeric_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Very_Active_Minutes_By_Date_Max_Fields = {
  __typename?: 'VERY_ACTIVE_MINUTES_BY_DATE_max_fields';
  date?: Maybe<Scalars['date']>;
  sum?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Very_Active_Minutes_By_Date_Min_Fields = {
  __typename?: 'VERY_ACTIVE_MINUTES_BY_DATE_min_fields';
  date?: Maybe<Scalars['date']>;
  sum?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "VERY_ACTIVE_MINUTES_BY_DATE". */
export type Very_Active_Minutes_By_Date_Order_By = {
  date?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** select columns of table "VERY_ACTIVE_MINUTES_BY_DATE" */
export enum Very_Active_Minutes_By_Date_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Sum = 'sum',
  /** column name */
  UserId = 'userId'
}

/** aggregate stddev on columns */
export type Very_Active_Minutes_By_Date_Stddev_Fields = {
  __typename?: 'VERY_ACTIVE_MINUTES_BY_DATE_stddev_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Very_Active_Minutes_By_Date_Stddev_Pop_Fields = {
  __typename?: 'VERY_ACTIVE_MINUTES_BY_DATE_stddev_pop_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Very_Active_Minutes_By_Date_Stddev_Samp_Fields = {
  __typename?: 'VERY_ACTIVE_MINUTES_BY_DATE_stddev_samp_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Very_Active_Minutes_By_Date_Sum_Fields = {
  __typename?: 'VERY_ACTIVE_MINUTES_BY_DATE_sum_fields';
  sum?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Very_Active_Minutes_By_Date_Var_Pop_Fields = {
  __typename?: 'VERY_ACTIVE_MINUTES_BY_DATE_var_pop_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Very_Active_Minutes_By_Date_Var_Samp_Fields = {
  __typename?: 'VERY_ACTIVE_MINUTES_BY_DATE_var_samp_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Very_Active_Minutes_By_Date_Variance_Fields = {
  __typename?: 'VERY_ACTIVE_MINUTES_BY_DATE_variance_fields';
  sum?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "VeryActiveMinutes" */
export type VeryActiveMinutes = {
  __typename?: 'VeryActiveMinutes';
  date?: Maybe<Scalars['date']>;
  dateTime?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "VeryActiveMinutes" */
export type VeryActiveMinutes_Aggregate = {
  __typename?: 'VeryActiveMinutes_aggregate';
  aggregate?: Maybe<VeryActiveMinutes_Aggregate_Fields>;
  nodes: Array<VeryActiveMinutes>;
};

/** aggregate fields of "VeryActiveMinutes" */
export type VeryActiveMinutes_Aggregate_Fields = {
  __typename?: 'VeryActiveMinutes_aggregate_fields';
  avg?: Maybe<VeryActiveMinutes_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<VeryActiveMinutes_Max_Fields>;
  min?: Maybe<VeryActiveMinutes_Min_Fields>;
  stddev?: Maybe<VeryActiveMinutes_Stddev_Fields>;
  stddev_pop?: Maybe<VeryActiveMinutes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<VeryActiveMinutes_Stddev_Samp_Fields>;
  sum?: Maybe<VeryActiveMinutes_Sum_Fields>;
  var_pop?: Maybe<VeryActiveMinutes_Var_Pop_Fields>;
  var_samp?: Maybe<VeryActiveMinutes_Var_Samp_Fields>;
  variance?: Maybe<VeryActiveMinutes_Variance_Fields>;
};


/** aggregate fields of "VeryActiveMinutes" */
export type VeryActiveMinutes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<VeryActiveMinutes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type VeryActiveMinutes_Avg_Fields = {
  __typename?: 'VeryActiveMinutes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "VeryActiveMinutes". All fields are combined with a logical 'AND'. */
export type VeryActiveMinutes_Bool_Exp = {
  _and?: InputMaybe<Array<VeryActiveMinutes_Bool_Exp>>;
  _not?: InputMaybe<VeryActiveMinutes_Bool_Exp>;
  _or?: InputMaybe<Array<VeryActiveMinutes_Bool_Exp>>;
  date?: InputMaybe<Date_Comparison_Exp>;
  dateTime?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "VeryActiveMinutes" */
export enum VeryActiveMinutes_Constraint {
  /** unique or primary key constraint */
  VeryActiveMinutesPkey = 'VeryActiveMinutes_pkey'
}

/** input type for incrementing numeric columns in table "VeryActiveMinutes" */
export type VeryActiveMinutes_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "VeryActiveMinutes" */
export type VeryActiveMinutes_Insert_Input = {
  date?: InputMaybe<Scalars['date']>;
  dateTime?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type VeryActiveMinutes_Max_Fields = {
  __typename?: 'VeryActiveMinutes_max_fields';
  date?: Maybe<Scalars['date']>;
  dateTime?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type VeryActiveMinutes_Min_Fields = {
  __typename?: 'VeryActiveMinutes_min_fields';
  date?: Maybe<Scalars['date']>;
  dateTime?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "VeryActiveMinutes" */
export type VeryActiveMinutes_Mutation_Response = {
  __typename?: 'VeryActiveMinutes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<VeryActiveMinutes>;
};

/** on_conflict condition type for table "VeryActiveMinutes" */
export type VeryActiveMinutes_On_Conflict = {
  constraint: VeryActiveMinutes_Constraint;
  update_columns?: Array<VeryActiveMinutes_Update_Column>;
  where?: InputMaybe<VeryActiveMinutes_Bool_Exp>;
};

/** Ordering options when selecting data from "VeryActiveMinutes". */
export type VeryActiveMinutes_Order_By = {
  date?: InputMaybe<Order_By>;
  dateTime?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: VeryActiveMinutes */
export type VeryActiveMinutes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "VeryActiveMinutes" */
export enum VeryActiveMinutes_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  DateTime = 'dateTime',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "VeryActiveMinutes" */
export type VeryActiveMinutes_Set_Input = {
  date?: InputMaybe<Scalars['date']>;
  dateTime?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type VeryActiveMinutes_Stddev_Fields = {
  __typename?: 'VeryActiveMinutes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type VeryActiveMinutes_Stddev_Pop_Fields = {
  __typename?: 'VeryActiveMinutes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type VeryActiveMinutes_Stddev_Samp_Fields = {
  __typename?: 'VeryActiveMinutes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type VeryActiveMinutes_Sum_Fields = {
  __typename?: 'VeryActiveMinutes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['numeric']>;
};

/** update columns of table "VeryActiveMinutes" */
export enum VeryActiveMinutes_Update_Column {
  /** column name */
  Date = 'date',
  /** column name */
  DateTime = 'dateTime',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type VeryActiveMinutes_Var_Pop_Fields = {
  __typename?: 'VeryActiveMinutes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type VeryActiveMinutes_Var_Samp_Fields = {
  __typename?: 'VeryActiveMinutes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type VeryActiveMinutes_Variance_Fields = {
  __typename?: 'VeryActiveMinutes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Calories" */
  delete_Calories?: Maybe<Calories_Mutation_Response>;
  /** delete single row from the table: "Calories" */
  delete_Calories_by_pk?: Maybe<Calories>;
  /** delete data from the table: "Distance" */
  delete_Distance?: Maybe<Distance_Mutation_Response>;
  /** delete single row from the table: "Distance" */
  delete_Distance_by_pk?: Maybe<Distance>;
  /** delete data from the table: "HeartRate" */
  delete_HeartRate?: Maybe<HeartRate_Mutation_Response>;
  /** delete single row from the table: "HeartRate" */
  delete_HeartRate_by_pk?: Maybe<HeartRate>;
  /** delete data from the table: "Steps" */
  delete_Steps?: Maybe<Steps_Mutation_Response>;
  /** delete single row from the table: "Steps" */
  delete_Steps_by_pk?: Maybe<Steps>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** delete data from the table: "VeryActiveMinutes" */
  delete_VeryActiveMinutes?: Maybe<VeryActiveMinutes_Mutation_Response>;
  /** delete single row from the table: "VeryActiveMinutes" */
  delete_VeryActiveMinutes_by_pk?: Maybe<VeryActiveMinutes>;
  /** insert data into the table: "Calories" */
  insert_Calories?: Maybe<Calories_Mutation_Response>;
  /** insert a single row into the table: "Calories" */
  insert_Calories_one?: Maybe<Calories>;
  /** insert data into the table: "Distance" */
  insert_Distance?: Maybe<Distance_Mutation_Response>;
  /** insert a single row into the table: "Distance" */
  insert_Distance_one?: Maybe<Distance>;
  /** insert data into the table: "HeartRate" */
  insert_HeartRate?: Maybe<HeartRate_Mutation_Response>;
  /** insert a single row into the table: "HeartRate" */
  insert_HeartRate_one?: Maybe<HeartRate>;
  /** insert data into the table: "Steps" */
  insert_Steps?: Maybe<Steps_Mutation_Response>;
  /** insert a single row into the table: "Steps" */
  insert_Steps_one?: Maybe<Steps>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** insert data into the table: "VeryActiveMinutes" */
  insert_VeryActiveMinutes?: Maybe<VeryActiveMinutes_Mutation_Response>;
  /** insert a single row into the table: "VeryActiveMinutes" */
  insert_VeryActiveMinutes_one?: Maybe<VeryActiveMinutes>;
  /** update data of the table: "Calories" */
  update_Calories?: Maybe<Calories_Mutation_Response>;
  /** update single row of the table: "Calories" */
  update_Calories_by_pk?: Maybe<Calories>;
  /** update data of the table: "Distance" */
  update_Distance?: Maybe<Distance_Mutation_Response>;
  /** update single row of the table: "Distance" */
  update_Distance_by_pk?: Maybe<Distance>;
  /** update data of the table: "HeartRate" */
  update_HeartRate?: Maybe<HeartRate_Mutation_Response>;
  /** update single row of the table: "HeartRate" */
  update_HeartRate_by_pk?: Maybe<HeartRate>;
  /** update data of the table: "Steps" */
  update_Steps?: Maybe<Steps_Mutation_Response>;
  /** update single row of the table: "Steps" */
  update_Steps_by_pk?: Maybe<Steps>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
  /** update data of the table: "VeryActiveMinutes" */
  update_VeryActiveMinutes?: Maybe<VeryActiveMinutes_Mutation_Response>;
  /** update single row of the table: "VeryActiveMinutes" */
  update_VeryActiveMinutes_by_pk?: Maybe<VeryActiveMinutes>;
};


/** mutation root */
export type Mutation_RootDelete_CaloriesArgs = {
  where: Calories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Calories_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_DistanceArgs = {
  where: Distance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Distance_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_HeartRateArgs = {
  where: HeartRate_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_HeartRate_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_StepsArgs = {
  where: Steps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Steps_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_VeryActiveMinutesArgs = {
  where: VeryActiveMinutes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_VeryActiveMinutes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CaloriesArgs = {
  objects: Array<Calories_Insert_Input>;
  on_conflict?: InputMaybe<Calories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Calories_OneArgs = {
  object: Calories_Insert_Input;
  on_conflict?: InputMaybe<Calories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DistanceArgs = {
  objects: Array<Distance_Insert_Input>;
  on_conflict?: InputMaybe<Distance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Distance_OneArgs = {
  object: Distance_Insert_Input;
  on_conflict?: InputMaybe<Distance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HeartRateArgs = {
  objects: Array<HeartRate_Insert_Input>;
  on_conflict?: InputMaybe<HeartRate_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HeartRate_OneArgs = {
  object: HeartRate_Insert_Input;
  on_conflict?: InputMaybe<HeartRate_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StepsArgs = {
  objects: Array<Steps_Insert_Input>;
  on_conflict?: InputMaybe<Steps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Steps_OneArgs = {
  object: Steps_Insert_Input;
  on_conflict?: InputMaybe<Steps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VeryActiveMinutesArgs = {
  objects: Array<VeryActiveMinutes_Insert_Input>;
  on_conflict?: InputMaybe<VeryActiveMinutes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VeryActiveMinutes_OneArgs = {
  object: VeryActiveMinutes_Insert_Input;
  on_conflict?: InputMaybe<VeryActiveMinutes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CaloriesArgs = {
  _inc?: InputMaybe<Calories_Inc_Input>;
  _set?: InputMaybe<Calories_Set_Input>;
  where: Calories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Calories_By_PkArgs = {
  _inc?: InputMaybe<Calories_Inc_Input>;
  _set?: InputMaybe<Calories_Set_Input>;
  pk_columns: Calories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DistanceArgs = {
  _inc?: InputMaybe<Distance_Inc_Input>;
  _set?: InputMaybe<Distance_Set_Input>;
  where: Distance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Distance_By_PkArgs = {
  _inc?: InputMaybe<Distance_Inc_Input>;
  _set?: InputMaybe<Distance_Set_Input>;
  pk_columns: Distance_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_HeartRateArgs = {
  _inc?: InputMaybe<HeartRate_Inc_Input>;
  _set?: InputMaybe<HeartRate_Set_Input>;
  where: HeartRate_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_HeartRate_By_PkArgs = {
  _inc?: InputMaybe<HeartRate_Inc_Input>;
  _set?: InputMaybe<HeartRate_Set_Input>;
  pk_columns: HeartRate_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StepsArgs = {
  _inc?: InputMaybe<Steps_Inc_Input>;
  _set?: InputMaybe<Steps_Set_Input>;
  where: Steps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Steps_By_PkArgs = {
  _inc?: InputMaybe<Steps_Inc_Input>;
  _set?: InputMaybe<Steps_Set_Input>;
  pk_columns: Steps_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_VeryActiveMinutesArgs = {
  _inc?: InputMaybe<VeryActiveMinutes_Inc_Input>;
  _set?: InputMaybe<VeryActiveMinutes_Set_Input>;
  where: VeryActiveMinutes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_VeryActiveMinutes_By_PkArgs = {
  _inc?: InputMaybe<VeryActiveMinutes_Inc_Input>;
  _set?: InputMaybe<VeryActiveMinutes_Set_Input>;
  pk_columns: VeryActiveMinutes_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "CALORIES_BY_DATE" */
  CALORIES_BY_DATE: Array<Calories_By_Date>;
  /** fetch aggregated fields from the table: "CALORIES_BY_DATE" */
  CALORIES_BY_DATE_aggregate: Calories_By_Date_Aggregate;
  /** fetch data from the table: "Calories" */
  Calories: Array<Calories>;
  /** fetch aggregated fields from the table: "Calories" */
  Calories_aggregate: Calories_Aggregate;
  /** fetch data from the table: "Calories" using primary key columns */
  Calories_by_pk?: Maybe<Calories>;
  /** fetch data from the table: "DISTANCE_BY_DATE" */
  DISTANCE_BY_DATE: Array<Distance_By_Date>;
  /** fetch aggregated fields from the table: "DISTANCE_BY_DATE" */
  DISTANCE_BY_DATE_aggregate: Distance_By_Date_Aggregate;
  /** fetch data from the table: "Distance" */
  Distance: Array<Distance>;
  /** fetch aggregated fields from the table: "Distance" */
  Distance_aggregate: Distance_Aggregate;
  /** fetch data from the table: "Distance" using primary key columns */
  Distance_by_pk?: Maybe<Distance>;
  /** fetch data from the table: "HeartRate" */
  HeartRate: Array<HeartRate>;
  /** fetch aggregated fields from the table: "HeartRate" */
  HeartRate_aggregate: HeartRate_Aggregate;
  /** fetch data from the table: "HeartRate" using primary key columns */
  HeartRate_by_pk?: Maybe<HeartRate>;
  /** fetch data from the table: "STEPS_BY_DATE" */
  STEPS_BY_DATE: Array<Steps_By_Date>;
  /** fetch aggregated fields from the table: "STEPS_BY_DATE" */
  STEPS_BY_DATE_aggregate: Steps_By_Date_Aggregate;
  /** fetch data from the table: "Steps" */
  Steps: Array<Steps>;
  /** fetch aggregated fields from the table: "Steps" */
  Steps_aggregate: Steps_Aggregate;
  /** fetch data from the table: "Steps" using primary key columns */
  Steps_by_pk?: Maybe<Steps>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table: "VERY_ACTIVE_MINUTES_BY_DATE" */
  VERY_ACTIVE_MINUTES_BY_DATE: Array<Very_Active_Minutes_By_Date>;
  /** fetch aggregated fields from the table: "VERY_ACTIVE_MINUTES_BY_DATE" */
  VERY_ACTIVE_MINUTES_BY_DATE_aggregate: Very_Active_Minutes_By_Date_Aggregate;
  /** fetch data from the table: "VeryActiveMinutes" */
  VeryActiveMinutes: Array<VeryActiveMinutes>;
  /** fetch aggregated fields from the table: "VeryActiveMinutes" */
  VeryActiveMinutes_aggregate: VeryActiveMinutes_Aggregate;
  /** fetch data from the table: "VeryActiveMinutes" using primary key columns */
  VeryActiveMinutes_by_pk?: Maybe<VeryActiveMinutes>;
};


export type Query_RootCalories_By_DateArgs = {
  distinct_on?: InputMaybe<Array<Calories_By_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calories_By_Date_Order_By>>;
  where?: InputMaybe<Calories_By_Date_Bool_Exp>;
};


export type Query_RootCalories_By_Date_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Calories_By_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calories_By_Date_Order_By>>;
  where?: InputMaybe<Calories_By_Date_Bool_Exp>;
};


export type Query_RootCaloriesArgs = {
  distinct_on?: InputMaybe<Array<Calories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calories_Order_By>>;
  where?: InputMaybe<Calories_Bool_Exp>;
};


export type Query_RootCalories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Calories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calories_Order_By>>;
  where?: InputMaybe<Calories_Bool_Exp>;
};


export type Query_RootCalories_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootDistance_By_DateArgs = {
  distinct_on?: InputMaybe<Array<Distance_By_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distance_By_Date_Order_By>>;
  where?: InputMaybe<Distance_By_Date_Bool_Exp>;
};


export type Query_RootDistance_By_Date_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distance_By_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distance_By_Date_Order_By>>;
  where?: InputMaybe<Distance_By_Date_Bool_Exp>;
};


export type Query_RootDistanceArgs = {
  distinct_on?: InputMaybe<Array<Distance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distance_Order_By>>;
  where?: InputMaybe<Distance_Bool_Exp>;
};


export type Query_RootDistance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distance_Order_By>>;
  where?: InputMaybe<Distance_Bool_Exp>;
};


export type Query_RootDistance_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootHeartRateArgs = {
  distinct_on?: InputMaybe<Array<HeartRate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HeartRate_Order_By>>;
  where?: InputMaybe<HeartRate_Bool_Exp>;
};


export type Query_RootHeartRate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<HeartRate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HeartRate_Order_By>>;
  where?: InputMaybe<HeartRate_Bool_Exp>;
};


export type Query_RootHeartRate_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSteps_By_DateArgs = {
  distinct_on?: InputMaybe<Array<Steps_By_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Steps_By_Date_Order_By>>;
  where?: InputMaybe<Steps_By_Date_Bool_Exp>;
};


export type Query_RootSteps_By_Date_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Steps_By_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Steps_By_Date_Order_By>>;
  where?: InputMaybe<Steps_By_Date_Bool_Exp>;
};


export type Query_RootStepsArgs = {
  distinct_on?: InputMaybe<Array<Steps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Steps_Order_By>>;
  where?: InputMaybe<Steps_Bool_Exp>;
};


export type Query_RootSteps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Steps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Steps_Order_By>>;
  where?: InputMaybe<Steps_Bool_Exp>;
};


export type Query_RootSteps_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVery_Active_Minutes_By_DateArgs = {
  distinct_on?: InputMaybe<Array<Very_Active_Minutes_By_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Very_Active_Minutes_By_Date_Order_By>>;
  where?: InputMaybe<Very_Active_Minutes_By_Date_Bool_Exp>;
};


export type Query_RootVery_Active_Minutes_By_Date_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Very_Active_Minutes_By_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Very_Active_Minutes_By_Date_Order_By>>;
  where?: InputMaybe<Very_Active_Minutes_By_Date_Bool_Exp>;
};


export type Query_RootVeryActiveMinutesArgs = {
  distinct_on?: InputMaybe<Array<VeryActiveMinutes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VeryActiveMinutes_Order_By>>;
  where?: InputMaybe<VeryActiveMinutes_Bool_Exp>;
};


export type Query_RootVeryActiveMinutes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VeryActiveMinutes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VeryActiveMinutes_Order_By>>;
  where?: InputMaybe<VeryActiveMinutes_Bool_Exp>;
};


export type Query_RootVeryActiveMinutes_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "CALORIES_BY_DATE" */
  CALORIES_BY_DATE: Array<Calories_By_Date>;
  /** fetch aggregated fields from the table: "CALORIES_BY_DATE" */
  CALORIES_BY_DATE_aggregate: Calories_By_Date_Aggregate;
  /** fetch data from the table: "Calories" */
  Calories: Array<Calories>;
  /** fetch aggregated fields from the table: "Calories" */
  Calories_aggregate: Calories_Aggregate;
  /** fetch data from the table: "Calories" using primary key columns */
  Calories_by_pk?: Maybe<Calories>;
  /** fetch data from the table: "DISTANCE_BY_DATE" */
  DISTANCE_BY_DATE: Array<Distance_By_Date>;
  /** fetch aggregated fields from the table: "DISTANCE_BY_DATE" */
  DISTANCE_BY_DATE_aggregate: Distance_By_Date_Aggregate;
  /** fetch data from the table: "Distance" */
  Distance: Array<Distance>;
  /** fetch aggregated fields from the table: "Distance" */
  Distance_aggregate: Distance_Aggregate;
  /** fetch data from the table: "Distance" using primary key columns */
  Distance_by_pk?: Maybe<Distance>;
  /** fetch data from the table: "HeartRate" */
  HeartRate: Array<HeartRate>;
  /** fetch aggregated fields from the table: "HeartRate" */
  HeartRate_aggregate: HeartRate_Aggregate;
  /** fetch data from the table: "HeartRate" using primary key columns */
  HeartRate_by_pk?: Maybe<HeartRate>;
  /** fetch data from the table: "STEPS_BY_DATE" */
  STEPS_BY_DATE: Array<Steps_By_Date>;
  /** fetch aggregated fields from the table: "STEPS_BY_DATE" */
  STEPS_BY_DATE_aggregate: Steps_By_Date_Aggregate;
  /** fetch data from the table: "Steps" */
  Steps: Array<Steps>;
  /** fetch aggregated fields from the table: "Steps" */
  Steps_aggregate: Steps_Aggregate;
  /** fetch data from the table: "Steps" using primary key columns */
  Steps_by_pk?: Maybe<Steps>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table: "VERY_ACTIVE_MINUTES_BY_DATE" */
  VERY_ACTIVE_MINUTES_BY_DATE: Array<Very_Active_Minutes_By_Date>;
  /** fetch aggregated fields from the table: "VERY_ACTIVE_MINUTES_BY_DATE" */
  VERY_ACTIVE_MINUTES_BY_DATE_aggregate: Very_Active_Minutes_By_Date_Aggregate;
  /** fetch data from the table: "VeryActiveMinutes" */
  VeryActiveMinutes: Array<VeryActiveMinutes>;
  /** fetch aggregated fields from the table: "VeryActiveMinutes" */
  VeryActiveMinutes_aggregate: VeryActiveMinutes_Aggregate;
  /** fetch data from the table: "VeryActiveMinutes" using primary key columns */
  VeryActiveMinutes_by_pk?: Maybe<VeryActiveMinutes>;
};


export type Subscription_RootCalories_By_DateArgs = {
  distinct_on?: InputMaybe<Array<Calories_By_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calories_By_Date_Order_By>>;
  where?: InputMaybe<Calories_By_Date_Bool_Exp>;
};


export type Subscription_RootCalories_By_Date_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Calories_By_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calories_By_Date_Order_By>>;
  where?: InputMaybe<Calories_By_Date_Bool_Exp>;
};


export type Subscription_RootCaloriesArgs = {
  distinct_on?: InputMaybe<Array<Calories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calories_Order_By>>;
  where?: InputMaybe<Calories_Bool_Exp>;
};


export type Subscription_RootCalories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Calories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calories_Order_By>>;
  where?: InputMaybe<Calories_Bool_Exp>;
};


export type Subscription_RootCalories_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootDistance_By_DateArgs = {
  distinct_on?: InputMaybe<Array<Distance_By_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distance_By_Date_Order_By>>;
  where?: InputMaybe<Distance_By_Date_Bool_Exp>;
};


export type Subscription_RootDistance_By_Date_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distance_By_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distance_By_Date_Order_By>>;
  where?: InputMaybe<Distance_By_Date_Bool_Exp>;
};


export type Subscription_RootDistanceArgs = {
  distinct_on?: InputMaybe<Array<Distance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distance_Order_By>>;
  where?: InputMaybe<Distance_Bool_Exp>;
};


export type Subscription_RootDistance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distance_Order_By>>;
  where?: InputMaybe<Distance_Bool_Exp>;
};


export type Subscription_RootDistance_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootHeartRateArgs = {
  distinct_on?: InputMaybe<Array<HeartRate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HeartRate_Order_By>>;
  where?: InputMaybe<HeartRate_Bool_Exp>;
};


export type Subscription_RootHeartRate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<HeartRate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HeartRate_Order_By>>;
  where?: InputMaybe<HeartRate_Bool_Exp>;
};


export type Subscription_RootHeartRate_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSteps_By_DateArgs = {
  distinct_on?: InputMaybe<Array<Steps_By_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Steps_By_Date_Order_By>>;
  where?: InputMaybe<Steps_By_Date_Bool_Exp>;
};


export type Subscription_RootSteps_By_Date_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Steps_By_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Steps_By_Date_Order_By>>;
  where?: InputMaybe<Steps_By_Date_Bool_Exp>;
};


export type Subscription_RootStepsArgs = {
  distinct_on?: InputMaybe<Array<Steps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Steps_Order_By>>;
  where?: InputMaybe<Steps_Bool_Exp>;
};


export type Subscription_RootSteps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Steps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Steps_Order_By>>;
  where?: InputMaybe<Steps_Bool_Exp>;
};


export type Subscription_RootSteps_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVery_Active_Minutes_By_DateArgs = {
  distinct_on?: InputMaybe<Array<Very_Active_Minutes_By_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Very_Active_Minutes_By_Date_Order_By>>;
  where?: InputMaybe<Very_Active_Minutes_By_Date_Bool_Exp>;
};


export type Subscription_RootVery_Active_Minutes_By_Date_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Very_Active_Minutes_By_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Very_Active_Minutes_By_Date_Order_By>>;
  where?: InputMaybe<Very_Active_Minutes_By_Date_Bool_Exp>;
};


export type Subscription_RootVeryActiveMinutesArgs = {
  distinct_on?: InputMaybe<Array<VeryActiveMinutes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VeryActiveMinutes_Order_By>>;
  where?: InputMaybe<VeryActiveMinutes_Bool_Exp>;
};


export type Subscription_RootVeryActiveMinutes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VeryActiveMinutes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VeryActiveMinutes_Order_By>>;
  where?: InputMaybe<VeryActiveMinutes_Bool_Exp>;
};


export type Subscription_RootVeryActiveMinutes_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { __typename?: 'query_root', Distance: Array<{ __typename?: 'Distance', id: number }> };


export const Document = gql`
    {
  Distance(where: {userId: {_eq: 1}}) {
    id
  }
}
    `;

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuery(baseOptions?: Apollo.QueryHookOptions<Query, QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Query, QueryVariables>(Document, options);
      }
export function useLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Query, QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Query, QueryVariables>(Document, options);
        }
export type QueryHookResult = ReturnType<typeof useQuery>;
export type LazyQueryHookResult = ReturnType<typeof useLazyQuery>;
export type QueryResult = Apollo.QueryResult<Query, QueryVariables>;