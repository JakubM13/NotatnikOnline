
# Projekt React

## Jak uruchomić projekt lokalnie

1. Sklonuj repozytorium:
```sh
git clone <URL_REPOZYTORIUM>
```

2. Zainstaluj zależności:
```sh
npm install
```

3. Uruchom aplikację w trybie developerskim:
```sh
npm run dev
```

4. Aby zbudować wersję produkcyjną:
```sh
npm run build
```

## Hostowanie w ASP.NET Core

1. Zbuduj aplikację React:
```sh
npm run build
```

2. Skopiuj zawartość folderu `dist` do folderu `wwwroot` w projekcie ASP.NET Core.

3. W projekcie ASP.NET Core dodaj następującą konfigurację w `Program.cs`:
```csharp
app.UseDefaultFiles();
app.UseStaticFiles();

app.MapFallbackToFile("index.html");
```

4. Uruchom aplikację ASP.NET Core:
```sh
dotnet run
```

## Technologie użyte w projekcie

- React
- TypeScript
- Vite
- shadcn-ui
- Tailwind CSS

## Struktura projektu

Główne komponenty znajdują się w katalogu `src/components`.
Style są zarządzane przez Tailwind CSS.

