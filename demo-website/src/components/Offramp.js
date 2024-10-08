'use client';
import { useState } from 'react';
import styles from './page.module.css'; // Certifique-se de que o caminho está correto

export default function Offramp() {
  const [payout, setPayout] = useState('PIX');
  const [fiatCurrency, setFiatCurrency] = useState('BRL');
  const [region, setRegion] = useState('BR');
  const [wallet, setWallet] = useState('0xc458f721D11322E36f781a9C58055de489178BF2'); // Endereço de carteira pré-preenchido
  const [fiatAmount, setFiatAmount] = useState('');

  const handleButtonClick = () => {
    const urlOfframp = `https://offramp-sandbox.gatefi.com/?merchantId=baa2d9f8-6ff0-48e9-babf-709c9007ffbe&cryptoCurrency=ETH&payout=${payout}&fiatCurrency=${fiatCurrency}&region=${region}&wallet=${wallet}&walletLock=true&fiatCurrencyLock=true&cryptoCurrencyLock=true&fiatAmount=${fiatAmount}&confirmRedirectUrl=https://offramp-flow-evm.vercel.app/confirm/`;
    window.open(urlOfframp, '_blank');
  };

  return (
    <main className={styles.main}>
      <form className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label htmlFor="payout">Método de Pagamento:</label>
          <select id="payout" value={payout} onChange={(e) => setPayout(e.target.value)}>
            <option value="SPEI">SPEI</option>
            <option value="TRANSFIYA">TRANSFIYA</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="fiatCurrency">Moeda Fiat:</label>
          <select id="fiatCurrency" value={fiatCurrency} onChange={(e) => setFiatCurrency(e.target.value)}>
            <option value="AUD">AUD</option>
            <option value="BRL">BRL</option>
            <option value="CAD">CAD</option>
            <option value="COP">COP</option>
            <option value="CRC">CRC</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="GTQ">GTQ</option>
            <option value="MXN">MXN</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="region">Região:</label>
          <select id="region" value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="AU">Austrália</option>
            <option value="BR">Brasil</option>
            <option value="CA">Canadá</option>
            <option value="CO">Colômbia</option>
            <option value="CR">Costa Rica</option>
            <option value="FR">França</option>
            <option value="EN">Inglaterra</option>
            <option value="GU">Guatemala</option>
            <option value="MX">México</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="wallet">Endereço da Carteira:</label>
          <input
            type="text"
            id="wallet"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            placeholder="Digite o seu endereço da carteira"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="fiatAmount">Valor em Fiat:</label>
          <input
            type="number"
            id="fiatAmount"
            value={fiatAmount}
            onChange={(e) => setFiatAmount(e.target.value)}
            placeholder="Digite o valor em fiat"
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="button" onClick={handleButtonClick} className={styles.sellButton}>
            Vender Cripto
          </button>
        </div>
      </form>
    </main>
  );
}
