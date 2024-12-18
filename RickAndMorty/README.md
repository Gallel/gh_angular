# RickAndMorty

Aquest projecte ha estat generat utilitzant [Angular CLI](https://github.com/angular/angular-cli) versió 19.0.0.

## Descripció del Projecte

RickAndMorty és una aplicació web que permet als usuaris explorar informació sobre els personatges i episodis de la sèrie Rick and Morty. L'aplicació inclou funcionalitats com la visualització de llistats de personatges, detalls de personatges, i un calendari que mostra les dates d'emissió dels episodis.

## Servidor de Desenvolupament

Per iniciar un servidor de desenvolupament local, executa:

```bash
ng serve
```

Un cop el servidor estigui en funcionament, obre el teu navegador i navega a `http://localhost:4200/`. L'aplicació es recarregarà automàticament cada vegada que modifiquis algun dels fitxers de codi font.

## Generació de Codi

Angular CLI inclou eines potents per a la generació de codi. Per generar un nou component, executa:

```bash
ng generate component component-name
```

Per obtenir una llista completa dels schematics disponibles (com ara `components`, `directives`, o `pipes`), executa:

```bash
ng generate --help
```

## Construcció

Per construir el projecte, executa:

```bash
ng build
```

Això compilarà el teu projecte i emmagatzemarà els artefactes de construcció a la carpeta `dist/`. Per defecte, la construcció de producció optimitza la teva aplicació per a rendiment i velocitat.

## Execució de Tests Unitaris

Per executar tests unitaris amb el test runner [Karma](https://karma-runner.github.io), utilitza el següent comandament:

```bash
ng test
```

## Execució de Tests End-to-End

Per executar tests end-to-end (e2e), executa:

```bash
ng e2e
```

Angular CLI no inclou un framework de proves end-to-end per defecte. Pots triar el que millor s'adapti a les teves necessitats.

## Proves amb Selenium

Aquest projecte utilitza Selenium per validar la informació dels personatges i la navegació entre pàgines. Les proves es troben a la carpeta `selenium-tests`.

Per executar les proves amb Selenium, assegura't de tenir instal·lades les dependències necessàries:

```bash
npm install selenium-webdriver chromedriver
```

Després, executa les proves amb el següent comandament:

```bash
node selenium-tests/character-detail-page.spec.js
```

## Recursos Addicionals

Per obtenir més informació sobre l'ús de l'Angular CLI, incloent referències detallades de comandaments, visita la pàgina [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).