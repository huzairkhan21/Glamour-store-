'use client'
import {Product} from './products'
export type CartItem={product:Product;quantity:number}
export const cartSubtotal=(items:CartItem[])=>items.reduce((s,i)=>s+i.product.price*i.quantity,0)
export const cartDiscount=(items:CartItem[])=>items.reduce((s,i)=>s+(i.product.compareAt?i.product.compareAt-i.product.price:0)*i.quantity,0)
export const formatINR=(n:number)=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(n)
export const whatsappText=(items:CartItem[],total:number)=>`Hello GLAMOUR, I want to place an order:\n\n${items.map(i=>`• ${i.product.name} × ${i.quantity} — ${formatINR(i.product.price*i.quantity)}`).join('\n')}\n\nTotal: ${formatINR(total)}\nPlease confirm availability and delivery details.`
