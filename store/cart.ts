import { defineStore } from "pinia";
import { v4 as uuid4 } from "uuid";

interface Course {
  id: number, qty: number
}

interface Cart {
  cid: String
  courses: Array<{id: number, qty: number}>
}

interface State{
  cart: Cart | {}
}

export const useCartStore = defineStore('cart',{
  state: ()=>({cart: {}} as State),
  actions: {
    loadCartInstance() {
      const cs = localStorage.getItem('cart')
      if(!cs)
      this.cart = {}
      else
      this.cart = JSON.parse(cs)
    },
    addToCart(course: Course){
      const cs = localStorage.getItem('cart')

      //if true it is in the cart
      let isAdded = false

      if(!cs)
      this.cart = {
        cid: uuid4(),
        courses: {
          course
        }
      }

      else {
        let cartLocalStorage = JSON.parse(cs)
        cartLocalStorage.courses = cartLocalStorage.courses.map((ci : Course) => {
          if( ci.id == course.id)
          {
            isAdded = true
      //  increments number of courses in cart
          //return {id: ci.id, qty: ci.qty + 1 }
          alert(`already added!`);
        }
          return {id: ci.id, qty: ci.qty}
        })
        if(!isAdded)
        cartLocalStorage.products.push({id: course.id, qty: course.qty})

        this.cart = cartLocalStorage

      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },

    removeFromCart(id:number){
      (this.cart as Cart).courses = (this.cart as Cart).courses.filter( ci => ci.id !=id)
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  }
})
