# PNIIT — Plateforme Nationale de l’Inspection du Travail

## 1. Aperçu
Le projet PNIIT est une plateforme de gestion des activités de l’inspection du travail, conçue pour le contexte administratif de Djibouti.

## 2. Stack technique
- React + TypeScript + Vite
- Tailwind CSS
- React Router
- Recharts
- Supabase + PostgreSQL
- Row Level Security

## 3. Pré-requis
- Node.js 20+
- npm
- compte Supabase

## 4. Installation locale
```bash
npm install
cp .env.example .env
npm run dev
```

## 5. Variables d’environnement
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_APP_MODE=demo
```

## 6. Base de données Supabase
Les migrations sont situées dans `supabase/migrations`.

```bash
supabase db push
```

## 7. Sécurité
- Les données sensibles doivent être stockées côté serveur.
- Les règles RLS doivent être renforcées avant un usage institutionnel.
- Les rôles et permissions ne doivent pas être modifiés côté frontend.

## 8. Données de démonstration
Les données incluses dans `src/data/demo.ts` et `supabase/seed.sql` sont purement synthétiques et marquées comme démonstration.

## 9. Déploiement
1. Créer un projet Supabase.
2. Appliquer les migrations.
3. Configurer les variables d’environnement.
4. Construire l’application.

```bash
npm run build
```
