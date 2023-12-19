#import machine, onewire, ds18x20,
import time, json, requests, random
 
#ds_pin = machine.Pin(16)
#ds_sensor = ds18x20.DS18X20(onewire.OneWire(ds_pin))

#roms = ds_sensor.scan()
#print('Found a ds18x20 device')

def getToken(data, urlToGetToken="http://localhost:8080/api/v1/auth/authenticate"):
    tt = requests.post(urlToGetToken, json=data)
    token = tt.json().get("token")
    return token

url = 'http://localhost:8080/api/v1/readings'
data = {"email": "ttt", "password": "ttt"}
authToken = getToken(data)

while True:
  readings = []
  #ds_sensor.convert_temp()
  #time.sleep_ms(750)
  for rom in range(1):
    #print(ds_sensor.read_temp(rom))
    """
    readings.append({
        #'time':time.time(),
        "id_sec":random.randint(0,10),
        "sens_read_sun":69.0,
        "sens_read_shadow":13.0,
        "sens_read_avg": 12.0})
        #'temperature':ds_sensor.read_temp(rom)})
        #'temp': random.randint(-10,10)})
  #for testing
  """
  readings = {"id_sec":random.randint(0,10),
        "sens_read_sun":random.uniform(2.5, 10.0),
        "sens_read_shadow":random.uniform(2.5, 10.0),
        "sens_read_avg": random.uniform(2.5, 10.0)}

  time.sleep(0)
  #url only for owner
  data = readings

  headers = {'Authorization': f'Bearer {authToken}'}
  response = requests.post(url, json=data, headers=headers)
  #for checking if response server is correct
  print(response,readings)





