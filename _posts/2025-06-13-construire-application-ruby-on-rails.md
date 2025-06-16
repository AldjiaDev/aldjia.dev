---
layout: post
title: "Construire une application Ruby on Rails en 2025 : outils, méthodes et apprentissages"
date: 2025-06-13
categories: [Mes réalisations]
tags: [Ruby on Rails, développement, apprentissage, déploiement, stack, projets]
description: Retour d’expérience sur la création d’une application Ruby on Rails en 2025. Du choix du projet aux outils modernes comme Hotwire, Tailwind et PostgreSQL, cet article partage les méthodes, apprentissages et défis techniques rencontrés au fil du développement.
image: /assets/images/rails.jpg
---

## De l’idée à l’application

Il y a quelque chose de magique dans le moment où une idée devient une interface. Quand un simple besoin, griffonné dans un carnet, prend vie sous forme d’une application web.
Avec Ruby on Rails, cette magie devient accessible.

Mais derrière cette accessibilité se cachent des choix, des outils, une méthode. Et surtout : un apprentissage continu.
Cet article n’est pas un tutoriel pas-à-pas, mais un partage d’expérience. Mon expérience.
Celle d’une développeuse encore en chemin, qui vient de construire une application et qui apprend, à chaque ligne de code.

<p style="text-align:center; margin-bottom: 2rem;">
  <img src="/assets/images/rails.jpg" alt="Illustration Ruby et Rails 1" style="max-width: 100%; border-radius: 10px;">
</p>


## Choisir un projet personnel : un moteur d’apprentissage

Avant de parler de technique, parlons de sens.
Le projet que je viens tout juste de terminer n’est pas un exercice de style. C’est une idée qui me tient à cœur. Un besoin, que j’avais envie de résoudre. Un besoin aussi d'avancer, de chercher, et me dépasser.

👉 **Conseil** : si vous débutez avec Rails, partez d’un problème concret. Une idée simple. Mais réaliste.
Le code devient plus clair quand il répond à une intention.


## Rails en 2025 : un framework moderne et complet

On entend souvent que Rails serait “vieillissant”. La réalité ? Il est plus vivant que jamais.
Avec sa nouvelle version, Rails s’est modernisé sans renier ses principes. 👉 [Lire cet article](https://aldjia.dev/ruby/rails/philosophie/d%C3%A9veloppement/2025/06/08/ruby-rails-philosophie.html).


### Stack utilisé :

#### Back-end

- **Ruby on Rails 7.2.2.1** — un framework MVC complet et robuste, parfait pour structurer une application web moderne.
- **Ruby 3.3.5** — le langage de programmation utilisé, réputé pour sa clarté et sa lisibilité.
- **PostgreSQL** — une base de données relationnelle fiable et performante, bien intégrée à Rails.
- **Devise** — solution d’authentification puissante, utilisée ici pour gérer les utilisateurs et l’administration.
- **Kaminari** — gem de pagination élégante, pour gérer les listes longues avec fluidité.
- **Heroku** — plateforme de déploiement simple et rapide pour mettre l’application en production.
- **Rake / Rails console** — pour lancer des tâches personnalisées, manipuler les données, ou déboguer facilement.

#### Front-end

- **Bootstrap 5.3.3** — framework CSS moderne, offrant des composants responsive et accessibles.
- **ERB (Embedded Ruby)** — pour créer des templates HTML dynamiques directement dans Rails.
- **StimulusJS (Hotwire)** — permet d’ajouter des interactions front-end légères sans complexité JavaScript.
- **SCSS / CSS personnalisé** — pour affirmer l’identité visuelle du projet : couleurs douces, typographies soignées.
- **Illustrations & icônes flat-style** — des visuels harmonisés à l’esthétique générale de l’application.

👉 Rails ne cherche pas à “faire comme les autres”. Il propose sa propre vision. Et elle fonctionne.


## 3. Outils et environnement de développement

Voici quelques outils que j'ai utilisé au quotidien :

- **VS Code** (ou RubyMine pour les amateurs de confort haut de gamme)
- `rails console` pour interagir avec les objets en direct
- `pry` / `byebug` pour déboguer comme une détective
- **Git + GitHub** pour versionner proprement
- **Heroku / Render** pour les premiers déploiements simples

Ce que j’ai compris : la productivité vient souvent d’un environnement de travail bien réglé.
Même en tant que débutante, j’ai vite appris à apprécier une config propre.


## Outils et environnement de développement

Pour donner vie à mes projets web, j’ai construit un environnement de développement fluide, fiable, et pensé à la fois pour la qualité du code et la productivité. Voici les outils et technologies que j’utilise au quotidien :

### Outils techniques

- **Visual Studio Code** — Mon éditeur principal, enrichi d’extensions pour Ruby, Rails, HTML/CSS, Git et plus encore.
- **Terminal (iTerm2 / zsh)** — Pour interagir efficacement avec les projets en ligne de commande.
- **Git & GitHub** — Pour versionner mon code, collaborer et suivre les évolutions avec clarté.
- **Heroku CLI** — Pour déployer facilement mes apps Rails en production, gérer les bases de données et variables d’environnement.

### Gestion du projet

- **Rails Console** — Manipulation rapide des données, en local comme en production.
- **Rake Tasks** — Pour automatiser les tâches courantes (migrations, seeds, maintenance...).
- **PostgreSQL** — Une base de données robuste et performante, utilisée en développement et production.

### Front-end & design

- **Bootstrap 5** — Pour créer des interfaces responsives, accessibles et esthétiques rapidement.
- **Figma** *(occasionnellement)* — Pour prototyper l’interface et assurer une cohérence visuelle avant intégration.
- **Google Fonts (Poppins)** — Une police moderne pour renforcer l’identité graphique du projet.
- **Illustrations générées par IA** — Créées sur mesure, en harmonie avec l’univers visuel pastel et épuré du site.


## 5. Déploiement : sortir du local, affronter le monde réel

Déployer, c’est faire un pas décisif. Cela m’a appris à :

- Structurer mon code proprement
- Gérer les **clés d’API**, les **variables d’environnement**
- Lire des logs, corriger des erreurs inattendues

<p style="text-align:center; margin-bottom: 2rem;">
  <img src="/assets/images/quotety.jpg" alt="Illustration Ruby et Rails 1" style="max-width: 100%; border-radius: 10px;">
</p>

Mon projet est désormais en ligne : [quotety.aldjia.dev](https://quotety.aldjia.dev)
C’est mon tout premier projet Ruby on Rails **entièrement réalisé seule**, du back-end à la mise en production.

Chaque fonctionnalité, chaque ligne de code, chaque ajustement visuel a été pensé avec soin.
**C’est imparfait, oui ! Mais c’est vivant. Et surtout, j’en suis fière.**

Ce projet marque une étape importante dans mon parcours, mais il ne s’arrête pas là.
Je compte continuer à l’améliorer, à en perfectionner l’interface, et surtout : à y intégrer **de nouveaux services** inspirants. J’ai des idées plein la tête pour ce petit bébé et je suis impatiente de les concrétiser.

J’ai également rédigé un article complet pour le présenter :
👉 [Lire l’article sur Quotety](https://aldjia.dev/realisations/2025-06-12-quotety.html)


## Rails comme terrain d'entraînement et d’expression

Créer un projet avec Ruby on Rails en 2025, ce n’est pas un retour vers le passé.
C’est une plongée dans un écosystème mature, stable, et humain.

Pour moi, Rails n’est pas juste un outil.
C’est un espace où je peux tester, apprendre, m’améliorer, sans me perdre dans la complexité (parfois inutile).

Je suis encore en chemin.
Mais avec chaque commit, chaque bug résolu, chaque fonctionnalité en place, je construis.
Et c’est ça, le plus important.


## Ressources pratiques

- [Ruby on Rails Guides](https://guides.rubyonrails.org)
- [Hotwire.dev](https://hotwire.dev)
- [RSpec Rails](https://relishapp.com/rspec/rspec-rails/docs)
- [Render.com](https://render.com), [Fly.io](https://fly.io), [Heroku](https://heroku.com)
