import Stripe from 'stripe'

const secret = process.env.STRIP_SECRET_KEY || ''

export const stripe = new Stripe(secret, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Ignite Shop',
  },
})
