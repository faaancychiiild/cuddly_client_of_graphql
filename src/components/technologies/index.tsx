import { useQuery, gql } from '@apollo/client'
import { useEffect, useState } from 'react'

const Technologies = () => {
  const [stack, setStack] = useState([])

  let getStack = useQuery(gql`
    query projects {
      projects {
        tech
      }
    }
  `)
  useEffect(() => {
    let { data } = getStack

    let techs = data?.projects.map((i: { tech: any }) => i.tech)

    techs = techs?.reduce((acc: [], curr: []) => acc.concat(curr), [])
    techs = techs?.filter((i: any, index: any) => techs.indexOf(i) === index)
    setStack(techs || [])
  }, [getStack])

  return (
    <div>
      {stack.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  )
}

export default Technologies
