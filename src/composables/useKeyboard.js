
export default function useKeyboard (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const value = dependencies.value
  const update = dependencies.update
  const close = dependencies.close
  const clearPointer = dependencies.clearPointer

  // =============== METHODS ==============

  const handleBackspace = (e) => {
    update([...value.value].slice(0,-1))
  }

  const handleEsc = (e) => {
    close()
    clearPointer()
    e.target.blur()
  }

  return {
    handleBackspace,
    handleEsc,
  }
}