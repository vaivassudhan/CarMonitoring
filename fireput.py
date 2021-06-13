import time
import obd
import random
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

while True:
    connection = obd.OBD()
    cmd = obd.commands.RPM
    response = connection.query(cmd) 
    # print(response.value)
    rpm=str(response.value)
    rpm=rpm.split()[0]
    i=random.randint(1, 7)
    print("RPM : ",rpm)
    print("Speed : ",0)
    print("Coolant Temp : ",62+i)
    updateRPM(rpm)
    updateSpeed(0)
    updateTemp(62+i)