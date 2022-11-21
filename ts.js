var conto = /** @class */ (function () {
    function conto(_capitale, _interesse, _anni, _versamento, _prelievo) {
        this.capitale = _capitale;
        this.interesse = _interesse;
        this.anni = _anni;
        this.versamento = _versamento;
        this.prelievo = _prelievo;
    }
    conto.prototype.calcolointeressi = function () {
        var interessecap = (this.capitale * (this.interesse / 100)) * this.anni;
        var interessevers = (this.versamento * (this.interesse / 100)) * this.anni;
        var capend = (interessecap + this.versamento + interessevers + this.capitale) - this.prelievo;
        if (this.prelievo === 0) {
            console.log("il tuo capitale finale è:" + capend + " euro" + "\n" +
                "il tuo interesse ammonta a:" + (interessevers + interessecap) + " euro");
        }
        else if (this.prelievo !== 0) {
            console.log("il tuo capitale finale è:" + capend + " euro" + "\n" +
                "il tuo interesse ammonta a:" + (interessevers + interessecap) + " euro" + "\n" +
                "hai prelevato:" + this.prelievo + " euro");
        }
    };
    return conto;
}());
var risultato = new conto(25000, 4, 1, 150, 20);
risultato.calcolointeressi();
