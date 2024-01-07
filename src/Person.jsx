export const Person = ({ person }) => {
  if (person === null) return null
  return <>{<p>{person.name}</p>}</>
}
