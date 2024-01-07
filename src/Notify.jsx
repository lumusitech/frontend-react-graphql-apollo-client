export const Notify = ({ errorMessage }) => {
  if (!errorMessage) return null
  return <div style={{ color: 'red', position: 'fix', top: 0, width: '100%' }}>{errorMessage}</div>
}
