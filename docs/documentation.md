# NLB Stilark

Det er utviklet et standarisert og normalisert stilark, som følger brukervennlighet og tilgjengelighetskrav satt av synshemmede (Statped) og dyslektikere (Dysleksi Norge).

Stilarkene er utviklet av NLB, med hjelp fra Seeds på design. Kildekoden er lisensiert med MIT lisens, som gir deg som utvikler full frihet hvis du ønsker å bygge videre på koden vi har utviklet. Det eneste vi ber om er at du nevner oss i deres dokumentasjon.

Denne siden er en demo på stilarket for lydbøker med tekst.

Stilarkene er basert på Bootstrap 4 <https://getbootstrap.com/>

Trykk for [Dagmodus](https://nlbdev.github.io/nlb-scss/) eller [Nattmodus](https://nlbdev.github.io/nlb-scss/dark)

NLB, {{ 'now' | date: "%Y" }}

![NLB Logo](assets/images/NLB_logo.svg "NLB Logo")

## Installasjon

- **NCC**:
  - Filen [ncc.min.css](https://github.com/nlbdev/nlb-scss/releases/download/v1.2.1/ncc.min.css) må omdøpes til `default.css` og kopieres inn i rotmappen.
  - I `ncc.html` må det lenkes til `default.css` i hodet på filen `<link rel="stylesheet" type="text/css" href="default.css"/>`
- **Lydbok med tekst**:
  - Filen [html.min.css](https://github.com/nlbdev/nlb-scss/releases/download/v1.2.1/html.min.css) må omdøpes til `default.css` og kopieres inn i rotmappen.
  - I hovedfilen må det lenkes til `default.css` i hodet på filen `<link rel="stylesheet" type="text/css" href="default.css"/>`
- **E-bok**:
  - Filen [ebok.min.css](https://github.com/nlbdev/nlb-scss/releases/download/v1.2.1/ebok.min.css) kopieres inn i rotmappen.
  - I hovedfilen må det lenkes til `ebok.min.css` i hodet på filen `<link rel="stylesheet" type="text/css" href="ebok.min.css"/>`
- **Nettleserbok**:
  - Filene `js_style.css` og `rb_smil_emulator.js` slettes fra boken.
  - I hodet på `_nettleserbok.html` slettes referansene til CSS, og det må legges inn `<link rel="stylesheet" type="text/css" href="nettleserbok.min.css"/>`.
  - Filen [nettleserbok.min.css](https://github.com/nlbdev/nlb-scss/releases/download/v1.2.1/nettleserbok.min.css) og [rb_smil_emulator.js](https://github.com/nlbdev/nlb-scss/releases/download/v1.2.1/rb_smil_emulator.js) må kopieres inn i rotmappen.

### Krav til HTML

- Filen må ikke inneholde noe inline CSS, dvs. `<element style="color:#000;">` siden dette vil overstyre vår CSS.

## Nedlasting

Siste versjon finnes på: [GitHub](https://github.com/nlbdev/nlb-scss/releases)

## Endringslogg

- v1.0.0: Init
- v1.0.1: Endringer på tabeller, kantlinjefarge, størrelse.
- v1.0.2: La til hidden-headline klasse for å skjule overskrifter.
- v1.1.0: Feilrettinger i lister, overskrifter, skriftstørrelser, o.l.
- v1.1.1: Retting av skriftstørrelse på mobil
- v1.2.0: La til CSS for PIP (Braille)
- v1.2.1: Flyttet hidden-headline klassen for bruk utenfor `#content`
- v1.2.2: Endret på bakgrunnsfarge til papirhvit/off-white for forbedret lesekvalitet

## Dokumentasjon

### Body

Bakgrunnsfarge

Dagmodus | Nattmodus
--- | ---
[#faf9f6](https://www.colorhexa.com/faf9f6) | [#212d39](https://www.colorhexa.com/212d39)

### Overskrifter

`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`

Farge

Dagmodus | Nattmodus
--- | ---
[#22313F](https://www.colorhexa.com/22313f) | [#f8f9fa](https://www.colorhexa.com/f8f9fa)

### Brødtekst

`<p>`

Farge

Dagmodus | Nattmodus
--- | ---
[#22313F](https://www.colorhexa.com/22313f) | [#f8f9fa](https://www.colorhexa.com/f8f9fa)

### Ramme

Alle rammer må ha `ramme`-klassen (bortsett fra `generisk-ramme`), tilleggsklasser angir bakgrunnsfarge og tekstfarge.

Hovedklasse: | `generisk-ramme`
--- | ---:
Bakgrunnsfarge: | [#E4F0DA](https://www.colorhexa.com/E4F0DA)
Linjefarge: | [#B1C900](https://www.colorhexa.com/B1C900)
Bakgrunnsfarge nattmodus: | [#2b3a48](https://www.colorhexa.com/2b3a48)
Linjefarge nattmodus: | [#bcbec0](https://www.colorhexa.com/bcbec0)

```html
<div class="generisk-ramme">Eksempel</div>
```

<div class="generisk-ramme">Eksempel</div>

Bakgrunnsfarge: Rød `bg-red` | eksempel: `ramme bg-red`
--- | ---:
Bakgrunnsfarge: | [#f0dae4](https://www.colorhexa.com/f0dae4)
Linjefarge: | [#bd5b87](https://www.colorhexa.com/bd5b87)
Bakgrunnsfarge nattmodus: | [#482b3a](https://www.colorhexa.com/482b3a)
Linjefarge nattmodus: | [#ae7794](https://www.colorhexa.com/ae7794)

```html
<div class="ramme bg-red">Eksempel</div>
```

<div class="ramme bg-red">Eksempel</div>

Bakgrunnsfarge: Blå `bg-blue` | eksempel: `ramme bg-blue`
--- | ---:
Bakgrunnsfarge: | [#dae4f0](https://www.colorhexa.com/dae4f0)
Linjefarge: | [#5b87bd](https://www.colorhexa.com/5b87bd)
Bakgrunnsfarge nattmodus: | [#486178](https://www.colorhexa.com/486178)
Linjefarge nattmodus: | [#a8bacb](https://www.colorhexa.com/a8bacb)

```html
<div class="ramme bg-blue">Eksempel</div>
```

<div class="ramme bg-blue">Eksempel</div>

Bakgrunnsfarge: Gul `bg-yellow` | eksempel: `ramme bg-yellow`
--- | ---:
Bakgrunnsfarge: | [#eff0da](https://www.colorhexa.com/eff0da)
Linjefarge: | [#b8bd5b](https://www.colorhexa.com/b8bd5b)
Bakgrunnsfarge nattmodus: | [#48392b](https://www.colorhexa.com/48392b)
Linjefarge nattmodus: | [#ae9277](https://www.colorhexa.com/ae9277)

```html
<div class="ramme bg-yellow">Eksempel</div>
```

<div class="ramme bg-yellow">Eksempel</div>

Bakgrunnsfarge: Grønn `bg-green` | eksempel: `ramme bg-green`
--- | ---:
Bakgrunnsfarge: | [#E4F0DA](https://www.colorhexa.com/E4F0DA)
Linjefarge: | [#B1C900](https://www.colorhexa.com/B1C900)
Bakgrunnsfarge nattmodus: | [#2b3a48](https://www.colorhexa.com/2b3a48)
Linjefarge nattmodus: | [#bcbec0](https://www.colorhexa.com/bcbec0)

```html
<div class="ramme bg-green">Eksempel</div>
```

<div class="ramme bg-green">Eksempel</div>

Tekstfarge: Sort | `text-dark`
--- | ---:
Tekstfarge: | [#212d39](https://www.colorhexa.com/212d39)

```html
<div class="text-dark">Eksempel</div>
```

<div class="bg-light text-dark">Eksempel</div>
<div>&nbsp;</div>

Tekstfarge: Lys | `text-light`
--- | ---:
Tekstfarge: | [#f8f9fa](https://www.colorhexa.com/f8f9fa)

```html
<div class="text-light">Eksempel</div>
```

<div class="bg-dark text-light">Eksempel</div>
<div>&nbsp;</div>

### Bilder

For bilder bruker du følgende kode:

```html
<img src="..." alt="..." title="..." />
```

### Tabell

```html
<table>
    <thead>
        <tr>
            <th>Fornavn</th>
            <th>Etternavn</th>
            <th>Alder</th>
            <th>Poststed</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ola</td>
            <td>Normann</td>
            <td>43</td>
            <td>Oslo</td>
        </tr>
        <tr>
            <td>Kari</td>
            <td>Normann</td>
            <td>53</td>
            <td>Oslo</td>
        </tr>
        <tr>
            <td>Per</td>
            <td>Normann</td>
            <td>24</td>
            <td>Oslo</td>
        </tr>
        <tr>
            <td>Pål</td>
            <td>Normann</td>
            <td>25</td>
            <td>Oslo</td>
        </tr>
        <tr>
            <td>Espen</td>
            <td>Normann</td>
            <td>17</td>
            <td>Oslo</td>
        </tr>
    </tbody>
</table>
```

<table>
    <thead>
        <tr>
            <th>Fornavn</th>
            <th>Etternavn</th>
            <th>Alder</th>
            <th>Poststed</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ola</td>
            <td>Normann</td>
            <td>43</td>
            <td>Oslo</td>
        </tr>
        <tr>
            <td>Kari</td>
            <td>Normann</td>
            <td>53</td>
            <td>Oslo</td>
        </tr>
        <tr>
            <td>Per</td>
            <td>Normann</td>
            <td>24</td>
            <td>Oslo</td>
        </tr>
        <tr>
            <td>Pål</td>
            <td>Normann</td>
            <td>25</td>
            <td>Oslo</td>
        </tr>
        <tr>
            <td>Espen</td>
            <td>Normann</td>
            <td>17</td>
            <td>Oslo</td>
        </tr>
    </tbody>
</table>

### Sortert liste

```html
<ol>
    <li>Element</li>
    <li>Element</li>
    <li>Element</li>
    <li class="nested-list">
        <ol>
            <li>Sub-element</li>
            <li>Sub-element</li>
        </ol>
    </li>
</ol>
```

<ol>
    <li>Element</li>
    <li>Element</li>
    <li>Element</li>
    <li class="nested-list">
        <ol>
            <li>Sub-element</li>
            <li>Sub-element</li>
        </ol>
    </li>
</ol>

### Usortert liste

```html
<ul>
    <li>Element</li>
    <li>Element</li>
    <li>Element</li>
    <li class="nested-list">
        <ul>
            <li>Sub-element</li>
            <li>Sub-element</li>
        </ul>
    </li>
</ul>
```

<ul>
    <li>Element</li>
    <li>Element</li>
    <li>Element</li>
    <li class="nested-list">
        <ul>
            <li>Sub-element</li>
            <li>Sub-element</li>
        </ul>
    </li>
</ul>

### Fotnoter

Fotnoter merkes av med klassen `noteref` refererer til id for dertilhørende fotnote, se eksempel under.

```html
<p>
    Lorem<a href="#ref1" epub:type="noteref" class="noteref">1</a> ipsum<a href="#ref2" epub:type="noteref" class="noteref">2</a>
</p>
<ol>
  <li epub:type="footnote" class="notebody" id="ref1">...</li>
  <li epub:type="footnote" class="notebody" id="ref2">...</li>
</ol>
```

<p>
    Lorem<a href="#ref1" epub:type="noteref" class="noteref">1</a> ipsum<a href="#ref2" epub:type="noteref" class="noteref">2</a>
</p>
<ol>
  <li epub:type="footnote" class="notebody" id="ref1">...</li>
  <li epub:type="footnote" class="notebody" id="ref2">...</li>
</ol>

### Sidetall

Sidetall merkes av med klassene `page-front`, `page-normal` og `page-special`.

Block-kontekst:

```html
<div id="…" epub:type="pagebreak" class="page-front" title="1">1</div>
<div id="…" epub:type="pagebreak" class="page-normal" title="1">1</div>
<div id="…" epub:type="pagebreak" class="page-special" title="1">1</div>
```

<div epub:type="pagebreak" class="page-normal" title="1">1</div>

Inline-kontekst:

```html
<span id="…" epub:type="pagebreak" class="page-front" title="1">1</span>
<span id="…" epub:type="pagebreak" class="page-normal" title="1">1</span>
<span id="…" epub:type="pagebreak" class="page-special" title="1">1</span>
```

<span epub:type="pagebreak" class="page-normal" title="1">1</span>

### Prodnoter

```html
<aside class="prodnote" epub:type="z3998:production">
    <span>Produksjonstekst</span>
</aside>
```

<aside class="prodnote" epub:type="z3998:production">
    <span>Produksjonstekst</span>
</aside>
