
# Projekt React

## Jak uruchomić projekt lokalnie (Node.js)

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

## Jak uruchomić w Visual Studio

1. Otwórz Visual Studio i wybierz "Sklonuj repozytorium"
   - Wklej URL repozytorium z GitHuba
   - Wybierz lokalizację na dysku

2. Po sklonowaniu, otwórz terminal w Visual Studio:
   - Menu -> Widok -> Terminal
   - Lub użyj skrótu: Ctrl + `

3. W terminalu wykonaj polecenia:
```sh
npm install
npm run build
```

4. Kliknij prawym przyciskiem myszy na projekt w Eksploratorze rozwiązań
   - Wybierz "Ustaw jako projekt startowy"

5. Uruchom projekt:
   - Kliknij zielony przycisk "IIS Express" na pasku narzędzi
   - Lub użyj klawisza F5

6. Aplikacja powinna otworzyć się w przeglądarce

## Technologie użyte w projekcie

- React
- TypeScript
- Vite
- shadcn-ui
- Tailwind CSS
- Supabase (baza danych)

## Struktura projektu

Główne komponenty znajdują się w katalogu `src/components`.
Style są zarządzane przez Tailwind CSS.
