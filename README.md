# dts-developer-technical-test

This project is a coding task for the Junior Software Developer – Cross Cutting application.

## Table of Contents
- [Tech Stack](#Tech Stack)
- [Configuration](#Configuration)
- [Usage](#usage)



## Tech Stack

**Client** 

- ReactJS
- Bootstrap
- node 22.13.1

**Server** 

- ASP.NET Core Web Api
- .NET Core 8.0
- Entity Framework Core
- Microsoft SQL Server

**Testing**

- xUnit
- FakeItEasy
- FluentAssertions

## Configuration

please modify the connection string inside the path/to/appsettings.json file please modify the connection string based on your local SQL instance

"ConnectionStrings": {
  "DefaultConnection": "Server={(localdb)\\db instance};Database=dts;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True;"

## Usage

To run project locally:

```Terminal of choice
cd dts-developer-technical-test/dts-challenge/dts-challenge.Server
dotnet run
```

To run the test:
```Terminal of choice
cd dts-developer-technical-test/dts-challenge/dts-challenge-test
dotnet test

