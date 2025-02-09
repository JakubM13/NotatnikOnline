
# NotatnikOnline - System zarządzania notatkami

## Jak uruchomić lokalnie

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
