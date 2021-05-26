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
def updateKmph(value):
    value=value*0.425
    value=round(value,2)
    fb.put(jsonlink,"fuelEfficiency",value)
    print("fuelEfficiency : ",value)
# for i in range(0,6):
#     updateSpeed(i+10)
#     updateRPM((i+3)*100)
#     updateTemp(i+100)
#     updateKmph(i+40)
#     updateFuel(100-(i*0.01))

checkengine={
    'battery':False,
    'engine':False,
    'oil':False,
    'temp':False
}
fb.put(jsonlink,"checkEngine",checkengine)