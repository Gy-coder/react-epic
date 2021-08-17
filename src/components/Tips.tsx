import React from 'react'
import {observer} from 'mobx-react'
import {useStores} from '../stores';
import styled from 'styled-components'

const Wrapper = styled.div`
  background: orange;
  padding: 10px;
  margin: 30px 0;
  border-radius: 4px;
  color: white;
`

const Tips:React.FC = observer(({children})=>{
  const {UserStore} = useStores()
  return (
    <>
      {
        UserStore.currentUser ? null : <Wrapper>{children}</Wrapper>
      }
    </>
  )
})

export default Tips