#import machine, onewire, ds18x20,
import time, json, requests, random
 
#ds_pin = machine.Pin(16)
#ds_sensor = ds18x20.DS18X20(onewire.OneWire(ds_pin))

#roms = ds_sensor.scan()
#print('Found a ds18x20 device')

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
        "sens_read_sun":69.0,
        "sens_read_shadow":13.0,
        "sens_read_avg": 12.0}

  time.sleep(0)
  #url only for owner
  url = 'http://localhost:8080/api/v1/readings'
  data = readings
  response = requests.post(url, json=data)
  #for checking if response server is correct
  print(response,readings)