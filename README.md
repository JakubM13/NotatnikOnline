
# NotatnikOnline - System zarządzania notatkami

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

## Jak uruchomić lokalnie (Node.js)

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

## Technologie

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui (komponenty UI)
- Supabase (baza danych)
- React Router
- React Query

## Struktura projektu

```
src/
  ├── components/     # Komponenty React
  ├── pages/         # Komponenty stron
  ├── lib/           # Biblioteki i utilities
  ├── integrations/  # Integracje (np. Supabase)
  └── types/         # Definicje TypeScript
```

## Funkcjonalności

- System użytkowników (rejestracja, logowanie)
- Tworzenie, edycja i usuwanie notatek
- Możliwość ustawienia notatek jako publiczne/prywatne
- Przeglądanie publicznych notatek innych użytkowników
- Responsywny interfejs użytkownika

