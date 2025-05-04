# Configuration du système d'email pour LTD Logistique

Ce document explique comment configurer le système d'envoi d'emails pour les formulaires de contact et de devis du site LTD Logistique.

## Prérequis

Le site utilise [Email.js](https://www.emailjs.com/) pour envoyer des emails directement depuis le navigateur sans avoir besoin d'un serveur backend.

## Étapes de configuration

### 1. Créer un compte Email.js

1. Rendez-vous sur [www.emailjs.com](https://www.emailjs.com/) et créez un compte gratuit.
2. Le plan gratuit d'Email.js vous permet d'envoyer jusqu'à 200 emails par mois, ce qui devrait être suffisant pour commencer.

### 2. Configurer un service d'email

1. Une fois connecté à Email.js, allez dans la section "Email Services".
2. Cliquez sur "Add New Service" et choisissez votre fournisseur d'email (Gmail, Outlook, ou autre).
3. Suivez les instructions pour connecter votre compte email.
4. Notez l'ID du service créé (par exemple: `service_abc123`).

### 3. Créer un modèle d'email

1. Allez dans la section "Email Templates".
2. Cliquez sur "Create New Template".
3. Configurez le modèle avec les informations suivantes:
   - **Pour le formulaire de devis:**

     ```
     Objet: Nouvelle demande de devis de {{from_name}}
     
     Contenu:
     Nom: {{from_name}}
     Email: {{from_email}}
     Téléphone: {{from_phone}}
     Entreprise: {{company}}
     
     Message:
     {{message}}
     ```

   - **Pour le formulaire de contact:**

     ```
     Objet: Nouveau message de contact de {{from_name}}
     
     Contenu:
     Nom: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```

4. Notez l'ID du template créé (par exemple: `template_xyz789`).

### 4. Obtenir votre clé API publique

1. Allez dans la section "Account" > "API keys".
2. Copiez votre clé API publique.

### 5. Mettre à jour le code du site

Ouvrez les fichiers suivants et mettez à jour les constantes en haut de chaque fichier avec vos identifiants Email.js:

#### src/pages/Devis.tsx

```typescript
// Replace these with your Email.js credentials
const SERVICE_ID = "votre_service_id"; // par exemple: service_abc123
const TEMPLATE_ID = "votre_template_id_devis"; // par exemple: template_xyz789
const PUBLIC_KEY = "votre_cle_publique"; // par exemple: user_abcdefg123456
```

#### src/pages/Index.tsx

```typescript
// Replace these with your Email.js credentials
const SERVICE_ID = "votre_service_id"; // par exemple: service_abc123
const TEMPLATE_ID = "votre_template_id_contact"; // par exemple: template_abc123
const PUBLIC_KEY = "votre_cle_publique"; // par exemple: user_abcdefg123456
```

## Test

Après avoir configuré Email.js et mis à jour le code avec vos identifiants:

1. Reconstruisez le site avec `npm run build`
2. Testez les formulaires de contact et de devis pour vous assurer que les emails sont bien envoyés à l'adresse `commercial@ltd-logistique.com`

## Dépannage

Si les emails ne sont pas envoyés correctement:

1. Vérifiez les identifiants Email.js dans le code
2. Consultez la console du navigateur pour voir les erreurs éventuelles
3. Vérifiez votre quota Email.js dans votre tableau de bord
4. Assurez-vous que votre service d'email est correctement configuré 