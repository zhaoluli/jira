
import React,{ useEffect, useState } from "react"

const isFalsy = (value: unknown) => value === 0 ? false : !value

export const cleanObject = (res: any) => {
  const result = {...res}
  Object.keys(result).forEach(key => {
    let value = result[key]
    if(isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

export const useDebounce = <V>(value: V, delay: number): V => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timeout= setTimeout(() => setDebounceValue(value), delay)
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debounceValue
}