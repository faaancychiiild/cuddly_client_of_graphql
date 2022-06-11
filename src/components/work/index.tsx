import { gql, useQuery, useMutation } from '@apollo/client'
import { useState } from 'react'
import './index.css'

const Work = () => {
  const [form, toggleForm] = useState(false)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [assets, setAssets] = useState()

  let [incrementTrackViews] = useMutation(gql`
    mutation {
      addProject(
        assets: ["Nino"]
        tech: ["Hello"]
        title: "new title"
        desc: "description"
      ) {
        title
      }
    }
  `)
  const handleClick = async () => {
    // let data = await incrementTrackViews()
  }

  return (
    <main className='main'>
      {/* <form action='' className='form'></form> */}
      <div className='plusLogo' onClick={handleClick}>
        +
      </div>
    </main>
  )
}

export default Work
