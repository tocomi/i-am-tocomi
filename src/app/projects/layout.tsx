import { RotatingPortrait } from '@/components'
import type { FC, PropsWithChildren } from 'react'

const ProjectsLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <div className="flex w-full justify-start">
        <RotatingPortrait size="small" />
      </div>
    </>
  )
}

export default ProjectsLayout
