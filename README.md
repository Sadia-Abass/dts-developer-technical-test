# dts-developer-technical-test


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

inside the appsettings.json file please modify the connection string based on your local SQL instance

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

