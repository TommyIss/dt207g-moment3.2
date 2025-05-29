# Moment 3,2 i kursen DT207G, Backend-baserad webbutveckling

## Uppgift 1
Detta är en API som är byggt med Express samt MongoDB och används för att hantera mina joberfarenheter. Grundläggande funktionalitet för CRUD (Create, Read, Update, Delete) är implementerad.

### Installation, databas
Detta API använder en MongoDB-databas. Installera nödvändiga npm paket såsom (express, mongoose, cors, nodemon). Databas samt collection är skapad i MongoDB Compass, men i server.js har har jag skapat schema för collection enligt nedanstående:

| Fält | Datatyp | Beskrivning |
|------|---------|-------------|
| _id | ObjectId | Unikt ID, genereras automatiskt i MongoDB|
| companyname | String | Företagsnamn|
| jobtitle | String | Arbetsroll|
| location | String | Plats för jobbet|
| startdate | Date | Startdatum|
| enddate | Date | Slutdatum|
| description | String | Besrivning|

### Användning
Nedan finns hur man använder APIet på olika sätt:
| Metod | Ändpunkt | Beskrivning |
|-------| ---------|-------------|
| GET | /experiences | Hämtar alla tillgängliga erfarenheter |
| GET | /experiences:_id | Hämtar en specifik erfarenhet med automatiskt genererad _id|
| POST | /experiences | Lagrar en ny erfarenhet |
| PUT | /experiences:_id | Uppdaterar en befintlig erfarenhet med genererad _id |
| DELETE | /experiences:_id | Raderar en befintlig erfarenhet med genererad _id |
### Tommy Issa, tois2401