import { fetchRecipes } from './../../api'
import { useQuery } from '@tanstack/react-query'

const ListRecipes = () => {

  const { data, status } = useQuery(['AllRecipes'], async () => await fetchRecipes())
  console.log(data)
  return (
    <div>ListRecipes</div>
  )
}

export default ListRecipes