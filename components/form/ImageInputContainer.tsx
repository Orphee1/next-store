'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import FormContainer from './FormContainer'
import ImageInput from './ImageInput'
import { SubmitButton } from './Button'
import { type actionFunction } from '@/utils/types'

type ImageInputContainerProps = {
  image: string
  name: string
  action: actionFunction
  text: string
  children?: React.ReactNode
}

function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text, children } = props
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false)

  return (
    <div className='mb-8'>
      <Image
        src={image}
        height={200}
        width={200}
        className='rounded object-cover mb-4 w-[200px] h-[200px]'
        priority
        alt={name}
      />
      <Button
        variant='outline'
        size='sm'
        onClick={() => {
          setUpdateFormVisible((prevState) => !prevState)
        }}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className='max-w-md mt-4'>
          <FormContainer action={action}>
            {children}
            <ImageInput />
            <SubmitButton size='sm' text={text} />
          </FormContainer>
        </div>
      )}
    </div>
  )
}

export default ImageInputContainer
