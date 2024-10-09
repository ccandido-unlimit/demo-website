import React, { useState } from 'react';
import '../Form.css'; // CSS específico para Offramp, se houver

export default function Offramp() {
  const [payout, setPayout] = useState('PIX');
  const [fiatCurrency, setFiatCurrency] = useState('BRL');
  const [region, setRegion] = useState('BR');
  const [wallet, setWallet] = useState('0xc458f721D11322E36f781a9C58055de489178BF2'); // Endereço de carteira pré-populado
  const [fiatAmount, setFiatAmount] = useState('');

  const handleButtonClick = () => {
    const urlOfframp = `https://offramp-sandbox.gatefi.com/?merchantId=baa2d9f8-6ff0-48e9-babf-709c9007ffbe&cryptoCurrency=ETH&payout=${payout}&fiatCurrency=${fiatCurrency}&region=${region}&wallet=${wallet}&walletLock=true&fiatCurrencyLock=true&cryptoCurrencyLock=true&fiatAmount=90&confirmRedirectUrl=https://offramp-flow-evm.vercel.app/confirm/`;
    window.open(urlOfframp, '_blank');
  };

  return (
    <div className="form-container">
      <h2>Offramp</h2>
      <form>
        <div>
          <label htmlFor="payout">Payout Method:</label>
          <select id="payout" value={payout} onChange={(e) => setPayout(e.target.value)}>
            <option value="SPEI">SPEI</option>
            <option value="TRANSFIYA">TRANSFIYA</option>
          </select>
        </div>
        <div>
          <label htmlFor="fiatCurrency">Fiat Currency:</label>
          <select id="fiatCurrency" value={fiatCurrency} onChange={(e) => setFiatCurrency(e.target.value)}>
            <option value="BRL">BRL</option>
            <option value="USD">USD</option>
          </select>
        </div>
        <div>
          <label htmlFor="region">Region:</label>
          <select id="region" value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="BR">Brazil</option>
            <option value="MX">Mexico</option>
          </select>
        </div>
        <div>
          <label htmlFor="wallet">Wallet Address:</label>
          <input type="text" id="wallet" value={wallet} onChange={(e) => setWallet(e.target.value)} />
        </div>
        <div>
          <label htmlFor="fiatAmount">Fiat Amount:</label>
          <input type="number" id="fiatAmount" value={fiatAmount} onChange={(e) => setFiatAmount(e.target.value)} />
        </div>
        <div className="buttonContainer">
          <button type="button" onClick={handleButtonClick}>
            Sell Crypto
          </button>
        </div>
      </form>
    </div>
  );
}
