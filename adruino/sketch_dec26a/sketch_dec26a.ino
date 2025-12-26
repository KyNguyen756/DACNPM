#include <DHT.h>

#define DHTPIN 3       
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);  
  dht.begin();
}

void loop() {
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature(); 

  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("{\"error\":\"Failed to read from DHT\"}");
  } else {
    Serial.print("{");
    Serial.print("\"temperature\":");
    Serial.print(temperature);
    Serial.print(",\"humidity\":");
    Serial.print(humidity);
    Serial.println("}");
  }

  delay(300000); 
}
