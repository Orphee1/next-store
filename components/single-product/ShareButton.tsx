'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '../ui/button'
import { LuShare2 } from 'react-icons/lu'

import {
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  // TwitterIcon,
  XIcon,
  EmailIcon,
  LinkedinIcon,
} from 'react-share'

function ShareButton({ productId, name }: { productId: string; name: string }) {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL
  const shareUrl = `${url}/products/${productId}`
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon' className='p-2'>
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side='top'
        align='end'
        sideOffset={10}
        className='flex items-center justify-center w-full gap-x-2'
      >
        <TwitterShareButton title={name} url={shareUrl}>
          <XIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton title={name} url={shareUrl}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton title={name} url={shareUrl}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </PopoverContent>
    </Popover>
  )
}

export default ShareButton
