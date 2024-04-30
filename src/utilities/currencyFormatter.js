const CurrencyFormatter = new Intl.NumberFormat(undefined, {
    currency:"USD", style:"currency", currencyDisplay: 'narrowSymbol'})

    export function formatCurrency(number){
        return CurrencyFormatter.format(number)
    }