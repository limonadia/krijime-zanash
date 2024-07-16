var currency = "USD";
export function formatCurr(curr){
    var currency = curr;
};
const CurrencyFormatter = new Intl.NumberFormat(undefined, {
    currency:currency, style:"currency", currencyDisplay: 'narrowSymbol'});

    export function formatCurrency(number){
        return CurrencyFormatter.format(number)
    }