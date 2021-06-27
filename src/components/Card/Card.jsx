import React from 'react'
import Paper from '../Paper/Paper'
import PropTypes from 'prop-types'

import { HiPencilAlt, HiTrash } from 'react-icons/hi'
import { OrgaizationType, Name, Action, Image } from './Card.styled'

function Card({ name }) {
  return (
    <Paper gap={32}>
      <Image src="./images/logo.png" alt="" />
      <OrgaizationType>университет</OrgaizationType>
      <Name>{name}</Name>
      <Action>
        <HiPencilAlt size={16} />
        <HiTrash size={16} />
      </Action>
    </Paper>
  )
}
Card.propTypes = {
  name: PropTypes.string.isRequired,
}
export default Card
