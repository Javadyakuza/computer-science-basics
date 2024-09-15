# What is an Automatic Market Maker (AMM)?

An Automatic Market Maker (AMM) is a mathematical algorithm designed to determine the price of one or more assets based on supply and demand within a liquidity pool. It automates the process of making markets, allowing users to trade without needing a traditional order book.

There are several types of AMMs. Below, we will cover four of the most popular and widely-used types:

1. Constant Product Market Maker (CPMM)
2. Constant Sum Market Maker (CSMM)
3. Constant Ratio Market Maker (CRMM)
4. Constant Mean Market Maker (CMMM)

## 1. Constant Product Market Maker (CPMM)

**Algorithm:**  
\( X \times Y = K \)  

**Description:**  
This method ensures that the product of two assets in a liquidity pool remains constant. When the supply of one asset decreases, the price of the other increases to maintain the equation.  

**Pros:**  
- Simple to implement  
- Commonly used (e.g., Uniswap)  

**Cons:**  
- High slippage in large trades  
- Not ideal for large-volume transactions

---

## 2. Constant Sum Market Maker (CSMM)

**Algorithm:**  
\( X + Y = K \)  

**Description:**  
This method ensures that the sum of two assets in the pool always remains constant, making it particularly useful for stablecoins where price volatility is minimal.  

**Pros:**  
- Zero slippage, ideal for stablecoin trading  

**Cons:**  
- Fails to handle large price fluctuations  
- Can lead to arbitrage opportunities and manipulation

---

## 3. Constant Ratio Market Maker (CRMM)

**Algorithm:**  
\( X^k \times Y^{(1-k)} = Z \)  

**Description:**  
This method ensures that the ratio between two assets remains constant. For example, if the pool is set to always have 1 A token for every 2 B tokens, this ratio is maintained regardless of trades.  

**Pros:**  
- Flexible and can handle multiple assets  
- Useful for creating liquidity tokens  

**Cons:**  
- Requires more complex rebalancing, especially with multiple assets  
- Potential for higher fees due to complexity

---

## 4. Constant Mean Market Maker (CMMM)

**Algorithm:**  
\( (X^k \times ... \times Y^{(1-k)}) = Z \)  

**Description:**  
This is an extended version of the CRMM, designed for pools with multiple assets. It maintains a constant ratio across all assets in the pool.  

**Pros:**  
- Same flexibility as CRMM, but for multiple assets  
- Great for balancing complex portfolios

**Cons:**  
- Similar challenges to CRMM: higher complexity and rebalancing costs

---

## Other Types of AMMs

- **Hybrid Market Maker:**  
  Combines multiple functions and parameters to achieve specific trading behaviors, allowing for more customization and efficiency.
  
- **Order Book Market Maker (OBMM):**  
  Maintains a fair and orderly market by placing buy and sell orders on an order book, unlike traditional AMMs which operate without order books.

- **[Dynamic Fee AMM](https://docs.meteora.ag/dlmm/dynamic-fees):**  
  Adjusts the fees dynamically based on market conditions to optimize liquidity and trading volume.

