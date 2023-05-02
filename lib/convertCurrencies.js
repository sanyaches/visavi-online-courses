import { Convert } from 'easy-currencies'

export const convertCurrencies = async (amount, fromCurrency = 'RUB', toCurrency = 'USD', fixedDigits = 2) => {
  const convertedValue = await Convert(amount).from(fromCurrency).to(toCurrency)
  const convertedRoundedAmount = parseFloat(convertedValue.toFixed(fixedDigits))

  return convertedRoundedAmount
}
