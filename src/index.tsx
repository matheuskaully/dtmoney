import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Doutor Estranho I',
          amount: 119,
          type: 'withdraw',
          category: 'Lazer',
          createdAt: new Date('2020-12-12 11:24:51')
        },
        {
          id: 2,
          title: 'Spotify',
          amount: 11999,
          type: 'deposit',
          category: 'Pagamento',
          createdAt: new Date('2021-01-01 14:00:54')
        },
        {
          id: 3,
          title: 'Samsung Galaxy s22+ 256gb',
          amount: 4400,
          type: 'withdraw',
          category: 'Compra',
          createdAt: new Date('2021-01-05 15:10:44')
        },
        {
          id: 4,
          title: 'Kit Razer Bundle',
          amount: 360,
          type: 'deposit',
          category: 'Venda',
          createdAt: new Date('2021-02-12 09:00:54')
        },
        {
          id: 5,
          title: 'Avatar',
          amount: 219,
          type: 'withdraw',
          category: 'Lazer',
          createdAt: new Date('2022-12-27 19:24:51')
        },
        {
          id: 6,
          title: 'Google',
          amount: 17999.99,
          type: 'deposit',
          category: 'Pagamento',
          createdAt: new Date('2020-01-01 10:00:54')
        },
        {
          id: 7,
          title: 'Fogão',
          amount: 1499.99,
          type: 'withdraw',
          category: 'Compra',
          createdAt: new Date('2020-01-05 12:10:44')
        },
        {
          id: 8,
          title: 'Havaianas',
          amount: 360,
          type: 'withdraw',
          category: 'Compra',
          createdAt: new Date('2021-02-01 19:00:54')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);