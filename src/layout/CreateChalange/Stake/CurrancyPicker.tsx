import React, { useState } from 'react';
import CountryFlag from 'react-country-flag'; // Assuming you're using react-country-flag for flags

// Sample currencies data
const currencies = [
  { code: 'USD', name: 'United States Dollar', flag: 'US' },
  { code: 'EUR', name: 'Euro', flag: 'EU' },
  { code: 'JPY', name: 'Japanese Yen', flag: 'JP' },
  // Add more currencies as needed
];

const mockPrices = {
  USD: 1.0,
  EUR: 0.85,
  JPY: 110.0,
}

const CurrencyPicker = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].code);

  const handleCurrencyChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedCurrency(event.target.value);
  };


  const currencyInputStyle = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '12px',
    overflow: 'hidden',
    background: 'white',
    paddingLeft: '10px',
  };

  const selectStyle = {
    border: 'none',
    padding: '10px',
    background: 'transparent',
    outline: 'none',
    cursor: 'pointer',
  };

  const inputStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '22px',
    flex: '1',
    border: 'none',
    padding: '10px',
    outline: 'none',
  };

  const currencyTextStyle = {
    fontSize: '22px',
    padding: '10px',
  }

  return (
    <div style={currencyInputStyle}>
      <div style={{ margin: '0 5px' }}>
        <CountryFlag countryCode={currencies.find(currency => currency.code === selectedCurrency)?.flag || 'EUR'} svg style={{ width: '20px', height: '15px' }} />
      </div>
      <select value={selectedCurrency} onChange={handleCurrencyChange} style={selectStyle}>
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            <div style={currencyTextStyle}>{currency.code}</div>
          </option>
        ))}
      </select>

          <div style={inputStyle}>
              {`~${mockPrices[selectedCurrency as keyof typeof mockPrices]}`}
          </div>
    </div>
  );
};

export default CurrencyPicker;
