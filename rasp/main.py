import machine, onewire, ds18x20, time, json
 
ds_pin = machine.Pin(16)
ds_sensor = ds18x20.DS18X20(onewire.OneWire(ds_pin))
 
roms = ds_sensor.scan()
print('Found a ds18x20 device')

while True:
  readings = []
  ds_sensor.convert_temp()
  time.sleep_ms(750)
  for rom in roms:
    #print(ds_sensor.read_temp(rom))
    readings.append({
        'time':time.time(),
        'temperature':ds_sensor.read_temp(rom)})
  time.sleep(0)
  print(readings)