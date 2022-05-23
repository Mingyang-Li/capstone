import webbrowser # for opening the unzipped folder
# Data migration:
# 1. Open up the heroku database - using DB URL

# 2. Tables to migrate: Distance, Calories, Steps, HeartRate,

# 3. Tables to migrate: LightlyActiveMinutes, ModeratlyActiveMinutes, SedentaryMinutes, VeryActiveMinutes


# 4. Open the unzipped folder for sample dataset
pmdata = "C:/Users/Username/PycharmProjects"
webbrowser.open(pmdata)
# 5. Initialise counter as 1
count = 0
# 6. For each of the 16 folder within the unzipped file:
#     a. open it ⇒open fitbit ⇒ open Calories.json, Access the array in the JSON file, create an empty array
for y in range(pmdata):
    for x in range(p01):
        for i in range(fitbit):
            file = open(calories.json, "r")
#         1. For each object in the array, do a try catch block:
#         Try block: insert data to DB { dateTime, value, date, userId: counter }
            try:
                print()

#         Catch block: add the data we tried to add to DB into the empty array
            except OSError:
                print("cannot open", file)
            
            except 
#         2. Increment counter by 1
        count += 1
# 7. Print the empty array AND and length of the empty array
        print()


