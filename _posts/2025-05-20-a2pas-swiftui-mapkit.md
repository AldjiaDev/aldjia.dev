---
layout: post
title: "A2PAS : Créer une carte d’événements locale avec SwiftUI et MapKit"
date: 2025-05-20
categories: [iOS,Swift, SwiftUI, MapKit, Apple Foundation Program, Simplon, Map, Géolocalisation]
description: "A2PAS est une application iOS développée avec SwiftUI et MapKit, conçue pour afficher des événements géolocalisés en temps réel. Ce billet explore son architecture technique, la gestion de la carte interactive et les choix d'implémentation réalisés dans le cadre du programme Apple Foundation Program."
image: /assets/images/Map.jpg
---
<p>Dans le cadre du programme <strong>Apple Foundation Program</strong> dispensé par <strong>Simplon</strong>, j'ai travaillé sur un projet d’application iOS baptisé <strong>A2PAS</strong>. Conçu pour favoriser la découverte des événements locaux autour de soi, le projet m’a permis de me concentrer sur des fonctionnalités <strong>géospatiales avancées</strong>, notamment l'intégration de <strong>MapKit</strong>, la gestion d’itinéraires et la création d’un système de filtres dynamiques avec <strong>SwiftUI</strong>.</p>

<p style="text-align:center; margin-bottom: 2rem;">
  <img src="/assets/images/a2pas-intro.jpg" alt="Illustration de l'application A2PAS" style="max-width: 100%; border-radius: 10px;">
</p>

<p>Ce billet détaille les éléments techniques de la <strong>vue Map</strong>, les choix d’implémentation, ainsi que les apprentissages issus de cette formation.</p>

<h2>Objectif de l’application</h2>

<p><strong>A2PAS</strong> est une application mobile qui permet aux utilisateurs de visualiser, filtrer et accéder à des événements culturels ou sociaux proches d'eux. L’expérience repose principalement sur une carte interactive affichant des événements par catégorie avec une logique de proximité (géolocalisation + rayon).</p>

<h3>Fonctionnalités clés :</h3>
<ul>
  <li>Affichage des <strong>événements géolocalisés</strong> via MapKit</li>
  <li><strong>Pins personnalisés</strong> (couleur, symbole, style) selon le type d’événement</li>
  <li>Lancement d’un <strong>itinéraire direct</strong> depuis la position utilisateur</li>
  <li><strong>Filtrage multicatégorie</strong> des événements (concert, cinéma, marché…)</li>
  <li>Recherche textuelle en temps réel</li>
  <li>Slider de <strong>zoom précis</strong> sur la map</li>
</ul>

<p style="text-align:center; margin-bottom: 2rem;">
  <img src="/assets/images/a2pas-fonctionnalites.jpg" alt="Capture d'écran des fonctionnalités de l'app A2PAS" style="max-width: 100%; border-radius: 10px;">
</p>

<h2>Architecture technique</h2>

<p>L’application a été développée en <strong>SwiftUI</strong>, en structurant les composants autour du principe MVVM. Voici les principaux modules :</p>
<ul>
  <li><code>MapView.swift</code> : Vue principale affichant la carte, la géolocalisation et les interactions utilisateur</li>
  <li><code>RouteMapView.swift</code> : Wrapper <code>UIViewRepresentable</code> pour intégrer <code>MKMapView</code> et gérer les pins/overlays</li>
  <li><code>ModalEventView.swift</code> : Vue détaillée d’un événement avec actions (itinéraire, favoris…)</li>
  <li><code>LocationManager.swift</code> : Gestion de la localisation avec <code>CoreLocation</code></li>
  <li><code>MapActivity.swift</code> : Struct de données combinant une activité et ses coordonnées</li>
</ul>

<p style="text-align:center; margin-bottom: 2rem;">
  <img src="/assets/images/a2pas-architecture.jpg" alt="Schéma de l’architecture MVVM de l’app" style="max-width: 100%; border-radius: 10px;">
</p>

<h2>Map personnalisée avec RouteMapView.swift</h2>

<p>Pour offrir une meilleure lisibilité, les événements sont représentés par des <strong>bulles colorées avec des symboles contextuels</strong>. Ces vues sont générées via une customisation de <code>MKAnnotationView</code>, en injectant une image SVG rendue dynamiquement :</p>

<pre><code class="language-swift">let icon = UIImage(systemName: iconFor(label))
let background = colorFor(label) // -> UIColor
</code></pre>

<p>L’intégration de <code>MKMapView</code> dans SwiftUI s’est faite via <code>UIViewRepresentable</code>, ce qui permet une communication fluide avec les composants natifs UIKit tout en conservant la logique SwiftUI pour le reste de l’interface.</p>

<p>Nous avons également implémenté un système de <strong>clustering d’événements</strong> avec <code>MKClusterAnnotation</code> afin de ne pas surcharger visuellement la carte.</p>

<p>Enfin, une interaction fluide est assurée grâce à des animations SwiftUI et une gestion des états réactifs sur les événements sélectionnés.</p>


<p>Le projet A2PAS m’a permis de mettre en œuvre des concepts avancés de SwiftUI, de travailler avec des APIs Apple comme MapKit et CoreLocation, tout en développant une application utile, lisible et interactive.</p>

<p>Ce fut aussi une occasion unique de travailler avec des données géographiques réelles, d'améliorer la précision UX/UI, et de maîtriser des outils professionnels modernes dans un cadre formateur stimulant.</p>
