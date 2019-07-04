# NLB Stilark

Det er utviklet et standarisert og normalisert stilark, som følger brukervennlighet og tilgjengelighetskrav satt av synshemmede (Statped) og dyslektikere (Dysleksi Norge).

Denne siden er en demo på stilarket for lydbøker med tekst.

[Light mode](https://nlbdev.github.io/nlb-scss/) | [Dark mode](https://nlbdev.github.io/nlb-scss/dark)

## Installasjon

- **NCC**: Filen [ncc.min.css](https://github.com/nlbdev/nlb-scss/releases/download/v1.0.0/ncc.min.css) må omdøpes til `default.css` og i `ncc.html` må det lenkes til `default.css` i hodet på filen `<link rel="stylesheet" type="text/css" href="default.css"/>`
- **Lydbok med tekst**: Filen [html.min.css](https://github.com/nlbdev/nlb-scss/releases/download/v1.0.0/html.min.css) må omdøpes til `default.css` og i hovedfilen må det lenkes til `default.css` i hodet på filen `<link rel="stylesheet" type="text/css" href="default.css"/>`

### Krav til HTML

- Filen må ikke inneholde noe inline CSS, dvs. `<element style="color:#000;">` siden dette vil overstyre vår CSS.

## Nedlasting

Siste versjon finnes på: [GitHub](https://github.com/nlbdev/nlb-scss/releases)

## Dokumentasjon

### Overskrifter

`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`

Farge: [#22313F](https://www.colorhexa.com/22313f)

#### SM (0-639px)

Navn | Font type | Font størrelse (Normal) | Font størrelse (Ledetekst)
--- | --- | :---: | :---:
h1 | Arial black | 35,64px | 39,60px
h2 | Arial bold | 31,68px | 35,64px
h3 | Arial bold | 30,80px | 31,68px
h4 | Arial black | 21,78px | 25,74px
h5 | Arial bold | 21,78px | 25,74px
h6 | Arial black | 17,82px | 26,13px

#### MD (640-767px)

Navn | Font type | Font størrelse (Normal) | Font størrelse (Ledetekst)
--- | --- | :---: | :---:
h1 | Arial black | 32,40px | 36,00px
h2 | Arial bold | 28,80px | 32,40px
h3 | Arial bold | 28,00px | 28,80px
h4 | Arial black | 19,80px | 23,40px
h5 | Arial bold | 19,80px | 23,40px
h6 | Arial black | 16,20px | 21,60px

#### LG (768px+)

Navn | Font type | Font størrelse (Normal) | Font størrelse (Ledetekst)
--- | --- | :---: | :---:
h1 | Arial black | 36px | 40px
h2 | Arial bold | 32px | 36px
h3 | Arial bold | 28px | 32px
h4 | Arial black | 22px | 26px
h5 | Arial bold | 22px | 26px
h6 | Arial black | 18px | 24px

### Brødtekst

`<p>`

Farge: [#22313F](https://www.colorhexa.com/22313f)

#### SM (0-639px)

Navn | Font type | Font størrelse (Normal) | Font størrelse (Ledetekst)
--- | --- | :---: | :---:
p | Arial | 17,82px | 26,73px

#### MD (640-767px)

Navn | Font type | Font størrelse (Normal) | Font størrelse (Ledetekst)
--- | --- | :---: | :---:
p | Arial | 16,20px | 24,30px

#### LG (768px+)

Navn | Font type | Font størrelse (Normal) | Font størrelse (Ledetekst)
--- | --- | :---: | :---:
p | Arial | 18px | 27px

### Ramme

Alle rammer må ha `ramme`-klassen, tilleggsklasser angir bakgrunnsfarge, tekstfarge og linjefarge.

- Hovedklasse: `generisk-ramme`

    Bakgrunnsfarge: [#E4F0DA](https://www.colorhexa.com/E4F0DA)

    Linjefarge: [#B1C900](https://www.colorhexa.com/B1C900)

    Bakgrunnsfarge nattmodus: [#2b3a48](https://www.colorhexa.com/2b3a48)

    Linjefarge nattmodus: [#bcbec0](https://www.colorhexa.com/bcbec0)

    <div class="generisk-ramme">Eksempel</div>

- Bakgrunnsfarge: Rød `bg-red` - eksempel: `ramme bg-red`

    Bakgrunnsfarge: [#f0dae4](https://www.colorhexa.com/f0dae4)

    Linjefarge: [#bd5b87](https://www.colorhexa.com/bd5b87)

    Bakgrunnsfarge nattmodus: [#482b3a](https://www.colorhexa.com/482b3a)

    Linjefarge nattmodus: [#ae7794](https://www.colorhexa.com/ae7794)

    <div class="ramme bg-red">Eksempel</div>

- Bakgrunnsfarge: Blå `bg-blue` - eksempel: `ramme bg-blue`

    Bakgrunnsfarge: [#dae4f0](https://www.colorhexa.com/dae4f0)

    Linjefarge: [#5b87bd](https://www.colorhexa.com/5b87bd)

    Bakgrunnsfarge nattmodus: [#486178](https://www.colorhexa.com/486178)

    Linjefarge nattmodus: [#a8bacb](https://www.colorhexa.com/a8bacb)

    <div class="ramme bg-blue">Eksempel</div>

- Bakgrunnsfarge: Gul `bg-yellow` - eksempel: `ramme bg-yellow`

    Bakgrunnsfarge: [#eff0da](https://www.colorhexa.com/eff0da)

    Linjefarge: [#b8bd5b](https://www.colorhexa.com/b8bd5b)

    Bakgrunnsfarge nattmodus: [#48392b](https://www.colorhexa.com/48392b)

    Linjefarge nattmodus: [#ae9277](https://www.colorhexa.com/ae9277)

    <div class="ramme bg-yellow">Eksempel</div>

- Tekstfarge: Sort `text-dark`
  
    Tekstfarge: [#212d39](https://www.colorhexa.com/212d39)

    <div class="bg-light text-dark">Eksempel</div>

- Tekstfarge: Lys `text-light`
  
    Tekstfarge: [#f8f9fa](https://www.colorhexa.com/f8f9fa)

    <div class="bg-dark text-light">Eksempel</div>

### Tabell

### Usortert og sortert liste
