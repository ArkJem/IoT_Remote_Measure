FROM openjdk:17-oracle
COPY target/*.jar Temperature_Measurement.jar
COPY ./sql-scripts /app/sql-scripts
EXPOSE 8080
ENTRYPOINT ["java","-jar","Temperature_Measurement.jar"]