import time
from firebase import firebase
fb = firebase.FirebaseApplication('https://scms-33eae-default-rtdb.firebaseio.com/', None)
jsonlink="scms-33eae-default-rtdb/Car/-M_ElJUj2wV6MB9xW8u8"

def updateSpeed(value):
    fb.put(jsonlink,"Speed",value)
    print("Speed : ",value)
def updateFuel(value):
    fb.put(jsonlink,"Fuel",value)
    print("Fuel : ",value)

def updateRPM(value):
    fb.put(jsonlink,"RPM",value)
    print("RPM : ",value)
def updateTemp(value):
    fb.put(jsonlink,"Temp",value)
    print("Temp : ",value)

def updateTorque(value):
    fb.put(jsonlink,"Torque",value)
    print("Torque : ",value)
def updateTemp(value):
    fb.put(jsonlink,"Temp",value)
    print("Temp : ",value)

for i in range(0,6):
    updateSpeed(i)
    updateRPM((i+3)*100)
    time.sleep(0.5)
    updateTemp(i+100)
