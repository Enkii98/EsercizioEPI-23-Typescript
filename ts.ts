class conto {
  capitale: number;
  interesse: number;
  anni: number;
  versamento: number;
  prelievo: number;

  constructor(_capitale: number, _interesse: number, _anni: number, _versamento: number, _prelievo: number) {
    this.capitale = _capitale;
    this.interesse = _interesse;
    this.anni = _anni;
    this.versamento = _versamento;
    this.prelievo = _prelievo;
  }

  calcolointeressi(): any {
    let interessecap: number = (this.capitale * (this.interesse / 100)) * this.anni;
    let interessevers: number = (this.versamento * (this.interesse / 100)) * this.anni;

    let capend: number = (interessecap + this.versamento + interessevers + this.capitale) - this.prelievo;


    if (this.prelievo === 0) {
      console.log(
        "il tuo capitale finale è:" + capend + " euro" + "\n" +
        "il tuo interesse ammonta a:" + (interessevers + interessecap) + " euro"
      );
    }
    else if (this.prelievo !== 0){
      console.log(
        "il tuo capitale finale è:" + capend + " euro" + "\n" +
        "il tuo interesse ammonta a:" + (interessevers + interessecap) + " euro" + "\n" +
        "hai prelevato:" + this.prelievo + " euro")
    }


  }

}

let risultato = new conto(25000, 4, 1, 150, 20);
risultato.calcolointeressi();