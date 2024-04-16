import { Dispatch } from "react"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
    item: MenuItem,
    dispach: Dispatch<OrderActions>
}

export default function MenuItem({item, dispach}: MenuItemProps) {
  return (
    <button
        className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between rounded-lg"
        onClick={()=> dispach({type: 'add-item', payload:{item}})}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}
