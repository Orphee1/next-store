'use client'

import { useState } from 'react'
import { Button } from '../ui/button'

function Comment({ comment }: { comment: string }) {
  const [isExpanded, setExpanded] = useState(false)
  const toggleExpand = () => {
    setExpanded(!isExpanded)
  }

  const longComment = comment.length > 130
  const commentDisplayed =
    longComment && !isExpanded ? `${comment.slice(0, 130)}...` : comment

  return (
    <div>
      <p className='text-sm'>{commentDisplayed}</p>
      {longComment && (
        <Button
          variant='link'
          className='pl-0 text-muted-foreground '
          onClick={toggleExpand}
        >
          {isExpanded ? 'Voir moins' : 'Voir plus'}
        </Button>
      )}
    </div>
  )
}

export default Comment
