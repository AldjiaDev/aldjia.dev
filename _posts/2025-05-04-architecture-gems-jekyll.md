---
layout: post
title: "Architecture d’un site Jekyll : analyse des gems utilisées"
date: 2025-05-04
categories: [jekyll, ruby, architecture]
description: "Chaque gem a un rôle bien défini, un peu comme les maillons d’une chaîne bien huilée. Dans cet article, on explore les gems utilisées dans un site Jekyll classique hébergé sur GitHub Pages. À la clé : compatibilité, performance, SEO, et un brin de magie Ruby."
image: /assets/images/gemjekyll.jpg
---

Quand on choisit [Jekyll](https://jekyllrb.com/) pour développer un site statique, on ne se doute pas toujours que sous cette apparente simplicité se cache un véritable écosystème de gems Ruby. Chaque gem a un rôle bien défini, un peu comme les maillons d’une chaîne bien huilée.

Dans cet article, on explore les gems utilisées dans un site Jekyll classique hébergé sur GitHub Pages. À la clé : compatibilité, performance, SEO, et un brin de magie Ruby.

<p style="text-align:center; margin-bottom: 3rem;">
  <img src="/assets/images/gemjekyll.jpg" alt="Illustration du Gemfile Jekyll" style="max-width: 100%; border-radius: 10px;">
</p>

## `github-pages` : la gem d’intégration continue

**Rôle :** Cette gem vous garantit une compatibilité parfaite avec GitHub Pages. Elle regroupe une suite de gems approuvées (y compris Jekyll, jekyll-feed, jekyll-sitemap, etc.), et fige leurs versions pour éviter les conflits.

**Pourquoi c’est utile :** Vous développez localement avec la même stack que celle utilisée par GitHub Pages lors du déploiement. Cela évite les mauvaises surprises.

**Source :** [GitHub Pages Dependencies](https://github.com/github/pages-gem)

## `minima` : le thème par défaut, sobre et efficace

**Rôle :** Minima est le thème de base fourni avec Jekyll. Il offre une mise en page responsive, une navigation claire, un design épuré — bref, une base idéale pour démarrer.

**Pourquoi c’est utile :** Il vous permet de vous concentrer sur le contenu sans partir de zéro. Il est aussi facilement personnalisable.

**Source :** [minima sur GitHub](https://github.com/jekyll/minima)

## `jekyll-feed` : pour diffuser votre contenu via RSS

**Rôle :** Ce plugin génère un flux Atom automatiquement, sans configuration particulière.

**Pourquoi c’est utile :** Il permet à vos visiteurs de suivre vos publications avec des lecteurs RSS comme Feedly. Un indispensable pour tout site à contenu régulier.

**Source :** [jekyll-feed sur GitHub](https://github.com/jekyll/jekyll-feed)

## `jekyll-sitemap` : visibilité et SEO

**Rôle :** Ce plugin crée un fichier `sitemap.xml` contenant la liste de toutes les pages de votre site.

**Pourquoi c’est utile :** Cela aide Google, Bing & co. à mieux explorer votre site, ce qui améliore son référencement.

**Source :** [jekyll-sitemap sur GitHub](https://github.com/jekyll/jekyll-sitemap)

## `tzinfo` et `tzinfo-data` : la gestion des fuseaux horaires

**Rôle :** Ces gems sont nécessaires pour gérer correctement les dates et fuseaux horaires, notamment sous Windows ou JRuby, où les données timezone ne sont pas incluses par défaut.

**Pourquoi c’est utile :** Vous évitez des erreurs de date ou de build liées à une mauvaise configuration de l’heure.

**Source :** [tzinfo](https://github.com/rubysl/tzinfo) & [tzinfo-data](https://github.com/tzinfo/tzinfo-data)

## `wdm` : pour surveiller vos fichiers sous Windows

**Rôle :** Ce plugin améliore la détection de fichiers modifiés sur les systèmes Windows via l’API Win32.

**Pourquoi c’est utile :** Il rend le rafraîchissement de site plus rapide et moins gourmand en ressources.

**Source :** [wdm sur RubyGems](https://rubygems.org/gems/wdm)

## `http_parser.rb` : pour JRuby uniquement

**Rôle :** Cette gem parse les requêtes HTTP, une tâche essentielle dans tout environnement serveur. Pour JRuby, on verrouille la version à `~> 0.6.0` pour éviter les incompatibilités avec les implémentations Java.

**Pourquoi c’est utile :** Assure la stabilité du site sous JRuby.

**Source :** [http_parser.rb sur GitHub](https://github.com/tmm1/http_parser.rb)

## Une stack légère mais robuste

Ces gems sont invisibles pour vos visiteurs, mais elles sont le socle technique de votre site. De la génération de contenu à l’optimisation SEO, en passant par la compatibilité multiplateforme, elles font tout le boulot en coulisse.

En les comprenant, vous gagnez en maîtrise. En les personnalisant, vous donnez une identité unique à votre site.
